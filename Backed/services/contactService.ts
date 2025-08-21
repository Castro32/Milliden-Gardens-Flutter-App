// import { Contact } from "../interfaces/contact.interface";
// import ContactModel from "../models/contactModel";

// export class ContactService {
//     // /**
//     //  * Get all contacts
//     //  * @returns Promise with all contacts
//     //  */
//     // async getAllContacts(): Promise<Contact[]> {
//     //     try {
//     //     return await ContactModel.find({});
//     //     } catch (error) {
//     //     throw error;
//     //     }
//     // }

//     /**
//      * Create a new contact
//      * @param contactData Contact data
//      * @returns Promise with the created contact
//      */
//     async createContact(contactData: Partial<Contact>): Promise<Contact> {
//         try {
//         const contact = new ContactModel(contactData);
//         return await contact.save();
//         } catch (error) {
//         throw error;
//         }
//     }
// }
import { transporter } from '../config/contactConfig';
import { contactEmailTemplate, subscriptionEmailTemplate } from '../utils/contactTemplate'
import { IEmail, ISubscriptionEmail } from '../interfaces/contact.interface';

export class EmailService {
  public async sendContactEmail(emailData: IEmail): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: emailData.email,
      to: "fidelqastro32@gmail.com",
      subject: `Milliden Garden Website ${emailData.name}: ${emailData.subject}`,
      text: `From: ${emailData.name} (${emailData.email})\n\n${emailData.message}`,
      html: contactEmailTemplate(emailData)
    };

    await transporter.sendMail(mailOptions);
  }

  public async sendSubscriptionEmail(emailData: ISubscriptionEmail): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emailData.email,
      subject: 'Welcome to Our Newsletter!',
      text: `Thank you for subscribing to our newsletter!\n\nWe're excited to have you join Milliden Garden Community.\n\nYou subscribed with: ${emailData.email}`,
      html: subscriptionEmailTemplate(emailData.email)
    };

    await transporter.sendMail(mailOptions);
  }
}