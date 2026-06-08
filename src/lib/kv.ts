export interface Task {
  id: string;
  status: 'pending' | 'generating' | 'completed' | 'error';
  data?: {
    content: string;
    images: string[];
    audioUrl: string;
    words: string[];
    style: string;
  };
  error?: string;
  progress?: number;
  createdAt: number;
}

let tasks: Record<string, Task> = {};

export async function createTask(): Promise<string> {
  const id = `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  tasks[id] = {
    id,
    status: 'pending',
    createdAt: Date.now(),
  };
  return id;
}

export async function getTask(id: string): Promise<Task | undefined> {
  return tasks[id];
}

export async function updateTask(id: string, updates: Partial<Task>): Promise<void> {
  const task = tasks[id];
  if (task) {
    Object.assign(task, updates);
  }
}

export async function deleteTask(id: string): Promise<void> {
  delete tasks[id];
}

// 清理过期任务（超过1小时）
export async function cleanupOldTasks(): Promise<void> {
  const now = Date.now();
  for (const id of Object.keys(tasks)) {
    if (now - tasks[id].createdAt > 3600000) {
      delete tasks[id];
    }
  }
}
