import bcrypt from 'bcrypt';
import prisma from '@/lib/db';
import { User } from '@/generated/prisma';

export interface RegisterInput {
  username: string;
  password: string;
  email?: string;
}

export interface LoginInput {
  username: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  message: string;
  user?: User;
}

export interface SafeUser {
  id: string;
  username: string;
  email: string;
  level: number;
  totalScore: number;
  createdAt: Date;
}

const SALT_ROUNDS = 10;

export async function register(input: RegisterInput): Promise<AuthResult> {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { username: input.username },
    });

    if (existingUser) {
      return { success: false, message: '用户名已存在' };
    }

    if (input.email) {
      const existingEmail = await prisma.user.findUnique({
        where: { email: input.email },
      });
      if (existingEmail) {
        return { success: false, message: '邮箱已被注册' };
      }
    }

    const hashedPassword = await bcrypt.hash(input.password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        username: input.username,
        password: hashedPassword,
        email: input.email || `${input.username}@example.com`,
      },
    });

    return { success: true, message: '注册成功', user };
  } catch (error) {
    console.error('注册失败:', error);
    return { success: false, message: '注册失败，请稍后重试' };
  }
}

export async function login(input: LoginInput): Promise<AuthResult> {
  try {
    const user = await prisma.user.findUnique({
      where: { username: input.username },
    });

    if (!user) {
      return { success: false, message: '用户名或密码错误' };
    }

    const isValidPassword = await bcrypt.compare(input.password, user.password);

    if (!isValidPassword) {
      return { success: false, message: '用户名或密码错误' };
    }

    return { success: true, message: '登录成功', user };
  } catch (error) {
    console.error('登录失败:', error);
    return { success: false, message: '登录失败，请稍后重试' };
  }
}

export async function getUserById(userId: string): Promise<SafeUser | null> {
  try {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        level: true,
        totalScore: true,
        createdAt: true,
      },
    });
  } catch (error) {
    console.error('获取用户失败:', error);
    return null;
  }
}
