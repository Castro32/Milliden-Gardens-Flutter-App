// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import { AppError } from '../utils/error';
// import config from '../config/config';
// import { AdminUser, UserRole } from '../models/adminModel';

// export class AuthMiddleware {
//   /**
//    * Verify JWT token middleware
//    */
//   static async verifyToken(req: Request, res: Response, next: NextFunction) {
//     try {
//       const authHeader = req.headers.authorization;

//       if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return next(new AppError('Access token is required', 401));
//       }

//       const token = authHeader.split(' ')[1];

//       try {
//         const decoded = jwt.verify(token, config.jwt.secret) as {
//           userId: string;
//           email: string;
//           role: UserRole;
//           firstName: string;
//           lastName: string;
//         };

//         // Check if admin still exists
//         const admin = await AdminUser.findById(decoded.userId);

//         if (!admin) {
//           return next(new AppError('Admin no longer exists', 401));
//         }

//         // Attach admin info to request
//         req.admin = {
//             userId: decoded.userId, 
//           id: decoded.userId,
//           email: decoded.email,
//           role: decoded.role,
//           firstName: decoded.firstName,
//           lastName: decoded.lastName
//         };

//         next();
//       } catch (error) {
//         return next(new AppError('Invalid or expired token', 401));
//       }
//     } catch (error) {
//       next(error);
//     }
//   }

//   /**
//    * Ensure role is admin
//    */
//   static ensureAdmin(req: Request, res: Response, next: NextFunction) {
//     try {
//       if (!req.admin) {
//         return next(new AppError('Not authenticated', 401));
//       }

//       if (req.admin.role !== UserRole.ADMIN) {
//         return next(new AppError('Admin access required', 403));
//       }

//       next();
//     } catch (error) {
//       next(error);
//     }
//   }
// }

// export default AuthMiddleware;
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../utils/error';
import config from '../config/config';
import { AdminUser } from '../models/adminModel';

export class AuthMiddleware {
  static async verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;
      console.log('Authorization Header:', authHeader);

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new AppError('Access token is required', 401));
      }

      const token = authHeader.split(' ')[1];
      console.log('Extracted Token:', token); 

      try {
        const decoded = jwt.verify(token, config.jwt.secret) as Express.User;
        console.log('Decoded Token:', decoded);

        // Check if admin still exists
        const admin = await AdminUser.findById(decoded.id);
        console.log('Admin User:', admin);

        if (!admin) {
          return next(new AppError('Admin no longer exists', 401));
        }

        req.admin = {
          id: decoded.id,
          userId: decoded.id,
          email: decoded.email,
          role: decoded.role,
          firstName: decoded.firstName,
          lastName: decoded.lastName,
        };

        next();
      } catch (error) {
        return next(new AppError('Invalid or expired token', 401));
      }
    } catch (error) {
      next(error);
    }
  }

  static ensureAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.admin) {
        return next(new AppError('Not authenticated', 401));
      }

      if (req.admin.role !== 'ADMIN') {
        return next(new AppError('Admin access required', 403));
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

export default AuthMiddleware;