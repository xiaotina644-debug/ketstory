import prisma from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: '邮箱不能为空' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: '用户不存在' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log(`找到用户: ${user.username} (ID: ${user.id})`);

    // 删除用户（级联删除相关记录）
    await prisma.user.delete({
      where: { email },
    });

    console.log(`成功删除用户 ${email}`);

    return new Response(
      JSON.stringify({ success: true, message: '用户删除成功' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('删除用户失败:', error);
    return new Response(
      JSON.stringify({ success: false, message: '删除失败' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}