// import {Request, Response} from 'express';
// import { ContactService } from '../services/contactService';
// import { apiResponse } from '../utils/apiv2Response';

// export class ContactController {
//     private contactService: ContactService;
        
//     constructor () {
//         this.contactService = new ContactService();
//     }

//     async createContact(req: Request, res: Response):
//         Promise<void>{
//             try {
//                 const contact = await this.contactService.createContact(req.body);
//                 apiResponse(res, 201, true, contact,
//                     'Message sent Successfully'
//                 );
//             } catch (error) {
//                 apiResponse(res, 500, false, null,
//                     'Internal server error', error
//                 );
//             }
//         }
// }
import { Request, Response } from 'express';
import { Email } from '../models/contactModel'
import { EmailService } from '../services/contactService'
import { IEmail } from '../interfaces/contact.interface';

export class ContactController {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }


public sendContactEmail = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, subject, message } = req.body;
      console.log('Attempting to send email to:', process.env.EMAIL_RECIPIENT || 'fidelqastro32@gmail.com');
      
      const emailModel = new Email({ name, email, subject, message });
      
      await this.emailService.sendContactEmail(emailModel);
      
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error: any) {
      console.error('Detailed email error:');
      console.error('Error:', error);
      res.status(500).json({ error: error.message });
    }
  }
  
  public subscribe = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email } = req.body;
      console.log('Subscribing email:', email);
      
      await this.emailService.sendSubscriptionEmail({ email });
      
      res.status(200).json({ message: 'Subscription email sent successfully' });
    } catch (error: any) {
      console.error('Subscription email error:', error);
      res.status(500).json({ error: error.message });
    }
  }

}