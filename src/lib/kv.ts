import fs from 'fs';
import path from 'path';

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

const STORAGE_FILE = path.join(process.cwd(), '.tasks.json');

function loadTasks(): Record<string, Task> {
  try {
    if (fs.existsSync(STORAGE_FILE)) {
      const content = fs.readFileSync(STORAGE_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Failed to load tasks:', error);
  }
  return {};
}

function saveTasks(tasks: Record<string, Task>): void {
  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error('Failed to save tasks:', error);
  }
}

let tasks: Record<string, Task> = loadTasks();

export async function createTask(): Promise<string> {
  const id = `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  tasks[id] = {
    id,
    status: 'pending',
    createdAt: Date.now(),
  };
  saveTasks(tasks);
  console.log(`[KV] Created task: ${id}, saved to: ${STORAGE_FILE}`);
  return id;
}

export async function getTask(id: string): Promise<Task | undefined> {
  // 每次获取前重新加载，确保热更新后数据不丢失
  tasks = loadTasks();
  const task = tasks[id];
  if (task) {
    console.log(`[KV] Found task: ${id}, status: ${task.status}`);
  } else {
    console.log(`[KV] Task not found: ${id}, available tasks: ${Object.keys(tasks).join(', ')}`);
  }
  return task;
}

export async function updateTask(id: string, updates: Partial<Task>): Promise<void> {
  const task = tasks[id];
  if (task) {
    Object.assign(task, updates);
    saveTasks(tasks);
    console.log(`[KV] Updated task: ${id}, updates: ${JSON.stringify(updates)}`);
  } else {
    console.log(`[KV] Cannot update task: ${id} - task not found`);
  }
}

export async function deleteTask(id: string): Promise<void> {
  delete tasks[id];
  saveTasks(tasks);
}

// 清理过期任务（超过1小时）
export async function cleanupOldTasks(): Promise<void> {
  const now = Date.now();
  for (const id of Object.keys(tasks)) {
    if (now - tasks[id].createdAt > 3600000) {
      delete tasks[id];
    }
  }
  saveTasks(tasks);
}
