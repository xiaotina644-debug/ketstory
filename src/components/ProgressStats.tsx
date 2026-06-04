'use client';

import { useState, useEffect, useRef } from 'react';
import { BookOpen, Flame, Calendar, Trophy, Target, Sparkles, BookMarked, CheckCircle2 } from 'lucide-react';
import { UserProgress } from '@/types';

interface ProgressStatsProps {
  progress: UserProgress;
}

export default function ProgressStats({ progress }: ProgressStatsProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const vocabularyProgress = progress.vocabularyTotal > 0 
    ? Math.round((progress.learnedWords / progress.vocabularyTotal) * 100) 
    : 0;

  const stats = [
    {
      icon: BookOpen,
      label: '累计单词',
      value: progress.totalWords,
      gradient: 'from-amber-400 to-orange-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Flame,
      label: '连续学习',
      value: `${progress.streak}天`,
      gradient: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Target,
      label: '生成故事',
      value: progress.totalStories,
      gradient: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Calendar,
      label: '学习天数',
      value: `${progress.learningDays}天`,
      gradient: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
    },
  ];

  const glowStyle = {
    background: isHovering
      ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.15) 0%, transparent 50%)`
      : 'transparent',
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,251,235,0.9) 100%)',
        boxShadow: '0 4px 20px rgba(245, 158, 11, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
        backdropFilter: 'blur(20px)',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 pointer-events-none" style={glowStyle} />
      
      <div className="relative flex items-center gap-2 mb-6">
        <div className="relative">
          <Trophy className="w-6 h-6 text-primary" />
          <Sparkles className="w-3 h-3 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h2 className="text-xl font-bold text-foreground">学习进度</h2>
        <span className="ml-auto px-3 py-1 text-xs font-medium text-amber-700 bg-amber-100 rounded-full">
          继续加油!
        </span>
      </div>

      <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center">
            <BookMarked className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">KET词汇学习</span>
              <span className="text-sm font-bold text-indigo-600">{vocabularyProgress}%</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-xs text-muted-foreground">
                已学习 <span className="font-semibold text-indigo-600">{progress.learnedWords}</span> / {progress.vocabularyTotal} 个单词
              </span>
            </div>
          </div>
        </div>
        <div className="relative h-3 bg-white/80 rounded-full overflow-hidden shadow-inner">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${vocabularyProgress}%`,
              boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
            }}
          />
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-50 blur-md"
            style={{ width: `${vocabularyProgress}%` }}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`relative ${stat.bgColor} rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-black/5`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-foreground text-center">{stat.value}</p>
                <p className="text-xs text-muted-foreground text-center mt-1">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-amber-50/50 to-orange-50/50 rounded-xl border border-amber-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">今日学习目标</span>
          </div>
          <span className="text-sm font-semibold text-primary">已完成 1/3</span>
        </div>
        <div className="relative h-3 bg-white/80 rounded-full overflow-hidden shadow-inner">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-orange-400 rounded-full transition-all duration-500 ease-out"
            style={{
              width: '33%',
              boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
            }}
          />
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-orange-400 rounded-full opacity-50 blur-md"
            style={{ width: '33%' }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-muted-foreground">开始学习</span>
          <span className="text-xs text-muted-foreground">完成目标</span>
        </div>
      </div>
    </div>
  );
}
