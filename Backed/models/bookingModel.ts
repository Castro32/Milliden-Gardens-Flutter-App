import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String, required: true },
    roomName: { type: String, required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    numberOfGuests: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['creditCard', 'MPESA'], default: 'MPESA' },
    paymentStatus: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' },
    bookingDate: { type: Date, default: Date.now },
    specialRequests: { type: String },
    bookingStatus: { type: String, enum: ['confirmed', 'cancelled', 'completed'], default: 'confirmed' },
    status: { type: String, enum: ['reserved', 'paid'], default: 'reserved' },
    ticketId: { type: String },
}, {
    timestamps: true
});

// Generate a booking reference ID
bookingSchema.virtual('bookingId').get(function() {
    // Create a reference using timestamp and last 6 chars of the ID
    const timestamp = this.createdAt.getTime().toString().slice(-6);
    const idPart = this._id.toString().slice(-6);
    return `BK-${timestamp}${idPart}`.toUpperCase();
});

// Configure toJSON to include virtuals
bookingSchema.set('toJSON', { virtuals: true });
bookingSchema.set('toObject', { virtuals: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;