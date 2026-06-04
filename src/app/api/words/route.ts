import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { defaultWordList, Word } from '@/data/ketWords';

export async function GET() {
  const dataDir = join(process.cwd(), 'public', 'data');
  
  if (!existsSync(dataDir)) {
    return NextResponse.json({ words: defaultWordList });
  }

  const files = readdirSync(dataDir);
  const excelFiles = files.filter(f => f.toLowerCase().endsWith('.xlsx'));
  
  if (excelFiles.length === 0) {
    return NextResponse.json({ words: defaultWordList });
  }

  const ketFile = excelFiles.find(f => 
    f.toLowerCase().includes('ket') || 
    f.toLowerCase().includes('词汇') || 
    f.toLowerCase().includes('word')
  ) || excelFiles[0];
  
  const excelPath = join(dataDir, ketFile);

  try {
    const fileBuffer = readFileSync(excelPath);
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    const rawData = XLSX.utils.sheet_to_json(worksheet) as Array<{
      word?: string;
      phonetic?: string;
      meaning?: string;
      partOfSpeech?: string;
      example?: string;
      Word?: string;
      Phonetic?: string;
      Meaning?: string;
      'Part of Speech'?: string;
      Example?: string;
      单词?: string;
      音标?: string;
      释义?: string;
      词性?: string;
      例句?: string;
    }>;

    const words: Word[] = rawData.map(row => ({
      word: row.word || row.Word || row.单词 || '',
      phonetic: row.phonetic || row.Phonetic || row.音标 || '',
      meaning: row.meaning || row.Meaning || row.释义 || '',
      partOfSpeech: row.partOfSpeech || row['Part of Speech'] || row.词性 || '',
      example: row.example || row.Example || row.例句 || '',
    })).filter(word => word.word.trim());

    return NextResponse.json({ words: words.length > 0 ? words : defaultWordList });
  } catch (error) {
    console.error('Error reading Excel file:', error);
    return NextResponse.json({ words: defaultWordList });
  }
}
