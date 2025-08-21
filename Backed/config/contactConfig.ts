// import nodemailer from 'nodemailer';

// export const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   debug: true,
//   logger: true
// });

// // Verify connection
// transporter.verify((error: Error | null, success: boolean) => {
//   if (error) {
//     console.log('Detailed connection error:');
//     console.log('Error:', error);
//   } else {
//     console.log('Server is ready to send emails');
//   }
// });

// transporter.on('log', console.log);
import nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';

export const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  debug: true,
  logger: true
});

// Properly typed verify function
transporter.verify((error: Error | null, success: boolean) => {
  if (error) {
    console.error('Connection error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});