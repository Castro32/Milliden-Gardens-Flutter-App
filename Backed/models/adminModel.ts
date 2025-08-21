import mongoose, { Document, Schema } from 'mongoose';

export enum UserRole {
  ADMIN = 'admin'
}

export interface AdminUser extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole.ADMIN;
  createdAt: Date;
  updatedAt: Date;
}

const adminUserSchema = new Schema<AdminUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: [UserRole.ADMIN],
      default: UserRole.ADMIN
    }
  },
  {
    timestamps: true
  }
);

export const AdminUser = mongoose.model<AdminUser>('AdminUser', adminUserSchema);