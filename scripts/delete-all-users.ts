import 'dotenv/config';
import prisma from '../src/lib/db';

async function deleteAllUsers() {
  try {
    const result = await prisma.user.deleteMany({});
    console.log(`成功删除 ${result.count} 个用户`);
  } catch (error) {
    console.error('删除用户失败:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

deleteAllUsers();