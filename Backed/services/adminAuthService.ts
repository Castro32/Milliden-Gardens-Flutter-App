import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AdminUser, UserRole } from '../models/adminModel';
import { AppError } from '../utils/error';
import { LoginDto, RegisterAdminDto } from '../utils/validation';
import config from '../config/config';

export class AdminAuthService {
  /**
   * Admin login
   */
  static async login(loginData: LoginDto) {
    try {
      // Find admin user
      const admin = await AdminUser.findOne({ email: loginData.email });
      if (!admin) {
        throw new AppError('Invalid credentials', 401);
      }

      // Check password
      const isPasswordValid = await bcrypt.compare(loginData.password, admin.password);
      if (!isPasswordValid) {
        throw new AppError('Invalid credentials', 401);
      }

      // Generate JWT token
      const token = jwt.sign(
        { 
          id: admin._id,  
          userId: admin._id, 
          email: admin.email, 
          role: admin.role,
          firstName: admin.firstName,
          lastName: admin.lastName
        },
        config.jwt.secret,
        { expiresIn: config.jwt.accessTokenExpiration }
      );

      return {
        admin: {
          id: admin._id,
          userId: admin._id, 
          email: admin.email,
          firstName: admin.firstName,
          lastName: admin.lastName,
          role: admin.role
        },
        token,
        expiresIn: config.jwt.accessTokenExpiration
      };
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError((error as Error).message || 'Login failed', 500);
    }
  }

  /**
   * Create new admin
   * Only for authorized use
   */
  static async createAdmin(adminData: RegisterAdminDto) {
    try {
      // Check if admin with given email already exists
      const adminExists = await AdminUser.findOne({ email: adminData.email });
      if (adminExists) {
        throw new AppError('Admin with this email already exists', 400);
      }

      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(adminData.password, saltRounds);

      // Create admin user
      const admin = new AdminUser({
        firstName: adminData.firstName,
        lastName: adminData.lastName,
        email: adminData.email,
        password: hashedPassword,
        role: UserRole.ADMIN
      });

      await admin.save();

      return {
        id: admin._id,
        email: admin.email,
        firstName: admin.firstName,
        lastName: admin.lastName,
        role: admin.role
      };
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError((error as Error).message || 'Admin creation failed', 500);
    }
  }

  /**
   * Change admin password
   */
  static async changePassword(
    adminId: string, 
    currentPassword: string, 
    newPassword: string
  ) {
    try {
      // Find admin user
      const admin = await AdminUser.findById(adminId);
      if (!admin) {
        throw new AppError('Admin not found', 404);
      }

      // Verify current password
      const isCurrentPasswordValid = await bcrypt.compare(currentPassword, admin.password);
      if (!isCurrentPasswordValid) {
        throw new AppError('Current password is incorrect', 400);
      }

      // Hash new password
      const saltRounds = 10;
      const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

      // Update password
      admin.password = hashedNewPassword;
      await admin.save();

      return { message: 'Password changed successfully' };
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError((error as Error).message || 'Password change failed', 500);
    }
  }

  /**
   * Get admin profile
   */
  static async getAdminProfile(adminId: string) {
    try {
      const admin = await AdminUser.findById(adminId).select('-password');
      if (!admin) {
        throw new AppError('Admin not found', 404);
      }

      return {
        id: admin._id,
        email: admin.email,
        firstName: admin.firstName,
        lastName: admin.lastName,
        role: admin.role
      };
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError((error as Error).message || 'Failed to get admin profile', 500);
    }
  }
}

export default AdminAuthService;