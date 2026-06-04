import { BookOpen, Calendar, Trash2 } from 'lucide-react';
import { Story } from '@/types';

interface StoryLibraryProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
  onDeleteStory: (storyId: string) => void;
}

export default function StoryLibrary({ stories, onSelectStory, onDeleteStory }: StoryLibraryProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStyleName = (style: string) => {
    const styles: Record<string, string> = {
      adventure: '冒险',
      fairy: '童话',
      'sci-fi': '科幻',
      daily: '日常',
    };
    return styles[style] || style;
  };

  if (stories.length === 0) {
    return (
      <div className="card text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-gray-500">还没有生成过故事</p>
        <p className="text-gray-400 text-sm mt-1">点击上方按钮开始创作吧！</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">我的故事库</h2>
        <span className="text-sm text-gray-500">{stories.length} 个故事</span>
      </div>
      
      <div className="space-y-3">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex items-center gap-4 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer group"
            onClick={() => onSelectStory(story)}
          >
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={story.images[0]}
                alt="故事封面"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-800 truncate">
                  {story.words.join(', ')}
                </span>
                <span className="text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full">
                  {getStyleName(story.style)}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-400">
                  {formatDate(story.createdAt)}
                </span>
              </div>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDeleteStory(story.id);
              }}
              className="opacity-0 group-hover:opacity-100 w-8 h-8 hover:bg-red-100 rounded-full flex items-center justify-center transition-all"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
