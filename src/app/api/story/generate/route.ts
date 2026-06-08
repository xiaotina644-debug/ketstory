import { createAIService } from '@/lib/services/aiService';
import { AIError, ErrorCode } from '@/lib/errors';

// 使用 Edge Runtime 支持流式响应
export const runtime = 'edge';

export async function POST(request: Request) {
  const aiService = createAIService();

  try {
    const body = await request.json();
    const { words, style } = body;

    if (!words || !Array.isArray(words) || words.length === 0) {
      return new Response(
        JSON.stringify({ error: '请至少选择一个单词' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const encoder = new TextEncoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // 步骤1: 生成故事
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
            type: 'progress', 
            step: 1, 
            total: 3, 
            message: '正在生成故事...' 
          })}\n\n`));

          const storyResponse = await aiService.generateStory({ words, style });
          
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
            type: 'story', 
            content: storyResponse.content 
          })}\n\n`));

          // 步骤2: 并行生成图片（限制数量避免超时）
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
            type: 'progress', 
            step: 2, 
            total: 3, 
            message: '正在生成图片...' 
          })}\n\n`));

          const sentences = storyResponse.content.split(/[.!?]+/).filter(s => s.trim().length > 5);
          // 限制图片数量避免超时
          const prompts = sentences.slice(0, 6).map(s => s.trim());
          
          // 并行生成图片，最多同时生成2张（减少并发）
          const maxParallel = 2;
          const imageUrls: string[] = [];
          
          for (let i = 0; i < prompts.length; i += maxParallel) {
            const batch = prompts.slice(i, Math.min(i + maxParallel, prompts.length));
            const promises = batch.map(prompt => aiService.generateImage({ prompt }));
            const results = await Promise.all(promises);
            imageUrls.push(...results.map(r => r.url));
            
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
              type: 'images', 
              urls: imageUrls,
              progress: Math.round((imageUrls.length / prompts.length) * 100)
            })}\n\n`));
          }

          // 步骤3: 跳过音频生成（避免超时）
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
            type: 'progress', 
            step: 3, 
            total: 3, 
            message: '正在生成音频...' 
          })}\n\n`));

          // 完成（音频可以后续按需生成）
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
            type: 'complete',
            content: storyResponse.content,
            images: imageUrls,
            audioUrl: '',
            words,
            style
          })}\n\n`));

          controller.close();

        } catch (error) {
          let errorMessage = '生成失败，请稍后再试';

          if (error instanceof AIError) {
            const errorMessages: Record<ErrorCode, string> = {
              [ErrorCode.UNAUTHORIZED]: 'API密钥无效',
              [ErrorCode.FORBIDDEN]: '权限不足',
              [ErrorCode.RATE_LIMITED]: '请求过于频繁',
              [ErrorCode.SERVER_ERROR]: '服务器内部错误',
              [ErrorCode.TIMEOUT]: '请求超时',
              [ErrorCode.BAD_REQUEST]: '请求参数错误',
              [ErrorCode.UNKNOWN]: '未知错误',
            };
            errorMessage = errorMessages[error.code] || '未知错误';
          }

          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
            type: 'error', 
            error: errorMessage 
          })}\n\n`));
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ error: '请求处理失败' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
