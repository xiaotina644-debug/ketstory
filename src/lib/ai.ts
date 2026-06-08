import { Story, GenerationProgress } from '@/types';

export async function generateStoryBook(
  words: string[],
  style: string,
  onProgress: (progress: GenerationProgress) => void
): Promise<Story> {
  return new Promise((resolve, reject) => {
    onProgress({ step: 'story', status: 'generating', message: '正在创建任务...' });

    // 步骤1: 创建异步任务
    fetch('/api/story/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ words, style }),
    })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: '请求失败' }));
        onProgress({ step: 'story', status: 'error', message: errorData.error });
        reject(new Error(errorData.error));
        return;
      }

      const { taskId } = await response.json();
      
      // 步骤2: 轮询任务状态
      const pollInterval = setInterval(async () => {
        try {
          const statusResponse = await fetch(`/api/story/status?taskId=${taskId}`);
          if (!statusResponse.ok) {
            clearInterval(pollInterval);
            onProgress({ step: 'story', status: 'error', message: '查询任务状态失败' });
            reject(new Error('查询任务状态失败'));
            return;
          }

          const task = await statusResponse.json();

          switch (task.status) {
            case 'pending':
            case 'generating':
              onProgress({ 
                step: 'story', 
                status: 'generating', 
                message: `正在生成... ${task.progress || 0}%` 
              });
              break;

            case 'completed':
              clearInterval(pollInterval);
              onProgress({ step: 'story', status: 'completed', message: '生成完成！' });
              resolve({
                id: `story-${Date.now()}`,
                words,
                content: task.data.content,
                images: task.data.images,
                audioUrl: task.data.audioUrl,
                style,
                createdAt: new Date(),
              });
              break;

            case 'error':
              clearInterval(pollInterval);
              onProgress({ step: 'story', status: 'error', message: task.error || '生成失败' });
              reject(new Error(task.error || '生成失败'));
              break;
          }
        } catch (error) {
          clearInterval(pollInterval);
          onProgress({ step: 'story', status: 'error', message: '连接中断，请重试' });
          reject(error);
        }
      }, 2000); // 每2秒轮询一次

    })
    .catch((error) => {
      onProgress({ step: 'story', status: 'error', message: '请求失败，请重试' });
      reject(error);
    });
  });
}

// 备用函数：使用传统方式（非流式）
export async function generateStoryBookFallback(
  words: string[],
  style: string,
  onProgress: (progress: GenerationProgress) => void
): Promise<Story> {
  onProgress({ step: 'story', status: 'generating', message: '正在调用AI生成故事...' });

  const response = await fetch('/api/story/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ words, style }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: '请求失败' }));
    throw new Error(errorData.error);
  }

  const result = await response.json();
  
  return {
    id: `story-${Date.now()}`,
    words,
    content: result.content,
    images: result.images || [],
    audioUrl: result.audioUrl || '',
    style,
    createdAt: new Date(),
  };
}
