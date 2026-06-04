export interface Word {
  word: string;
  phonetic: string;
  meaning: string;
  partOfSpeech: string;
  example: string;
}

export const defaultWordList: Word[] = [
  { word: "apple", phonetic: "/ˈæpl/", meaning: "苹果", partOfSpeech: "n.", example: "I eat an apple every day." },
  { word: "book", phonetic: "/bʊk/", meaning: "书", partOfSpeech: "n.", example: "This is a good book." },
  { word: "cat", phonetic: "/kæt/", meaning: "猫", partOfSpeech: "n.", example: "The cat is sleeping." },
  { word: "dog", phonetic: "/dɒɡ/", meaning: "狗", partOfSpeech: "n.", example: "I have a pet dog." },
  { word: "elephant", phonetic: "/ˈelɪfənt/", meaning: "大象", partOfSpeech: "n.", example: "The elephant is very big." },
  { word: "flower", phonetic: "/ˈflaʊər/", meaning: "花", partOfSpeech: "n.", example: "The flower is beautiful." },
  { word: "garden", phonetic: "/ˈɡɑːdn/", meaning: "花园", partOfSpeech: "n.", example: "We play in the garden." },
  { word: "happy", phonetic: "/ˈhæpi/", meaning: "快乐的", partOfSpeech: "adj.", example: "I am very happy today." },
  { word: "ice", phonetic: "/aɪs/", meaning: "冰", partOfSpeech: "n.", example: "The ice is cold." },
  { word: "jump", phonetic: "/dʒʌmp/", meaning: "跳", partOfSpeech: "v.", example: "The rabbit can jump high." },
  { word: "king", phonetic: "/kɪŋ/", meaning: "国王", partOfSpeech: "n.", example: "The king lives in a castle." },
  { word: "love", phonetic: "/lʌv/", meaning: "爱", partOfSpeech: "v./n.", example: "I love my family." },
  { word: "milk", phonetic: "/mɪlk/", meaning: "牛奶", partOfSpeech: "n.", example: "I drink milk every morning." },
  { word: "night", phonetic: "/naɪt/", meaning: "夜晚", partOfSpeech: "n.", example: "Good night, sleep tight." },
  { word: "orange", phonetic: "/ˈɒrɪndʒ/", meaning: "橙子", partOfSpeech: "n.", example: "The orange is sweet." },
  { word: "play", phonetic: "/pleɪ/", meaning: "玩", partOfSpeech: "v.", example: "Children like to play." },
  { word: "queen", phonetic: "/kwiːn/", meaning: "女王", partOfSpeech: "n.", example: "The queen has a crown." },
  { word: "rain", phonetic: "/reɪn/", meaning: "雨", partOfSpeech: "n.", example: "It is raining outside." },
  { word: "sun", phonetic: "/sʌn/", meaning: "太阳", partOfSpeech: "n.", example: "The sun is bright." },
  { word: "tree", phonetic: "/triː/", meaning: "树", partOfSpeech: "n.", example: "The tree is tall." },
  { word: "umbrella", phonetic: "/ʌmˈbrelə/", meaning: "雨伞", partOfSpeech: "n.", example: "Take an umbrella with you." },
  { word: "vegetable", phonetic: "/ˈvedʒtəbl/", meaning: "蔬菜", partOfSpeech: "n.", example: "Eat more vegetables." },
  { word: "water", phonetic: "/ˈwɔːtər/", meaning: "水", partOfSpeech: "n.", example: "Drink more water." },
  { word: "yellow", phonetic: "/ˈjeləʊ/", meaning: "黄色的", partOfSpeech: "adj.", example: "The banana is yellow." },
  { word: "zoo", phonetic: "/zuː/", meaning: "动物园", partOfSpeech: "n.", example: "We go to the zoo on weekends." },
  { word: "ball", phonetic: "/bɔːl/", meaning: "球", partOfSpeech: "n.", example: "Let's play with a ball." },
  { word: "cake", phonetic: "/keɪk/", meaning: "蛋糕", partOfSpeech: "n.", example: "I like chocolate cake." },
  { word: "dance", phonetic: "/dɑːns/", meaning: "跳舞", partOfSpeech: "v.", example: "We dance at the party." },
  { word: "egg", phonetic: "/eɡ/", meaning: "鸡蛋", partOfSpeech: "n.", example: "I have an egg for breakfast." },
  { word: "fish", phonetic: "/fɪʃ/", meaning: "鱼", partOfSpeech: "n.", example: "The fish swims in water." },
  { word: "girl", phonetic: "/ɡɜːl/", meaning: "女孩", partOfSpeech: "n.", example: "She is a happy girl." },
  { word: "hand", phonetic: "/hænd/", meaning: "手", partOfSpeech: "n.", example: "Wash your hands before eating." },
  { word: "idea", phonetic: "/aɪˈdɪə/", meaning: "想法", partOfSpeech: "n.", example: "That is a good idea." },
  { word: "juice", phonetic: "/dʒuːs/", meaning: "果汁", partOfSpeech: "n.", example: "I drink orange juice." },
  { word: "kite", phonetic: "/kaɪt/", meaning: "风筝", partOfSpeech: "n.", example: "Let's fly a kite." },
  { word: "lion", phonetic: "/ˈlaɪən/", meaning: "狮子", partOfSpeech: "n.", example: "The lion is strong." },
  { word: "mouse", phonetic: "/maʊs/", meaning: "老鼠", partOfSpeech: "n.", example: "The mouse is small." },
  { word: "name", phonetic: "/neɪm/", meaning: "名字", partOfSpeech: "n.", example: "What is your name?" },
  { word: "pen", phonetic: "/pen/", meaning: "钢笔", partOfSpeech: "n.", example: "I write with a pen." },
  { word: "red", phonetic: "/red/", meaning: "红色的", partOfSpeech: "adj.", example: "The apple is red." },
  { word: "school", phonetic: "/skuːl/", meaning: "学校", partOfSpeech: "n.", example: "I go to school every day." },
  { word: "time", phonetic: "/taɪm/", meaning: "时间", partOfSpeech: "n.", example: "What time is it?" },
  { word: "under", phonetic: "/ˈʌndər/", meaning: "在...下面", partOfSpeech: "prep.", example: "The cat is under the table." },
  { word: "visit", phonetic: "/ˈvɪzɪt/", meaning: "拜访", partOfSpeech: "v.", example: "We visit our grandparents." },
];

export const storyStyles = [
  { id: 'adventure', name: '冒险', icon: 'Compass' },
  { id: 'fairy', name: '童话', icon: 'Castle' },
  { id: 'sci-fi', name: '科幻', icon: 'Rocket' },
  { id: 'daily', name: '日常', icon: 'Home' },
];

export async function loadWordList(): Promise<Word[]> {
  try {
    const response = await fetch('/api/words');
    if (!response.ok) {
      throw new Error('Failed to load word list');
    }
    const data = await response.json();
    return data.words || defaultWordList;
  } catch {
    return defaultWordList;
  }
}
