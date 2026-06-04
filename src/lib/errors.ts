export enum ErrorCode {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  RATE_LIMITED = 429,
  SERVER_ERROR = 500,
  TIMEOUT = 504,
  BAD_REQUEST = 400,
  UNKNOWN = 999,
}

export interface AIErrorInfo {
  code: ErrorCode;
  message: string;
  originalError?: unknown;
}

export class AIError extends Error {
  public readonly code: ErrorCode;
  public readonly originalError?: unknown;

  constructor(info: AIErrorInfo) {
    super(info.message);
    this.name = 'AIError';
    this.code = info.code;
    this.originalError = info.originalError;
  }

  static fromStatusCode(status: number, originalError?: unknown): AIError {
    const errorMap: Record<number, { code: ErrorCode; message: string }> = {
      401: { code: ErrorCode.UNAUTHORIZED, message: '未授权：API密钥无效或已过期' },
      403: { code: ErrorCode.FORBIDDEN, message: '禁止访问：权限不足' },
      429: { code: ErrorCode.RATE_LIMITED, message: '请求过于频繁：请稍后再试' },
      500: { code: ErrorCode.SERVER_ERROR, message: '服务器错误：请稍后再试' },
      504: { code: ErrorCode.TIMEOUT, message: '请求超时：服务器响应时间过长' },
      400: { code: ErrorCode.BAD_REQUEST, message: '请求参数错误' },
    };

    const info = errorMap[status] || { code: ErrorCode.UNKNOWN, message: '未知错误' };
    return new AIError({ ...info, originalError });
  }

  static timeout(originalError?: unknown): AIError {
    return new AIError({
      code: ErrorCode.TIMEOUT,
      message: '请求超时：服务器响应时间过长',
      originalError,
    });
  }

  static unknown(originalError?: unknown): AIError {
    return new AIError({
      code: ErrorCode.UNKNOWN,
      message: '未知错误：请稍后再试',
      originalError,
    });
  }
}
