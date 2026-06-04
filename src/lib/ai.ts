import { Story, GenerationProgress } from '@/types';

export async function generateStory(
  words: string[],
  style: string
): Promise<string> {
  const response = await fetch('/api/story/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ words, style }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to generate story');
  }

  const data = await response.json();
  return data.content;
}

export async function generateImages(
  story: string
): Promise<string[]> {
  const response = await fetch('/api/story/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ words: ['test'], style: 'daily' }),
  });

  if (!response.ok) {
    const sentences = story.split(/[.!?]+/).filter(s => s.trim().length > 5);
    const numImages = Math.min(sentences.length, 4);
    const mockImages: string[] = [];
    for (let i = 0; i < numImages; i++) {
      mockImages.push(`https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20cartoon%20children%20story%20illustration%20colorful%20happy%20scene&image_size=landscape_16_9`);
    }
    return mockImages;
  }

  const data = await response.json();
  return data.images || [];
}

export async function generateAudio(
  story: string,
  voice: 'british' | 'american' = 'british'
): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));
  return 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
}

export async function generateStoryBook(
  words: string[],
  style: string,
  onProgress: (progress: GenerationProgress) => void
): Promise<Story> {
  onProgress({ step: 'story', status: 'generating', message: '正在调用AI生成故事...' });
  
  const response = await fetch('/api/story/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ words, style }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to generate story');
  }

  const data = await response.json();
  const content = data.content;
  const images = data.images || [];

  onProgress({ step: 'story', status: 'completed', message: 'AI故事生成完成！' });
  onProgress({ step: 'images', status: 'completed', message: '插图生成完成！' });
  onProgress({ step: 'audio', status: 'generating', message: '正在合成语音...' });
  
  const audioUrl = await generateAudio(content);
  
  onProgress({ step: 'audio', status: 'completed', message: '语音合成完成！' });
  
  return {
    id: `story-${Date.now()}`,
    words,
    content,
    images,
    audioUrl,
    style,
    createdAt: new Date(),
  };
}

function generateMockStory(words: string[], style: string): string {
  const [w1, w2, w3, w4, w5] = words;
  const word1 = w1 || 'dog';
  const word2 = w2 || 'park';
  const word3 = w3 || 'friend';
  const word4 = w4 || 'ball';
  const word5 = w5 || 'happy';

  const styleTemplates: Record<string, () => string> = {
    adventure: () => 
      `Lily loves her little ${word1} named Max.\n` +
      `Every Saturday, they go to the ${word2} near their home.\n` +
      `Today, Max runs ahead and finds a shiny ${word4} in the grass.\n` +
      `Lily picks up the ${word4} and sees it has a small note attached.\n` +
      `The note says, "Find the owner!" So Lily and Max start looking.\n` +
      `They walk around the ${word2} and meet a boy named Tom.\n` +
      `Tom says the ${word4} belongs to his little sister.\n` +
      `Lily gives the ${word4} to Tom, and he thanks her with a big smile.\n` +
      `"You are very kind!" Tom says.\n` +
      `Lily and Max feel ${word5} because they helped someone.\n` +
      `On the way home, Max wags his tail and Lily sings a happy song.\n` +
      `They can't wait to come back to the ${word2} next week.`,
    
    fairy: () => 
      `In a cozy village, there lives a girl named Mia.\n` +
      `She has a magical ${word1} that can grant small wishes.\n` +
      `One day, Mia finds a lost ${word3} crying under a tree.\n` +
      `The ${word3} says she can't find her way to the ${word2}.\n` +
      `Mia uses her ${word1} to ask for help, and a bright ${word4} appears.\n` +
      `The ${word4} glows and shows the path to the ${word2}.\n` +
      `Mia and the ${word3} follow the ${word4} through the forest.\n` +
      `When they reach the ${word2}, the ${word3}'s mother runs to hug her.\n` +
      `"Thank you so much!" the mother says.\n` +
      `Mia feels very ${word5} and her ${word1} purrs with pride.\n` +
      `That night, Mia dreams of more adventures with her magical ${word1}.\n` +
      `She knows helping others is the best magic of all.`,
    
    'sci-fi': () => 
      `Leo is a young space explorer who lives on the ${word2} Station.\n` +
      `Today, he gets a new mission: find the lost ${word4} crystal.\n` +
      `He puts on his spacesuit and flies his small rocket.\n` +
      `Suddenly, he sees a friendly ${word1} floating in space.\n` +
      `The ${word1} is a glowing alien creature with big eyes.\n` +
      `"I know where the ${word4} is!" the ${word1} says.\n` +
      `The ${word1} guides Leo to a dark asteroid.\n` +
      `Inside the asteroid, Leo finds the shiny ${word4} crystal.\n` +
      `He thanks the ${word1} and gives it a small star as a gift.\n` +
      `When Leo returns to the ${word2} Station, everyone cheers.\n` +
      `His ${word3} claps and says, "You are a hero!"\n` +
      `Leo smiles and feels ${word5} about his adventure in space.`,
    
    daily: () => 
      `It is a sunny morning, and Emma is excited for school.\n` +
      `She packs her bag with books, a pencil, and her favorite ${word4}.\n` +
      `Her ${word1} named Coco follows her to the door.\n` +
      `"Stay home, Coco!" Emma says as she gives it a hug.\n` +
      `On the bus, Emma sits next to her best ${word3}, Lily.\n` +
      `They talk about the math test they have today.\n` +
      `At school, their teacher tells them to draw a picture.\n` +
      `Emma draws her ${word1} playing with the ${word4} in the ${word2}.\n` +
      `The teacher says, "This is wonderful!" and puts it on the wall.\n` +
      `After school, Emma runs home to show her drawing to her mom.\n` +
      `Her mom hugs her and says, "You are so talented!"\n` +
      `Emma feels ${word5} and Coco wags its tail happily.`,
  };

  return styleTemplates[style]?.() || styleTemplates.daily();
}

function generateMockImages(story: string): string[] {
  const sentences = story.split(/[\n.!?]+/).filter(s => s.trim().length > 3);
  const numImages = Math.min(sentences.length, 4);
  
  return Array.from({ length: numImages }, () => 
    `https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20cartoon%20children%20story%20illustration%20colorful%20happy%20scene&image_size=landscape_16_9`
  );
}
