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
      <body className={inter.className}>
        {children}
        <TawkToChat />
      </body>
    </html>
  );
}
