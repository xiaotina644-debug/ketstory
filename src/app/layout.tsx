import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TawkToChat from '@/components/tawkto-chat';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KET绘本 - AI英语单词学习',
  description: '让KET单词学习变成有趣的绘本故事体验',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 结构化数据 - Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "KET绘本",
              "description": "面向8-12岁儿童的英语词汇学习平台，通过AI生成绘本故事帮助孩子轻松掌握KET核心词汇",
              "url": "https://ket.aiyouran.top",
              "applicationCategory": "EducationApplication",
              "targetAudience": {
                "@type": "Audience",
                "audienceType": "Children",
                "audienceMaxAge": 12,
                "audienceMinAge": 8
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* 语义化标签 */}
          <header className="w-full">
            {/* 头部内容由子组件渲染 */}
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="w-full">
            {/* 底部内容由子组件渲染 */}
          </footer>
        </div>
        <TawkToChat />
      </body>
    </html>
  );
}
