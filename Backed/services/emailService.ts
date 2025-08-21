// // // // // // services/emailService.js
// // // // // import sgMail from '@sendgrid/mail';
// // // // // import dotenv from 'dotenv';

// // // // // dotenv.config();

// // // // // // Configure SendGrid with API key
// // // // // // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// // // // // sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// // // // // export const emailService = {
// // // // //   async sendBookingConfirmation(booking) {
// // // // //     try {
// // // // //       const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
// // // // //       const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
      
// // // // //       const msg = {
// // // // //         to: booking.userEmail,
// // // // //         from: process.env.EMAIL_FROM, 
// // // // //         subject: 'Your Booking Confirmation',
// // // // //         html: `
// // // // //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// // // // //           <h2 style="color: #393937; text-align: center;">Booking Confirmation</h2>
// // // // //           <p style="color: #393937;">Dear ${booking.userName},</p>
// // // // //           <p style="color: #393937;">Thank you for your booking. Your reservation has been confirmed.</p>
          
// // // // //           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// // // // //             <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
// // // // //             <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// // // // //             <p><strong>Room:</strong> ${booking.roomName}</p>
// // // // //             <p><strong>Check-in Date:</strong> ${checkInDate}</p>
// // // // //             <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
// // // // //             <p><strong>Number of Guests:</strong> ${booking.numberOfGuests}</p>
// // // // //             <p><strong>Total Price:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
// // // // //           </div>
          
// // // // //           <p style="color: #393937;">We look forward to welcoming you!</p>
// // // // //           <p style="color: #393937;">If you have any questions, please feel free to contact us.</p>
          
// // // // //           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// // // // //             <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         `
// // // // //       };
      
// // // // //       await sgMail.send(msg);
// // // // //       console.log(`Confirmation email sent to ${booking.userEmail}`);
// // // // //     } catch (error) {
// // // // //       console.error('Error sending confirmation email:', error);
// // // // //       // Don't throw error to prevent booking process from failing
// // // // //     }
// // // // //   },
  
// // // // //   async sendBookingCancellation(booking) {
// // // // //     try {
// // // // //       const msg = {
// // // // //         to: booking.userEmail,
// // // // //         from: process.env.EMAIL_FROM,
// // // // //         subject: 'Your Booking Cancellation',
// // // // //         html: `
// // // // //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// // // // //           <h2 style="color: #393937; text-align: center;">Booking Cancellation</h2>
// // // // //           <p style="color: #393937;">Dear ${booking.userName},</p>
// // // // //           <p style="color: #393937;">Your booking has been cancelled as requested.</p>
          
// // // // //           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// // // // //             <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
// // // // //             <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// // // // //             <p><strong>Room:</strong> ${booking.roomName}</p>
// // // // //           </div>
          
// // // // //           <p style="color: #393937;">We hope to welcome you another time.</p>
          
// // // // //           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// // // // //             <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         `
// // // // //       };
      
// // // // //       await sgMail.send(msg);
// // // // //       console.log(`Cancellation email sent to ${booking.userEmail}`);
// // // // //     } catch (error) {
// // // // //       console.error('Error sending cancellation email:', error);
// // // // //     }
// // // // //   },
  
// // // // //   async sendPaymentConfirmation(booking) {
// // // // //     try {
// // // // //       const msg = {
// // // // //         to: booking.userEmail,
// // // // //         from: process.env.EMAIL_FROM,
// // // // //         subject: 'Payment Confirmation',
// // // // //         html: `
// // // // //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// // // // //           <h2 style="color: #393937; text-align: center;">Payment Confirmation</h2>
// // // // //           <p style="color: #393937;">Dear ${booking.userName},</p>
// // // // //           <p style="color: #393937;">Thank you for your payment. We've received your payment of KSH ${booking.totalPrice.toLocaleString()}.</p>
          
// // // // //           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// // // // //             <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
// // // // //             <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// // // // //             <p><strong>Room:</strong> ${booking.roomName}</p>
// // // // //             <p><strong>Payment Method:</strong> ${booking.paymentMethod}</p>
// // // // //             <p><strong>Amount Paid:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
// // // // //           </div>
          
// // // // //           <p style="color: #393937;">We look forward to welcoming you!</p>
          
// // // // //           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// // // // //             <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         `
// // // // //       };
      
// // // // //       await sgMail.send(msg);
// // // // //       console.log(`Payment confirmation email sent to ${booking.userEmail}`);
// // // // //     } catch (error) {
// // // // //       console.error('Error sending payment confirmation email:', error);
// // // // //     }
// // // // //   },
  
// // // // //   // Added template email for any potential follow-up communications
// // // // //   async sendCustomEmail(to, subject, htmlContent) {
// // // // //     try {
// // // // //       const msg = {
// // // // //         to,
// // // // //         from: process.env.EMAIL_FROM,
// // // // //         subject,
// // // // //         html: htmlContent
// // // // //       };
      
// // // // //       await sgMail.send(msg);
// // // // //       console.log(`Custom email sent to ${to}`);
// // // // //       return true;
// // // // //     } catch (error) {
// // // // //       console.error('Error sending custom email:', error);
// // // // //       return false;
// // // // //     }
// // // // //   }
// // // // // };
// // // // // services/emailService.ts
// // // // import sgMail from '@sendgrid/mail';
// // // // import dotenv from 'dotenv';

// // // // dotenv.config();

// // // // // Define a booking interface
// // // // interface Booking {
// // // //   userEmail: string;
// // // //   userName: string;
// // // //   bookingId?: string;
// // // //   _id?: string;
// // // //   roomName: string;
// // // //   checkInDate: string | Date;
// // // //   checkOutDate: string | Date;
// // // //   numberOfGuests: number;
// // // //   totalPrice: number;
// // // //   paymentMethod?: string;
// // // // }

// // // // // Configure SendGrid with API key
// // // // sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// // // // export const emailService = {
// // // //   async sendBookingConfirmation(booking: Booking): Promise<void> {
// // // //     try {
// // // //       const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
// // // //       const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
      
// // // //       const msg: sgMail.MailDataRequired = {
// // // //         to: booking.userEmail,
// // // //         from: process.env.EMAIL_FROM || '', // Provide default empty string to avoid undefined
// // // //         subject: 'Your Booking Confirmation',
// // // //         html: `
// // // //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// // // //           <h2 style="color: #393937; text-align: center;">Booking Confirmation</h2>
// // // //           <p style="color: #393937;">Dear ${booking.userName},</p>
// // // //           <p style="color: #393937;">Thank you for your booking. Your reservation has been confirmed.</p>
          
// // // //           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// // // //             <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
// // // //             <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// // // //             <p><strong>Room:</strong> ${booking.roomName}</p>
// // // //             <p><strong>Check-in Date:</strong> ${checkInDate}</p>
// // // //             <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
// // // //             <p><strong>Number of Guests:</strong> ${booking.numberOfGuests}</p>
// // // //             <p><strong>Total Price:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
// // // //           </div>
          
// // // //           <p style="color: #393937;">We look forward to welcoming you!</p>
// // // //           <p style="color: #393937;">If you have any questions, please feel free to contact us.</p>
          
// // // //           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// // // //             <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
// // // //           </div>
// // // //         </div>
// // // //         `
// // // //       };
      
// // // //       await sgMail.send(msg);
// // // //       console.log(`Confirmation email sent to ${booking.userEmail}`);
// // // //     } catch (error) {
// // // //       console.error('Error sending confirmation email:', error);
// // // //       // Don't throw error to prevent booking process from failing
// // // //     }
// // // //   },
  
// // // //   async sendBookingCancellation(booking: Booking): Promise<void> {
// // // //     try {
// // // //       const msg: sgMail.MailDataRequired = {
// // // //         to: booking.userEmail,
// // // //         from: process.env.EMAIL_FROM || '',
// // // //         subject: 'Your Booking Cancellation',
// // // //         html: `
// // // //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// // // //           <h2 style="color: #393937; text-align: center;">Booking Cancellation</h2>
// // // //           <p style="color: #393937;">Dear ${booking.userName},</p>
// // // //           <p style="color: #393937;">Your booking has been cancelled as requested.</p>
          
// // // //           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// // // //             <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
// // // //             <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// // // //             <p><strong>Room:</strong> ${booking.roomName}</p>
// // // //           </div>
          
// // // //           <p style="color: #393937;">We hope to welcome you another time.</p>
          
// // // //           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// // // //             <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
// // // //           </div>
// // // //         </div>
// // // //         `
// // // //       };
      
// // // //       await sgMail.send(msg);
// // // //       console.log(`Cancellation email sent to ${booking.userEmail}`);
// // // //     } catch (error) {
// // // //       console.error('Error sending cancellation email:', error);
// // // //     }
// // // //   },
  
// // // //   async sendPaymentConfirmation(booking: Booking): Promise<void> {
// // // //     try {
// // // //       const msg: sgMail.MailDataRequired = {
// // // //         to: booking.userEmail,
// // // //         from: process.env.EMAIL_FROM || '',
// // // //         subject: 'Payment Confirmation',
// // // //         html: `
// // // //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// // // //           <h2 style="color: #393937; text-align: center;">Payment Confirmation</h2>
// // // //           <p style="color: #393937;">Dear ${booking.userName},</p>
// // // //           <p style="color: #393937;">Thank you for your payment. We've received your payment of KSH ${booking.totalPrice.toLocaleString()}.</p>
          
// // // //           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// // // //             <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
// // // //             <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// // // //             <p><strong>Room:</strong> ${booking.roomName}</p>
// // // //             <p><strong>Payment Method:</strong> ${booking.paymentMethod}</p>
// // // //             <p><strong>Amount Paid:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
// // // //           </div>
          
// // // //           <p style="color: #393937;">We look forward to welcoming you!</p>
          
// // // //           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// // // //             <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
// // // //           </div>
// // // //         </div>
// // // //         `
// // // //       };
      
// // // //       await sgMail.send(msg);
// // // //       console.log(`Payment confirmation email sent to ${booking.userEmail}`);
// // // //     } catch (error) {
// // // //       console.error('Error sending payment confirmation email:', error);
// // // //     }
// // // //   },
  
// // // //   // Added template email for any potential follow-up communications
// // // //   async sendCustomEmail(to: string, subject: string, htmlContent: string): Promise<boolean> {
// // // //     try {
// // // //       const msg: sgMail.MailDataRequired = {
// // // //         to,
// // // //         from: process.env.EMAIL_FROM || '',
// // // //         subject,
// // // //         html: htmlContent
// // // //       };
      
// // // //       await sgMail.send(msg);
// // // //       console.log(`Custom email sent to ${to}`);
// // // //       return true;
// // // //     } catch (error) {
// // // //       console.error('Error sending custom email:', error);
// // // //       return false;
// // // //     }
// // // //   }
// // // // };
// // // import sgMail from '@sendgrid/mail';
// // // import dotenv from 'dotenv';
// // // import nodemailer from 'nodemailer';
// // // import { Booking } from '../interfaces/booking.interface';

// // // dotenv.config();

// // // // Configure SendGrid with API key
// // // sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// // // // Configure Nodemailer transporter
// // // const transporter = nodemailer.createTransport({
// // //   service: 'gmail',
// // //   auth: {
// // //     user: process.env.EMAIL_USER || 'okanga.fidel@gmail.com',
// // //     pass: process.env.EMAIL_PASS || 'rtwc uuew lbsg rjjm'
// // //   }
// // // });

// // // export const emailService = {
// // //   // SendGrid methods
// // //   async sendBookingConfirmation(booking: Booking): Promise<void> {
// // //     try {
// // //       // First, send with SendGrid (existing functionality)
// // //       await this.sendSendGridBookingConfirmation(booking);
      
// // //       // Then, also send with Nodemailer for redundancy
// // //       await this.sendNodemailerBookingConfirmation(booking);
      
// // //       console.log(`Confirmation emails sent to ${booking.userEmail} via both services`);
// // //     } catch (error) {
// // //       console.error('Error sending confirmation email:', error);
// // //       // Don't throw error to prevent booking process from failing
// // //     }
// // //   },
  
// // //   async sendSendGridBookingConfirmation(booking: Booking): Promise<void> {
// // //     try {
// // //       const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
// // //       const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
      
// // //       const msg: sgMail.MailDataRequired = {
// // //         to: booking.userEmail,
// // //         from: process.env.EMAIL_FROM || '', // Provide default empty string to avoid undefined
// // //         subject: 'Your Booking Confirmation',
// // //         html: `
// // //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// // //           <h2 style="color: #393937; text-align: center;">Booking Confirmation</h2>
// // //           <p style="color: #393937;">Dear ${booking.userName},</p>
// // //           <p style="color: #393937;">Thank you for your booking. Your reservation has been confirmed.</p>
          
// // //           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// // //             <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
// // //             <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// // //             <p><strong>Room:</strong> ${booking.roomName}</p>
// // //             <p><strong>Check-in Date:</strong> ${checkInDate}</p>
// // //             <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
// // //             <p><strong>Number of Guests:</strong> ${booking.numberOfGuests}</p>
// // //             <p><strong>Total Price:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
// // //           </div>
          
// // //           <p style="color: #393937;">We look forward to welcoming you!</p>
// // //           <p style="color: #393937;">If you have any questions, please feel free to contact us.</p>
          
// // //           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// // //             <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
// // //           </div>
// // //         </div>
// // //         `
// // //       };
      
// // //       await sgMail.send(msg);
// // //       console.log(`SendGrid confirmation email sent to ${booking.userEmail}`);
// // //     } catch (error) {
// // //       console.error('Error sending SendGrid confirmation email:', error);
// // //     }
// // //   },
  
// // //   // New Nodemailer method for booking confirmation
// // //   async sendNodemailerBookingConfirmation(booking: Booking): Promise<void> {
// // //     try {
// // //       const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
// // //       const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
      
// // //       // Create a more visually appealing HTML template for Nodemailer
// // //       const htmlContent = `
// // //       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
// // //         <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px 5px 0 0;">
// // //           <h1 style="color: #3c4043; margin: 0;">Booking Confirmation</h1>
// // //         </div>
        
// // //         <div style="padding: 20px;">
// // //           <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
// // //           <p style="color: #3c4043; font-size: 16px;">Thank you for choosing Milliden Gardens! Your reservation has been confirmed and is ready for your arrival.</p>
          
// // //           <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
// // //             <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Booking Details</h2>
// // //             <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-in:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${checkInDate}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-out:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${checkOutDate}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Special Request:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.specialRequests}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Guests:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.numberOfGuests}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Total Amount:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">KSH ${booking.totalPrice.toLocaleString()}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Method:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.paymentMethod || 'Not specified'}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Status:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.paymentStatus}</td>
// // //               </tr>
// // //             </table>
// // //           </div>
          
// // //           <div style="background-color: #e8f0fe; padding: 15px; border-radius: 5px; margin: 20px 0;">
// // //             <h3 style="color: #1a73e8; margin-top: 0;">Important Information</h3>
// // //             <ul style="color: #3c4043; padding-left: 20px;">
// // //               <li>Check-in time starts at 2:00 PM</li>
// // //               <li>Check-out time is until 12:00 PM</li>
// // //               <li>Please bring a valid ID for check-in</li>
// // //               <li>Free Wi-Fi is available in all rooms</li>
// // //             </ul>
// // //           </div>
          
// // //           <p style="color: #3c4043; font-size: 16px;">If you need to modify your reservation or have any questions, please don't hesitate to contact us.</p>
// // //           <p style="color: #3c4043; font-size: 16px;">We look forward to welcoming you!</p>
          
// // //           <p style="color: #3c4043; font-size: 16px;">Best regards,<br>The Milliden Garden's Team.</p>
// // //         </div>
        
// // //         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
// // //           <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} The Milliden Gardens. All rights reserved.</p>
// // //           <p style="color: #5f6368; font-size: 12px;">Rodi, Homa-Bay, Kenya</p>
// // //           <p style="color: #5f6368; font-size: 12px;">Phone: +254 753 755 016 | Email: millidengroupltd@gmail.com</p>
// // //         </div>
// // //       </div>
// // //       `;
      
// // //       const mailOptions = {
// // //         from: process.env.EMAIL_USER || 'okanga.fidel@gmail.com',
// // //         to: booking.userEmail,
// // //         subject: '🏨 Your Hotel Booking Confirmation',
// // //         html: htmlContent
// // //       };
      
// // //       await transporter.sendMail(mailOptions);
// // //       console.log(`Nodemailer confirmation email sent to ${booking.userEmail}`);
// // //     } catch (error) {
// // //       console.error('Error sending Nodemailer confirmation email:', error);
// // //     }
// // //   },
  
// // //   // Additional Nodemailer methods for other email types
// // //   async sendNodemailerBookingCancellation(booking: Booking): Promise<void> {
// // //     try {
// // //       const htmlContent = `
// // //       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
// // //         <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px 5px 0 0;">
// // //           <h1 style="color: #3c4043; margin: 0;">Booking Cancellation</h1>
// // //         </div>
        
// // //         <div style="padding: 20px;">
// // //           <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
// // //           <p style="color: #3c4043; font-size: 16px;">We're sorry to hear that you've cancelled your reservation. Your booking has been successfully cancelled as requested.</p>
          
// // //           <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
// // //             <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Cancellation Details</h2>
// // //             <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
// // //               </tr>
// // //             </table>
// // //           </div>
          
// // //           <p style="color: #3c4043; font-size: 16px;">We hope to welcome you another time.</p>
// // //           <p style="color: #3c4043; font-size: 16px;">Best regards,<br>The Milliden Garden's Team</p>
// // //         </div>
        
// // //         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
// // //           <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
// // //         </div>
// // //       </div>
// // //       `;
      
// // //       const mailOptions = {
// // //         from: process.env.EMAIL_USER || 'okanga.fidel@gmail.com',
// // //         to: booking.userEmail,
// // //         subject: 'Your Hotel Booking Cancellation',
// // //         html: htmlContent
// // //       };
      
// // //       await transporter.sendMail(mailOptions);
// // //       console.log(`Nodemailer cancellation email sent to ${booking.userEmail}`);
// // //     } catch (error) {
// // //       console.error('Error sending Nodemailer cancellation email:', error);
// // //     }
// // //   },
  
// // //   async sendNodemailerPaymentConfirmation(booking: Booking): Promise<void> {
// // //     try {
// // //       const htmlContent = `
// // //       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
// // //         <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px 5px 0 0;">
// // //           <h1 style="color: #3c4043; margin: 0;">Payment Confirmation</h1>
// // //         </div>
        
// // //         <div style="padding: 20px;">
// // //           <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
// // //           <p style="color: #3c4043; font-size: 16px;">Thank you for your payment. We've received your payment of KSH ${booking.totalPrice.toLocaleString()} for your upcoming stay.</p>
          
// // //           <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
// // //             <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Payment Details</h2>
// // //             <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Method:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">${booking.paymentMethod || 'Not specified'}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Amount Paid:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043;">KSH ${booking.totalPrice.toLocaleString()}</td>
// // //               </tr>
// // //               <tr>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Status:</td>
// // //                 <td style="padding: 8px 0; color: #3c4043; font-weight: bold; color: #34a853;">Completed</td>
// // //               </tr>
// // //             </table>
// // //           </div>
          
// // //           <p style="color: #3c4043; font-size: 16px;">We look forward to welcoming you!</p>
// // //           <p style="color: #3c4043; font-size: 16px;">Best regards,<br>The Hotel Team</p>
// // //         </div>
        
// // //         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
// // //           <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
// // //         </div>
// // //       </div>
// // //       `;
      
// // //       const mailOptions = {
// // //         from: process.env.EMAIL_USER || 'okanga.fidel@gmail.com',
// // //         to: booking.userEmail,
// // //         subject: 'Payment Confirmation for Your Hotel Booking',
// // //         html: htmlContent
// // //       };
      
// // //       await transporter.sendMail(mailOptions);
// // //       console.log(`Nodemailer payment confirmation email sent to ${booking.userEmail}`);
// // //     } catch (error) {
// // //       console.error('Error sending Nodemailer payment confirmation email:', error);
// // //     }
// // //   },
  
// // //   // Original SendGrid methods
// // //   async sendBookingCancellation(booking: Booking): Promise<void> {
// // //     try {
// // //       // First, send with SendGrid (existing functionality)
// // //       const msg: sgMail.MailDataRequired = {
// // //         to: booking.userEmail,
// // //         from: process.env.EMAIL_FROM || '',
// // //         subject: 'Your Booking Cancellation',
// // //         html: `
// // //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// // //           <h2 style="color: #393937; text-align: center;">Booking Cancellation</h2>
// // //           <p style="color: #393937;">Dear ${booking.userName},</p>
// // //           <p style="color: #393937;">Your booking has been cancelled as requested.</p>
          
// // //           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// // //             <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
// // //             <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// // //             <p><strong>Room:</strong> ${booking.roomName}</p>
// // //           </div>
          
// // //           <p style="color: #393937;">We hope to welcome you another time.</p>
          
// // //           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// // //             <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
// // //           </div>
// // //         </div>
// // //         `
// // //       };
      
// // //       await sgMail.send(msg);
      
// // //       // Then, also send with Nodemailer for redundancy
// // //       await this.sendNodemailerBookingCancellation(booking);
      
// // //       console.log(`Cancellation emails sent to ${booking.userEmail} via both services`);
// // //     } catch (error) {
// // //       console.error('Error sending cancellation email:', error);
// // //     }
// // //   },
  
// // //   async sendPaymentConfirmation(booking: Booking): Promise<void> {
// // //     try {
// // //       // First, send with SendGrid (existing functionality)
// // //       const msg: sgMail.MailDataRequired = {
// // //         to: booking.userEmail,
// // //         from: process.env.EMAIL_FROM || '',
// // //         subject: 'Payment Confirmation',
// // //         html: `
// // //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// // //           <h2 style="color: #393937; text-align: center;">Payment Confirmation</h2>
// // //           <p style="color: #393937;">Dear ${booking.userName},</p>
// // //           <p style="color: #393937;">Thank you for your payment. We've received your payment of KSH ${booking.totalPrice.toLocaleString()}.</p>
          
// // //           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// // //             <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
// // //             <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// // //             <p><strong>Room:</strong> ${booking.roomName}</p>
// // //             <p><strong>Payment Method:</strong> ${booking.paymentMethod}</p>
// // //             <p><strong>Amount Paid:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
// // //           </div>
          
// // //           <p style="color: #393937;">We look forward to welcoming you!</p>
          
// // //           <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// // //             <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
// // //           </div>
// // //         </div>
// // //         `
// // //       };
      
// // //       await sgMail.send(msg);
      
// // //       // Then, also send with Nodemailer for redundancy
// // //       await this.sendNodemailerPaymentConfirmation(booking);
      
// // //       console.log(`Payment confirmation emails sent to ${booking.userEmail} via both services`);
// // //     } catch (error) {
// // //       console.error('Error sending payment confirmation email:', error);
// // //     }
// // //   },
  
// // //   // Original SendGrid custom email method
// // //   async sendCustomEmail(to: string, subject: string, htmlContent: string): Promise<boolean> {
// // //     try {
// // //       const msg: sgMail.MailDataRequired = {
// // //         to,
// // //         from: process.env.EMAIL_FROM || '',
// // //         subject,
// // //         html: htmlContent
// // //       };
      
// // //       await sgMail.send(msg);
// // //       console.log(`Custom email sent to ${to}`);
// // //       return true;
// // //     } catch (error) {
// // //       console.error('Error sending custom email:', error);
// // //       return false;
// // //     }
// // //   }
// // // };
// // import sgMail from '@sendgrid/mail';
// // import dotenv from 'dotenv';
// // import nodemailer from 'nodemailer';
// // import { Booking } from '../interfaces/booking.interface';

// // dotenv.config();

// // // Configure SendGrid with API key
// // sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// // // Configure Nodemailer transporter
// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: process.env.EMAIL_USER || 'okanga.fidel@gmail.com',
// //     pass: process.env.EMAIL_PASS || 'rtwc uuew lbsg rjjm'
// //   }
// // });

// // // Verify transporter configuration
// // transporter.verify((error, success) => {
// //   if (error) {
// //     console.error('Nodemailer configuration error:', error);
// //   } else {
// //     console.log('Server is ready to send emails');
// //   }
// // });

// // export const emailService = {
// //   // Helper method to get validated from email
// //   getFromEmail(): string {
// //     const fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER || 'millidengroupltd@gmail.com';
// //     if (!fromEmail) {
// //       throw new Error('No from email configured. Please set EMAIL_FROM or EMAIL_USER in environment variables.');
// //     }
// //     return fromEmail;
// //   },

// //   // SendGrid methods with proper error handling
// //   async sendBookingConfirmation(booking: Booking): Promise<void> {
// //     try {
// //       // Try SendGrid first
// //       await this.sendSendGridBookingConfirmation(booking);
// //       console.log(`SendGrid confirmation email sent to ${booking.userEmail}`);
// //     } catch (sendgridError) {
// //       console.error('SendGrid failed, trying Nodemailer:', sendgridError);
      
// //       // Fallback to Nodemailer if SendGrid fails
// //       try {
// //         await this.sendNodemailerBookingConfirmation(booking);
// //         console.log(`Nodemailer confirmation email sent to ${booking.userEmail} (SendGrid fallback)`);
// //       } catch (nodemailerError) {
// //         console.error('Both email services failed:', {
// //           sendgrid: sendgridError,
// //           nodemailer: nodemailerError
// //         });
// //         // Don't throw error to prevent booking process from failing
// //       }
// //     }
// //   },
  
// //   async sendSendGridBookingConfirmation(booking: Booking): Promise<void> {
// //     const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
// //     const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
    
// //     const msg: sgMail.MailDataRequired = {
// //       to: booking.userEmail,
// //       from: {
// //         email: this.getFromEmail(),
// //         name: 'Milliden Gardens'
// //       },
// //       subject: 'Your Booking Confirmation - Milliden Gardens',
// //       html: `
// //       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// //         <h2 style="color: #393937; text-align: center;">Booking Confirmation</h2>
// //         <p style="color: #393937;">Dear ${booking.userName},</p>
// //         <p style="color: #393937;">Thank you for your booking. Your reservation has been confirmed.</p>
        
// //         <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// //           <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
// //           <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// //           <p><strong>Room:</strong> ${booking.roomName}</p>
// //           <p><strong>Check-in Date:</strong> ${checkInDate}</p>
// //           <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
// //           <p><strong>Number of Guests:</strong> ${booking.numberOfGuests}</p>
// //           <p><strong>Total Price:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
// //           ${booking.specialRequests ? `<p><strong>Special Requests:</strong> ${booking.specialRequests}</p>` : ''}
// //         </div>
        
// //         <p style="color: #393937;">We look forward to welcoming you!</p>
// //         <p style="color: #393937;">If you have any questions, please feel free to contact us.</p>
        
// //         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// //           <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
// //           <p style="color: #6f6b6b; font-size: 12px;">Rodi, Homa-Bay, Kenya | Phone: +254 753 755 016</p>
// //         </div>
// //       </div>
// //       `
// //     };
    
// //     await sgMail.send(msg);
// //   },
  
// //   // Enhanced Nodemailer method for booking confirmation
// //   async sendNodemailerBookingConfirmation(booking: Booking): Promise<void> {
// //     const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
// //     const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
    
// //     const htmlContent = `
// //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
// //       <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px 5px 0 0;">
// //         <h1 style="color: #3c4043; margin: 0;">🏨 Booking Confirmation</h1>
// //       </div>
      
// //       <div style="padding: 20px;">
// //         <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
// //         <p style="color: #3c4043; font-size: 16px;">Thank you for choosing Milliden Gardens! Your reservation has been confirmed and is ready for your arrival.</p>
        
// //         <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
// //           <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Booking Details</h2>
// //           <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-in:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${checkInDate}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-out:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${checkOutDate}</td>
// //             </tr>
// //             ${booking.specialRequests ? `
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Special Requests:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.specialRequests}</td>
// //             </tr>
// //             ` : ''}
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Guests:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.numberOfGuests}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Total Amount:</td>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">KSH ${booking.totalPrice.toLocaleString()}</td>
// //             </tr>
// //             ${booking.paymentMethod ? `
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Method:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.paymentMethod}</td>
// //             </tr>
// //             ` : ''}
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Status:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.paymentStatus}</td>
// //             </tr>
// //           </table>
// //         </div>
        
// //         <div style="background-color: #e8f0fe; padding: 15px; border-radius: 5px; margin: 20px 0;">
// //           <h3 style="color: #1a73e8; margin-top: 0;">📋 Important Information</h3>
// //           <ul style="color: #3c4043; padding-left: 20px; margin: 0;">
// //             <li>Check-in time starts at 2:00 PM</li>
// //             <li>Check-out time is until 12:00 PM</li>
// //             <li>Please bring a valid ID for check-in</li>
// //             <li>Free Wi-Fi is available in all rooms</li>
// //             <li>Contact us: +254 753 755 016</li>
// //           </ul>
// //         </div>
        
// //         <p style="color: #3c4043; font-size: 16px;">If you need to modify your reservation or have any questions, please don't hesitate to contact us.</p>
// //         <p style="color: #3c4043; font-size: 16px;">We look forward to welcoming you!</p>
        
// //         <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
// //       </div>
      
// //       <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
// //         <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
// //         <p style="color: #5f6368; font-size: 12px;">📍 Rodi, Homa-Bay, Kenya</p>
// //         <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
// //       </div>
// //     </div>
// //     `;
    
// //     const mailOptions = {
// //       from: {
// //         name: 'Milliden Gardens',
// //         address: this.getFromEmail()
// //       },
// //       to: booking.userEmail,
// //       subject: '🏨 Your Hotel Booking Confirmation - Milliden Gardens',
// //       html: htmlContent
// //     };
    
// //     await transporter.sendMail(mailOptions);
// //   },
  
// //   // Booking cancellation methods
// //   async sendBookingCancellation(booking: Booking): Promise<void> {
// //     try {
// //       // Try SendGrid first
// //       await this.sendSendGridBookingCancellation(booking);
// //       console.log(`SendGrid cancellation email sent to ${booking.userEmail}`);
// //     } catch (sendgridError) {
// //       console.error('SendGrid failed, trying Nodemailer:', sendgridError);
      
// //       // Fallback to Nodemailer if SendGrid fails
// //       try {
// //         await this.sendNodemailerBookingCancellation(booking);
// //         console.log(`Nodemailer cancellation email sent to ${booking.userEmail} (SendGrid fallback)`);
// //       } catch (nodemailerError) {
// //         console.error('Both email services failed:', {
// //           sendgrid: sendgridError,
// //           nodemailer: nodemailerError
// //         });
// //       }
// //     }
// //   },

// //   async sendSendGridBookingCancellation(booking: Booking): Promise<void> {
// //     const msg: sgMail.MailDataRequired = {
// //       to: booking.userEmail,
// //       from: {
// //         email: this.getFromEmail(),
// //         name: 'Milliden Gardens'
// //       },
// //       subject: 'Booking Cancellation - Milliden Gardens',
// //       html: `
// //       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// //         <h2 style="color: #393937; text-align: center;">Booking Cancellation</h2>
// //         <p style="color: #393937;">Dear ${booking.userName},</p>
// //         <p style="color: #393937;">Your booking has been cancelled as requested.</p>
        
// //         <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// //           <h3 style="color: #a89284; margin-top: 0;">Cancelled Booking Details</h3>
// //           <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// //           <p><strong>Room:</strong> ${booking.roomName}</p>
// //           <p><strong>Original Amount:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
// //         </div>
        
// //         <p style="color: #393937;">We hope to welcome you another time.</p>
        
// //         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// //           <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
// //         </div>
// //       </div>
// //       `
// //     };
    
// //     await sgMail.send(msg);
// //   },
  
// //   async sendNodemailerBookingCancellation(booking: Booking): Promise<void> {
// //     const htmlContent = `
// //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
// //       <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px 5px 0 0;">
// //         <h1 style="color: #3c4043; margin: 0;">❌ Booking Cancellation</h1>
// //       </div>
      
// //       <div style="padding: 20px;">
// //         <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
// //         <p style="color: #3c4043; font-size: 16px;">We're sorry to hear that you've cancelled your reservation. Your booking has been successfully cancelled as requested.</p>
        
// //         <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
// //           <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Cancellation Details</h2>
// //           <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Cancellation Date:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${new Date().toLocaleDateString()}</td>
// //             </tr>
// //           </table>
// //         </div>
        
// //         <p style="color: #3c4043; font-size: 16px;">We hope to welcome you another time in the future.</p>
// //         <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
// //       </div>
      
// //       <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
// //         <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
// //         <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
// //       </div>
// //     </div>
// //     `;
    
// //     const mailOptions = {
// //       from: {
// //         name: 'Milliden Gardens',
// //         address: this.getFromEmail()
// //       },
// //       to: booking.userEmail,
// //       subject: '❌ Booking Cancellation - Milliden Gardens',
// //       html: htmlContent
// //     };
    
// //     await transporter.sendMail(mailOptions);
// //   },
  
// //   // Payment confirmation methods
// //   async sendPaymentConfirmation(booking: Booking): Promise<void> {
// //     try {
// //       // Try SendGrid first
// //       await this.sendSendGridPaymentConfirmation(booking);
// //       console.log(`SendGrid payment confirmation email sent to ${booking.userEmail}`);
// //     } catch (sendgridError) {
// //       console.error('SendGrid failed, trying Nodemailer:', sendgridError);
      
// //       // Fallback to Nodemailer if SendGrid fails
// //       try {
// //         await this.sendNodemailerPaymentConfirmation(booking);
// //         console.log(`Nodemailer payment confirmation email sent to ${booking.userEmail} (SendGrid fallback)`);
// //       } catch (nodemailerError) {
// //         console.error('Both email services failed:', {
// //           sendgrid: sendgridError,
// //           nodemailer: nodemailerError
// //         });
// //       }
// //     }
// //   },

// //   async sendSendGridPaymentConfirmation(booking: Booking): Promise<void> {
// //     const msg: sgMail.MailDataRequired = {
// //       to: booking.userEmail,
// //       from: {
// //         email: this.getFromEmail(),
// //         name: 'Milliden Gardens'
// //       },
// //       subject: 'Payment Confirmation - Milliden Gardens',
// //       html: `
// //       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px;">
// //         <h2 style="color: #393937; text-align: center;">Payment Confirmation</h2>
// //         <p style="color: #393937;">Dear ${booking.userName},</p>
// //         <p style="color: #393937;">Thank you for your payment. We've received your payment of KSH ${booking.totalPrice.toLocaleString()}.</p>
        
// //         <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
// //           <h3 style="color: #a89284; margin-top: 0;">Payment Details</h3>
// //           <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
// //           <p><strong>Room:</strong> ${booking.roomName}</p>
// //           <p><strong>Payment Method:</strong> ${booking.paymentMethod || 'Not specified'}</p>
// //           <p><strong>Amount Paid:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
// //           <p><strong>Payment Status:</strong> <span style="color: #34a853; font-weight: bold;">Completed</span></p>
// //         </div>
        
// //         <p style="color: #393937;">We look forward to welcoming you!</p>
        
// //         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
// //           <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
// //         </div>
// //       </div>
// //       `
// //     };
    
// //     await sgMail.send(msg);
// //   },
  
// //   async sendNodemailerPaymentConfirmation(booking: Booking): Promise<void> {
// //     const htmlContent = `
// //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
// //       <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px 5px 0 0;">
// //         <h1 style="color: #3c4043; margin: 0;">💳 Payment Confirmation</h1>
// //       </div>
      
// //       <div style="padding: 20px;">
// //         <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
// //         <p style="color: #3c4043; font-size: 16px;">Thank you for your payment. We've received your payment of <strong>KSH ${booking.totalPrice.toLocaleString()}</strong> for your upcoming stay.</p>
        
// //         <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
// //           <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Payment Details</h2>
// //           <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Method:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${booking.paymentMethod || 'Not specified'}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Amount Paid:</td>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">KSH ${booking.totalPrice.toLocaleString()}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Status:</td>
// //               <td style="padding: 8px 0; color: #34a853; font-weight: bold;">✅ Completed</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Date:</td>
// //               <td style="padding: 8px 0; color: #3c4043;">${new Date().toLocaleDateString()}</td>
// //             </tr>
// //           </table>
// //         </div>
        
// //         <p style="color: #3c4043; font-size: 16px;">Your payment has been successfully processed. We look forward to welcoming you!</p>
// //         <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
// //       </div>
      
// //       <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
// //         <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
// //         <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
// //       </div>
// //     </div>
// //     `;
    
// //     const mailOptions = {
// //       from: {
// //         name: 'Milliden Gardens',
// //         address: this.getFromEmail()
// //       },
// //       to: booking.userEmail,
// //       subject: '💳 Payment Confirmation - Milliden Gardens',
// //       html: htmlContent
// //     };
    
// //     await transporter.sendMail(mailOptions);
// //   },
  
// //   // Custom email method with fallback
// //   async sendCustomEmail(to: string, subject: string, htmlContent: string): Promise<boolean> {
// //     try {
// //       // Try SendGrid first
// //       const msg: sgMail.MailDataRequired = {
// //         to,
// //         from: {
// //           email: this.getFromEmail(),
// //           name: 'Milliden Gardens'
// //         },
// //         subject,
// //         html: htmlContent
// //       };
      
// //       await sgMail.send(msg);
// //       console.log(`Custom email sent to ${to} via SendGrid`);
// //       return true;
// //     } catch (sendgridError) {
// //       console.error('SendGrid failed, trying Nodemailer:', sendgridError);
      
// //       // Fallback to Nodemailer
// //       try {
// //         const mailOptions = {
// //           from: {
// //             name: 'Milliden Gardens',
// //             address: this.getFromEmail()
// //           },
// //           to,
// //           subject,
// //           html: htmlContent
// //         };
        
// //         await transporter.sendMail(mailOptions);
// //         console.log(`Custom email sent to ${to} via Nodemailer (SendGrid fallback)`);
// //         return true;
// //       } catch (nodemailerError) {
// //         console.error('Both email services failed:', {
// //           sendgrid: sendgridError,
// //           nodemailer: nodemailerError
// //         });
// //         return false;
// //       }
// //     }
// //   },

// //   // Test email connectivity
// //   async testEmailConnectivity(): Promise<{ sendgrid: boolean; nodemailer: boolean }> {
// //     const results = { sendgrid: false, nodemailer: false };
    
// //     // Test SendGrid
// //     try {
// //       if (process.env.SENDGRID_API_KEY && this.getFromEmail()) {
// //         results.sendgrid = true;
// //       }
// //     } catch (error) {
// //       console.error('SendGrid test failed:', error);
// //     }
    
// //     // Test Nodemailer
// //     try {
// //       await transporter.verify();
// //       results.nodemailer = true;
// //     } catch (error) {
// //       console.error('Nodemailer test failed:', error);
// //     }
    
// //     return results;
// //   }
// // };
// import sgMail from '@sendgrid/mail';
// import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';
// import { Booking } from '../interfaces/booking.interface';

// dotenv.config();

// // Configure SendGrid with API key
// sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// // Configure Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER || 'okanga.fidel@gmail.com',
//     pass: process.env.EMAIL_PASS || 'rtwc uuew lbsg rjjm'
//   }
// });

// // Verify transporter configuration
// transporter.verify((error: any, success: boolean) => {
//   if (error) {
//     console.error('Nodemailer configuration error:', error);
//   } else {
//     console.log('Server is ready to send emails');
//   }
// });

// export const emailService = {
//   // Helper method to get validated from email
//   getFromEmail(): string {
//     const fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER || 'millidengroupltd@gmail.com';
//     if (!fromEmail) {
//       throw new Error('No from email configured. Please set EMAIL_FROM or EMAIL_USER in environment variables.');
//     }
//     return fromEmail;
//   },

//   // Helper method to get logo HTML
//   getLogoHtml(): string {
//     // Option 1: Use hosted logo (recommended for production)
//     const logoUrl = process.env.LOGO_URL || 'https://res.cloudinary.com/dnacduwvj/image/upload/v1748867327/Logo_tikehl.jpg';
    
//     // Option 2: Use base64 encoded logo (fallback)
//     // You can convert your logo to base64 at https://base64.guru/converter/encode/image
//     const base64Logo = process.env.LOGO_BASE64 || '';
    
//     if (logoUrl && logoUrl !== 'https://your-domain.com/assets/logo.png') {
//       return `
//         <div style="text-align: center; margin-bottom: 20px;">
//           <img src="${logoUrl}" 
//                alt="Milliden Gardens Logo" 
//                style="max-width: 200px; height: auto; display: block; margin: 0 auto;"
//                onerror="this.style.display='none';">
//         </div>
//       `;
//     } else if (base64Logo) {
//       return `
//         <div style="text-align: center; margin-bottom: 20px;">
//           <img src="data:image/png;base64,${base64Logo}" 
//                alt="Milliden Gardens Logo" 
//                style="max-width: 200px; height: auto; display: block; margin: 0 auto;">
//         </div>
//       `;
//     } else {
//       return `
//         <div style="text-align: center; margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;">
//           <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
//             🏨 Milliden Gardens
//           </h1>
//           <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">
//             Your Home Away From Home
//           </p>
//         </div>
//       `;
//     }
//   },

//   // SendGrid methods with proper error handling
//   async sendBookingConfirmation(booking: Booking): Promise<void> {
//     try {
//       // Try SendGrid first
//       await this.sendSendGridBookingConfirmation(booking);
//       console.log(`SendGrid confirmation email sent to ${booking.userEmail}`);
//     } catch (sendgridError) {
//       console.error('SendGrid failed, trying Nodemailer:', sendgridError);
      
//       // Fallback to Nodemailer if SendGrid fails
//       try {
//         await this.sendNodemailerBookingConfirmation(booking);
//         console.log(`Nodemailer confirmation email sent to ${booking.userEmail} (SendGrid fallback)`);
//       } catch (nodemailerError) {
//         console.error('Both email services failed:', {
//           sendgrid: sendgridError,
//           nodemailer: nodemailerError
//         });
//         // Don't throw error to prevent booking process from failing
//       }
//     }
//   },
  
//   async sendSendGridBookingConfirmation(booking: Booking): Promise<void> {
//     const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
//     const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
//     const logoHtml = this.getLogoHtml();
    
//     const msg: sgMail.MailDataRequired = {
//       to: booking.userEmail,
//       from: {
//         email: this.getFromEmail(),
//         name: 'Milliden Gardens'
//       },
//       subject: 'Your Booking Confirmation - Milliden Gardens',
//       html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
//         ${logoHtml}
        
//         <h2 style="color: #393937; text-align: center; margin-top: 0;">Booking Confirmation</h2>
//         <p style="color: #393937;">Dear ${booking.userName},</p>
//         <p style="color: #393937;">Thank you for your booking. Your reservation has been confirmed.</p>
        
//         <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
//           <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
//           <p><strong>Room:</strong> ${booking.roomName}</p>
//           <p><strong>Check-in Date:</strong> ${checkInDate}</p>
//           <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
//           <p><strong>Number of Guests:</strong> ${booking.numberOfGuests}</p>
//           <p><strong>Total Price:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
//           ${booking.specialRequests ? `<p><strong>Special Requests:</strong> ${booking.specialRequests}</p>` : ''}
//         </div>
        
//         <p style="color: #393937;">We look forward to welcoming you!</p>
//         <p style="color: #393937;">If you have any questions, please feel free to contact us.</p>
        
//         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
          
//           <p style="color: #6f6b6b; font-size: 12px;">Rodi, Homa-Bay, Kenya | Phone: +254 753 755 016</p>
//           <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
//         </div>
//       </div>
//       `
//     };
    
//     await sgMail.send(msg);
//   },
  
//   // Enhanced Nodemailer method for booking confirmation
//   async sendNodemailerBookingConfirmation(booking: Booking): Promise<void> {
//     const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
//     const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
//     const logoHtml = this.getLogoHtml();
    
//     const htmlContent = `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
//       ${logoHtml}
      
//       <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px; margin-bottom: 20px;">
//         <h1 style="color: #3c4043; margin: 0;">🏨 Booking Confirmation</h1>
//       </div>
      
//       <div style="padding: 20px;">
//         <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
//         <p style="color: #3c4043; font-size: 16px;">Thank you for choosing Milliden Gardens! Your reservation has been confirmed and is ready for your arrival.</p>
        
//         <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
//           <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Booking Details</h2>
//           <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-in:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${checkInDate}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-out:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${checkOutDate}</td>
//             </tr>
//             ${booking.specialRequests ? `
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Special Requests:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.specialRequests}</td>
//             </tr>
//             ` : ''}
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Guests:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.numberOfGuests}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Total Amount:</td>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">KSH ${booking.totalPrice.toLocaleString()}</td>
//             </tr>
//             ${booking.paymentMethod ? `
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Method:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.paymentMethod}</td>
//             </tr>
//             ` : ''}
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Status:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.paymentStatus}</td>
//             </tr>
//           </table>
//         </div>
        
//         <div style="background-color: #e8f0fe; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="color: #1a73e8; margin-top: 0;">📋 Important Information</h3>
//           <ul style="color: #3c4043; padding-left: 20px; margin: 0;">
//             <li>Check-in time starts at 2:00 PM</li>
//             <li>Check-out time is until 12:00 PM</li>
//             <li>Please bring a valid ID for check-in</li>
//             <li>Free Wi-Fi is available in all rooms</li>
//             <li>Contact us: +254 753 755 016</li>
//           </ul>
//         </div>
        
//         <p style="color: #3c4043; font-size: 16px;">If you need to modify your reservation or have any questions, please don't hesitate to contact us.</p>
//         <p style="color: #3c4043; font-size: 16px;">We look forward to welcoming you!</p>
        
//         <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
//       </div>
      
//       <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
        
//         <p style="color: #5f6368; font-size: 12px;">📍 Rodi, Homa-Bay, Kenya</p>
//         <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
//         <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
//       </div>
//     </div>
//     `;
    
//     const mailOptions = {
//       from: {
//         name: 'Milliden Gardens',
//         address: this.getFromEmail()
//       },
//       to: booking.userEmail,
//       subject: '🏨 Your Hotel Booking Confirmation - Milliden Gardens',
//       html: htmlContent
//     };
    
//     await transporter.sendMail(mailOptions);
//   },
  
//   // Booking cancellation methods
//   async sendBookingCancellation(booking: Booking): Promise<void> {
//     try {
//       // Try SendGrid first
//       await this.sendSendGridBookingCancellation(booking);
//       console.log(`SendGrid cancellation email sent to ${booking.userEmail}`);
//     } catch (sendgridError) {
//       console.error('SendGrid failed, trying Nodemailer:', sendgridError);
      
//       // Fallback to Nodemailer if SendGrid fails
//       try {
//         await this.sendNodemailerBookingCancellation(booking);
//         console.log(`Nodemailer cancellation email sent to ${booking.userEmail} (SendGrid fallback)`);
//       } catch (nodemailerError) {
//         console.error('Both email services failed:', {
//           sendgrid: sendgridError,
//           nodemailer: nodemailerError
//         });
//       }
//     }
//   },

//   async sendSendGridBookingCancellation(booking: Booking): Promise<void> {
//     const logoHtml = this.getLogoHtml();
    
//     const msg: sgMail.MailDataRequired = {
//       to: booking.userEmail,
//       from: {
//         email: this.getFromEmail(),
//         name: 'Milliden Gardens'
//       },
//       subject: 'Booking Cancellation - Milliden Gardens',
//       html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
//         ${logoHtml}
        
//         <h2 style="color: #393937; text-align: center; margin-top: 0;">Booking Cancellation</h2>
//         <p style="color: #393937;">Dear ${booking.userName},</p>
//         <p style="color: #393937;">Your booking has been cancelled as requested.</p>
        
//         <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="color: #a89284; margin-top: 0;">Cancelled Booking Details</h3>
//           <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
//           <p><strong>Room:</strong> ${booking.roomName}</p>
//           <p><strong>Original Amount:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
//         </div>
        
//         <p style="color: #393937;">We hope to welcome you another time.</p>
        
//         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
//           <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
//         </div>
//       </div>
//       `
//     };
    
//     await sgMail.send(msg);
//   },
  
//   async sendNodemailerBookingCancellation(booking: Booking): Promise<void> {
//     const logoHtml = this.getLogoHtml();
    
//     const htmlContent = `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
//       ${logoHtml}
      
//       <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px; margin-bottom: 20px;">
//         <h1 style="color: #3c4043; margin: 0;">❌ Booking Cancellation</h1>
//       </div>
      
//       <div style="padding: 20px;">
//         <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
//         <p style="color: #3c4043; font-size: 16px;">We're sorry to hear that you've cancelled your reservation. Your booking has been successfully cancelled as requested.</p>
        
//         <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
//           <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Cancellation Details</h2>
//           <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Cancellation Date:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${new Date().toLocaleDateString()}</td>
//             </tr>
//           </table>
//         </div>
        
//         <p style="color: #3c4043; font-size: 16px;">We hope to welcome you another time in the future.</p>
//         <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
//       </div>
      
//       <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
        
//         <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
//         <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
//       </div>
//     </div>
//     `;
    
//     const mailOptions = {
//       from: {
//         name: 'Milliden Gardens',
//         address: this.getFromEmail()
//       },
//       to: booking.userEmail,
//       subject: '❌ Booking Cancellation - Milliden Gardens',
//       html: htmlContent
//     };
    
//     await transporter.sendMail(mailOptions);
//   },
  
//   // Payment confirmation methods
//   async sendPaymentConfirmation(booking: Booking): Promise<void> {
//     try {
//       // Try SendGrid first
//       await this.sendSendGridPaymentConfirmation(booking);
//       console.log(`SendGrid payment confirmation email sent to ${booking.userEmail}`);
//     } catch (sendgridError) {
//       console.error('SendGrid failed, trying Nodemailer:', sendgridError);
      
//       // Fallback to Nodemailer if SendGrid fails
//       try {
//         await this.sendNodemailerPaymentConfirmation(booking);
//         console.log(`Nodemailer payment confirmation email sent to ${booking.userEmail} (SendGrid fallback)`);
//       } catch (nodemailerError) {
//         console.error('Both email services failed:', {
//           sendgrid: sendgridError,
//           nodemailer: nodemailerError
//         });
//       }
//     }
//   },

//   async sendSendGridPaymentConfirmation(booking: Booking): Promise<void> {
//     const logoHtml = this.getLogoHtml();
    
//     const msg: sgMail.MailDataRequired = {
//       to: booking.userEmail,
//       from: {
//         email: this.getFromEmail(),
//         name: 'Milliden Gardens'
//       },
//       subject: 'Payment Confirmation - Milliden Gardens',
//       html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
//         ${logoHtml}
        
//         <h2 style="color: #393937; text-align: center; margin-top: 0;">Payment Confirmation</h2>
//         <p style="color: #393937;">Dear ${booking.userName},</p>
//         <p style="color: #393937;">Thank you for your payment. We've received your payment of KSH ${booking.totalPrice.toLocaleString()}.</p>
        
//         <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="color: #a89284; margin-top: 0;">Payment Details</h3>
//           <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
//           <p><strong>Room:</strong> ${booking.roomName}</p>
//           <p><strong>Payment Method:</strong> ${booking.paymentMethod || 'Not specified'}</p>
//           <p><strong>Amount Paid:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
//           <p><strong>Payment Status:</strong> <span style="color: #34a853; font-weight: bold;">Completed</span></p>
//         </div>
        
//         <p style="color: #393937;">We look forward to welcoming you!</p>
        
//         <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
//           <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
//         </div>
//       </div>
//       `
//     };
    
//     await sgMail.send(msg);
//   },
  
//   async sendNodemailerPaymentConfirmation(booking: Booking): Promise<void> {
//     const logoHtml = this.getLogoHtml();
    
//     const htmlContent = `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
//       ${logoHtml}
      
//       <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px; margin-bottom: 20px;">
//         <h1 style="color: #3c4043; margin: 0;">💳 Payment Confirmation</h1>
//       </div>
      
//       <div style="padding: 20px;">
//         <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
//         <p style="color: #3c4043; font-size: 16px;">Thank you for your payment. We've received your payment of <strong>KSH ${booking.totalPrice.toLocaleString()}</strong> for your upcoming stay.</p>
        
//         <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
//           <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Payment Details</h2>
//           <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Method:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.paymentMethod || 'Not specified'}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Amount Paid:</td>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">KSH ${booking.totalPrice.toLocaleString()}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Status:</td>
//               <td style="padding: 8px 0; color: #34a853; font-weight: bold;">✅ Completed</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Date:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${new Date().toLocaleDateString()}</td>
//             </tr>
//           </table>
//         </div>
        
//         <p style="color: #3c4043; font-size: 16px;">Your payment has been successfully processed. We look forward to welcoming you!</p>
//         <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
//       </div>
      
//       <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
        
//         <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
//         <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
//       </div>
//     </div>
//     `;
    
//     const mailOptions = {
//       from: {
//         name: 'Milliden Gardens',
//         address: this.getFromEmail()
//       },
//       to: booking.userEmail,
//       subject: '💳 Payment Confirmation - Milliden Gardens',
//       html: htmlContent
//     };
    
//     await transporter.sendMail(mailOptions);
//   },
  
//   // Custom email method with fallback
//   async sendCustomEmail(to: string, subject: string, htmlContent: string, includeLogo: boolean = true): Promise<boolean> {
//     try {
//       // Add logo to custom content if requested
//       let finalHtmlContent: string;
//       if (includeLogo) {
//         finalHtmlContent = `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//              ${this.getLogoHtml()}
//              ${htmlContent}
//            </div>`;
//       } else {
//         finalHtmlContent = htmlContent;
//       }
      
//       // Try SendGrid first
//       const msg: sgMail.MailDataRequired = {
//         to,
//         from: {
//           email: this.getFromEmail(),
//           name: 'Milliden Gardens'
//         },
//         subject,
//         html: finalHtmlContent
//       };
      
//       await sgMail.send(msg);
//       console.log(`Custom email sent to ${to} via SendGrid`);
//       return true;
//       } catch (sendgridError) {
//       console.error('SendGrid failed for custom email, trying Nodemailer:', sendgridError);
      
//       // Fallback to Nodemailer if SendGrid fails
//       try {
//         let finalHtmlContent: string;
//         if (includeLogo) {
//           finalHtmlContent = `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//                ${this.getLogoHtml()}
//                ${htmlContent}
//              </div>`;
//         } else {
//           finalHtmlContent = htmlContent;
//         }
//         const mailOptions = {
//           from: {
//             name: 'Milliden Gardens',
//             address: this.getFromEmail()
//           },
//           to,
//           subject,
//           html: finalHtmlContent
//         };
        
//         await transporter.sendMail(mailOptions);
//         console.log(`Custom email sent to ${to} via Nodemailer (SendGrid fallback)`);
//         return true;
//       } catch (nodemailerError) {
//         console.error('Both email services failed for custom email:', {
//           sendgrid: sendgridError,
//           nodemailer: nodemailerError
//         });
//         return false;
//       }
//     }
//   },

//   // Contact form/inquiry email method
//   async sendContactInquiry(contactData: {
//     name: string;
//     email: string;
//     phone?: string;
//     subject: string;
//     message: string;
//   }): Promise<void> {
//     const htmlContent = `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
//       ${this.getLogoHtml()}
      
//       <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px; margin-bottom: 20px;">
//         <h1 style="color: #3c4043; margin: 0;">📧 New Contact Inquiry</h1>
//       </div>
      
//       <div style="padding: 20px;">
//         <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
//           <h2 style="color: #5f6368; margin-top: 0;">Contact Details</h2>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Name:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${contactData.name}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Email:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${contactData.email}</td>
//             </tr>
//             ${contactData.phone ? `
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Phone:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${contactData.phone}</td>
//             </tr>
//             ` : ''}
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Subject:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${contactData.subject}</td>
//             </tr>
//           </table>
//         </div>
        
//         <div style="background-color: #e8f0fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="color: #1a73e8; margin-top: 0;">Message:</h3>
//           <div style="color: #3c4043; white-space: pre-wrap; line-height: 1.6;">${contactData.message}</div>
//         </div>
        
//         <div style="text-align: center; margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
//           <p style="color: #5f6368; margin: 0; font-size: 14px;">
//             <strong>Reply to:</strong> <a href="mailto:${contactData.email}" style="color: #1a73e8;">${contactData.email}</a>
//           </p>
//         </div>
//       </div>
//     </div>
//     `;

//     try {
//       await this.sendCustomEmail(
//         this.getFromEmail(), // Send to hotel email
//         `Contact Inquiry: ${contactData.subject}`,
//         htmlContent,
//         true
//       );
//       console.log(`Contact inquiry email sent from ${contactData.email}`);
//     } catch (error) {
//       console.error('Failed to send contact inquiry email:', error);
//       throw error;
//     }
//   },

//   // Welcome email for new users
//   async sendWelcomeEmail(userEmail: string, userName: string): Promise<void> {
//     const htmlContent = `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
//       ${this.getLogoHtml()}
      
//       <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px; margin-bottom: 20px;">
//         <h1 style="color: #3c4043; margin: 0;">🎉 Welcome to Milliden Gardens</h1>
//       </div>
      
//       <div style="padding: 20px;">
//         <p style="color: #3c4043; font-size: 16px;">Dear <strong>${userName}</strong>,</p>
//         <p style="color: #3c4043; font-size: 16px;">Welcome to Milliden Gardens! We're delighted to have you join our family of valued guests.</p>
        
//         <div style="background-color: #e8f0fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="color: #1a73e8; margin-top: 0;">🏨 What to Expect</h3>
//           <ul style="color: #3c4043; padding-left: 20px; line-height: 1.8;">
//             <li>Comfortable, well-appointed rooms with modern amenities</li>
//             <li>Complimentary Wi-Fi throughout the property</li>
//             <li>24/7 customer service support</li>
//             <li>Easy online booking and management</li>
//             <li>Special offers and promotions for returning guests</li>
//           </ul>
//         </div>
        
//         <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="color: #5f6368; margin-top: 0;">📍 Our Location</h3>
//           <p style="color: #3c4043; margin: 0;">Located in the heart of Rodi, Homa-Bay, Kenya, we offer easy access to local attractions while providing a peaceful retreat.</p>
//         </div>
        
//         <div style="text-align: center; margin: 30px 0;">
//           <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; border-radius: 10px;">
//             <p style="margin: 0; font-size: 18px; font-weight: bold;">Ready to book your stay?</p>
//             <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Contact us at +254 753 755 016</p>
//           </div>
//         </div>
        
//         <p style="color: #3c4043; font-size: 16px;">Thank you for choosing Milliden Gardens. We look forward to providing you with an exceptional experience!</p>
//         <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
//       </div>
      
//       <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
        
//         <p style="color: #5f6368; font-size: 12px;">📍 Rodi, Homa-Bay, Kenya</p>
//         <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
//         <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
//       </div>
//     </div>
//     `;

//     try {
//       await this.sendCustomEmail(
//         userEmail,
//         '🎉 Welcome to Milliden Gardens - Your Home Away From Home',
//         htmlContent,
//         false // Logo already included in htmlContent
//       );
//       console.log(`Welcome email sent to ${userEmail}`);
//     } catch (error) {
//       console.error('Failed to send welcome email:', error);
//       throw error;
//     }
//   },

//   // Reminder email for upcoming bookings
//   async sendBookingReminder(booking: Booking, daysUntilCheckIn: number): Promise<void> {
//     const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
//     const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
    
//     const htmlContent = `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
//       ${this.getLogoHtml()}
      
//       <div style="text-align: center; padding: 20px 0; background-color: #fff3cd; border-radius: 5px; margin-bottom: 20px; border: 1px solid #ffeaa7;">
//         <h1 style="color: #856404; margin: 0;">⏰ Your Stay is Coming Up!</h1>
//         <p style="color: #856404; margin: 10px 0 0 0; font-size: 18px; font-weight: bold;">
//           ${daysUntilCheckIn === 1 ? 'Tomorrow' : `${daysUntilCheckIn} days to go`}
//         </p>
//       </div>
      
//       <div style="padding: 20px;">
//         <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
//         <p style="color: #3c4043; font-size: 16px;">We're excited to welcome you to Milliden Gardens ${daysUntilCheckIn === 1 ? 'tomorrow' : `in ${daysUntilCheckIn} days`}!</p>
        
//         <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
//           <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Your Booking Details</h2>
//           <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-in:</td>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">${checkInDate}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-out:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${checkOutDate}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Guests:</td>
//               <td style="padding: 8px 0; color: #3c4043;">${booking.numberOfGuests}</td>
//             </tr>
//           </table>
//         </div>
        
//         <div style="background-color: #e8f0fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
//           <h3 style="color: #1a73e8; margin-top: 0;">📋 Check-in Reminders</h3>
//           <ul style="color: #3c4043; padding-left: 20px; line-height: 1.8; margin: 0;">
//             <li>Check-in time: 2:00 PM onwards</li>
//             <li>Please bring a valid photo ID</li>
//             <li>Our address: Rodi, Homa-Bay, Kenya</li>
//             <li>Contact us: +254 753 755 016</li>
//             <li>Free Wi-Fi available in all rooms</li>
//           </ul>
//         </div>
        
//         <div style="text-align: center; margin: 30px 0;">
//           <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px;">
//             <p style="margin: 0; font-size: 18px; font-weight: bold;">Need to make changes?</p>
//             <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Contact us at +254 753 755 016</p>
//           </div>
//         </div>
        
//         <p style="color: #3c4043; font-size: 16px;">We can't wait to welcome you and make your stay memorable!</p>
//         <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
//       </div>
      
//       <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
        
//         <p style="color: #5f6368; font-size: 12px;">📍 Rodi, Homa-Bay, Kenya</p>
//         <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
//         <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
//       </div>
//     </div>
//     `;

//     try {
//       await this.sendCustomEmail(
//         booking.userEmail,
//         `⏰ Your stay at Milliden Gardens is ${daysUntilCheckIn === 1 ? 'tomorrow' : `in ${daysUntilCheckIn} days`}!`,
//         htmlContent,
//         false // Logo already included in htmlContent
//       );
//       console.log(`Booking reminder sent to ${booking.userEmail}`);
//     } catch (error) {
//       console.error('Failed to send booking reminder:', error);
//       throw error;
//     }
//   },
  
//   // Test email configuration
//   async testEmailConfiguration(): Promise<{ sendgrid: boolean; nodemailer: boolean }> {
//     const testResults = {
//       sendgrid: false,
//       nodemailer: false
//     };

//     // Test SendGrid
//     try {
//       const testMsg: sgMail.MailDataRequired = {
//         to: this.getFromEmail(),
//         from: {
//           email: this.getFromEmail(),
//           name: 'Milliden Gardens'
//         },
//         subject: 'SendGrid Test Email',
//         html: '<p>This is a test email from SendGrid configuration.</p>'
//       };
      
//       await sgMail.send(testMsg);
//       testResults.sendgrid = true;
//       console.log('SendGrid test email sent successfully');
//     } catch (error) {
//       console.error('SendGrid test failed:', error);
//     }

//     // Test Nodemailer
//     try {
//       const testMailOptions = {
//         from: {
//           name: 'Milliden Gardens',
//           address: this.getFromEmail()
//         },
//         to: this.getFromEmail(),
//         subject: 'Nodemailer Test Email',
//         html: '<p>This is a test email from Nodemailer configuration.</p>'
//       };
      
//       await transporter.sendMail(testMailOptions);
//       testResults.nodemailer = true;
//       console.log('Nodemailer test email sent successfully');
//     } catch (error) {
//       console.error('Nodemailer test failed:', error);
//     }

//     return testResults;
//   }
// };
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { Booking } from '../interfaces/booking.interface';

dotenv.config();

// Configure SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// Configure Nodemailer transporter
// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'okanga.fidel@gmail.com',
    pass: process.env.EMAIL_PASS || 'rtwc uuew lbsg rjjm'
  }
});

// Verify transporter configuration
transporter.verify((error: any, success: boolean) => {
  if (error) {
    console.error('Nodemailer configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

export const emailService = {
  // Admin email configuration
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'fidelqastro32@gmail.com',

  // Helper method to get validated from email
  getFromEmail(): string {
    const fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER || 'millidengroupltd@gmail.com';
    if (!fromEmail) {
      throw new Error('No from email configured. Please set EMAIL_FROM or EMAIL_USER in environment variables.');
    }
    return fromEmail;
  },

  // Helper method to get logo HTML
  getLogoHtml(): string {
    // Option 1: Use hosted logo (recommended for production)
    const logoUrl = process.env.LOGO_URL || 'https://res.cloudinary.com/dnacduwvj/image/upload/v1748867327/Logo_tikehl.jpg';
    
    // Option 2: Use base64 encoded logo (fallback)
    // You can convert your logo to base64 at https://base64.guru/converter/encode/image
    const base64Logo = process.env.LOGO_BASE64 || '';
    
    if (logoUrl && logoUrl !== 'https://your-domain.com/assets/logo.png') {
      return `
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="${logoUrl}" 
               alt="Milliden Gardens Logo" 
               style="max-width: 200px; height: auto; display: block; margin: 0 auto;"
               onerror="this.style.display='none';">
        </div>
      `;
    } else if (base64Logo) {
      return `
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="data:image/png;base64,${base64Logo}" 
               alt="Milliden Gardens Logo" 
               style="max-width: 200px; height: auto; display: block; margin: 0 auto;">
        </div>
      `;
    } else {
      return `
        <div style="text-align: center; margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
            🏨 Milliden Gardens
          </h1>
          <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">
            Your Home Away From Home
          </p>
        </div>
      `;
    }
  },

  // MODIFIED: Enhanced booking confirmation method with admin notification
  async sendBookingConfirmation(booking: Booking): Promise<void> {
    let customerEmailSent = false;
    
    try {
      // Try SendGrid first for customer
      await this.sendSendGridBookingConfirmation(booking);
      console.log(`SendGrid confirmation email sent to ${booking.userEmail}`);
      customerEmailSent = true;
    } catch (sendgridError) {
      console.error('SendGrid failed, trying Nodemailer:', sendgridError);
      
      // Fallback to Nodemailer if SendGrid fails
      try {
        await this.sendNodemailerBookingConfirmation(booking);
        console.log(`Nodemailer confirmation email sent to ${booking.userEmail} (SendGrid fallback)`);
        customerEmailSent = true;
      } catch (nodemailerError) {
        console.error('Both email services failed:', {
          sendgrid: sendgridError,
          nodemailer: nodemailerError
        });
        // Don't throw error to prevent booking process from failing
      }
    }

    // NEW: Send admin notification if customer email was successful
    if (customerEmailSent) {
      try {
        await this.sendAdminBookingNotification(booking);
        console.log(`Admin notification sent for booking ${booking.bookingId || booking._id}`);
      } catch (adminEmailError) {
        console.error('Failed to send admin notification:', adminEmailError);
        // Don't throw error - admin notification failure shouldn't affect booking
      }
    }
  },
  
  async sendSendGridBookingConfirmation(booking: Booking): Promise<void> {
    const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
    const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
    const logoHtml = this.getLogoHtml();
    
    const msg: sgMail.MailDataRequired = {
      to: booking.userEmail,
      from: {
        email: this.getFromEmail(),
        name: 'Milliden Gardens'
      },
      subject: 'Your Booking Confirmation - Milliden Gardens',
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
        ${logoHtml}
        
        <h2 style="color: #393937; text-align: center; margin-top: 0;">Booking Confirmation</h2>
        <p style="color: #393937;">Dear ${booking.userName},</p>
        <p style="color: #393937;">Thank you for your booking. Your reservation has been confirmed.</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #a89284; margin-top: 0;">Booking Details</h3>
          <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
          <p><strong>Room:</strong> ${booking.roomName}</p>
          <p><strong>Check-in Date:</strong> ${checkInDate}</p>
          <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
          <p><strong>Number of Guests:</strong> ${booking.numberOfGuests}</p>
          <p><strong>Total Price:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
          ${booking.specialRequests ? `<p><strong>Special Requests:</strong> ${booking.specialRequests}</p>` : ''}
        </div>
        
        <p style="color: #393937;">We look forward to welcoming you!</p>
        <p style="color: #393937;">If you have any questions, please feel free to contact us.</p>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
          
          <p style="color: #6f6b6b; font-size: 12px;">Rodi, Homa-Bay, Kenya | Phone: +254 753 755 016</p>
          <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
        </div>
      </div>
      `
    };
    
    await sgMail.send(msg);
  },
  
  // Enhanced Nodemailer method for booking confirmation
  async sendNodemailerBookingConfirmation(booking: Booking): Promise<void> {
    const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
    const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
    const logoHtml = this.getLogoHtml();
    
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
      ${logoHtml}
      
      <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px; margin-bottom: 20px;">
        <h1 style="color: #3c4043; margin: 0;">🏨 Booking Confirmation</h1>
      </div>
      
      <div style="padding: 20px;">
        <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
        <p style="color: #3c4043; font-size: 16px;">Thank you for choosing Milliden Gardens! Your reservation has been confirmed and is ready for your arrival.</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Booking Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
              <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
              <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-in:</td>
              <td style="padding: 8px 0; color: #3c4043;">${checkInDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-out:</td>
              <td style="padding: 8px 0; color: #3c4043;">${checkOutDate}</td>
            </tr>
            ${booking.specialRequests ? `
            <tr>
              <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Special Requests:</td>
              <td style="padding: 8px 0; color: #3c4043;">${booking.specialRequests}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Guests:</td>
              <td style="padding: 8px 0; color: #3c4043;">${booking.numberOfGuests}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Total Amount:</td>
              <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">KSH ${booking.totalPrice.toLocaleString()}</td>
            </tr>
            ${booking.paymentMethod ? `
            <tr>
              <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Method:</td>
              <td style="padding: 8px 0; color: #3c4043;">${booking.paymentMethod}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Status:</td>
              <td style="padding: 8px 0; color: #3c4043;">${booking.paymentStatus}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #e8f0fe; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #1a73e8; margin-top: 0;">📋 Important Information</h3>
          <ul style="color: #3c4043; padding-left: 20px; margin: 0;">
            <li>Check-in time starts at 2:00 PM</li>
            <li>Check-out time is until 12:00 PM</li>
            <li>Please bring a valid ID for check-in</li>
            <li>Free Wi-Fi is available in all rooms</li>
            <li>Contact us: +254 753 755 016</li>
          </ul>
        </div>
        
        <p style="color: #3c4043; font-size: 16px;">If you need to modify your reservation or have any questions, please don't hesitate to contact us.</p>
        <p style="color: #3c4043; font-size: 16px;">We look forward to welcoming you!</p>
        
        <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
        
        <p style="color: #5f6368; font-size: 12px;">📍 Rodi, Homa-Bay, Kenya</p>
        <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
        <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
      </div>
    </div>
    `;
    
    const mailOptions = {
      from: {
        name: 'Milliden Gardens',
        address: this.getFromEmail()
      },
      to: booking.userEmail,
      subject: '🏨 Your Hotel Booking Confirmation - Milliden Gardens',
      html: htmlContent
    };
    
    await transporter.sendMail(mailOptions);
  },
async sendBookingCancellation(booking: Booking): Promise<void> {
  try {
    // Try SendGrid first
    await this.sendSendGridBookingCancellation(booking);
    console.log(`SendGrid cancellation email sent to ${booking.userEmail}`);
  } catch (sendgridError) {
    console.error('SendGrid failed, trying Nodemailer:', sendgridError);
    
    // Fallback to Nodemailer if SendGrid fails
    try {
      await this.sendNodemailerBookingCancellation(booking);
      console.log(`Nodemailer cancellation email sent to ${booking.userEmail} (SendGrid fallback)`);
    } catch (nodemailerError) {
      console.error('Both email services failed:', {
        sendgrid: sendgridError,
        nodemailer: nodemailerError
      });
    }
  }
},

  // NEW: Admin notification methods
  async sendAdminBookingNotification(booking: Booking): Promise<void> {
    try {
      // Try SendGrid first
      await this.sendSendGridAdminNotification(booking);
      console.log(`SendGrid admin notification sent for booking ${booking.bookingId || booking._id}`);
    } catch (sendgridError) {
      console.error('SendGrid admin notification failed, trying Nodemailer:', sendgridError);
      
      // Fallback to Nodemailer if SendGrid fails
      try {
        await this.sendNodemailerAdminNotification(booking);
        console.log(`Nodemailer admin notification sent for booking ${booking.bookingId || booking._id} (SendGrid fallback)`);
      } catch (nodemailerError) {
        console.error('Both email services failed for admin notification:', {
          sendgrid: sendgridError,
          nodemailer: nodemailerError
        });
        throw nodemailerError; // Re-throw to let caller know notification failed
      }
    }
  },

  async sendSendGridAdminNotification(booking: Booking): Promise<void> {
    const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
    const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
    const bookingDate = new Date().toLocaleDateString();
    const logoHtml = this.getLogoHtml();
    
    const msg: sgMail.MailDataRequired = {
      to: this.ADMIN_EMAIL,
      from: {
        email: this.getFromEmail(),
        name: 'Milliden Gardens Booking System'
      },
      subject: `🔔 New Booking Alert - ${booking.userName} - ${booking.roomName}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
        ${logoHtml}
        
        <div style="text-align: center; padding: 20px 0; background-color: #d4edda; border-radius: 5px; margin-bottom: 20px; border: 1px solid #c3e6cb;">
          <h1 style="color: #155724; margin: 0;">🔔 New Booking Alert</h1>
          <p style="color: #155724; margin: 10px 0 0 0; font-size: 16px; font-weight: bold;">
            A new booking has been made!
          </p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #495057; margin-top: 0; border-bottom: 1px solid #dee2e6; padding-bottom: 10px;">Customer Information</h2>
          <p><strong>Name:</strong> ${booking.userName}</p>
          <p><strong>Email:</strong> <a href="mailto:${booking.userEmail}" style="color: #007bff;">${booking.userEmail}</a></p>
          ${booking.userPhone ? `<p><strong>Phone:</strong> <a href="tel:${booking.userPhone}" style="color: #007bff;">${booking.userPhone}</a></p>` : ''}
        </div>
        
        <div style="background-color: #fff3cd; padding: 20px; border-radius: 5px; margin: 20px 0; border: 1px solid #ffeaa7;">
          <h2 style="color: #856404; margin-top: 0; border-bottom: 1px solid #ffeaa7; padding-bottom: 10px;">Booking Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Booking Reference:</td>
              <td style="padding: 8px 0; color: #856404;">${booking.bookingId || booking._id}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Room:</td>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">${booking.roomName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Check-in Date:</td>
              <td style="padding: 8px 0; color: #856404;">${checkInDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Check-out Date:</td>
              <td style="padding: 8px 0; color: #856404;">${checkOutDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Number of Guests:</td>
              <td style="padding: 8px 0; color: #856404;">${booking.numberOfGuests}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Total Price:</td>
              <td style="padding: 8px 0; color: #856404; font-weight: bold; font-size: 18px;">KSH ${booking.totalPrice.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Payment Status:</td>
              <td style="padding: 8px 0; color: #856404;">${booking.paymentStatus}</td>
            </tr>
            ${booking.paymentMethod ? `
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Payment Method:</td>
              <td style="padding: 8px 0; color: #856404;">${booking.paymentMethod}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Booking Date:</td>
              <td style="padding: 8px 0; color: #856404;">${bookingDate}</td>
            </tr>
          </table>
          
          ${booking.specialRequests ? `
          <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #ffeaa7;">
            <p style="color: #856404; font-weight: bold; margin: 0 0 8px 0;">Special Requests:</p>
            <p style="color: #856404; background-color: #fff; padding: 10px; border-radius: 5px; margin: 0;">${booking.specialRequests}</p>
          </div>
          ` : ''}
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 15px; border-radius: 10px;">
            <p style="margin: 0; font-size: 16px; font-weight: bold;">📋 Action Required</p>
            <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">
              Please prepare the room and confirm availability
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
          <p style="color: #6f6b6b; font-size: 12px;">📍 Rodi, Homa-Bay, Kenya | 📞 +254 753 755 016</p>
          <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens Admin System</p>
        </div>
      </div>
      `
    };
    
    await sgMail.send(msg);
  },

  async sendNodemailerAdminNotification(booking: Booking): Promise<void> {
    const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
    const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
    const bookingDate = new Date().toLocaleDateString();
    const logoHtml = this.getLogoHtml();
    
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
      ${logoHtml}
      
      <div style="text-align: center; padding: 20px 0; background-color: #d4edda; border-radius: 5px; margin-bottom: 20px; border: 1px solid #c3e6cb;">
        <h1 style="color: #155724; margin: 0;">🔔 New Booking Alert</h1>
        <p style="color: #155724; margin: 10px 0 0 0; font-size: 16px; font-weight: bold;">
          A new booking has been made!
        </p>
      </div>
      
      <div style="padding: 20px;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #495057; margin-top: 0; border-bottom: 1px solid #dee2e6; padding-bottom: 10px;">👤 Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #495057; font-weight: bold;">Name:</td>
              <td style="padding: 8px 0; color: #495057;">${booking.userName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #495057; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #495057;"><a href="mailto:${booking.userEmail}" style="color: #007bff; text-decoration: none;">${booking.userEmail}</a></td>
            </tr>
            ${booking.userPhone ? `
            <tr>
              <td style="padding: 8px 0; color: #495057; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; color: #495057;"><a href="tel:${booking.userPhone}" style="color: #007bff; text-decoration: none;">${booking.userPhone}</a></td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        <div style="background-color: #fff3cd; padding: 20px; border-radius: 5px; margin: 20px 0; border: 1px solid #ffeaa7;">
          <h2 style="color: #856404; margin-top: 0; border-bottom: 1px solid #ffeaa7; padding-bottom: 10px;">🏨 Booking Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold; width: 40%;">Booking Reference:</td>
              <td style="padding: 8px 0; color: #856404; font-family: monospace; background-color: #fff; padding: 4px 8px; border-radius: 3px;">${booking.bookingId || booking._id}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Room:</td>
              <td style="padding: 8px 0; color: #856404; font-weight: bold; font-size: 16px;">${booking.roomName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Check-in Date:</td>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">${checkInDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Check-out Date:</td>
              <td style="padding: 8px 0; color: #856404;">${checkOutDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Duration:</td>
              <td style="padding: 8px 0; color: #856404;">${Math.ceil((new Date(booking.checkOutDate).getTime() - new Date(booking.checkInDate).getTime()) / (1000 * 3600 * 24))} nights</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Number of Guests:</td>
              <td style="padding: 8px 0; color: #856404;">${booking.numberOfGuests}</td>
            </tr>
            <tr style="background-color: #fff; border-radius: 5px;">
              <td style="padding: 12px 8px; color: #856404; font-weight: bold; font-size: 16px;">Total Revenue:</td>
              <td style="padding: 12px 8px; color: #856404; font-weight: bold; font-size: 20px;">💰 KSH ${booking.totalPrice.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Payment Status:</td>
              <td style="padding: 8px 0; color: #856404;">
                <span style="padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: bold; 
                     ${booking.paymentStatus === 'completed'
                       ? 'background-color: #d4edda; color: #155724;'
                       : 'background-color: #f8d7da; color: #721c24;'}">
                  ${booking.paymentStatus}
                </span>
              </td>
            </tr>
            ${booking.paymentMethod ? `
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Payment Method:</td>
              <td style="padding: 8px 0; color: #856404;">${booking.paymentMethod}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; color: #856404; font-weight: bold;">Booking Date:</td>
              <td style="padding: 8px 0; color: #856404;">${bookingDate}</td>
            </tr>
          </table>
          
          ${booking.specialRequests ? `
          <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #ffeaa7;">
            <p style="color: #856404; font-weight: bold; margin: 0 0 8px 0;">📝 Special Requests:</p>
            <div style="color: #856404; background-color: #fff; padding: 15px; border-radius: 5px; margin: 0; border-left: 4px solid #ffc107;">
              <p style="margin: 0; font-style: italic;">"${booking.specialRequests}"</p>
            </div>
          </div>
          ` : ''}
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 20px; border-radius: 10px; border: 1px solid #28a745;">
            <h3 style="margin: 0 0 10px 0; font-size: 18px;">📋 Action Required</h3>
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">
              Please prepare the room and confirm availability for check-in
            </p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2);">
              <p style="margin: 0; font-size: 12px; opacity: 0.8;">
                Expected check-in: ${checkInDate} at 2:00 PM
              </p>
            </div>
          </div>
        </div>
        
        <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #2196f3;">
          <h3 style="color: #1976d2; margin-top: 0;">💡 Quick Actions</h3>
          <ul style="color: #1976d2; margin: 0; padding-left: 20px;">
            <li>Verify room availability and cleanliness</li>
            <li>Update room status in management system</li>
            <li>Prepare welcome amenities if applicable</li>
            <li>Brief housekeeping staff about special requests</li>
          </ul>
        </div>
        
        <p style="color: #495057; font-size: 14px; text-align: center; margin: 20px 0;">
          This is an automated notification from the Milliden Gardens booking system.
        </p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
        <p style="color: #6c757d; font-size: 12px; margin: 5px 0;">📍 Rodi, Homa-Bay, Kenya</p>
        <p style="color: #6c757d; font-size: 12px; margin: 5px 0;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
        <p style="color: #6c757d; font-size: 12px; margin: 5px 0;">© ${new Date().getFullYear()} Milliden Gardens Admin System</p>
      </div>
    </div>
    `;
    
    const mailOptions = {
      from: {
        name: 'Milliden Gardens Booking System',
        address: this.getFromEmail()
      },
      to: this.ADMIN_EMAIL,
      subject: `🔔 New Booking Alert - ${booking.userName} - ${booking.roomName}`,
      html: htmlContent
    };
    
    await transporter.sendMail(mailOptions);
  },

  // Contact form email method
  async sendContactFormEmail(contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    try {
      // Try SendGrid first
      await this.sendSendGridContactEmail(contactData);
      console.log(`SendGrid contact email sent from ${contactData.email}`);
    } catch (sendgridError) {
      console.error('SendGrid contact email failed, trying Nodemailer:', sendgridError);
      
      // Fallback to Nodemailer if SendGrid fails
      try {
        await this.sendNodemailerContactEmail(contactData);
        console.log(`Nodemailer contact email sent from ${contactData.email} (SendGrid fallback)`);
      } catch (nodemailerError) {
        console.error('Both email services failed for contact form:', {
          sendgrid: sendgridError,
          nodemailer: nodemailerError
        });
        throw nodemailerError;
      }
    }
  },

  async sendSendGridContactEmail(contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    const logoHtml = this.getLogoHtml();
    
    const msg: sgMail.MailDataRequired = {
      to: this.ADMIN_EMAIL,
      from: {
        email: this.getFromEmail(),
        name: 'Milliden Gardens Contact Form'
      },
      replyTo: contactData.email,
      subject: `📧 Contact Form: ${contactData.subject}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
        ${logoHtml}
        
        <div style="text-align: center; padding: 20px 0; background-color: #e3f2fd; border-radius: 5px; margin-bottom: 20px;">
          <h1 style="color: #1976d2; margin: 0;">📧 New Contact Form Message</h1>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #495057; margin-top: 0;">Contact Information</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${contactData.email}" style="color: #007bff;">${contactData.email}</a></p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
        </div>
        
        <div style="background-color: #fff3cd; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #856404; margin-top: 0;">Message</h2>
          <div style="background-color: #fff; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc107;">
            <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${contactData.message}</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
          <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens Contact System</p>
        </div>
      </div>
      `
    };
    
    await sgMail.send(msg);
  },
  // Add these methods to your emailService object

async sendSendGridBookingCancellation(booking: Booking): Promise<void> {
  const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
  const logoHtml = this.getLogoHtml();
  
  const msg: sgMail.MailDataRequired = {
    to: booking.userEmail,
    from: {
      email: this.getFromEmail(),
      name: 'Milliden Gardens'
    },
    subject: 'Your Booking Cancellation - Milliden Gardens',
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
      ${logoHtml}
      
      <h2 style="color: #393937; text-align: center; margin-top: 0;">Booking Cancellation</h2>
      <p style="color: #393937;">Dear ${booking.userName},</p>
      <p style="color: #393937;">We're sorry to see you go. Your booking has been cancelled as requested.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #a89284; margin-top: 0;">Cancellation Details</h3>
        <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
        <p><strong>Room:</strong> ${booking.roomName}</p>
        <p><strong>Original Check-in Date:</strong> ${checkInDate}</p>

      </div>
      
      <p style="color: #393937;">We hope to welcome you back in the future.</p>
      <p style="color: #393937;">If you have any questions, please feel free to contact us.</p>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
        <p style="color: #6f6b6b; font-size: 12px;">Rodi, Homa-Bay, Kenya | Phone: +254 753 755 016</p>
        <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
      </div>
    </div>
    `
  };
  
  await sgMail.send(msg);
},

async sendNodemailerBookingCancellation(booking: Booking): Promise<void> {
  const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
  const logoHtml = this.getLogoHtml();
  
  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
    ${logoHtml}
    
    <div style="text-align: center; padding: 20px 0; background-color: #f8f9fa; border-radius: 5px; margin-bottom: 20px;">
      <h1 style="color: #3c4043; margin: 0;">🏨 Booking Cancellation</h1>
    </div>
    
    <div style="padding: 20px;">
      <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
      <p style="color: #3c4043; font-size: 16px;">We've processed your booking cancellation as requested.</p>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Cancellation Details</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
            <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
            <td style="padding: 8px 0; color: #3c4043;">${booking.roomName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Original Check-in:</td>
            <td style="padding: 8px 0; color: #3c4043;">${checkInDate}</td>
          </tr>
          
        </table>
      </div>
      
      <p style="color: #3c4043; font-size: 16px;">We appreciate you considering Milliden Gardens and hope to welcome you in the future.</p>
      <p style="color: #3c4043; font-size: 16px;">If you have any questions about your cancellation, please don't hesitate to contact us.</p>
      
      <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
    </div>
    
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
      <p style="color: #5f6368; font-size: 12px;">📍 Rodi, Homa-Bay, Kenya</p>
      <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
      <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
    </div>
  </div>
  `;
  
  const mailOptions = {
    from: {
      name: 'Milliden Gardens',
      address: this.getFromEmail()
    },
    to: booking.userEmail,
    subject: '🏨 Booking Cancellation Confirmation - Milliden Gardens',
    html: htmlContent
  };
  
  await transporter.sendMail(mailOptions);
},

async sendPaymentConfirmation(booking: Booking): Promise<void> {
  try {
    // Try SendGrid first
    await this.sendSendGridPaymentConfirmation(booking);
    console.log(`SendGrid payment confirmation sent to ${booking.userEmail}`);
  } catch (sendgridError) {
    console.error('SendGrid failed, trying Nodemailer:', sendgridError);
    
    // Fallback to Nodemailer if SendGrid fails
    try {
      await this.sendNodemailerPaymentConfirmation(booking);
      console.log(`Nodemailer payment confirmation sent to ${booking.userEmail} (SendGrid fallback)`);
    } catch (nodemailerError) {
      console.error('Both email services failed:', {
        sendgrid: sendgridError,
        nodemailer: nodemailerError
      });
    }
  }
},

async sendSendGridPaymentConfirmation(booking: Booking): Promise<void> {
  const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
  const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
  const paymentDate = new Date().toLocaleDateString();
  const logoHtml = this.getLogoHtml();
  
  const msg: sgMail.MailDataRequired = {
    to: booking.userEmail,
    from: {
      email: this.getFromEmail(),
      name: 'Milliden Gardens'
    },
    subject: 'Payment Confirmation - Milliden Gardens',
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
      ${logoHtml}
      
      <div style="text-align: center; padding: 20px 0; background-color: #d4edda; border-radius: 5px; margin-bottom: 20px;">
        <h1 style="color: #155724; margin: 0;">💰 Payment Confirmed</h1>
        <p style="color: #155724; margin: 10px 0 0 0; font-size: 16px; font-weight: bold;">
          Thank you for your payment!
        </p>
      </div>
      
      <p style="color: #393937;">Dear ${booking.userName},</p>
      <p style="color: #393937;">We've successfully processed your payment for your upcoming stay at Milliden Gardens.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #a89284; margin-top: 0;">Payment Details</h3>
        <p><strong>Booking ID:</strong> ${booking.bookingId || booking._id}</p>
        <p><strong>Amount Paid:</strong> KSH ${booking.totalPrice.toLocaleString()}</p>
        <p><strong>Payment Method:</strong> ${booking.paymentMethod || 'Not specified'}</p>
        <p><strong>Payment Date:</strong> ${paymentDate}</p>
        <p><strong>Payment Status:</strong> ${booking.paymentStatus}</p>
      </div>
      
      <div style="background-color: #e8f0fe; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #1a73e8; margin-top: 0;">Booking Summary</h3>
        <p><strong>Room:</strong> ${booking.roomName}</p>
        <p><strong>Check-in Date:</strong> ${checkInDate}</p>
        <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
        <p><strong>Number of Guests:</strong> ${booking.numberOfGuests}</p>
      </div>
      
      <p style="color: #393937;">We look forward to welcoming you! If you have any questions, please don't hesitate to contact us.</p>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3;">
        <p style="color: #6f6b6b; font-size: 12px;">Rodi, Homa-Bay, Kenya | Phone: +254 753 755 016</p>
        <p style="color: #6f6b6b; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
      </div>
    </div>
    `
  };
  
  await sgMail.send(msg);
},

async sendNodemailerPaymentConfirmation(booking: Booking): Promise<void> {
  const checkInDate = new Date(booking.checkInDate).toLocaleDateString();
  const checkOutDate = new Date(booking.checkOutDate).toLocaleDateString();
  const paymentDate = new Date().toLocaleDateString();
  const logoHtml = this.getLogoHtml();
  
  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
    ${logoHtml}
    
    <div style="text-align: center; padding: 20px 0; background-color: #d4edda; border-radius: 5px; margin-bottom: 20px; border: 1px solid #c3e6cb;">
      <h1 style="color: #155724; margin: 0;">💰 Payment Confirmation</h1>
      <p style="color: #155724; margin: 10px 0 0 0; font-size: 16px;">
        Your payment has been successfully processed
      </p>
    </div>
    
    <div style="padding: 20px;">
      <p style="color: #3c4043; font-size: 16px;">Dear <strong>${booking.userName}</strong>,</p>
      <p style="color: #3c4043; font-size: 16px;">Thank you for your payment. Your booking is now confirmed.</p>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h2 style="color: #5f6368; margin-top: 0; border-bottom: 1px solid #dadce0; padding-bottom: 10px;">Payment Details</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Booking Reference:</td>
            <td style="padding: 8px 0; color: #3c4043;">${booking.bookingId || booking._id}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Amount Paid:</td>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold; font-size: 18px;">KSH ${booking.totalPrice.toLocaleString()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Method:</td>
            <td style="padding: 8px 0; color: #3c4043;">${booking.paymentMethod || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Date:</td>
            <td style="padding: 8px 0; color: #3c4043;">${paymentDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Payment Status:</td>
            <td style="padding: 8px 0; color: #3c4043;">
              <span style="padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: bold; 
                   background-color: #d4edda; color: #155724;">
                ${booking.paymentStatus}
              </span>
            </td>
          </tr>
        </table>
      </div>
      
      <div style="background-color: #e8f0fe; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #1a73e8;">
        <h2 style="color: #1a73e8; margin-top: 0;">Booking Summary</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Room:</td>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">${booking.roomName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-in:</td>
            <td style="padding: 8px 0; color: #3c4043;">${checkInDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Check-out:</td>
            <td style="padding: 8px 0; color: #3c4043;">${checkOutDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #3c4043; font-weight: bold;">Guests:</td>
            <td style="padding: 8px 0; color: #3c4043;">${booking.numberOfGuests}</td>
          </tr>
        </table>
      </div>
      
      <p style="color: #3c4043; font-size: 16px;">We're looking forward to your stay at Milliden Gardens!</p>
      <p style="color: #3c4043; font-size: 16px;">If you have any questions about your booking, please don't hesitate to contact us.</p>
      
      <p style="color: #3c4043; font-size: 16px;">Best regards,<br><strong>The Milliden Gardens Team</strong></p>
    </div>
    
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
      <p style="color: #5f6368; font-size: 12px;">📍 Rodi, Homa-Bay, Kenya</p>
      <p style="color: #5f6368; font-size: 12px;">📞 +254 753 755 016 | ✉️ millidengroupltd@gmail.com</p>
      <p style="color: #5f6368; font-size: 12px;">© ${new Date().getFullYear()} Milliden Gardens. All rights reserved.</p>
    </div>
  </div>
  `;
  
  const mailOptions = {
    from: {
      name: 'Milliden Gardens',
      address: this.getFromEmail()
    },
    to: booking.userEmail,
    subject: '💰 Payment Confirmation - Milliden Gardens',
    html: htmlContent
  };
  
  await transporter.sendMail(mailOptions);
},

  async sendNodemailerContactEmail(contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    const logoHtml = this.getLogoHtml();
    
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e5e3; border-radius: 5px; background-color: #ffffff;">
      ${logoHtml}
      
      <div style="text-align: center; padding: 20px 0; background-color: #e3f2fd; border-radius: 5px; margin-bottom: 20px;">
        <h1 style="color: #1976d2; margin: 0;">📧 New Contact Form Message</h1>
        <p style="color: #1976d2; margin: 10px 0 0 0;">Received: ${new Date().toLocaleString()}</p>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h2 style="color: #495057; margin-top: 0; border-bottom: 1px solid #dee2e6; padding-bottom: 10px;">👤 Contact Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #495057; font-weight: bold; width: 30%;">Name:</td>
            <td style="padding: 8px 0; color: #495057;">${contactData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #495057; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0; color: #495057;"><a href="mailto:${contactData.email}" style="color: #007bff; text-decoration: none;">${contactData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #495057; font-weight: bold;">Subject:</td>
            <td style="padding: 8px 0; color: #495057; font-weight: bold;">${contactData.subject}</td>
          </tr>
        </table>
      </div>
      
      <div style="background-color: #fff3cd; padding: 20px; border-radius: 5px; margin: 20px 0; border: 1px solid #ffeaa7;">
        <h2 style="color: #856404; margin-top: 0; border-bottom: 1px solid #ffeaa7; padding-bottom: 10px;">💬 Message</h2>
        <div style="background-color: #fff; padding: 20px; border-radius: 5px; border-left: 4px solid #ffc107; margin-top: 15px;">
          <p style="color: #333; line-height: 1.8; margin: 0; white-space: pre-wrap; font-size: 15px;">${contactData.message}</p>
        </div>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <div style="background: linear-gradient(135deg, #007bff 0%, #6f42c1 100%); color: white; padding: 15px; border-radius: 10px;">
          <p style="margin: 0; font-size: 14px;">
            💡 Tip: You can reply directly to this email to respond to ${contactData.name}
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6e5e3; background-color: #f8f9fa; border-radius: 0 0 5px 5px; padding: 15px;">
        <p style="color: #6c757d; font-size: 12px; margin: 0;">© ${new Date().getFullYear()} Milliden Gardens Contact System</p>
      </div>
    </div>
    `;
    
    const mailOptions = {
      from: {
        name: 'Milliden Gardens Contact Form',
        address: this.getFromEmail()
      },
      to: this.ADMIN_EMAIL,
      replyTo: contactData.email,
      subject: `📧 Contact Form: ${contactData.subject} - ${contactData.name}`,
      html: htmlContent
    };
    
    await transporter.sendMail(mailOptions);
  }
};