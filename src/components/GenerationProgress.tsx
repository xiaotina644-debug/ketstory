import { BookOpen, Image, Volume2, CheckCircle, Loader2 } from 'lucide-react';
import { GenerationProgress as ProgressType } from '@/types';

interface GenerationProgressProps {
  progress: ProgressType;
}

export default function GenerationProgress({ progress }: GenerationProgressProps) {
  const steps = [
    { key: 'story', label: '故事', icon: BookOpen },
    { key: 'images', label: '插图', icon: Image },
    { key: 'audio', label: '语音', icon: Volume2 },
  ];

  return (
    <div className="card">
      <div className="flex flex-col items-center py-8">
        <div className="relative w-full max-w-xs mb-8">
          <div className="absolute top-4 left-0 right-0 h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full transition-all duration-500"
              style={{
                width: progress.step === 'story' 
                  ? progress.status === 'completed' ? '33%' : '15%'
                  : progress.step === 'images'
                  ? progress.status === 'completed' ? '66%' : '50%'
                  : progress.status === 'completed' ? '100%' : '83%'
              }}
            />
          </div>
          
          <div className="flex justify-between">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = progress.step === step.key;
              const isCompleted = steps.indexOf(step) < steps.findIndex(s => s.key === progress.step) || 
                                (steps.indexOf(step) === steps.findIndex(s => s.key === progress.step) && progress.status === 'completed');
              
              return (
                <div key={step.key} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? 'bg-green-500 text-white'
                        : isActive
                        ? 'bg-primary-500 text-white animate-pulse'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : isActive && progress.status === 'generating' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`mt-2 text-sm ${
                    isCompleted ? 'text-green-600' : isActive ? 'text-primary-600' : 'text-gray-400'
                  }`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-gray-800 mb-2">{progress.message}</p>
          {progress.status === 'error' && (
            <p className="text-red-500 text-sm">生成失败，请稍后再试</p>
          )}
        </div>

        <div className="mt-8 flex gap-3">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = progress.step === step.key;
            const isCompleted = steps.indexOf(step) < steps.findIndex(s => s.key === progress.step) || 
                              (steps.indexOf(step) === steps.findIndex(s => s.key === progress.step) && progress.status === 'completed');
            
            return (
              <div
                key={step.key}
                className={`px-4 py-2 rounded-xl text-sm transition-all ${
                  isCompleted
                    ? 'bg-green-100 text-green-700'
                    : isActive
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {step.label}
                  {isCompleted && <CheckCircle className="w-4 h-4" />}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
