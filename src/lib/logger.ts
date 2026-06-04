export interface LogEntry {
  timestamp: Date;
  provider: string;
  operation: string;
  status: 'start' | 'success' | 'error';
  duration?: number;
  statusCode?: number;
  errorMessage?: string;
}

export class AILogger {
  private static logs: LogEntry[] = [];

  static start(provider: string, operation: string): number {
    const entry: LogEntry = {
      timestamp: new Date(),
      provider,
      operation,
      status: 'start',
    };
    this.logs.push(entry);
    console.log(`[${provider}] ${operation} - START`);
    return this.logs.length - 1;
  }

  static success(index: number, duration: number, statusCode?: number): void {
    const entry = this.logs[index];
    if (entry) {
      entry.status = 'success';
      entry.duration = duration;
      entry.statusCode = statusCode;
    }
    console.log(`[${entry.provider}] ${entry.operation} - SUCCESS (${duration}ms, status: ${statusCode})`);
  }

  static error(index: number, error: Error, statusCode?: number): void {
    const entry = this.logs[index];
    if (entry) {
      entry.status = 'error';
      entry.statusCode = statusCode;
      entry.errorMessage = error.message;
    }
    console.error(`[${entry.provider}] ${entry.operation} - ERROR (${statusCode}): ${error.message}`);
  }

  static getLogs(): LogEntry[] {
    return this.logs;
  }

  static clearLogs(): void {
    this.logs = [];
  }
}
