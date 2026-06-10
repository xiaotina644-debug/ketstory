import { Resend } from 'resend';
import { WelcomeEmail } from '@/emails/welcome';
import { DailyLetter } from '@/emails/daily-letter';
import prisma from './db';

export async function sendWelcomeEmail(
  userEmail: string,
  userName: string
) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.warn('RESEND_API_KEY 环境变量未配置，跳过发送欢迎邮件');
    return;
  }

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: 'ketstory <hello@ket.aiyouran.top>',
      to: userEmail,
      subject: '你好呀，我是你的ket小伙伴💌',
      react: WelcomeEmail({ userName }),
    });

    console.log('欢迎邮件发送成功:', result);
  } catch (error) {
    console.error('发送欢迎邮件失败:', error);
  }
}

export async function sendDailyLetterToAll() {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.warn('RESEND_API_KEY 环境变量未配置，跳过发送每日提醒邮件');
    return;
  }

  const resend = new Resend(apiKey);

  try {
    // 获取所有用户
    const users = await prisma.user.findMany({
      select: {
        email: true,
        username: true,
      },
    });

    console.log(`找到 ${users.length} 个用户，准备发送每日提醒`);

    // 批量发送邮件
    const sendPromises = users.map(async (user) => {
      try {
        const result = await resend.emails.send({
          from: 'ketstory <hello@ket.aiyouran.top>',
          to: user.email,
          subject: '📚 今日学习提醒 - 不要忘记学习KET单词哦！',
          react: DailyLetter({ userName: user.username }),
        });
        console.log(`发送给 ${user.email} 成功: ${result.data?.id}`);
      } catch (error) {
        console.error(`发送给 ${user.email} 失败:`, error);
      }
    });

    await Promise.all(sendPromises);
    console.log('每日提醒邮件发送完成');
  } catch (error) {
    console.error('发送每日提醒邮件失败:', error);
    throw error;
  }
}