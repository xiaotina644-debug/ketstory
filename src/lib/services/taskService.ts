import { createAIService } from './aiService';
import prisma from '../db';
import { Task } from '../kv';
import { uploadToR2 } from '../r2';
import { nanoid } from 'nanoid';

// 在生产环境中使用数据库存储任务，开发环境使用内存存储
const USE_DATABASE = process.env.NODE_ENV === 'production';

export async function createStoryTask(words: string[], style: string): Promise<string> {
  const taskId = `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  // 尝试使用数据库存储，如果失败则使用内存存储
  try {
    if (USE_DATABASE) {
      await prisma.task.create({
        data: {
          taskId,
          status: 'pending',
          progress: 0,
        },
      });
      console.log(`[TaskService] Created task in database: ${taskId}`);
    } else {
      await createTaskInMemory(taskId);
    }
  } catch (dbError) {
    console.warn(`[TaskService] Database create failed, falling back to memory: ${dbError}`);
    await createTaskInMemory(taskId);
  }
  
  // 后台异步执行任务
  executeStoryTask(taskId, words, style).catch((error) => {
    console.error('Story task failed:', error);
    updateStoryTask(taskId, { status: 'error', error: error.message });
  });
  
  return taskId;
}

export async function getStoryTask(taskId: string): Promise<Task | undefined> {
  if (USE_DATABASE) {
    try {
      const dbTask = await prisma.task.findUnique({
        where: { taskId },
      });
      
      if (dbTask) {
        return {
          id: dbTask.taskId,
          status: dbTask.status as Task['status'],
          data: dbTask.data as Task['data'],
          error: dbTask.error || undefined,
          progress: dbTask.progress || undefined,
          createdAt: dbTask.createdAt.getTime(),
        };
      }
      console.log(`[TaskService] Task not found in database: ${taskId}`);
    } catch (dbError) {
      console.warn(`[TaskService] Database get failed, falling back to memory: ${dbError}`);
    }
  }
  
  // 回退到内存存储
  return getTaskFromMemory(taskId);
}

export async function updateStoryTask(taskId: string, updates: Partial<Task>): Promise<void> {
  if (USE_DATABASE) {
    try {
      const updateData: Record<string, unknown> = {};
      if (updates.status) updateData.status = updates.status;
      if (updates.progress !== undefined) updateData.progress = updates.progress;
      if (updates.error) updateData.error = updates.error;
      if (updates.data) updateData.data = updates.data;
      
      await prisma.task.update({
        where: { taskId },
        data: updateData,
      });
      console.log(`[TaskService] Updated task in database: ${taskId}`);
      return;
    } catch (dbError) {
      console.warn(`[TaskService] Database update failed, falling back to memory: ${dbError}`);
    }
  }
  
  // 回退到内存存储
  await updateTaskInMemory(taskId, updates);
}

// 内存存储（用于开发环境或数据库不可用时）
let memoryTasks: Record<string, Task> = {};

async function createTaskInMemory(taskId: string): Promise<void> {
  memoryTasks[taskId] = {
    id: taskId,
    status: 'pending',
    createdAt: Date.now(),
  };
  console.log(`[TaskService] Created task in memory: ${taskId}`);
}

async function getTaskFromMemory(taskId: string): Promise<Task | undefined> {
  return memoryTasks[taskId];
}

async function updateTaskInMemory(taskId: string, updates: Partial<Task>): Promise<void> {
  const task = memoryTasks[taskId];
  if (task) {
    Object.assign(task, updates);
    console.log(`[TaskService] Updated task in memory: ${taskId}`);
  }
}

async function executeStoryTask(taskId: string, words: string[], style: string) {
  const aiService = createAIService();
  
  try {
    await updateStoryTask(taskId, { status: 'generating', progress: 10 });
    
    // 步骤1: 生成故事
    const storyResponse = await aiService.generateStory({ words, style });
    await updateStoryTask(taskId, { progress: 30 });
    
    // 步骤2: 生成图片
    const sentences = storyResponse.content.split(/[.!?]+/).filter(s => s.trim().length > 5);
    const prompts = sentences.slice(0, 4).map(s => s.trim());
    
    const imageUrls: string[] = [];
    for (let i = 0; i < prompts.length; i++) {
      // 调用 AI 接口生成图片，拿到临时链接
      const result = await aiService.generateImage({ prompt: prompts[i] });
      const tempImageUrl = result.url;
      
      try {
        // 下载这张图片
        const imageResponse = await fetch(tempImageUrl);
        const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
        
        // 生成一个唯一的文件名
        const fileName = `images/${nanoid()}.png`;
        
        // 上传到 R2，拿到永久链接
        const permanentUrl = await uploadToR2(imageBuffer, fileName, 'image/png');
        imageUrls.push(permanentUrl);
        
        console.log(`[TaskService] Uploaded image ${i + 1}/${prompts.length} to R2: ${permanentUrl}`);
      } catch (uploadError) {
        // 如果上传失败，使用临时链接作为备用
        console.warn(`[TaskService] Failed to upload image ${i + 1} to R2, using temporary URL: ${uploadError}`);
        imageUrls.push(tempImageUrl);
      }
      
      await updateStoryTask(taskId, { progress: 30 + Math.round((i + 1) / prompts.length * 50) });
    }
    
    // 步骤3: 完成（跳过音频生成）
    await updateStoryTask(taskId, { 
      status: 'completed', 
      progress: 100,
      data: {
        content: storyResponse.content,
        images: imageUrls,
        audioUrl: '',
        words,
        style,
      }
    });
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : '生成失败';
    await updateStoryTask(taskId, { status: 'error', error: errorMessage });
  }
}
