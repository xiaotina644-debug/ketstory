import { createAIService } from './aiService';
import prisma from '../db';
import { Task } from '../kv';
import { uploadToR2 } from '../r2';
import { nanoid } from 'nanoid';

// 尝试使用数据库存储，如果数据库不可用则使用内存存储
let useDatabaseVerified: boolean | null = null;

async function verifyDatabase() {
  if (useDatabaseVerified !== null) {
    return useDatabaseVerified;
  }
  try {
    if (!prisma) {
      console.warn('[TaskService] Prisma not initialized, using memory storage');
      useDatabaseVerified = false;
      return false;
    }
    await prisma.$queryRaw`SELECT 1`;
    useDatabaseVerified = true;
    console.log('[TaskService] Database connection verified');
  } catch (error) {
    console.warn('[TaskService] Database connection failed, using memory storage:', error);
    useDatabaseVerified = false;
  }
  return useDatabaseVerified;
}

export async function createStoryTask(
  words: string[],
  style: string,
  waitUntil?: (promise: Promise<unknown>) => void
): Promise<string> {
  const taskId = `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const useDb = await verifyDatabase();

  console.log(`[TaskService] Creating task: ${taskId}, useDatabase: ${useDb}`);

  // 尝试使用数据库存储，如果失败则使用内存存储
  try {
    if (useDb) {
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

  // 执行任务 - 如果提供了 waitUntil 则使用它，否则直接执行
  const taskPromise = executeStoryTask(taskId, words, style).catch((error) => {
    console.error('Story task failed:', error);
    updateStoryTask(taskId, { status: 'error', error: error instanceof Error ? error.message : '生成失败' });
  });

  if (waitUntil) {
    waitUntil(taskPromise);
    console.log(`[TaskService] Task scheduled with waitUntil: ${taskId}`);
  } else {
    taskPromise;
    console.log(`[TaskService] Task scheduled without waitUntil: ${taskId}`);
  }

  return taskId;
}

export async function getStoryTask(taskId: string): Promise<Task | undefined> {
  const useDb = await verifyDatabase();

  console.log(`[TaskService] Getting task: ${taskId}, useDatabase: ${useDb}`);

  if (useDb) {
    try {
      const dbTask = await prisma.task.findUnique({
        where: { taskId },
      });

      if (dbTask) {
        console.log(`[TaskService] Found task in database: ${taskId}, status: ${dbTask.status}`);
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
  const task = await getTaskFromMemory(taskId);
  console.log(`[TaskService] Task from memory: ${taskId}, found: ${!!task}`);
  return task;
}

export async function updateStoryTask(taskId: string, updates: Partial<Task>): Promise<void> {
  const useDb = await verifyDatabase();

  console.log(`[TaskService] Updating task: ${taskId}, useDatabase: ${useDb}, updates:`, updates);

  if (useDb) {
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
  console.log(`[TaskService] Executing task: ${taskId}`);
  const aiService = createAIService();

  try {
    await updateStoryTask(taskId, { status: 'generating', progress: 10 });

    // 步骤1: 生成故事
    console.log(`[TaskService] Generating story for task: ${taskId}`);
    const storyResponse = await aiService.generateStory({ words, style });
    await updateStoryTask(taskId, { progress: 30 });

    // 步骤2: 并行生成图片（性能优化）
    const sentences = storyResponse.content.split(/[.!?]+/).filter(s => s.trim().length > 5);
    const prompts = sentences.slice(0, 4).map(s => s.trim());

    // 为每个图片创建一个处理函数
    async function processSingleImage(prompt: string, index: number): Promise<string> {
      try {
        // 调用 AI 接口生成图片，拿到临时链接
        const result = await aiService.generateImage({ prompt });
        const tempImageUrl = result.url;

        try {
          // 下载这张图片
          const imageResponse = await fetch(tempImageUrl);
          const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

          // 生成一个唯一的文件名
          const fileName = `images/${nanoid()}.png`;

          // 上传到 R2，拿到永久链接
          const permanentUrl = await uploadToR2(imageBuffer, fileName, 'image/png');
          console.log(`[TaskService] Uploaded image ${index + 1}/${prompts.length} to R2: ${permanentUrl}`);
          return permanentUrl;
        } catch (uploadError) {
          // 如果上传失败，使用临时链接作为备用
          console.warn(`[TaskService] Failed to upload image ${index + 1} to R2, using temporary URL: ${uploadError}`);
          return tempImageUrl;
        }
      } catch (error) {
        console.error(`[TaskService] Failed to generate image ${index + 1}:`, error);
        return '';
      }
    }

    // 并行处理所有图片，同时监控进度
    let completedCount = 0;
    const imagePromises = prompts.map(async (prompt, index) => {
      const result = await processSingleImage(prompt, index);
      completedCount++;
      // 更新进度
      await updateStoryTask(taskId, { progress: 30 + Math.round(completedCount / prompts.length * 50) });
      return result;
    });

    // 等待所有图片处理完成
    console.log(`[TaskService] Waiting for images for task: ${taskId}`);
    const imageUrls = await Promise.all(imagePromises);

    // 步骤3: 完成（跳过音频生成）
    console.log(`[TaskService] Completing task: ${taskId}`);
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
    console.error(`[TaskService] Task failed: ${taskId}`, error);
    const errorMessage = error instanceof Error ? error.message : '生成失败';
    await updateStoryTask(taskId, { status: 'error', error: errorMessage });
  }
}

// 直接执行任务并返回结果（同步模式）
export async function executeStoryTaskDirectly(words: string[], style: string) {
  console.log('[TaskService] Executing directly');
  const aiService = createAIService();

  try {
    // 步骤1: 生成故事
    console.log('[TaskService] Generating story (direct mode)');
    const storyResponse = await aiService.generateStory({ words, style });

    // 步骤2: 并行生成图片（性能优化）
    const sentences = storyResponse.content.split(/[.!?]+/).filter(s => s.trim().length > 5);
    const prompts = sentences.slice(0, 4).map(s => s.trim());

    // 为每个图片创建一个处理函数
    async function processSingleImage(prompt: string, index: number): Promise<string> {
      try {
        const result = await aiService.generateImage({ prompt });
        const tempImageUrl = result.url;

        try {
          const imageResponse = await fetch(tempImageUrl);
          const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
          const fileName = `images/${nanoid()}.png`;
          const permanentUrl = await uploadToR2(imageBuffer, fileName, 'image/png');
          console.log(`[TaskService] Uploaded image ${index + 1}/${prompts.length} to R2 (direct mode)`);
          return permanentUrl;
        } catch (uploadError) {
          console.warn(`[TaskService] Failed to upload image, using temporary URL: ${uploadError}`);
          return tempImageUrl;
        }
      } catch (error) {
        console.error(`[TaskService] Failed to generate image ${index + 1}:`, error);
        return '';
      }
    }

    // 并行处理所有图片
    console.log('[TaskService] Generating images (direct mode)');
    const imagePromises = prompts.map((prompt, index) => processSingleImage(prompt, index));
    const imageUrls = await Promise.all(imagePromises);

    // 返回结果
    console.log('[TaskService] Direct generation completed');
    return {
      status: 'completed',
      data: {
        content: storyResponse.content,
        images: imageUrls,
        audioUrl: '',
        words,
        style,
      }
    };

  } catch (error) {
    console.error('[TaskService] Direct generation failed:', error);
    const errorMessage = error instanceof Error ? error.message : '生成失败';
    return {
      status: 'error',
      error: errorMessage
    };
  }
}
