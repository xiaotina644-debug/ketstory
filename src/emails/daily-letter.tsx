import { Html, Head, Body, Container, Text, Button } from '@react-email/components';

export function DailyLetter({ userName }: { userName: string }) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'sans-serif', backgroundColor: '#f5f5f5', margin: 0, padding: 20 }}>
        <Container style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#ffffff', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <Text style={{ fontSize: '24px', fontWeight: 'bold', color: '#333333', marginBottom: '20px' }}>
            📚 今日学习提醒
          </Text>
          <Text style={{ fontSize: '16px', color: '#666666', lineHeight: '1.6', marginBottom: '10px' }}>
            Hi {userName}，今天也要记得学习KET单词哦！
          </Text>
          <Text style={{ fontSize: '16px', color: '#666666', lineHeight: '1.6', marginBottom: '30px' }}>
            每天坚持学习一点点，进步就会很大！快来和我一起学习吧～
          </Text>
          <Button 
            href="https://ket.aiyouran.top" 
            style={{ 
              backgroundColor: '#f59e0b', 
              color: '#ffffff', 
              border: 'none', 
              padding: '12px 24px', 
              borderRadius: '4px', 
              fontSize: '16px', 
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            开始学习
          </Button>
          <Text style={{ fontSize: '14px', color: '#999999', marginTop: '30px' }}>
            —— 你的ket小伙伴
          </Text>
        </Container>
      </Body>
    </Html>
  );
}