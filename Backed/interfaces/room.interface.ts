// export interface Room {
//     name: string;
//     description: string;
//     price: number;
//     capacity: number;
//     amenities: string[];
//     startDate: Date;
//     image: string [];
//     endDate: Date;
//     createdAt?: Date;
//     updatedAt?: Date;
//     status?: string; // e.g., 'available', 'booked', 'maintenance'
// }

export interface Room {
    name: string;
    description: string;
    price: number;
    capacity: number;
    amenities: string[];
    startDate: Date;
    image: string[]; 
    endDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
    status?: string;
}