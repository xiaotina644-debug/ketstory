import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const cookieStore = cookies();
    cookieStore.delete('userId');

    return new Response(
      JSON.stringify({ success: true, message: '登出成功' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: '登出失败' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
