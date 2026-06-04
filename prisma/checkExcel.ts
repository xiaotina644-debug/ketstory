import XLSX from 'xlsx';
import * as path from 'path';

async function checkExcel() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'KET词汇表_2025年版.xlsx');
  
  try {
    const workbook = XLSX.readFile(filePath);
    console.log('工作表名称:', workbook.SheetNames);
    
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // 获取前10行数据查看结构
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
    console.log('\n前5行数据:');
    for (let i = 0; i < Math.min(5, data.length); i++) {
      console.log(`第 ${i + 1} 行:`, data[i]);
    }
    
    console.log('\n表头:', data[0]);
    
  } catch (error) {
    console.error('读取失败:', error);
  }
}

checkExcel();
