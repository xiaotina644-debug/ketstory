import { AIProvider, ChatMessage, ChatCompletionResponse, ImageGenerationResponse } from './aiProvider';
import { AIError } from '../errors';
import { AILogger } from '../logger';

export class VolcEngineProvider implements AIProvider {
  private readonly chatUrl: string;
  private readonly imageUrl: string;
  private readonly chatToken: string;
  private readonly imageToken: string;
  private readonly chatModel: string;
  private readonly imageModel: string;

  constructor() {
    this.chatUrl = `${process.env.VOLC_API_BASE_URL}/api/v3/chat/completions`;
    this.imageUrl = `${process.env.VOLC_API_BASE_URL}/api/v3/images/generations`;
    this.chatToken = process.env.VOLC_ACCESS_TOKEN_CHAT || '';
    this.imageToken = process.env.VOLC_ACCESS_TOKEN_IMAGE || '';
    this.chatModel = process.env.VOLC_MODEL_CHAT || 'doubao-seed-2-0-code-preview-260215';
    this.imageModel = process.env.VOLC_MODEL_IMAGE || 'doubao-seedream-4-5-251128';

    if (!this.chatToken || !this.imageToken) {
      throw new Error('VOLC_ACCESS_TOKEN_CHAT and VOLC_ACCESS_TOKEN_IMAGE must be set in environment variables');
    }
  }

  private async fetchWithTimeout(url: string, options: RequestInit, timeout: number): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      return response;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async generateStory(prompt: string): Promise<string> {
    const logIndex = AILogger.start('VolcEngine', 'generateStory');
    const startTime = Date.now();

    try {
      const messages: ChatMessage[] = [
        {
          role: 'user',
          content: prompt,
        },
      ];

      const response = await this.fetchWithTimeout(this.chatUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.chatToken}`,
        },
        body: JSON.stringify({
          model: this.chatModel,
          messages,
        }),
      }, 60000);

      const duration = Date.now() - startTime;

      if (!response.ok) {
        AILogger.error(logIndex, new Error(`HTTP error ${response.status}`), response.status);
        throw AIError.fromStatusCode(response.status);
      }

      const data: ChatCompletionResponse = await response.json();
      AILogger.success(logIndex, duration, response.status);

      return data.choices[0]?.message?.content || '';
    } catch (error) {
      const duration = Date.now() - startTime;
      if (error instanceof AIError) {
        AILogger.error(logIndex, error, error.code);
        throw error;
      }
      if (error instanceof Error && (error.message.includes('abort') || error.name === 'AbortError')) {
        const timeoutError = AIError.timeout(error);
        AILogger.error(logIndex, timeoutError, 504);
        throw timeoutError;
      }
      const unknownError = AIError.unknown(error);
      AILogger.error(logIndex, unknownError);
      throw unknownError;
    }
  }

  async generateImage(prompt: string): Promise<string> {
    const logIndex = AILogger.start('VolcEngine', 'generateImage');
    const startTime = Date.now();

    try {
      const response = await this.fetchWithTimeout(this.imageUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.imageToken}`,
        },
        body: JSON.stringify({
          model: this.imageModel,
          prompt: `cute cartoon children story illustration, colorful, happy scene, ${prompt}`,
          sequential_image_generation: 'disabled',
          response_format: 'url',
          size: '2K',
          stream: false,
          watermark: true,
        }),
      }, 120000);

      const duration = Date.now() - startTime;

      if (!response.ok) {
        AILogger.error(logIndex, new Error(`HTTP error ${response.status}`), response.status);
        throw AIError.fromStatusCode(response.status);
      }

      const data: ImageGenerationResponse = await response.json();
      AILogger.success(logIndex, duration, response.status);

      return data.data[0]?.url || '';
    } catch (error) {
      const duration = Date.now() - startTime;
      if (error instanceof AIError) {
        AILogger.error(logIndex, error, error.code);
        throw error;
      }
      if (error instanceof Error && (error.message.includes('abort') || error.name === 'AbortError')) {
        const timeoutError = AIError.timeout(error);
        AILogger.error(logIndex, timeoutError, 504);
        throw timeoutError;
      }
      const unknownError = AIError.unknown(error);
      AILogger.error(logIndex, unknownError);
      throw unknownError;
    }
  }

  async generateAudio(text: string): Promise<string> {
    const logIndex = AILogger.start('VolcEngine', 'generateAudio');
    const startTime = Date.now();

    try {
      await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));
      const duration = Date.now() - startTime;
      AILogger.success(logIndex, duration, 200);
      return 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    } catch (error) {
      const duration = Date.now() - startTime;
      const unknownError = AIError.unknown(error);
      AILogger.error(logIndex, unknownError);
      throw unknownError;
    }
  }
}

export const createVolcEngineProvider = (): AIProvider => {
  return new VolcEngineProvider();
};
