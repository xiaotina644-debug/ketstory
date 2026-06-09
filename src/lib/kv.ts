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

// 使用内存存储任务 - 在 Serverless 环境中文件系统是只读的
let tasks: Record<string, Task> = {};

// 生产环境中使用内存存储
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export async function createTask(): Promise<string> {
  const id = `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  tasks[id] = {
    id,
    status: 'pending',
    createdAt: Date.now(),
  };
  console.log(`[KV] Created task: ${id}, storage: ${IS_PRODUCTION ? 'memory' : 'file'}`);
  return id;
}

export async function getTask(id: string): Promise<Task | undefined> {
  const task = tasks[id];
  if (task) {
    console.log(`[KV] Found task: ${id}, status: ${task.status}`);
  } else {
    console.log(`[KV] Task not found: ${id}, available tasks: ${Object.keys(tasks).length}`);
  }
  return task;
}

export async function updateTask(id: string, updates: Partial<Task>): Promise<void> {
  const task = tasks[id];
  if (task) {
    Object.assign(task, updates);
    console.log(`[KV] Updated task: ${id}, updates: ${JSON.stringify(updates)}`);
  } else {
    console.log(`[KV] Cannot update task: ${id} - task not found`);
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

// 定期清理过期任务
setInterval(cleanupOldTasks, 60000); // 每分钟清理一次
