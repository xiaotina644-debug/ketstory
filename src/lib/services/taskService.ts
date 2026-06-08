import { createAIService } from './aiService';
import { createTask, updateTask, getTask, Task } from '../kv';

export async function createStoryTask(words: string[], style: string): Promise<string> {
  const taskId = await createTask();
  
  // 后台异步执行任务
  executeStoryTask(taskId, words, style).catch((error) => {
    console.error('Story task failed:', error);
    updateTask(taskId, { status: 'error', error: error.message });
  });
  
  return taskId;
}

export async function getStoryTask(taskId: string): Promise<Task | undefined> {
  return getTask(taskId);
}

async function executeStoryTask(taskId: string, words: string[], style: string) {
  const aiService = createAIService();
  
  try {
    await updateTask(taskId, { status: 'generating', progress: 10 });
    
    // 步骤1: 生成故事
    const storyResponse = await aiService.generateStory({ words, style });
    await updateTask(taskId, { progress: 30 });
    
    // 步骤2: 生成图片
    const sentences = storyResponse.content.split(/[.!?]+/).filter(s => s.trim().length > 5);
    const prompts = sentences.slice(0, 4).map(s => s.trim());
    
    const imageUrls: string[] = [];
    for (let i = 0; i < prompts.length; i++) {
      const result = await aiService.generateImage({ prompt: prompts[i] });
      imageUrls.push(result.url);
      await updateTask(taskId, { progress: 30 + Math.round((i + 1) / prompts.length * 50) });
    }
    
    // 步骤3: 完成（跳过音频生成）
    await updateTask(taskId, { 
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
    await updateTask(taskId, { status: 'error', error: errorMessage });
  }
}
