import { useState, useEffect } from 'react';
import { Plus, X, Sparkles, Loader2 } from 'lucide-react';
import { defaultWordList, storyStyles, loadWordList, Word } from '@/data/ketWords';

interface WordInputProps {
  selectedWords: string[];
  onWordsChange: (words: string[]) => void;
  selectedStyle: string;
  onStyleChange: (style: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const WORD_COUNTS = [5, 10, 15, 20, 25, 30];

export default function WordInput({
  selectedWords,
  onWordsChange,
  selectedStyle,
  onStyleChange,
  onGenerate,
  isGenerating,
}: WordInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [showWordList, setShowWordList] = useState(false);
  const [wordList, setWordList] = useState<Word[]>(defaultWordList);
  const [isLoadingWords, setIsLoadingWords] = useState(false);
  const [selectedCount, setSelectedCount] = useState(5);

  useEffect(() => {
    const fetchWords = async () => {
      setIsLoadingWords(true);
      const words = await loadWordList();
      setWordList(words);
      setIsLoadingWords(false);
    };
    fetchWords();
  }, []);

  useEffect(() => {
    if (wordList.length > 0) {
      const availableWords = wordList
        .filter(w => !selectedWords.includes(w.word))
        .map(w => w.word);
      
      const shuffled = [...availableWords].sort(() => Math.random() - 0.5);
      const needed = selectedCount - selectedWords.length;
      
      if (needed > 0) {
        const toAdd = shuffled.slice(0, Math.min(needed, shuffled.length));
        if (toAdd.length > 0) {
          onWordsChange([...selectedWords, ...toAdd]);
        }
      } else if (needed < 0) {
        onWordsChange(selectedWords.slice(0, selectedCount));
      }
    }
  }, [selectedCount, wordList]);

  const handleAddWord = (word: string) => {
    if (!selectedWords.includes(word) && selectedWords.length < selectedCount) {
      onWordsChange([...selectedWords, word]);
    }
    setInputValue('');
    setShowWordList(false);
  };

  const handleRemoveWord = (word: string) => {
    const newWords = selectedWords.filter(w => w !== word);
    onWordsChange(newWords);
    
    if (newWords.length < selectedCount && wordList.length > 0) {
      const availableWords = wordList
        .filter(w => !newWords.includes(w.word))
        .map(w => w.word);
      
      const shuffled = [...availableWords].sort(() => Math.random() - 0.5);
      const toAdd = shuffled.slice(0, selectedCount - newWords.length);
      
      if (toAdd.length > 0) {
        onWordsChange([...newWords, ...toAdd]);
      }
    }
  };

  const handleManualInput = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !selectedWords.includes(trimmed) && selectedWords.length < selectedCount) {
      onWordsChange([...selectedWords, trimmed]);
      setInputValue('');
    }
  };

  const suggestedWords = wordList
    .filter(w => !selectedWords.includes(w.word))
    .slice(0, 8);

  return (
    <div className="card">
      <h2 className="text-lg font-semibold text-card-foreground mb-4">学习设置</h2>
      
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-2">选择今日学习单词数量：</p>
        <div className="flex flex-wrap gap-2">
          {WORD_COUNTS.map((count) => (
            <button
              key={count}
              onClick={() => setSelectedCount(count)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCount === count
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {count}个
            </button>
          ))}
        </div>
      </div>

      {selectedWords.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedWords.map((word) => (
            <span
              key={word}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm"
            >
              {word}
              <button
                onClick={() => handleRemoveWord(word)}
                className="hover:text-primary transition-colors"
                aria-label={`移除单词 ${word}`}
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setShowWordList(true)}
            onKeyPress={(e) => e.key === 'Enter' && handleManualInput()}
            placeholder="添加单词..."
            className="input-field pr-12"
            disabled={isGenerating || selectedWords.length >= selectedCount}
          />
          <button
            onClick={handleManualInput}
            disabled={isGenerating || !inputValue.trim() || selectedWords.length >= selectedCount}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            aria-label="添加单词"
          >
            <Plus className="w-4 h-4 text-white" />
          </button>
        </div>
        
        {showWordList && (
          <div className="mt-2 bg-card border-2 border-border rounded-xl p-3 max-h-48 overflow-y-auto">
            <p className="text-sm text-muted-foreground mb-2">推荐单词：</p>
            {isLoadingWords ? (
              <div className="flex justify-center items-center py-4">
                <Loader2 className="w-5 h-5 text-primary animate-spin" />
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {suggestedWords.map((word) => (
                  <button
                    key={word.word}
                    onClick={() => handleAddWord(word.word)}
                    disabled={selectedWords.length >= selectedCount}
                    className="px-3 py-1.5 bg-secondary hover:bg-accent disabled:bg-secondary/50 text-secondary-foreground hover:text-accent-foreground disabled:text-muted-foreground rounded-full text-sm transition-colors"
                    aria-label={`添加单词 ${word.word}`}
                  >
                    {word.word}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-2">选择故事风格：</p>
        <div className="flex flex-wrap gap-2">
          {storyStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => onStyleChange(style.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedStyle === style.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onGenerate}
        disabled={isGenerating || selectedWords.length === 0}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {isGenerating ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            生成中...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            生成绘本故事
          </>
        )}
      </button>
    </div>
  );
}
