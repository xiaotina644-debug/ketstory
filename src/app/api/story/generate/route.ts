import { createStoryTask } from '@/lib/services/taskService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { words, style } = body;

    if (!words || !Array.isArray(words) || words.length === 0) {
      return new Response(
        JSON.stringify({ error: '请至少选择一个单词' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 创建异步任务并立即返回任务ID
    const taskId = await createStoryTask(words, style);

    return new Response(
      JSON.stringify({ taskId, status: 'pending' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: '请求处理失败' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
