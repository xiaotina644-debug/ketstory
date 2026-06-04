import { NextResponse } from 'next/server';
import { createAIService } from '@/lib/services/aiService';
import { AIError, ErrorCode } from '@/lib/errors';

export async function POST(request: Request) {
  const aiService = createAIService();

  try {
    const body = await request.json();
    const { words, style } = body;

    if (!words || !Array.isArray(words) || words.length === 0) {
      return NextResponse.json(
        { error: '请至少选择一个单词' },
        { status: 400 }
      );
    }

    const storyResponse = await aiService.generateStory({ words, style });
    
    const sentences = storyResponse.content.split(/[.!?]+/).filter(s => s.trim().length > 5);
    const prompts = sentences.map(s => s.trim());
    
    const imageResponses = await aiService.generateImages(prompts);
    const audioResponse = await aiService.generateAudio({ text: storyResponse.content });

    return NextResponse.json({
      content: storyResponse.content,
      images: imageResponses.map(r => r.url),
      audioUrl: audioResponse.url,
      words,
      style,
    });

  } catch (error) {
    if (error instanceof AIError) {
      const errorMessages: Record<ErrorCode, string> = {
        [ErrorCode.UNAUTHORIZED]: 'API密钥无效，请联系管理员',
        [ErrorCode.FORBIDDEN]: '权限不足，无法访问AI服务',
        [ErrorCode.RATE_LIMITED]: '请求过于频繁，请稍后再试',
        [ErrorCode.SERVER_ERROR]: '服务器内部错误，请稍后再试',
        [ErrorCode.TIMEOUT]: '请求超时，请稍后再试',
        [ErrorCode.BAD_REQUEST]: '请求参数错误',
        [ErrorCode.UNKNOWN]: '未知错误，请稍后再试',
      };

      return NextResponse.json(
        { error: errorMessages[error.code] || '未知错误' },
        { status: error.code }
      );
    }

    return NextResponse.json(
      { error: '服务器内部错误' },
      { status: 500 }
    );
  }
}
