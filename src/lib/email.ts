import { Resend } from 'resend';

// 延迟初始化，只在需要时创建实例
let resend: Resend | null = null;

function getResend(): Resend | null {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY 未配置，邮件功能将被禁用');
      return null;
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

export async function sendWelcomeEmail(
  userEmail: string,
  userName: string
) {
  const client = getResend();
  if (!client) {
    console.warn('邮件服务未配置，跳过发送欢迎邮件');
    return;
  }

  await client.emails.send({
    from: 'ketstory <hello@ket.aiyouran.top>',
    to: userEmail,
    subject: '你好呀，我是你的ket故事小伙伴 💌',
    html: `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
        <h2>Hi ${userName}，欢迎来到ketstory！</h2>
        <p>从现在起，我就是你的ket小伙伴了。</p>
        <p>我会一直在这里等你。</p>
        <br/>
        <p>—— 你的ket小伙伴</p>
      </div>
    `,
  });
}