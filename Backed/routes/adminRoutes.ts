import express from 'express';
import AdminController from '../controllers/adminController';
import { AuthMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

// Public routes
router.post('/login', AdminController.login);

// Protected routes
router.use(AuthMiddleware.verifyToken);
router.use(AuthMiddleware.ensureAdmin);

// Admin controller routes
router.get('/profile', AdminController.getProfile);
router.post('/change-password', AdminController.changePassword);
router.post('/create', AdminController.createAdmin);

export default router;