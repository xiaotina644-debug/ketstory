import { AIProvider } from '../providers/aiProvider';
import { createVolcEngineProvider } from '../providers/volcEngineProvider';
import { AIError } from '../errors';

let provider: AIProvider | null = null;

const getProvider = (): AIProvider => {
  if (!provider) {
    provider = createVolcEngineProvider();
  }
  return provider;
};

export interface StoryGenerationRequest {
  words: string[];
  style: string;
}

export interface ImageGenerationRequest {
  prompt: string;
}

export interface AudioGenerationRequest {
  text: string;
}

export interface StoryGenerationResponse {
  content: string;
}

export interface ImageGenerationResponse {
  url: string;
}

export interface AudioGenerationResponse {
  url: string;
}

export class AIService {
  private provider: AIProvider;

  constructor() {
    this.provider = getProvider();
  }

  async generateStory(request: StoryGenerationRequest): Promise<StoryGenerationResponse> {
    const { words, style } = request;

    const stylePrompt = {
      adventure: 'exciting adventure story with brave characters and unexpected twists',
      fairy: 'magical fairy tale with princesses, wizards, and talking animals',
      'sci-fi': 'futuristic science fiction story with spaceships and robots',
      daily: 'warm everyday life story with family and friends',
    }[style] || 'fun story';

    const prompt = `
      身份：资深KET教研+少儿英文故事创作者，专门为8岁国内小学生创作KET单词专项英文绘本故事。
      目标：通过有趣的故事帮助学生学习和巩固KET核心词汇。
      
      【词汇限制】
      1. 故事中所有词汇必须来自剑桥KET核心词汇表，绝对禁止使用超纲词或难词；
      2. 只使用最基础、最常用的英语单词，如：cat, dog, book, happy, play等；
      3. 目标单词${words.join(', ')}必须自然融入故事，每个单词出现2-3次；
      4. 避免使用任何复杂形容词或副词，如beautiful可以用nice代替。
      
      【文本要求】
      1. 单篇故事120-150词，适合8岁儿童阅读速度；
      2. 使用简单句，每句不超过8个单词；
      3. 时态聚焦KET四大时态：一般现在时、现在进行时、一般将来时、一般过去时；
      4. 句子结构：主语 + 谓语 + 宾语，避免复杂从句。
      
      【内容要求】
      1. 故事主题从KET官方话题库选择：饮食、动物、校园、出行、购物、节日、运动；
      2. 故事要有完整情节：开头介绍人物和场景，中间有小冲突或事件，结尾有圆满解决；
      3. 内容童趣化，贴近小学生生活，角色可以是小朋友、小动物；
      4. 故事积极向上，传递正能量。
      
      【故事风格】${stylePrompt}
      
      请直接输出英文故事，不要添加任何解释或说明。
    `.trim();

    try {
      const content = await this.provider.generateStory(prompt);
      return { content };
    } catch (error) {
      if (error instanceof AIError) {
        throw error;
      }
      throw AIError.unknown(error);
    }
  }

  async generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResponse> {
    try {
      const url = await this.provider.generateImage(request.prompt);
      return { url };
    } catch (error) {
      if (error instanceof AIError) {
        throw error;
      }
      throw AIError.unknown(error);
    }
  }

  async generateImages(prompts: string[]): Promise<ImageGenerationResponse[]> {
    const results: ImageGenerationResponse[] = [];
    for (const prompt of prompts) {
      const result = await this.generateImage({ prompt });
      results.push(result);
    }
    return results;
  }

  async generateAudio(request: AudioGenerationRequest): Promise<AudioGenerationResponse> {
    try {
      const url = await this.provider.generateAudio(request.text);
      return { url };
    } catch (error) {
      if (error instanceof AIError) {
        throw error;
      }
      throw AIError.unknown(error);
    }
  }
}

export const createAIService = (): AIService => {
  return new AIService();
};
