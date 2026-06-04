import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import XLSX from 'xlsx';
import * as path from 'path';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

interface ExcelWord {
  word: string;
  phonetic: string;
  meaning: string;
  partOfSpeech: string;
  example: string;
  level?: number;
  category?: string;
}

async function importFromExcel(filePath: string): Promise<ExcelWord[]> {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  
  // 使用数组模式读取，跳过前5行（标题和元数据）
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
  const words: ExcelWord[] = [];
  
  // 从第6行开始（索引为5），第5行是表头
  for (let i = 5; i < data.length; i++) {
    const row = data[i] as any[];
    
    // 跳过空行
    if (!row || row.length === 0 || !row[1] || typeof row[1] !== 'string' || !row[1].trim()) {
      continue;
    }
    
    const word = row[1]?.trim(); // 第2列是单词
    const partOfSpeech = row[2]?.trim() || 'n.'; // 第3列是词性
    
    if (word) {
      words.push({
        word,
        phonetic: '',
        meaning: '',
        partOfSpeech,
        example: '',
        level: 1,
        category: undefined,
      });
    }
  }
  
  return words;
}

async function main() {
  console.log('开始从Excel导入KET词汇...');
  
  const filePath = path.join(process.cwd(), 'public', 'data', 'KET词汇表_2025年版.xlsx');
  
  try {
    const words = await importFromExcel(filePath);
    console.log(`读取到 ${words.length} 个单词`);
    
    // 先获取已存在的单词
    const existingWords = await prisma.word.findMany({
      select: { word: true },
    });
    const existingWordSet = new Set(existingWords.map(w => w.word));
    
    // 分离新增和更新的单词
    const newWords = words.filter(w => !existingWordSet.has(w.word));
    const updateWords = words.filter(w => existingWordSet.has(w.word));
    
    console.log(`准备新增 ${newWords.length} 个单词，更新 ${updateWords.length} 个单词`);
    
    // 批量插入新单词（每批100个）
    const batchSize = 100;
    let imported = 0;
    
    for (let i = 0; i < newWords.length; i += batchSize) {
      const batch = newWords.slice(i, i + batchSize);
      await prisma.word.createMany({
        data: batch,
      });
      imported += batch.length;
      console.log(`已插入 ${imported}/${newWords.length} 个新单词`);
    }
    
    console.log(`\n导入完成！`);
    console.log(`新增: ${imported} 个单词`);
    
    const total = await prisma.word.count();
    console.log(`数据库中共有: ${total} 个单词`);
    
  } catch (error) {
    console.error('导入失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
