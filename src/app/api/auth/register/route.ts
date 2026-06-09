import { register, SafeUser } from '@/lib/services/authService';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password, email } = body;

    if (!username || !password) {
      return new Response(
        JSON.stringify({ success: false, message: '用户名和密码不能为空' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await register({ username, password, email });

    if (result.success && result.user) {
      // 设置登录状态
      const cookieStore = cookies();
      cookieStore.set('userId', result.user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7天
      });

      // 返回安全的用户信息（不包含密码）
      const safeUser: SafeUser = {
        id: result.user.id,
        username: result.user.username,
        email: result.user.email,
        level: result.user.level,
        totalScore: result.user.totalScore,
        createdAt: result.user.createdAt,
      };

      return new Response(
        JSON.stringify({ success: true, message: '注册成功', user: safeUser }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify(result),
      { status: result.success ? 200 : 400, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('注册API错误:', error);
    return new Response(
      JSON.stringify({ success: false, message: '服务器内部错误' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
