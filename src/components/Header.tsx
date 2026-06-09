'use client';

import { useState, useEffect } from 'react';
import { BookOpen, User, Sun, Moon, LogOut } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="bg-card/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">KET绘本</h1>
            <p className="text-xs text-muted-foreground">让单词学习变成故事冒险</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>

          {isAuthenticated && user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">{user.username}</span>
              <button
                onClick={handleLogout}
                className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-colors"
                title="登出"
              >
                <LogOut className="w-5 h-5 text-foreground" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <a
                href="/login"
                className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                登录
              </a>
              <a
                href="/register"
                className="px-3 py-1.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                注册
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
