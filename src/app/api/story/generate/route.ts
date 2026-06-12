import { createStoryTask, executeStoryTaskDirectly } from '@/lib/services/taskService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { words, style, sync } = body;

    if (!words || !Array.isArray(words) || words.length === 0) {
      return new Response(
        JSON.stringify({ error: '请至少选择一个单词' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 如果是同步模式，直接执行并返回结果
    if (sync) {
      console.log('[API] Sync mode requested');
      const result = await executeStoryTaskDirectly(words, style);
      return new Response(
        JSON.stringify(result),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 异步模式：创建任务并立即返回任务ID
    // 尝试获取 waitUntil，如果在 Vercel 边缘函数环境中
    const waitUntil = (request as any).waitUntil?.bind(request);
    const taskId = await createStoryTask(words, style, waitUntil);

    return new Response(
      JSON.stringify({ taskId, status: 'pending' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[API] Generate failed:', error);
    return new Response(
      JSON.stringify({ error: '请求处理失败' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
