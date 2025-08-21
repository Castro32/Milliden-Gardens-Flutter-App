import { Response } from 'express';

export const apiResponse = (
  res: Response,
  statusCode: number,
  success: boolean,
  data: any,
  message: string,
  error?: any
) => {
  return res.status(statusCode).json({
    success,
    data,
    message,
    error: error ? (error.message || error) : undefined
  });
};