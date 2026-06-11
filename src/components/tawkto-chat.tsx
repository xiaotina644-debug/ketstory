'use client';

import { useEffect } from 'react';

// 扩展 Window 类型
declare global {
  interface Window {
    Tawk_API?: any;
  }
}

export function TawkToChat() {
  useEffect(() => {
    const widgetId = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID;
    
    if (!widgetId) {
      console.warn('Tawk.to widget ID 未配置');
      return;
    }

    // 检查脚本是否已加载
    if (window.Tawk_API) {
      console.log('Tawk.to 已加载');
      return;
    }

    // 创建并加载 Tawk.to 脚本
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    
    s1.async = true;
    s1.src = `https://embed.tawk.to/${widgetId}`;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    s0.parentNode?.insertBefore(s1, s0);

    // 清理函数
    return () => {
      s1.remove();
    };
  }, []);

  // 这个组件不需要渲染任何内容
  return null;
}

export default TawkToChat;