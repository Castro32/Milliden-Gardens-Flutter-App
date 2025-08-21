// // import Booking from "../models/bookingModel";   
// // import { Booking as BookingInterface } from "../interfaces/booking.interface";
// // import { emailService } from "./emailService";

// // export const bookingService = {
// //     async createBooking(bookingData: BookingInterface): Promise<BookingInterface> {
// //         try {
// //             const newBooking = new Booking(bookingData);
// //             const savedBooking = await newBooking.save();
// //             // Send confirmation email
// //             await emailService.sendBookingConfirmation(savedBooking);
// //             return savedBooking;
// //         } catch (error) {
// //             throw new Error(`Error creating booking: ${error.message}`);
// //         }
// //     },

// //     async getBookingById(id: string): Promise<BookingInterface> {
// //         try {
// //             const booking = await Booking.findById(id);
// //             if (!booking) {
// //                 throw new Error('Booking not found');
// //             }
// //             return booking;
// //         } catch (error) {
// //             throw new Error(`Error fetching booking: ${error.message}`);
// //         }
// //     },

// //     async getBookingsByEmail(email: string): Promise<BookingInterface[]> {
// //         try {
// //             const bookings = await Booking.find({ userEmail: email });
// //             return bookings;
// //         } catch (error) {
// //             throw new Error(`Error fetching bookings by email: ${error.message}`);
// //         }
// //     },

// //     async updateBookingStatus(id: string, bookingStatus: string): Promise<BookingInterface> {
// //         try {
// //             const booking = await Booking.findById(id);
// //             if (!booking) {
// //                 throw new Error('Booking not found');
// //             }

// //             booking.bookingStatus = bookingStatus as BookingInterface['bookingStatus'];
// //             const updatedBooking = await booking.save();

// //             // Send cancellation email if booking is cancelled
// //             if (bookingStatus === 'cancelled') {
// //                 await emailService.sendBookingCancellation(updatedBooking);
// //             }

// //             return updatedBooking;
// //         } catch (error) {
// //             throw new Error(`Error updating booking status: ${error.message}`);
// //         }
// //     },

// //     async updatePaymentStatus(id: string, paymentStatus: string): Promise<BookingInterface> {
// //         try {
// //             const booking = await Booking.findById(id);
// //             if (!booking) {
// //                 throw new Error('Booking not found');
// //             }

// //             booking.paymentStatus = paymentStatus as BookingInterface['paymentStatus'];
            
// //             // If payment completed, update the booking status to paid
// //             if (paymentStatus === 'completed') {
// //                 booking.status = 'paid';
// //                 // Send payment confirmation email
// //                 await emailService.sendPaymentConfirmation(booking);
// //             }

// //             const updatedBooking = await booking.save();
// //             return updatedBooking;
// //         } catch (error) {
// //             throw new Error(`Error updating payment status: ${error.message}`);
// //         }
// //     },

// //     async getAllBookings(): Promise<BookingInterface[]> {
// //         try {
// //             return await Booking.find({});
// //         } catch (error) {
// //             throw new Error(`Error fetching all bookings: ${error.message}`);
// //         }
// //     },

// //     async deleteBooking(id: string): Promise<BookingInterface> {
// //         try {
// //             const booking = await Booking.findByIdAndDelete(id);
// //             if (!booking) {
// //                 throw new Error('Booking not found');
// //             }
// //             return booking;
// //         } catch (error) {
// //             throw new Error(`Error deleting booking: ${error.message}`);
// //         }
// //     }
// // };
// import Booking from "../models/bookingModel";   
// import { Booking as BookingInterface } from "../interfaces/booking.interface";
// import { emailService } from "./emailService";

// export const bookingService = {
//     async createBooking(bookingData: BookingInterface): Promise<BookingInterface> {
//         try {
//             const newBooking = new Booking(bookingData);
//             const savedBooking = await newBooking.save();
//             // Send confirmation email
//             await emailService.sendBookingConfirmation(savedBooking);
//             // Convert Mongoose document to plain object and ensure type safety
//             return savedBooking.toObject({ getters: true }) as unknown as BookingInterface;
//         } catch (error) {
//             throw new Error(`Error creating booking: ${error instanceof Error ? error.message : 'Unknown error'}`);
//         }
//     },

//     async getBookingById(id: string): Promise<BookingInterface> {
//         try {
//             const booking = await Booking.findById(id);
//             if (!booking) {
//                 throw new Error('Booking not found');
//             }
//             return booking.toObject({ getters: true }) as unknown as BookingInterface;
//         } catch (error) {
//             throw new Error(`Error fetching booking: ${error instanceof Error ? error.message : 'Unknown error'}`);
//         }
//     },

//     async getBookingsByEmail(email: string): Promise<BookingInterface[]> {
//         try {
//             const bookings = await Booking.find({ userEmail: email });
//             return bookings.map(booking => booking.toObject({ getters: true }) as unknown as BookingInterface);
//         } catch (error) {
//             throw new Error(`Error fetching bookings by email: ${error instanceof Error ? error.message : 'Unknown error'}`);
//         }
//     },

//     async updateBookingStatus(id: string, bookingStatus: string): Promise<BookingInterface> {
//         try {
//             const booking = await Booking.findById(id);
//             if (!booking) {
//                 throw new Error('Booking not found');
//             }

//             booking.bookingStatus = bookingStatus as BookingInterface['bookingStatus'];
//             const updatedBooking = await booking.save();

//             // Send cancellation email if booking is cancelled
//             if (bookingStatus === 'cancelled') {
//                 await emailService.sendBookingCancellation(updatedBooking);
//             }

//             return updatedBooking.toObject({ getters: true }) as unknown as BookingInterface;
//         } catch (error) {
//             throw new Error(`Error updating booking status: ${error instanceof Error ? error.message : 'Unknown error'}`);
//         }
//     },

//     async updatePaymentStatus(id: string, paymentStatus: string): Promise<BookingInterface> {
//         try {
//             const booking = await Booking.findById(id);
//             if (!booking) {
//                 throw new Error('Booking not found');
//             }

//             booking.paymentStatus = paymentStatus as BookingInterface['paymentStatus'];
            
//             // If payment completed, update the booking status to paid
//             if (paymentStatus === 'completed') {
//                 booking.status = 'paid';
//                 // Send payment confirmation email
//                 await emailService.sendPaymentConfirmation(booking);
//             }

//             const updatedBooking = await booking.save();
//             return updatedBooking.toObject({ getters: true }) as unknown as BookingInterface;
//         } catch (error) {
//             throw new Error(`Error updating payment status: ${error instanceof Error ? error.message : 'Unknown error'}`);
//         }
//     },

//     async getAllBookings(): Promise<BookingInterface[]> {
//         try {
//             const bookings = await Booking.find({});
//             return bookings.map(booking => booking.toObject({ getters: true }) as unknown as BookingInterface);
//         } catch (error) {
//             throw new Error(`Error fetching all bookings: ${error instanceof Error ? error.message : 'Unknown error'}`);
//         }
//     },

//     async deleteBooking(id: string): Promise<BookingInterface> {
//         try {
//             const booking = await Booking.findByIdAndDelete(id);
//             if (!booking) {
//                 throw new Error('Booking not found');
//             }
//             return booking.toObject({ getters: true }) as unknown as BookingInterface;
//         } catch (error) {
//             throw new Error(`Error deleting booking: ${error instanceof Error ? error.message : 'Unknown error'}`);
//         }
//     }
// };
import Booking from "../models/bookingModel";   
import { Booking as BookingInterface } from "../interfaces/booking.interface";
import { emailService } from "./emailService";

// Helper function to convert Mongoose document to plain object with string _id
const toBookingObject = (booking: any): BookingInterface => {
    const obj = booking.toObject({ getters: true, virtuals: true });
    // Convert _id to string if it exists
    if (obj._id) {
        obj._id = obj._id.toString();
    }
    return obj as BookingInterface;
};

export const bookingService = {
    async createBooking(bookingData: BookingInterface): Promise<BookingInterface> {
        try {
            const newBooking = new Booking(bookingData);
            const savedBooking = await newBooking.save();
            // Convert to plain object before sending to email service
            const bookingObj = toBookingObject(savedBooking);
            await emailService.sendBookingConfirmation(bookingObj);
            return bookingObj;
        } catch (error) {
            throw new Error(`Error creating booking: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    },

    async getBookingById(id: string): Promise<BookingInterface> {
        try {
            const booking = await Booking.findById(id);
            if (!booking) {
                throw new Error('Booking not found');
            }
            return toBookingObject(booking);
        } catch (error) {
            throw new Error(`Error fetching booking: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    },

    async getBookingsByEmail(email: string): Promise<BookingInterface[]> {
        try {
            const bookings = await Booking.find({ userEmail: email });
            return bookings.map(booking => toBookingObject(booking));
        } catch (error) {
            throw new Error(`Error fetching bookings by email: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    },

    async updateBookingStatus(id: string, bookingStatus: string): Promise<BookingInterface> {
        try {
            const booking = await Booking.findById(id);
            if (!booking) {
                throw new Error('Booking not found');
            }

            booking.bookingStatus = bookingStatus as BookingInterface['bookingStatus'];
            const updatedBooking = await booking.save();
            const bookingObj = toBookingObject(updatedBooking);

            if (bookingStatus === 'cancelled') {
                await emailService.sendBookingCancellation(bookingObj);
            }

            return bookingObj;
        } catch (error) {
            throw new Error(`Error updating booking status: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    },

    async updatePaymentStatus(id: string, paymentStatus: string): Promise<BookingInterface> {
        try {
            const booking = await Booking.findById(id);
            if (!booking) {
                throw new Error('Booking not found');
            }

            booking.paymentStatus = paymentStatus as BookingInterface['paymentStatus'];
            
            if (paymentStatus === 'completed') {
                booking.status = 'paid';
                const bookingObj = toBookingObject(booking);
                await emailService.sendPaymentConfirmation(bookingObj);
                await booking.save();
                return bookingObj;
            }

            const updatedBooking = await booking.save();
            return toBookingObject(updatedBooking);
        } catch (error) {
            throw new Error(`Error updating payment status: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    },

    async getAllBookings(): Promise<BookingInterface[]> {
        try {
            const bookings = await Booking.find({});
            return bookings.map(booking => toBookingObject(booking));
        } catch (error) {
            throw new Error(`Error fetching all bookings: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    },

    // async deleteBooking(id: string): Promise<BookingInterface> {
    //     try {
    //         const booking = await Booking.findByIdAndDelete(id);
    //         if (!booking) {
    //             throw new Error('Booking not found');
    //         }
    //         return toBookingObject(booking);
    //     } catch (error) {
    //         throw new Error(`Error deleting booking: ${error instanceof Error ? error.message : 'Unknown error'}`);
    //     }
    // }
    async cancelBooking(id: string): Promise<BookingInterface> {
        try {
            const booking = await Booking.findById(id);
            if (!booking) {
                throw new Error('Booking not found');
            }

            // Update booking status to cancelled
            booking.bookingStatus = 'cancelled';
            const updatedBooking = await booking.save();
            const bookingObj = toBookingObject(updatedBooking);

            // Send cancellation email
            await emailService.sendBookingCancellation(bookingObj);

            return bookingObj;
        } catch (error) {
            throw new Error(`Error cancelling booking: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    },

    async deleteBooking(id: string): Promise<BookingInterface> {
        try {
            const booking = await Booking.findByIdAndDelete(id);
            if (!booking) {
                throw new Error('Booking not found');
            }
            return toBookingObject(booking);
        } catch (error) {
            throw new Error(`Error deleting booking: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
};