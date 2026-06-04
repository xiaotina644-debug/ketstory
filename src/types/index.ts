export interface Story {
  id: string;
  words: string[];
  content: string;
  images: string[];
  audioUrl: string;
  style: string;
  createdAt: Date;
}

export interface WordCard {
  word: string;
  phonetic: string;
  meaning: string;
  partOfSpeech: string;
  example: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface GenerationProgress {
  step: 'story' | 'images' | 'audio';
  status: 'pending' | 'generating' | 'completed' | 'error';
  message: string;
}

export interface UserProgress {
  totalWords: number;
  totalStories: number;
  learningDays: number;
  streak: number;
  vocabularyTotal: number;
  learnedWords: number;
}
