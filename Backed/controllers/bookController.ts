// // // // // import { bookingService } from "../services/bookService";

// // // // // export const bookingController = {
// // // // //     async createBooking(req, res) {
// // // // //         try {
// // // // //             const bookingData = req.body;
// // // // //             const booking = await bookingService.createBooking(bookingData);
// // // // //             res.status(201).json({
// // // // //                 success: true,
// // // // //                 message: 'Booking created successfully',
// // // // //                 data: booking
// // // // //             });
// // // // //         } catch (error) {
// // // // //             res.status(400).json({
// // // // //                 success: false,
// // // // //                 message: error.message
// // // // //             });
// // // // //         }
// // // // //     },
    
// // // // //     async getBooking(req, res) {
// // // // //         try {
// // // // //             const { id } = req.params;
// // // // //             const booking = await bookingService.getBookingById(id);
// // // // //             res.status(200).json({
// // // // //                 success: true,
// // // // //                 data: booking
// // // // //             });
// // // // //         } catch (error) {
// // // // //             res.status(404).json({
// // // // //                 success: false,
// // // // //                 message: error.message
// // // // //             });
// // // // //         }
// // // // //     },
    
// // // // //     async getBookingsByEmail(req, res) {
// // // // //         try {
// // // // //             const { email } = req.params;
// // // // //             const bookings = await bookingService.getBookingsByEmail(email);
// // // // //             res.status(200).json({
// // // // //                 success: true,
// // // // //                 data: bookings
// // // // //             });
// // // // //         } catch (error) {
// // // // //             res.status(400).json({
// // // // //                 success: false,
// // // // //                 message: error.message
// // // // //             });
// // // // //         }
// // // // //     },
    
// // // // //     async updateBookingStatus(req, res) {
// // // // //         try {
// // // // //             const { id } = req.params;
// // // // //             const { bookingStatus } = req.body;
            
// // // // //             if (!['confirmed', 'cancelled', 'completed'].includes(bookingStatus)) {
// // // // //                 return res.status(400).json({
// // // // //                     success: false,
// // // // //                     message: 'Invalid booking status'
// // // // //                 });
// // // // //             }
            
// // // // //             const booking = await bookingService.updateBookingStatus(id, bookingStatus);
// // // // //             res.status(200).json({
// // // // //                 success: true,
// // // // //                 message: 'Booking status updated successfully',
// // // // //                 data: booking
// // // // //             });
// // // // //         } catch (error) {
// // // // //             res.status(400).json({
// // // // //                 success: false,
// // // // //                 message: error.message
// // // // //             });
// // // // //         }
// // // // //     },
    
// // // // //     async updatePaymentStatus(req, res) {
// // // // //         try {
// // // // //             const { id } = req.params;
// // // // //             const { paymentStatus } = req.body;
            
// // // // //             if (!['pending', 'completed', 'failed', 'refunded'].includes(paymentStatus)) {
// // // // //                 return res.status(400).json({
// // // // //                     success: false,
// // // // //                     message: 'Invalid payment status'
// // // // //                 });
// // // // //             }
            
// // // // //             const booking = await bookingService.updatePaymentStatus(id, paymentStatus);
// // // // //             res.status(200).json({
// // // // //                 success: true,
// // // // //                 message: 'Payment status updated successfully',
// // // // //                 data: booking
// // // // //             });
// // // // //         } catch (error) {
// // // // //             res.status(400).json({
// // // // //                 success: false,
// // // // //                 message: error.message
// // // // //             });
// // // // //         }
// // // // //     }
// // // // // };
// // // // import { Request, Response } from 'express';
// // // // import { bookingService } from '../services/bookService';

// // // // export const bookingController = {
// // // //     async createBooking(req: Request, res: Response) {
// // // //         try {
// // // //             const bookingData = req.body;
// // // //             const booking = await bookingService.createBooking(bookingData);
// // // //             res.status(201).json({
// // // //                 success: true,
// // // //                 message: 'Booking created successfully',
// // // //                 data: booking
// // // //             });
// // // //         } catch (error) {
// // // //             res.status(400).json({
// // // //                 success: false,
// // // //                 message: error.message
// // // //             });
// // // //         }
// // // //     },

// // // //     async getBooking(req: Request, res: Response) {
// // // //         try {
// // // //             const { id } = req.params;
// // // //             const booking = await bookingService.getBookingById(id);
// // // //             res.status(200).json({
// // // //                 success: true,
// // // //                 data: booking
// // // //             });
// // // //         } catch (error) {
// // // //             res.status(404).json({
// // // //                 success: false,
// // // //                 message: error.message
// // // //             });
// // // //         }
// // // //     },

// // // //     async getBookingsByEmail(req: Request, res: Response) {
// // // //         try {
// // // //             const { email } = req.params;
// // // //             const bookings = await bookingService.getBookingsByEmail(email);
// // // //             res.status(200).json({
// // // //                 success: true,
// // // //                 data: bookings
// // // //             });
// // // //         } catch (error) {
// // // //             res.status(400).json({
// // // //                 success: false,
// // // //                 message: error.message
// // // //             });
// // // //         }
// // // //     },

// // // //     async updateBookingStatus(req: Request, res: Response) {
// // // //         try {
// // // //             const { id } = req.params;
// // // //             const { bookingStatus } = req.body;

// // // //             if (!['confirmed', 'cancelled', 'completed'].includes(bookingStatus)) {
// // // //                 return res.status(400).json({
// // // //                     success: false,
// // // //                     message: 'Invalid booking status'
// // // //                 });
// // // //             }

// // // //             const booking = await bookingService.updateBookingStatus(id, bookingStatus);
// // // //             res.status(200).json({
// // // //                 success: true,
// // // //                 message: 'Booking status updated successfully',
// // // //                 data: booking
// // // //             });
// // // //         } catch (error) {
// // // //             res.status(400).json({
// // // //                 success: false,
// // // //                 message: error.message
// // // //             });
// // // //         }
// // // //     },

// // // //     async updatePaymentStatus(req: Request, res: Response) {
// // // //         try {
// // // //             const { id } = req.params;
// // // //             const { paymentStatus } = req.body;

// // // //             if (!['pending', 'completed', 'failed', 'refunded'].includes(paymentStatus)) {
// // // //                 return res.status(400).json({
// // // //                     success: false,
// // // //                     message: 'Invalid payment status'
// // // //                 });
// // // //             }

// // // //             const booking = await bookingService.updatePaymentStatus(id, paymentStatus);
// // // //             res.status(200).json({
// // // //                 success: true,
// // // //                 message: 'Payment status updated successfully',
// // // //                 data: booking
// // // //             });
// // // //         } catch (error) {
// // // //             res.status(400).json({
// // // //                 success: false,
// // // //                 message: error.message
// // // //             });
// // // //         }
// // // //     }
// // // // };
// // // import { Request, Response } from 'express';
// // // import { bookingService } from '../services/bookService';

// // // export const bookingController = {
// // //     async createBooking(req: Request, res: Response) {
// // //         try {
// // //             const bookingData = req.body;
// // //             const booking = await bookingService.createBooking(bookingData);
// // //             res.status(201).json({
// // //                 success: true,
// // //                 message: 'Booking created successfully',
// // //                 data: booking
// // //             });
// // //         } catch (error) {
// // //             res.status(400).json({
// // //                 success: false,
// // //                 message: error instanceof Error ? error.message : 'An unknown error occurred'
// // //             });
// // //         }
// // //     },

// // //     async getBooking(req: Request, res: Response) {
// // //         try {
// // //             const { id } = req.params;
// // //             const booking = await bookingService.getBookingById(id);
// // //             res.status(200).json({
// // //                 success: true,
// // //                 data: booking
// // //             });
// // //         } catch (error) {
// // //             res.status(404).json({
// // //                 success: false,
// // //                 message: error instanceof Error ? error.message : 'An unknown error occurred'
// // //             });
// // //         }
// // //     },

// // //     async getBookingsByEmail(req: Request, res: Response) {
// // //         try {
// // //             const { email } = req.params;
// // //             const bookings = await bookingService.getBookingsByEmail(email);
// // //             res.status(200).json({
// // //                 success: true,
// // //                 data: bookings
// // //             });
// // //         } catch (error) {
// // //             res.status(400).json({
// // //                 success: false,
// // //                 message: error instanceof Error ? error.message : 'An unknown error occurred'
// // //             });
// // //         }
// // //     },

// // //     async updateBookingStatus(req: Request, res: Response) {
// // //         try {
// // //             const { id } = req.params;
// // //             const { bookingStatus } = req.body;

// // //             if (!['confirmed', 'cancelled', 'completed'].includes(bookingStatus)) {
// // //                 return res.status(400).json({
// // //                     success: false,
// // //                     message: 'Invalid booking status'
// // //                 });
// // //             }

// // //             const booking = await bookingService.updateBookingStatus(id, bookingStatus);
// // //             res.status(200).json({
// // //                 success: true,
// // //                 message: 'Booking status updated successfully',
// // //                 data: booking
// // //             });
// // //         } catch (error) {
// // //             res.status(400).json({
// // //                 success: false,
// // //                 message: error instanceof Error ? error.message : 'An unknown error occurred'
// // //             });
// // //         }
// // //     },

// // //     async updatePaymentStatus(req: Request, res: Response) {
// // //         try {
// // //             const { id } = req.params;
// // //             const { paymentStatus } = req.body;

// // //             if (!['pending', 'completed', 'failed', 'refunded'].includes(paymentStatus)) {
// // //                 return res.status(400).json({
// // //                     success: false,
// // //                     message: 'Invalid payment status'
// // //                 });
// // //             }

// // //             const booking = await bookingService.updatePaymentStatus(id, paymentStatus);
// // //             res.status(200).json({
// // //                 success: true,
// // //                 message: 'Payment status updated successfully',
// // //                 data: booking
// // //             });
// // //         } catch (error) {
// // //             res.status(400).json({
// // //                 success: false,
// // //                 message: error instanceof Error ? error.message : 'An unknown error occurred'
// // //             });
// // //         }
// // //     }
// // // };
// // import { Request, Response } from 'express';
// // import Booking from '../models/bookingModel';

// // export const bookingController = {
// //   // Existing method
// //   createBooking: async (req: Request, res: Response) => {
// //     try {
// //       const newBooking = new Booking(req.body);
// //       const savedBooking = await newBooking.save();
// //       res.status(201).json(savedBooking);
// //     } catch (error) {
// //       res.status(400).json({ message: "Error creating booking", error });
// //     }
// //   },
  
// //   // Add missing methods
// //   getBookingsByEmail: async (req: Request, res: Response) => {
// //     try {
// //       const email = req.params.email;
// //       const bookings = await Booking.find({ userEmail: email });
// //       res.status(200).json(bookings);
// //     } catch (error) {
// //       res.status(400).json({ message: "Error fetching bookings", error });
// //     }
// //   },
  
// //   getBooking: async (req: Request, res: Response) => {
// //     try {
// //       const booking = await Booking.findById(req.params.id);
// //       if (!booking) {
// //         return res.status(404).json({ message: "Booking not found" });
// //       }
// //       res.status(200).json(booking);
// //     } catch (error) {
// //       res.status(400).json({ message: "Error fetching booking", error });
// //     }
// //   },
  
// //   updateBookingStatus: async (req: Request, res: Response) => {
// //     try {
// //       const { status } = req.body;
// //       const updatedBooking = await Booking.findByIdAndUpdate(
// //         req.params.id,
// //         { status },
// //         { new: true }
// //       );
// //       if (!updatedBooking) {
// //         return res.status(404).json({ message: "Booking not found" });
// //       }
// //       res.status(200).json(updatedBooking);
// //     } catch (error) {
// //       res.status(400).json({ message: "Error updating booking status", error });
// //     }
// //   },
  
// //   updatePaymentStatus: async (req: Request, res: Response) => {
// //     try {
// //       const { paymentStatus } = req.body;
// //       const updatedBooking = await Booking.findByIdAndUpdate(
// //         req.params.id,
// //         { paymentStatus },
// //         { new: true }
// //       );
// //       if (!updatedBooking) {
// //         return res.status(404).json({ message: "Booking not found" });
// //       }
// //       res.status(200).json(updatedBooking);
// //     } catch (error) {
// //       res.status(400).json({ message: "Error updating payment status", error });
// //     }
// //   }
// // };
// import { Request, Response } from 'express';
// import { bookingService } from '../services/bookService'; // Using the imported object directly
// import { RoomService } from '../services/roomService';
// import { Booking } from '../interfaces/booking.interface';

// export const bookingController = {
//   /**
//    * Create a new booking and update room status
//    */
//   async createBooking(req: Request, res: Response) {
//     try {
//       const roomService = new RoomService();
      
//       // 1. Create the booking
//       const bookingData: Booking = req.body;
//       const newBooking = await bookingService.createBooking(bookingData);
      
//       // 2. Update the room status to 'reserved'
//       const updatedRoom = await roomService.updateRoomStatus(
//         bookingData.roomId, 
//         'reserved'
//       );
      
//       if (!updatedRoom) {
//         throw new Error('Room status update failed');
//       }
      
//       res.status(201).json({
//         success: true,
//         data: {
//           booking: newBooking,
//           room: updatedRoom
//         }
//       });
//     } catch (error: any) { // Type assertion for error
//       res.status(500).json({
//         success: false,
//         message: error.message || 'Booking creation failed'
//       });
//     }
//   },

//   /**
//    * Get bookings by email
//    */
//   async getBookingsByEmail(req: Request, res: Response) {
//     try {
//       const bookings = await bookingService.getBookingsByEmail(req.params.email);
//       res.status(200).json({
//         success: true,
//         data: bookings
//       });
//     } catch (error: any) { // Type assertion for error
//       res.status(500).json({
//         success: false,
//         message: error.message || 'Failed to retrieve bookings'
//       });
//     }
//   },

//   /**
//    * Get booking by ID
//    */
//   async getBooking(req: Request, res: Response) {
//     try {
//       const booking = await bookingService.getBookingById(req.params.id);
      
//       if (!booking) {
//         return res.status(404).json({
//           success: false,
//           message: 'Booking not found'
//         });
//       }
      
//       res.status(200).json({
//         success: true,
//         data: booking
//       });
//     } catch (error: any) { // Type assertion for error
//       res.status(500).json({
//         success: false,
//         message: error.message || 'Failed to retrieve booking'
//       });
//     }
//   },

//   /**
//    * Update booking status
//    */
//   async updateBookingStatus(req: Request, res: Response) {
//     try {
//       const roomService = new RoomService();
      
//       const { status } = req.body;
//       const { id } = req.params;
      
//       // 1. Update booking status
//       const updatedBooking = await bookingService.updateBookingStatus(id, status);
      
//       if (!updatedBooking) {
//         return res.status(404).json({
//           success: false,
//           message: 'Booking not found'
//         });
//       }
      
//       // 2. If booking is cancelled, update room status back to available
//       if (status === 'cancelled') {
//         await roomService.updateRoomStatus(
//           updatedBooking.roomId, 
//           'available'
//         );
//       }
      
//       res.status(200).json({
//         success: true,
//         data: updatedBooking
//       });
//     } catch (error: any) { // Type assertion for error
//       res.status(500).json({
//         success: false,
//         message: error.message || 'Failed to update booking status'
//       });
//     }
//   },

//   /**
//    * Update payment status
//    */
//   async updatePaymentStatus(req: Request, res: Response) {
//     try {
//       const { paymentStatus } = req.body;
//       const { id } = req.params;
      
//       const updatedBooking = await bookingService.updatePaymentStatus(id, paymentStatus);
      
//       if (!updatedBooking) {
//         return res.status(404).json({
//           success: false,
//           message: 'Booking not found'
//         });
//       }
      
//       res.status(200).json({
//         success: true,
//         data: updatedBooking
//       });
//     } catch (error: any) { // Type assertion for error
//       res.status(500).json({
//         success: false,
//         message: error.message || 'Failed to update payment status'
//       });
//     }
//   }
// };
import { Request, Response } from 'express';
import { bookingService } from '../services/bookService';
import { RoomService } from '../services/roomService';
import { Booking } from '../interfaces/booking.interface';
import { emailService } from '../services/emailService'; // Added missing import

export const bookingController = {
  /**
   * Create a new booking and update room status
   */
  async createBooking(req: Request, res: Response) {
    try {
      const roomService = new RoomService();
      
      // 1. Create the booking
      const bookingData: Booking = req.body;
      const newBooking = await bookingService.createBooking(bookingData);
      
      // 2. Update the room status to 'reserved'
      const updatedRoom = await roomService.updateRoomStatus(
        bookingData.roomId, 
        'reserved'
      );
      
      if (!updatedRoom) {
        throw new Error('Room status update failed');
      }
      
      res.status(201).json({
        success: true,
        data: {
          booking: newBooking,
          room: updatedRoom
        }
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Booking creation failed'
      });
    }
  },

  /**
   * Get bookings by email
   */
  async getBookingsByEmail(req: Request, res: Response) {
    try {
      const bookings = await bookingService.getBookingsByEmail(req.params.email);
      res.status(200).json({
        success: true,
        data: bookings
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to retrieve bookings'
      });
    }
  },

  /**
   * Get booking by ID
   */
  async getBooking(req: Request, res: Response) {
    try {
      const booking = await bookingService.getBookingById(req.params.id);
      
      if (!booking) {
        return res.status(404).json({
          success: false,
          message: 'Booking not found'
        });
      }
      
      res.status(200).json({
        success: true,
        data: booking
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to retrieve booking'
      });
    }
  },

  //get all bookings
  async getAllBookings(req: Request, res: Response) {
    try {
      const bookings = await bookingService.getAllBookings();
      res.status(200).json({
        success: true,
        data: bookings
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to retrieve bookings'
      });
    }
  },

  /**
   * Update booking status
   */
  async updateBookingStatus(req: Request, res: Response) {
    try {
      const roomService = new RoomService();
      
      const { status } = req.body;
      const { id } = req.params;
      
      // 1. Update booking status
      const updatedBooking = await bookingService.updateBookingStatus(id, status);
      
      if (!updatedBooking) {
        return res.status(404).json({
          success: false,
          message: 'Booking not found'
        });
      }
      
      // 2. If booking is cancelled, update room status back to available
      if (status === 'cancelled') {
        await roomService.updateRoomStatus(
          updatedBooking.roomId, 
          'available'
        );
      }
      
      res.status(200).json({
        success: true,
        data: updatedBooking
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to update booking status'
      });
    }
  },

  /**
   * Update payment status
   */
  async updatePaymentStatus(req: Request, res: Response) {
    try {
      const { paymentStatus } = req.body;
      const { id } = req.params;
      
      const updatedBooking = await bookingService.updatePaymentStatus(id, paymentStatus);
      
      if (!updatedBooking) {
        return res.status(404).json({
          success: false,
          message: 'Booking not found'
        });
      }
      
      res.status(200).json({
        success: true,
        data: updatedBooking
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to update payment status'
      });
    }
  },

  /**
   * Send booking confirmation email
   */
  async sendBookingConfirmation(req: Request, res: Response) {
    try {
      const bookingId = req.body.bookingId;
      
      if (!bookingId) {
        return res.status(400).json({ 
          success: false,
          message: 'Booking ID is required' 
        });
      }
      
      // Find the booking using the service pattern
      const booking = await bookingService.getBookingById(bookingId);
      
      if (!booking) {
        return res.status(404).json({ 
          success: false,
          message: 'Booking not found' 
        });
      }
      
      // Send the booking confirmation email
      await emailService.sendBookingConfirmation(booking);
      
      res.status(200).json({ 
        success: true, 
        message: 'Booking confirmation email sent successfully'
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to send booking confirmation email'
      });
    }
  },
        async cancelBooking(req: Request, res: Response) {
          try {
              const { id } = req.params;
              const roomService = new RoomService();
              
              // 1. Cancel the booking
              const cancelledBooking = await bookingService.cancelBooking(id);
              
              if (!cancelledBooking) {
                  return res.status(404).json({
                      success: false,
                      message: 'Booking not found'
                  });
              }
              
              // 2. Update the room status back to available
              await roomService.updateRoomStatus(
                  cancelledBooking.roomId, 
                  'available'
              );
              
              res.status(200).json({
                  success: true,
                  data: cancelledBooking,
                  message: 'Booking cancelled successfully'
              });
          } catch (error: any) {
              res.status(500).json({
                  success: false,
                  message: error.message || 'Failed to cancel booking'
              });
          }
      },

      /**
       * Delete a booking permanently
       */
      async deleteBooking(req: Request, res: Response) {
          try {
              const { id } = req.params;
              const deletedBooking = await bookingService.deleteBooking(id);
              
              if (!deletedBooking) {
                  return res.status(404).json({
                      success: false,
                      message: 'Booking not found'
                  });
              }
              
              res.status(200).json({
                  success: true,
                  data: deletedBooking,
                  message: 'Booking deleted successfully'
              });
          } catch (error: any) {
              res.status(500).json({
                  success: false,
                  message: error.message || 'Failed to delete booking'
              });
          }
      }
};