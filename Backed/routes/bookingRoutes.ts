// import { Router } from 'express';
// import { bookingController } from '../controllers/bookController';

// const router = Router();

// // Create a new booking
// router.post('/', bookingController.createBooking);

// // Get booking by ID
// router.get('/:id', bookingController.getBooking);

// // Get bookings by email
// router.get('/email/:email', bookingController.getBookingsByEmail);

// // Update booking status
// router.patch('/:id/status', bookingController.updateBookingStatus);

// // Update payment status
// router.patch('/:id/payment', bookingController.updatePaymentStatus);

// export default router;
import { Router } from 'express';
import { bookingController } from '../controllers/bookController';

const router = Router();

// Helper function to handle async controllers
const asyncHandler = (fn: Function) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get('/', asyncHandler(bookingController.getAllBookings));

// Create a new booking
router.post('/', asyncHandler(bookingController.createBooking));

// Get bookings by email - this MUST come before the /:id route
router.get('/email/:email', asyncHandler(bookingController.getBookingsByEmail));

// Get booking by ID
router.get('/:id', asyncHandler(bookingController.getBooking));

//Get all bookings
router.get('/bookings', asyncHandler(bookingController.getAllBookings));

// Update booking status
router.patch('/:id/status', asyncHandler(bookingController.updateBookingStatus));

// Update payment status
router.patch('/:id/payment', asyncHandler(bookingController.updatePaymentStatus));
router.post('/send-confirmation', asyncHandler(bookingController.sendBookingConfirmation));

router.post('/:id/cancel', asyncHandler(bookingController.cancelBooking));
router.delete('/:id', asyncHandler(bookingController.deleteBooking));

export default router;