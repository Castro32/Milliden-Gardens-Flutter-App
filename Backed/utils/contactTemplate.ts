// export function contactEmailTemplate(data: {
//     name: string;
//     email: string;
//     subject: string;
//     message: string;
//   }): string {
//     return `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       </head>
//       <body style="margin: 0; padding: 0; background-color: #D2D7DF; font-family: Arial, sans-serif;">
//         <table role="presentation" style="width: 100%; border-collapse: collapse;">
//           <tr>
//             <td style="padding: 20px 0; text-align: center;">
//               <table role="presentation" style="width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//                 <tr>
//                   <td style="padding: 40px 30px;">
//                     <div style="text-align: center; max-width: 500px; margin: 0 auto;">
//                       <h1 style="color: #5B3E2C; font-size: 24px; margin-bottom: 30px; border-bottom: 2px solid #4A4A4A; padding-bottom: 10px;">
//                         New Contact Message
//                       </h1>
  
//                       <div style="margin-bottom: 25px; text-align: left;">
//                         <p style="font-size: 16px; color: #5B3E2C; margin: 5px 0;">
//                           <strong style="color: #4A4A4A;">From:</strong>
//                           <span style="color: #5B3E2C;">${name}</span>
//                         </p>
//                         <p style="font-size: 16px; color: #5B3E2C; margin: 5px 0;">
//                           <strong style="color: #4A4A4A;">Email:</strong>
//                           <span style="color: #5B3E2C;">${email}</span>
//                         </p>
//                       </div>
  
//                       <div style="background-color: #6C757D; padding: 20px; border-radius: 6px; margin-bottom: 25px; text-align: left; border-left: 4px solid #000000;">
//                         <p style="font-size: 16px; color: #D2D7DF; margin: 0; line-height: 1.6;">
//                           ${message}
//                         </p>
//                       </div>
  
//                       <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #4A4A4A;">
//                         <p style="font-size: 14px; color: #4A4A4A; margin: 0;">
//                           This message was sent from Milliden Gardens Website.
//                         </p>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               </table>
//             </td>
//           </tr>
//         </table>
//       </body>
//       </html>
//     `;
//   }
  
//   export function subscriptionEmailTemplate(email: string): string {
//     return `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
//         <div style="background-color: #3b82f6; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
//           <h1 style="color: white; margin: 0;">Welcome to Our Newsletter!</h1>
//         </div>
        
//         <div style="background-color: #f9fafb; padding: 20px; border-radius: 0 0 5px 5px; border: 1px solid #e5e7eb; border-top: none;">
//           <p>Thank you for subscribing to our newsletter!</p>
          
//           <p>We're excited to have you join Milliden Garden community. You'll now receive updates on our latest products, services, and exclusive offers.</p>
          
//           <p>You subscribed with: <strong>${email}</strong></p>
          
//           <p>If you did not request this subscription, please ignore this email or contact us at <a href="mailto:millidengroupltd@gmail.com" style="color: #3b82f6;">millidengroupltd@gmail.com</a>.</p>
          
//           <div style="margin-top: 30px;">
//             <p>Best regards,<br>The Milliden Garden Team</p>
//           </div>
          
//           <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          
//           <p style="font-size: 12px; color: #6b7280; text-align: center;">
//             You can unsubscribe at any time by clicking the unsubscribe link in the footer of our emails.
//           </p>
//         </div>
//       </div>
//     `;
//   }
  
export function contactEmailTemplate(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #D2D7DF; font-family: Arial, sans-serif;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 20px 0; text-align: center;">
              <table role="presentation" style="width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr>
                  <td style="padding: 40px 30px;">
                    <div style="text-align: center; max-width: 500px; margin: 0 auto;">
                      <h1 style="color: #5B3E2C; font-size: 24px; margin-bottom: 30px; border-bottom: 2px solid #4A4A4A; padding-bottom: 10px;">
                        New Contact Message
                      </h1>
  
                      <div style="margin-bottom: 25px; text-align: left;">
                        <p style="font-size: 16px; color: #5B3E2C; margin: 5px 0;">
                          <strong style="color: #4A4A4A;">From:</strong>
                          <span style="color: #5B3E2C;">${data.name}</span>
                        </p>
                        <p style="font-size: 16px; color: #5B3E2C; margin: 5px 0;">
                          <strong style="color: #4A4A4A;">Email:</strong>
                          <span style="color: #5B3E2C;">${data.email}</span>
                        </p>
                      </div>
  
                      <div style="background-color: #6C757D; padding: 20px; border-radius: 6px; margin-bottom: 25px; text-align: left; border-left: 4px solid #000000;">
                        <p style="font-size: 16px; color: #D2D7DF; margin: 0; line-height: 1.6;">
                          ${data.message}
                        </p>
                      </div>
  
                      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #4A4A4A;">
                        <p style="font-size: 14px; color: #4A4A4A; margin: 0;">
                          This message was sent from Milliden Gardens Website.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;
  }
  
  export function subscriptionEmailTemplate(email: string): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="background-color: #3b82f6; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
          <h1 style="color: white; margin: 0;">Welcome to Miliden Newsletter!</h1>
        </div>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 0 0 5px 5px; border: 1px solid #e5e7eb; border-top: none;">
          <p>Thank you for subscribing to our newsletter!</p>
          
          <p>We're excited to have you join Milliden Garden community. You'll now receive updates on our latest products, services, and exclusive offers.</p>
          
          <p>You subscribed with: <strong>${email}</strong></p>
          
          <p>If you did not request this subscription, please ignore this email or contact us at <a href="mailto:millidengroupltd@gmail.com" style="color: #3b82f6;">millidengroupltd@gmail.com</a>.</p>
          
          <div style="margin-top: 30px;">
            <p>Best regards,<br>The Milliden Garden Team</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          
          <p style="font-size: 12px; color: #6b7280; text-align: center;">
            You can unsubscribe at any time by clicking the unsubscribe link in the footer of our emails.
          </p>
        </div>
      </div>
    `;
  }