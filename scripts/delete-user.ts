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

// 删除指定邮箱的用户
deleteUserByEmail('903531808@qq.com');