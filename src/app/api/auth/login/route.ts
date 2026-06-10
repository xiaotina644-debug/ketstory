import { login } from '@/lib/services/authService';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password, turnstileToken } = body;

    if (!username || !password) {
      return new Response(
        JSON.stringify({ success: false, message: '用户名和密码不能为空' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 验证 Turnstile
    if (!turnstileToken) {
      return new Response(
        JSON.stringify({ success: false, message: '请完成人机验证' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 验证 Turnstile token
    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    });

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      return new Response(
        JSON.stringify({ success: false, message: '人机验证失败，请重试' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await login({ username, password });

    if (result.success && result.user) {
      // 设置登录状态
      const cookieStore = await cookies();
      cookieStore.set('userId', result.user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7天
      });
    }

    if (result.success && result.user) {
      // 移除密码字段
      const { password, ...safeUser } = result.user;
      return new Response(
        JSON.stringify({ ...result, user: safeUser }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
    return new Response(
      JSON.stringify(result),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: '服务器内部错误' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
