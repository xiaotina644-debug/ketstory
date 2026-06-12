import { Story, GenerationProgress } from '@/types';

export async function generateStoryBook(
  words: string[],
  style: string,
  onProgress: (progress: GenerationProgress) => void
): Promise<Story> {
  // 首先尝试异步模式
  try {
    return await generateStoryBookAsync(words, style, onProgress);
  } catch (error) {
    console.warn('[AI] Async mode failed, falling back to sync mode:', error);
    // 如果异步模式失败，尝试同步模式
    return await generateStoryBookSync(words, style, onProgress);
  }
}

// 异步模式
async function generateStoryBookAsync(
  words: string[],
  style: string,
  onProgress: (progress: GenerationProgress) => void
): Promise<Story> {
  return new Promise((resolve, reject) => {
    onProgress({ step: 'story', status: 'generating', message: '正在创建任务...' });

    // 轮询配置
    const initialPollInterval = 2000;
    const maxPollInterval = 8000;
    const timeoutMs = 15 * 60 * 1000;
    const startTime = Date.now();

    let currentPollInterval = initialPollInterval;
    let pollTimer: NodeJS.Timeout | null = null;
    let taskNotFoundCount = 0;

    const clearPollTimer = () => {
      if (pollTimer) {
        clearTimeout(pollTimer);
        pollTimer = null;
      }
    };

    const pollTaskStatus = async (taskId: string) => {
      try {
        if (Date.now() - startTime > timeoutMs) {
          clearPollTimer();
          reject(new Error('生成超时'));
          return;
        }

        const statusResponse = await fetch(`/api/story/status?taskId=${taskId}`);

        // 如果任务找不到，可能是服务器实例问题，计数后决定是否放弃
        if (statusResponse.status === 404) {
          taskNotFoundCount++;
          console.warn(`[AI] Task not found (${taskNotFoundCount}/3)`);
          if (taskNotFoundCount >= 3) {
            clearPollTimer();
            reject(new Error('TASK_NOT_FOUND'));
            return;
          }
        }

        if (!statusResponse.ok && statusResponse.status !== 404) {
          clearPollTimer();
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
            currentPollInterval = Math.min(currentPollInterval * 1.5, maxPollInterval);
            pollTimer = setTimeout(() => pollTaskStatus(taskId), currentPollInterval);
            break;

          case 'completed':
            clearPollTimer();
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
            clearPollTimer();
            onProgress({ step: 'story', status: 'error', message: task.error || '生成失败' });
            reject(new Error(task.error || '生成失败'));
            break;
        }
      } catch (error) {
        clearPollTimer();
        reject(error);
      }
    };

    fetch('/api/story/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ words, style }),
    })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: '请求失败' }));
        reject(new Error(errorData.error));
        return;
      }

      const { taskId } = await response.json();
      pollTimer = setTimeout(() => pollTaskStatus(taskId), initialPollInterval);
    })
    .catch((error) => reject(error));
  });
}

// 同步模式
async function generateStoryBookSync(
  words: string[],
  style: string,
  onProgress: (progress: GenerationProgress) => void
): Promise<Story> {
  onProgress({ step: 'story', status: 'generating', message: '正在生成（同步模式）...' });

  const response = await fetch('/api/story/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ words, style, sync: true }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: '请求失败' }));
    throw new Error(errorData.error);
  }

  const result = await response.json();

  if (result.status === 'error') {
    throw new Error(result.error);
  }

  onProgress({ step: 'story', status: 'completed', message: '生成完成！' });

  return {
    id: `story-${Date.now()}`,
    words,
    content: result.data.content,
    images: result.data.images,
    audioUrl: result.data.audioUrl,
    style,
    createdAt: new Date(),
  };
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
