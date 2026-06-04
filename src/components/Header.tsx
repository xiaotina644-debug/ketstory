'use client';

import { useState, useEffect } from 'react';
import { BookOpen, User, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

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
          <button className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-colors">
            <User className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
