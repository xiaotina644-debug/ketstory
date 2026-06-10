import { PrismaClient } from '@/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// 检查数据库连接字符串
if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL 环境变量未配置');
  throw new Error('DATABASE_URL is required');
}

// 配置连接池
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
});

const adapter = new PrismaPg(pool);

// 创建 Prisma 客户端
const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error'],
});

export default prisma;
