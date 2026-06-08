import { getStoryTask } from '@/lib/services/taskService';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const taskId = url.searchParams.get('taskId');

    if (!taskId) {
      return new Response(
        JSON.stringify({ error: '缺少taskId参数' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const task = await getStoryTask(taskId);

    if (!task) {
      return new Response(
        JSON.stringify({ error: '任务不存在' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify(task),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: '查询失败' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
