'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Turnstile } from '@marsidev/react-turnstile';

export function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 表单验证
    if (!formData.username.trim()) {
      setError('请输入用户名');
      return;
    }

    if (!formData.password) {
      setError('请输入密码');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('两次输入的密码不一致');
      return;
    }

    if (formData.password.length < 6) {
      setError('密码长度至少为6位');
      return;
    }

    if (!turnstileToken) {
      setError('请完成人机验证');
      return;
    }

    setIsLoading(true);

    try {
      const requestBody: { username: string; password: string; email?: string; turnstileToken: string } = {
        username: formData.username.trim(),
        password: formData.password,
        turnstileToken,
      };
      if (formData.email.trim()) {
        requestBody.email = formData.email.trim();
      }

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        router.push('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('注册请求失败:', error);
      setError('注册失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-card-foreground mb-6">
          用户注册
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              用户名
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="请输入用户名"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              邮箱（可选）
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="请输入邮箱地址"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              密码
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="请输入密码（至少6位）"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              确认密码
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="请再次输入密码"
            />
          </div>

          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={(token) => {
              setTurnstileToken(token);
              setError('');
            }}
            onError={(error) => {
              console.error('Turnstile error:', error);
              setError('人机验证失败，请刷新页面重试');
            }}
            onExpire={() => {
              setTurnstileToken('');
              setError('验证已过期，请重新验证');
            }}
            retry="auto"
            refreshOnExpire
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? '注册中...' : '注册'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          已有账号？{' '}
          <a
            href="/login"
            className="text-primary hover:underline"
          >
            立即登录
          </a>
        </p>
      </div>
    </div>
  );
}
