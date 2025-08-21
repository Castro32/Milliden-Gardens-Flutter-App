// import { create } from 'domain';
// import mongoose from 'mongoose';

// const contactSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     email: {type: String, required: true},
//     subject: {type: String, required: true},
//     message: {type: String, required: true},
//     createdAt: {type: Date, default: Date.now},
// })
// export const ContactModel = mongoose.model('Contact', contactSchema);
// export default ContactModel;


import { IEmail } from '../interfaces/contact.interface';

export class Email implements IEmail {
  public name: string;
  public email: string;
  public subject: string;
  public message: string;
  public createdAt: Date;

  constructor({ name, email, subject, message }: IEmail) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
    this.createdAt = new Date();
  }
}