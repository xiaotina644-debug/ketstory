import 'dotenv/config';
import { Pool } from 'pg';

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      'SELECT column_name FROM information_schema.columns WHERE table_name = $1',
      ['Word']
    );
    console.log('Word表的列名:', result.rows.map(r => r.column_name));
  } catch (error) {
    console.error('查询失败:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

main();
