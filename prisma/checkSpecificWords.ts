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

async function getWordsInRange(startWord: string, endWord: string): Promise<Array<{ word: string; partOfSpeech: string }>> {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      'SELECT "word", "partOfSpeech" FROM "Word" WHERE "word" >= $1 AND "word" <= $2 ORDER BY "word"',
      [startWord.toLowerCase(), endWord.toLowerCase()]
    );
    return result.rows.map((r: any) => ({ 
      word: r.word, 
      partOfSpeech: r.partOfSpeech 
    }));
  } finally {
    client.release();
    await pool.end();
  }
}

async function main() {
  console.log('检查数据库中从 "apple" 到 "visit" 的单词是否来自KET词汇表...\n');
  
  const [excelWords, dbWords] = await Promise.all([
    getExcelWords(),
    getWordsInRange('apple', 'visit')
  ]);
  
  console.log(`Excel词汇表单词数: ${excelWords.size}`);
  console.log(`数据库中 apple 到 visit 的单词数: ${dbWords.length}\n`);
  
  console.log('检查结果:');
  console.log('-' .repeat(50));
  
  let validCount = 0;
  let invalidCount = 0;
  const invalidWords: string[] = [];
  
  dbWords.forEach(w => {
    const isInExcel = excelWords.has(w.word.toLowerCase());
    if (isInExcel) {
      validCount++;
      console.log(`✓ ${w.word} (${w.partOfSpeech}) - 来自KET词汇表`);
    } else {
      invalidCount++;
      invalidWords.push(w.word);
      console.log(`✗ ${w.word} (${w.partOfSpeech}) - 不在KET词汇表中`);
    }
  });
  
  console.log('-' .repeat(50));
  console.log(`\n统计结果:`);
  console.log(`✅ 有效单词（来自KET词汇表）: ${validCount} 个`);
  console.log(`❌ 无效单词（模拟单词）: ${invalidCount} 个`);
  
  if (invalidWords.length > 0) {
    console.log(`\n无效单词列表: ${invalidWords.join(', ')}`);
  } else {
    console.log('\n🎉 所有单词都来自KET词汇表！');
  }
}

main();
