import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const words = [
  { word: 'apple', phonetic: '/ˈæpl/', meaning: '苹果', partOfSpeech: 'n.', example: 'I eat an apple every day.', level: 1, category: 'food' },
  { word: 'book', phonetic: '/bʊk/', meaning: '书', partOfSpeech: 'n.', example: 'This is a good book.', level: 1, category: 'study' },
  { word: 'cat', phonetic: '/kæt/', meaning: '猫', partOfSpeech: 'n.', example: 'The cat is sleeping.', level: 1, category: 'animal' },
  { word: 'dog', phonetic: '/dɒɡ/', meaning: '狗', partOfSpeech: 'n.', example: 'I have a pet dog.', level: 1, category: 'animal' },
  { word: 'elephant', phonetic: '/ˈelɪfənt/', meaning: '大象', partOfSpeech: 'n.', example: 'The elephant is very big.', level: 2, category: 'animal' },
  { word: 'flower', phonetic: '/ˈflaʊər/', meaning: '花', partOfSpeech: 'n.', example: 'The flower is beautiful.', level: 1, category: 'nature' },
  { word: 'garden', phonetic: '/ˈɡɑːdn/', meaning: '花园', partOfSpeech: 'n.', example: 'We play in the garden.', level: 2, category: 'nature' },
  { word: 'happy', phonetic: '/ˈhæpi/', meaning: '快乐的', partOfSpeech: 'adj.', example: 'I am very happy today.', level: 1, category: 'emotion' },
  { word: 'ice', phonetic: '/aɪs/', meaning: '冰', partOfSpeech: 'n.', example: 'The ice is cold.', level: 1, category: 'nature' },
  { word: 'jump', phonetic: '/dʒʌmp/', meaning: '跳', partOfSpeech: 'v.', example: 'The rabbit can jump high.', level: 1, category: 'action' },
  { word: 'king', phonetic: '/kɪŋ/', meaning: '国王', partOfSpeech: 'n.', example: 'The king lives in a castle.', level: 2, category: 'people' },
  { word: 'love', phonetic: '/lʌv/', meaning: '爱', partOfSpeech: 'v./n.', example: 'I love my family.', level: 1, category: 'emotion' },
  { word: 'milk', phonetic: '/mɪlk/', meaning: '牛奶', partOfSpeech: 'n.', example: 'I drink milk every morning.', level: 1, category: 'food' },
  { word: 'night', phonetic: '/naɪt/', meaning: '夜晚', partOfSpeech: 'n.', example: 'Good night, sleep tight.', level: 1, category: 'time' },
  { word: 'orange', phonetic: '/ˈɒrɪndʒ/', meaning: '橙子', partOfSpeech: 'n.', example: 'The orange is sweet.', level: 1, category: 'food' },
  { word: 'play', phonetic: '/pleɪ/', meaning: '玩', partOfSpeech: 'v.', example: 'Children like to play.', level: 1, category: 'action' },
  { word: 'queen', phonetic: '/kwiːn/', meaning: '女王', partOfSpeech: 'n.', example: 'The queen has a crown.', level: 2, category: 'people' },
  { word: 'rain', phonetic: '/reɪn/', meaning: '雨', partOfSpeech: 'n.', example: 'It is raining outside.', level: 1, category: 'nature' },
  { word: 'sun', phonetic: '/sʌn/', meaning: '太阳', partOfSpeech: 'n.', example: 'The sun is bright.', level: 1, category: 'nature' },
  { word: 'tree', phonetic: '/triː/', meaning: '树', partOfSpeech: 'n.', example: 'The tree is tall.', level: 1, category: 'nature' },
  { word: 'umbrella', phonetic: '/ʌmˈbrelə/', meaning: '雨伞', partOfSpeech: 'n.', example: 'Take an umbrella with you.', level: 2, category: 'object' },
  { word: 'vegetable', phonetic: '/ˈvedʒtəbl/', meaning: '蔬菜', partOfSpeech: 'n.', example: 'Eat more vegetables.', level: 1, category: 'food' },
  { word: 'water', phonetic: '/ˈwɔːtər/', meaning: '水', partOfSpeech: 'n.', example: 'Drink more water.', level: 1, category: 'food' },
  { word: 'yellow', phonetic: '/ˈjeləʊ/', meaning: '黄色的', partOfSpeech: 'adj.', example: 'The banana is yellow.', level: 1, category: 'color' },
  { word: 'zoo', phonetic: '/zuː/', meaning: '动物园', partOfSpeech: 'n.', example: 'We go to the zoo on weekends.', level: 2, category: 'place' },
  { word: 'ball', phonetic: '/bɔːl/', meaning: '球', partOfSpeech: 'n.', example: 'Let"s play with a ball.', level: 1, category: 'object' },
  { word: 'cake', phonetic: '/keɪk/', meaning: '蛋糕', partOfSpeech: 'n.', example: 'I like chocolate cake.', level: 1, category: 'food' },
  { word: 'dance', phonetic: '/dɑːns/', meaning: '跳舞', partOfSpeech: 'v.', example: 'We dance at the party.', level: 1, category: 'action' },
  { word: 'egg', phonetic: '/eɡ/', meaning: '鸡蛋', partOfSpeech: 'n.', example: 'I have an egg for breakfast.', level: 1, category: 'food' },
  { word: 'fish', phonetic: '/fɪʃ/', meaning: '鱼', partOfSpeech: 'n.', example: 'The fish swims in water.', level: 1, category: 'animal' },
  { word: 'girl', phonetic: '/ɡɜːl/', meaning: '女孩', partOfSpeech: 'n.', example: 'She is a happy girl.', level: 1, category: 'people' },
  { word: 'hand', phonetic: '/hænd/', meaning: '手', partOfSpeech: 'n.', example: 'Wash your hands before eating.', level: 1, category: 'body' },
  { word: 'idea', phonetic: '/aɪˈdɪə/', meaning: '想法', partOfSpeech: 'n.', example: 'That is a good idea.', level: 2, category: 'thinking' },
  { word: 'juice', phonetic: '/dʒuːs/', meaning: '果汁', partOfSpeech: 'n.', example: 'I drink orange juice.', level: 1, category: 'food' },
  { word: 'kite', phonetic: '/kaɪt/', meaning: '风筝', partOfSpeech: 'n.', example: 'Let"s fly a kite.', level: 2, category: 'object' },
  { word: 'lion', phonetic: '/ˈlaɪən/', meaning: '狮子', partOfSpeech: 'n.', example: 'The lion is strong.', level: 2, category: 'animal' },
  { word: 'mouse', phonetic: '/maʊs/', meaning: '老鼠', partOfSpeech: 'n.', example: 'The mouse is small.', level: 1, category: 'animal' },
  { word: 'name', phonetic: '/neɪm/', meaning: '名字', partOfSpeech: 'n.', example: 'What is your name?', level: 1, category: 'people' },
  { word: 'pen', phonetic: '/pen/', meaning: '钢笔', partOfSpeech: 'n.', example: 'I write with a pen.', level: 1, category: 'object' },
  { word: 'red', phonetic: '/red/', meaning: '红色的', partOfSpeech: 'adj.', example: 'The apple is red.', level: 1, category: 'color' },
  { word: 'school', phonetic: '/skuːl/', meaning: '学校', partOfSpeech: 'n.', example: 'I go to school every day.', level: 1, category: 'place' },
  { word: 'time', phonetic: '/taɪm/', meaning: '时间', partOfSpeech: 'n.', example: 'What time is it?', level: 1, category: 'time' },
  { word: 'under', phonetic: '/ˈʌndər/', meaning: '在...下面', partOfSpeech: 'prep.', example: 'The cat is under the table.', level: 1, category: 'preposition' },
  { word: 'visit', phonetic: '/ˈvɪzɪt/', meaning: '拜访', partOfSpeech: 'v.', example: 'We visit our grandparents.', level: 2, category: 'action' },
];

async function main() {
  console.log('Seeding KET vocabulary...');
  
  for (const word of words) {
    await prisma.word.upsert({
      where: { word: word.word },
      update: {},
      create: word,
    });
  }
  
  console.log(`Successfully seeded ${words.length} words!`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
