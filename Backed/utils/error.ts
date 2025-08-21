export class AppError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ResponseUtil {
  static success(res: any, statusCode: number, data: any = null, message: string = 'Success') {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }

  static error(res: any, statusCode: number, message: string) {
    return res.status(statusCode).json({
      success: false,
      message
    });
  }
}