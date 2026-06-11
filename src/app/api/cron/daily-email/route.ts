import { sendDailyLetterToAll } from '@/lib/email';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 第一步：验证请求是否合法
  const authHeader = request.headers.get('authorization');
  
  // 添加调试日志
  console.log('Cron请求 - Authorization header:', authHeader ? '存在' : '不存在');
  console.log('Cron请求 - CRON_SECRET配置:', process.env.CRON_SECRET ? '已配置' : '未配置');
  
  // 检查环境变量是否配置
  if (!process.env.CRON_SECRET) {
    console.error('CRON_SECRET 环境变量未配置');
    return NextResponse.json(
      { error: '服务器配置错误' },
      { status: 500 }
    );
  }
  
  // 检查授权头
  if (!authHeader) {
    console.error('缺少 Authorization header');
    return NextResponse.json(
      { error: '缺少授权信息' },
      { status: 401 }
    );
  }
  
  // 验证 token
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    console.error('Authorization header 不匹配');
    console.log('期望:', `Bearer ${process.env.CRON_SECRET}`);
    console.log('实际:', authHeader);
    return NextResponse.json(
      { error: '未授权访问' },
      { status: 401 }
    );
  }
  
  console.log('Cron请求 - 认证通过');

  // 第二步：执行任务——给所有用户发学习ket的提醒
  try {
    await sendDailyLetterToAll();
    return NextResponse.json({
      success: true,
      message: '每日ket提醒发送完成',
      time: new Date().toISOString(),
    });
  } catch (error) {
    console.error('每日ket提醒发送失败：', error);
    return NextResponse.json(
      { error: '发送失败' },
      { status: 500 }
    );
  }
}