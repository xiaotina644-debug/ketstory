export interface AIProvider {
  generateStory(prompt: string): Promise<string>;
  generateImage(prompt: string): Promise<string>;
  generateAudio(text: string): Promise<string>;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string | Array<{ type: string; text?: string; image_url?: { url: string } }>;
}

export interface ChatCompletionResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export interface ImageGenerationResponse {
  data: Array<{
    url: string;
  }>;
}
