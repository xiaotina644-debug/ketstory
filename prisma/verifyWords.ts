import 'dotenv/config';
import { Pool } from 'pg';
import XLSX from 'xlsx';
import * as path from 'path';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

async function getExcelWords(): Promise<Set<string>> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'KET词汇表_2025年版.xlsx');
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
  const words = new Set<string>();
  
  for (let i = 5; i < data.length; i++) {
    const row = data[i] as any[];
    if (row && row[1] && typeof row[1] === 'string' && row[1].trim()) {
      words.add(row[1].trim().toLowerCase());
    }
  }
  
  return words;
}

async function getDatabaseWords(): Promise<{ words: Set<string>; allWords: Array<{ id: string; word: string }> }> {
  const client = await pool.connect();
  
  try {
    const result = await client.query('SELECT "id", "word" FROM "Word"');
    const words = new Set(result.rows.map((r: any) => r.word.toLowerCase()));
    return { words, allWords: result.rows.map((r: any) => ({ id: r.id, word: r.word })) };
  } finally {
    client.release();
  }
}

async function deleteWords(wordIds: string[]): Promise<number> {
  if (wordIds.length === 0) return 0;
  
  const client = await pool.connect();
  
  try {
    const placeholders = wordIds.map((_, i) => `$${i + 1}`).join(',');
    const result = await client.query(`DELETE FROM "Word" WHERE "id" IN (${placeholders})`, wordIds);
    return result.rowCount || 0;
  } finally {
    client.release();
    await pool.end();
  }
}

async function main() {
  console.log('开始验证数据库单词与KET词汇表一致性...\n');
  
  const [excelWords, dbResult] = await Promise.all([
    getExcelWords(),
    getDatabaseWords()
  ]);
  
  const dbWords = dbResult.words;
  const allDbWords = dbResult.allWords;
  
  console.log(`Excel词汇表单词数: ${excelWords.size}`);
  console.log(`数据库单词数: ${dbWords.size}`);
  
  // 找出数据库中不在Excel中的单词（模拟单词）
  const invalidWords = allDbWords.filter(w => !excelWords.has(w.word.toLowerCase()));
  
  if (invalidWords.length > 0) {
    console.log(`\n发现 ${invalidWords.length} 个不在KET词汇表中的单词（模拟单词）:`);
    invalidWords.forEach((w, i) => {
      console.log(`${i + 1}. ${w.word}`);
    });
    
    // 删除这些无效单词
    const wordIds = invalidWords.map(w => w.id);
    const deletedCount = await deleteWords(wordIds);
    console.log(`\n已删除 ${deletedCount} 个无效单词`);
  } else {
    console.log('\n✅ 数据库中的所有单词都来自KET词汇表，没有模拟单词');
  }
  
  // 验证最终结果
  const finalResult = await getDatabaseWords();
  console.log(`\n验证完成！数据库中剩余 ${finalResult.words.size} 个单词`);
  
  await pool.end();
}

main();
