export interface Booking {
    _id?: string;
    userName: string;
    userEmail: string;
    userPhone: string;
    roomName: string;
    roomId: string;
    checkInDate: Date;
    checkOutDate: Date;
    numberOfGuests: number;
    totalPrice: number;
    bookingId: string;
    paymentMethod: 'creditCard' | 'MPESA';
    paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
    bookingDate: Date;
    specialRequests?: string;
    bookingStatus: 'confirmed' | 'cancelled' | 'completed';
    status: 'reserved' | 'paid';
    ticketId?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  