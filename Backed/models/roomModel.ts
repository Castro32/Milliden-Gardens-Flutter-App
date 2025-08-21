import mongoose, { Document, Schema } from 'mongoose';
import { Room } from '../interfaces/room.interface';

interface IRoom extends Room, Document {}

const roomSchema = new Schema<IRoom>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        capacity: { type: Number, required: true },
        amenities: { type: [String], required: true },
        image: { type: [String], required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        status: { type: String, enum: ['available', 'reserved', 'maintenance'], default: 'available' }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            }
        }
    }
);

export const RoomModel = mongoose.model<IRoom>('Room', roomSchema);