import 'dotenv/config';
import prisma from '../src/lib/db';

async function deleteUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.log(`用户 ${email} 不存在`);
      return;
    }

    console.log(`找到用户: ${user.username} (ID: ${user.id})`);
    
    // 删除用户
    await prisma.user.delete({
      where: { email },
    });

    console.log(`成功删除用户 ${email}`);
  } catch (error) {
    console.error('删除用户失败:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// 获取命令行参数中的邮箱
const args = process.argv.slice(2);
const emailArg = args.find(arg => arg.startsWith('--email='));

if (emailArg) {
  const email = emailArg.split('=')[1];
  deleteUserByEmail(email);
} else {
  console.log('请使用 --email=xxx 参数指定要删除的邮箱');
  process.exit(1);
}