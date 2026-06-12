import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Share2, Heart, BookOpen, ChevronLeft, ChevronRight, Download, FileText, FileImage } from 'lucide-react';
import { Story } from '@/types';
import { defaultWordList, loadWordList, Word } from '@/data/ketWords';

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
}

export default function StoryViewer({ story, onClose }: StoryViewerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showWordCard, setShowWordCard] = useState(false);
  const [wordList, setWordList] = useState<Word[]>(defaultWordList);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const fetchWords = async () => {
      const words = await loadWordList();
      setWordList(words);
    };
    fetchWords();
  }, []);

  const sentences = story.content.split(/[.!?]+/).filter(s => s.trim().length > 5);
  
  const wordCards = story.words.map(word => {
    const found = wordList.find(w => w.word.toLowerCase() === word.toLowerCase());
    return found || { word, phonetic: '', meaning: '', partOfSpeech: '', example: '' };
  });

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {});
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'KET绘本故事',
        text: story.content,
      });
    } else {
      alert('分享功能暂不可用');
    }
  };

  const highlightWords = (text: string) => {
    const regex = new RegExp(`\\b(${story.words.map(w => w.toLowerCase()).join('|')})\\b`, 'gi');
    return text.replace(regex, (match) => {
      return `<span style="color: red; font-weight: bold;">${match}</span>`;
    });
  };

  const downloadWord = () => {
    const wordPattern = new RegExp('\\b(' + story.words.map(w => w.toLowerCase()).join('|') + ')\\b', 'gi');
    
    const sentencesWithImages = sentences.map((sentence, index) => {
      const highlightedSentence = sentence.replace(wordPattern, (match) => `<span class="highlight">${match}</span>`);
      const imageUrl = story.images[index] || story.images[0];
      return `
<div style="margin-bottom: 30px; text-align: center;">
<p style="font-size: 22px; line-height: 1.8; text-align: left; margin-bottom: 15px;">${highlightedSentence}.</p>
<img src="${imageUrl}" alt="故事场景插图 - 描绘句子内容" style="max-width: 65%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
</div>
`;
    }).join('');
    
    const wordCardsHtml = wordCards.map(card => `
<div class="word-card">
<div class="word-title">${card.word}</div>
<div class="word-phonetic">${card.phonetic} · ${card.partOfSpeech}</div>
<div class="word-meaning">${card.meaning}</div>
${card.example ? `<div class="example">例句：${card.example}</div>` : ''}
</div>
`).join('');

    let content = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>KET绘本故事</title>
<style>
body { font-family: 'Microsoft YaHei', sans-serif; padding: 30px; max-width: 800px; margin: 0 auto; }
h1 { text-align: center; font-size: 32px; color: #1a73e8; margin-bottom: 30px; }
h2 { font-size: 24px; color: #333; margin-top: 35px; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
.highlight { color: red; font-weight: bold; font-size: 24px; }
.word-card { border: 1px solid #ddd; padding: 18px; margin: 12px 0; border-radius: 10px; background: #f9f9f9; }
.word-title { font-size: 22px; font-weight: bold; color: #1a73e8; }
.word-phonetic { color: #666; font-size: 18px; }
.word-meaning { margin-top: 8px; font-size: 18px; }
.example { margin-top: 8px; font-style: italic; color: #888; font-size: 16px; }
</style>
</head>
<body>
<h1>KET绘本故事</h1>
<h2>故事内容</h2>
${sentencesWithImages}
<h2>今日单词</h2>
${wordCardsHtml}
</body>
</html>`;

    const blob = new Blob([content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'KET绘本_' + story.id + '.doc';
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    const wordPattern = new RegExp('\\b(' + story.words.map(w => w.toLowerCase()).join('|') + ')\\b', 'gi');
    
    const sentencesWithImages = sentences.map((sentence, index) => {
      const highlightedSentence = sentence.replace(wordPattern, (match) => `<span class="highlight">${match}</span>`);
      const imageUrl = story.images[index] || story.images[0];
      return `
<div style="margin-bottom: 30px; text-align: center;">
<p style="font-size: 22px; line-height: 1.8; text-align: left; margin-bottom: 15px;">${highlightedSentence}.</p>
<img src="${imageUrl}" alt="故事场景插图 - 描绘句子内容" style="max-width: 65%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
</div>
`;
    }).join('');
    
    const wordCardsHtml = wordCards.map(card => `
<div class="word-card">
<div class="word-title">${card.word}</div>
<div class="word-phonetic">${card.phonetic} · ${card.partOfSpeech}</div>
<div class="word-meaning">${card.meaning}</div>
${card.example ? `<div class="example">例句：${card.example}</div>` : ''}
</div>
`).join('');

    const content = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>KET绘本故事</title>
<style>
body { font-family: 'Microsoft YaHei', Arial, sans-serif; padding: 30px; max-width: 800px; margin: 0 auto; }
h1 { text-align: center; font-size: 32px; color: #1a73e8; margin-bottom: 30px; }
h2 { font-size: 24px; color: #333; margin-top: 35px; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
.highlight { color: red; font-weight: bold; font-size: 24px; }
.word-card { border: 1px solid #ddd; padding: 18px; margin: 12px 0; border-radius: 10px; background: #f9f9f9; }
.word-title { font-size: 22px; font-weight: bold; color: #1a73e8; }
.word-phonetic { color: #666; font-size: 18px; }
.word-meaning { margin-top: 8px; font-size: 18px; }
.example { margin-top: 8px; font-style: italic; color: #888; font-size: 16px; }
</style>
</head>
<body>
<h1>KET绘本故事</h1>
<h2>故事内容</h2>
${sentencesWithImages}
<h2>今日单词</h2>
${wordCardsHtml}
</body>
</html>`;

    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'KET绘本_' + story.id + '.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={onClose}
          className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-white font-semibold">我的绘本故事</h2>
        <div className="flex gap-2">
          <button
            onClick={downloadWord}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            title="下载Word"
          >
            <FileText className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={downloadPDF}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            title="下载PDF"
          >
            <FileImage className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {sentences.map((sentence, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              {story.images[index] && (
                <img
                  src={story.images[index]}
                  alt={`插图 ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <p 
                className="text-white text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: highlightWords(sentence) + '.' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>
          
          <button
            onClick={() => setCurrentImageIndex(Math.min(story.images.length - 1, currentImageIndex + 1))}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
          
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isLiked ? 'bg-red-500' : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'text-white fill-white' : 'text-white'}`} />
          </button>
          
          <button
            onClick={handleShare}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <Share2 className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={() => setShowWordCard(!showWordCard)}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <BookOpen className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {showWordCard && (
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-64 overflow-y-auto">
          <h3 className="font-semibold text-gray-800 mb-4">今日单词</h3>
          <div className="space-y-4">
            {wordCards.map((wordCard, index) => (
              <div key={index} className="border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-red-600">{wordCard.word}</span>
                  <span className="text-sm text-gray-500">{wordCard.phonetic}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {wordCard.partOfSpeech}
                  </span>
                </div>
                <p className="text-gray-700 mt-1">{wordCard.meaning}</p>
                {wordCard.example && (
                  <p className="text-sm text-gray-500 mt-1 italic">
                    例句：{wordCard.example}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <audio ref={audioRef} src={story.audioUrl} />
    </div>
  );
}
