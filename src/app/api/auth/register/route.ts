import { register, SafeUser } from '@/lib/services/authService';
import { cookies } from 'next/headers';
import { sendWelcomeEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    // 记录请求信息
    const requestBody = await request.json();
    console.log('注册请求体:', JSON.stringify(requestBody, null, 2));
    
    const { turnstileToken, ...registrationData } = requestBody;
    const { username, password, email } = registrationData;

    console.log('注册参数:', { username: !!username, password: !!password, email: !!email, turnstileToken: !!turnstileToken });

    if (!username || !password) {
      console.log('错误: 用户名或密码为空');
      return new Response(
        JSON.stringify({ success: false, message: '用户名和密码不能为空' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 检查 Turnstile 配置
    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.error('TURNSTILE_SECRET_KEY 环境变量未配置');
      return Response.json(
        { success: false, error: '服务器配置错误' },
        { status: 500 }
      );
    }

    // 检查 token 是否存在
    if (!turnstileToken) {
      return Response.json(
        { success: false, error: '请先完成人机验证' },
        { status: 400 }
      );
    }

    // 去 Cloudflare 验证这个 token 是不是真的
    let verifyResponse;
    try {
      // 使用 Promise.race 实现超时控制
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('请求超时')), 10000);
      });
      
      const fetchPromise = fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
          }),
        }
      );
      
      verifyResponse = await Promise.race([fetchPromise, timeoutPromise]);
    } catch (fetchError) {
      console.error('Turnstile 验证请求失败:', fetchError);
      return Response.json(
        { success: false, error: '验证服务暂时不可用，请稍后重试' },
        { status: 503 }
      );
    }

    const verifyResult = await verifyResponse.json();
    console.log('Turnstile 验证结果:', verifyResult);

    // 如果验证失败，返回详细错误信息
    if (!verifyResult.success) {
      const errorCodes = verifyResult['error-codes'] || [];
      console.error('Turnstile 验证失败:', errorCodes);
      
      let errorMessage = '人机验证失败，请重试';
      if (errorCodes.includes('timeout')) {
        errorMessage = '验证超时，请刷新页面重试';
      } else if (errorCodes.includes('invalid-input-response')) {
        errorMessage = '验证响应无效，请重新验证';
      } else if (errorCodes.includes('invalid-secret')) {
        errorMessage = '服务器配置错误';
        console.error('TURNSTILE_SECRET_KEY 可能不正确');
      }
      
      return Response.json(
        { success: false, error: errorMessage },
        { status: 403 }
      );
    }

    console.log('Turnstile 验证通过，开始注册流程');

    // 验证通过，继续正常的注册流程...
    const result = await register({ username, password, email });
    console.log('注册服务返回结果:', result);

    if (result.success && result.user) {
      // 设置登录状态
      const cookieStore = await cookies();
      cookieStore.set('userId', result.user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7天
      });

      // 注册成功后，发送欢迎邮件（失败不影响注册）
      try {
        await sendWelcomeEmail(result.user.email, result.user.username);
      } catch (error) {
        console.error('欢迎邮件发送失败:', error);
        // 不 throw，不影响注册流程
      }

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
