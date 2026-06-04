import 'dotenv/config';
import { Pool } from 'pg';
import XLSX from 'xlsx';
import * as path from 'path';

function generateCuid(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 9);
  return `c${timestamp}${random}`;
}

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

interface ExcelWord {
  word: string;
  phonetic: string;
  meaning: string;
  partOfSpeech: string;
  example: string;
  level: number;
  category: string | null;
}

async function importFromExcel(filePath: string): Promise<ExcelWord[]> {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
  const words: ExcelWord[] = [];
  
  for (let i = 5; i < data.length; i++) {
    const row = data[i] as any[];
    
    if (!row || row.length === 0 || !row[1] || typeof row[1] !== 'string' || !row[1].trim()) {
      continue;
    }
    
    const word = row[1]?.trim();
    const partOfSpeech = row[2]?.trim() || 'n.';
    
    if (word) {
      words.push({
        word,
        phonetic: '',
        meaning: '',
        partOfSpeech,
        example: '',
        level: 1,
        category: null,
      });
    }
  }
  
  return words;
}

async function main() {
  console.log('开始从Excel导入KET词汇...');
  
  const filePath = path.join(process.cwd(), 'public', 'data', 'KET词汇表_2025年版.xlsx');
  
  const client = await pool.connect();
  
  try {
    const words = await importFromExcel(filePath);
    console.log(`读取到 ${words.length} 个单词`);
    
    // 先检查已存在的单词
    const existingResult = await client.query('SELECT "word" FROM "Word"');
    const existingWords = new Set(existingResult.rows.map((r: any) => r.word));
    console.log(`数据库中已存在 ${existingWords.size} 个单词`);
    console.log(`Excel中读取到 ${words.length} 个单词`);
    
    // 先对Excel中的单词去重
    const seenWords = new Set<string>();
    const uniqueWords = words.filter(w => {
      if (seenWords.has(w.word)) {
        return false;
      }
      seenWords.add(w.word);
      return true;
    });
    console.log(`Excel去重后: ${uniqueWords.length} 个单词`);
    
    const newWords = uniqueWords.filter(w => !existingWords.has(w.word));
    console.log(`准备新增 ${newWords.length} 个单词`);
    
    // 批量插入（每批200个）
    const batchSize = 200;
    let imported = 0;
    
    for (let i = 0; i < newWords.length; i += batchSize) {
      const batch = newWords.slice(i, i + batchSize);
      
      const values = batch.map((w, idx) => 
        `($${idx * 8 + 1}, $${idx * 8 + 2}, $${idx * 8 + 3}, $${idx * 8 + 4}, $${idx * 8 + 5}, $${idx * 8 + 6}, $${idx * 8 + 7}, $${idx * 8 + 8})`
      ).join(',');
      
      const params: any[] = [];
      for (const w of batch) {
        params.push(generateCuid(), w.word, w.phonetic, w.meaning || ' ', w.partOfSpeech, w.example || '', w.level, w.category);
      }
      
      const query = `INSERT INTO "Word" ("id", "word", "phonetic", "meaning", "partOfSpeech", "example", "level", "category") VALUES ${values}`;
      
      await client.query(query, params);
      imported += batch.length;
      console.log(`已插入 ${imported}/${newWords.length} 个单词`);
    }
    
    // 获取总数
    const countResult = await client.query('SELECT COUNT(*) FROM "Word"');
    const total = countResult.rows[0].count;
    
    console.log(`\n导入完成！`);
    console.log(`新增: ${newWords.length} 个单词`);
    console.log(`数据库中共有: ${total} 个单词`);
    
  } catch (error) {
    console.error('导入失败:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

main();
