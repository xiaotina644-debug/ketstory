'use client';

import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import WordInput from '@/components/WordInput';
import GenerationProgress from '@/components/GenerationProgress';
import StoryViewer from '@/components/StoryViewer';
import StoryLibrary from '@/components/StoryLibrary';
import ProgressStats from '@/components/ProgressStats';
import { generateStoryBook } from '@/lib/ai';
import { Story, GenerationProgress as ProgressType, UserProgress } from '@/types';

export default function Home() {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState('adventure');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState<ProgressType>({
    step: 'story',
    status: 'pending',
    message: '准备开始创作',
  });
  const [stories, setStories] = useState<Story[]>([]);
  const [currentStory, setCurrentStory] = useState<Story | null>(null);

  const userProgress: UserProgress = {
    totalWords: stories.reduce((acc, story) => acc + story.words.length, 0),
    totalStories: stories.length,
    learningDays: 7,
    streak: 5,
    vocabularyTotal: 1500,
    learnedWords: stories.reduce((acc, story) => acc + story.words.length, 0),
  };

  const handleGenerate = useCallback(async () => {
    if (selectedWords.length === 0) return;
    
    setIsGenerating(true);
    setGenerationProgress({
      step: 'story',
      status: 'pending',
      message: '准备开始创作',
    });

    try {
      const story = await generateStoryBook(
        selectedWords,
        selectedStyle,
        (progress) => {
          setGenerationProgress(progress);
        }
      );
      
      setStories((prev) => [story, ...prev]);
      setCurrentStory(story);
    } catch (error) {
      setGenerationProgress({
        step: 'story',
        status: 'error',
        message: '生成失败，请稍后再试',
      });
    } finally {
      setIsGenerating(false);
    }
  }, [selectedWords, selectedStyle]);

  const handleDeleteStory = useCallback((storyId: string) => {
    setStories((prev) => prev.filter((story) => story.id !== storyId));
  }, []);

  const handleCloseViewer = useCallback(() => {
    setCurrentStory(null);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <ProgressStats progress={userProgress} />
        
        <WordInput
          selectedWords={selectedWords}
          onWordsChange={setSelectedWords}
          selectedStyle={selectedStyle}
          onStyleChange={setSelectedStyle}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />
        
        {isGenerating && (
          <GenerationProgress progress={generationProgress} />
        )}
        
        <StoryLibrary
          stories={stories}
          onSelectStory={setCurrentStory}
          onDeleteStory={handleDeleteStory}
        />
      </main>

      {currentStory && (
        <StoryViewer story={currentStory} onClose={handleCloseViewer} />
      )}
    </div>
  );
}
