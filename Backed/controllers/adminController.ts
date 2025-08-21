import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AdminAuthService } from '../services/adminAuthService';
import { ResponseUtil, AppError } from '../utils/error';
import { loginSchema, registerAdminSchema, changePasswordSchema } from '../utils/validation';

export class AdminController {
  /**
   * Admin login
   */
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const validatedData = loginSchema.parse(req.body);
      const authResult = await AdminAuthService.login(validatedData);

      return ResponseUtil.success(res, 200, authResult, 'Login successful');
    } catch (error) {
      if (error instanceof ZodError) {
        return ResponseUtil.error(res, 400, error.errors[0].message);
      }
      if (error instanceof AppError) {
        return ResponseUtil.error(res, error.statusCode, error.message);
      }
      console.error('Unexpected login error:', error);
      return ResponseUtil.error(res, 500, 'An unexpected error occurred during login');
    }
  }

  /**
   * Create new admin (protected - only admins can create other admins)
   */
  static async createAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const validatedData = registerAdminSchema.parse(req.body);
      const newAdmin = await AdminAuthService.createAdmin(validatedData);

      return ResponseUtil.success(res, 201, newAdmin, 'Admin created successfully');
    } catch (error) {
      if (error instanceof ZodError) {
        return ResponseUtil.error(res, 400, error.errors[0].message);
      }
      if (error instanceof AppError) {
        return ResponseUtil.error(res, error.statusCode, error.message);
      }
      console.error('Unexpected admin creation error:', error);
      return ResponseUtil.error(res, 500, 'An unexpected error occurred during admin creation');
    }
  }

  /**
   * Change admin password
   */
  static async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const validatedData = changePasswordSchema.parse(req.body);
      const adminId = req.admin?.id;

      if (!adminId) {
        return ResponseUtil.error(res, 401, 'Unauthorized');
      }

      const result = await AdminAuthService.changePassword(
        adminId,
        validatedData.currentPassword,
        validatedData.newPassword
      );

      return ResponseUtil.success(res, 200, null, result.message);
    } catch (error) {
      if (error instanceof ZodError) {
        return ResponseUtil.error(res, 400, error.errors[0].message);
      }
      if (error instanceof AppError) {
        return ResponseUtil.error(res, error.statusCode, error.message);
      }
      console.error('Unexpected password change error:', error);
      return ResponseUtil.error(res, 500, 'An unexpected error occurred during password change');
    }
  }

  /**
   * Get admin profile
   */
  static async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const adminId = req.admin?.id;

      if (!adminId) {
        return ResponseUtil.error(res, 401, 'Unauthorized');
      }

      const adminProfile = await AdminAuthService.getAdminProfile(adminId);

      return ResponseUtil.success(res, 200, adminProfile, 'Admin profile retrieved successfully');
    } catch (error) {
      if (error instanceof AppError) {
        return ResponseUtil.error(res, error.statusCode, error.message);
      }
      console.error('Unexpected error retrieving profile:', error);
      return ResponseUtil.error(res, 500, 'An unexpected error occurred retrieving profile');
    }
  }
}

export default AdminController;