// // import { Request, Response } from 'express';
// // import { RoomService } from '../services/roomService';
// // import { apiResponse } from '../utils/apiv2response';

// // export class RoomController {
// //     private roomService: RoomService;

// //     constructor() {
// //         this.roomService = new RoomService();
// //     }

// //     async getRooms(req: Request, res: Response): Promise<void> {
// //         try {
// //             const rooms = await this.roomService.getAllRooms();
// //             console.log(rooms);
// //             apiResponse(res, 200, true, rooms, 'Rooms fetched successfully');
// //         } catch (error) {
// //             apiResponse(res, 500, false, null, 'Internal server error', error);
// //         }
// //     }

// //     async getRoomById(req: Request, res: Response): Promise<void> {
// //         try {
// //             const room = await this.roomService.getRoomById(req.params.id);
// //             if (!room) {
// //                 apiResponse(res, 404, false, null, 'Room not found');
// //                 return;
// //             }
// //             apiResponse(res, 200, true, room, 'Room fetched successfully');
// //         } catch (error) {
// //             apiResponse(res, 500, false, null, 'Internal server error', error);
// //         }
// //     }

// //     async getAvailableRooms(req: Request, res: Response): Promise<void> {
// //         try {
// //             const startDate = new Date(req.query.startDate as string);
// //             const endDate = new Date(req.query.endDate as string);

// //             // Validate dates
// //             if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
// //                 apiResponse(res, 400, false, null, 'Invalid date format');
// //                 return;
// //             }

// //             if (startDate >= endDate) {
// //                 apiResponse(res, 400, false, null, 'End date must be after start date');
// //                 return;
// //             }

// //             const availableRooms = await this.roomService.getAvailableRooms(startDate, endDate);
// //             apiResponse(res, 200, true, availableRooms, 'Available rooms fetched successfully');
// //         } catch (error) {
// //             apiResponse(res, 500, false, null, 'Internal server error', error);
// //         }
// //     }

// //     // async createRoom(req: Request, res: Response): Promise<void> {
// //     //     try {
// //     //         const room = await this.roomService.createRoom(req.body);
// //     //         apiResponse(res, 201, true, room, 'Room created successfully');
// //     //     } catch (error) {
// //     //         apiResponse(res, 500, false, null, 'Internal server error', error);
// //     //     }
// //     // }

// //     // async updateRoom(req: Request, res: Response): Promise<void> {
// //     //     try {
// //     //         const room = await this.roomService.updateRoom(req.params.id, req.body);
// //     //         if (!room) {
// //     //             apiResponse(res, 404, false, null, 'Room not found');
// //     //             return;
// //     //         }
// //     //         apiResponse(res, 200, true, room, 'Room updated successfully');
// //     //     } catch (error) {
// //     //         apiResponse(res, 500, false, null, 'Internal server error', error);
// //     //     }
// //     // }

// //     async createRoom(req: Request, res: Response): Promise<void> {
// //         try {
// //             console.log('Request files:', req.files);
            
// //             if (!req.files || !Array.isArray(req.files)) {
// //                 apiResponse(res, 400, false, null, 'No files were uploaded');
// //                 return;
// //             }

// //             const files = req.files as Express.Multer.File[];
// //             const imageUrls = files.map(file => file.path);

// //             const roomData = {
// //                 ...req.body,
// //                 image: imageUrls,
// //                 startDate: req.body.startDate ? new Date(req.body.startDate) : undefined,
// //                 endDate: req.body.endDate ? new Date(req.body.endDate) : undefined
// //             };

// //             const room = await this.roomService.createRoom(roomData);
// //             apiResponse(res, 201, true, room, 'Room created successfully');
// //         } catch (error) {
// //             console.error('Error creating room:', error);
// //             apiResponse(res, 500, false, null, 'Internal server error', error instanceof Error ? error.message : 'Unknown error');
// //         }
// //     }
// //     async updateRoomStatus(req: Request, res: Response) {
// //         try {
// //           const { id } = req.params;
// //           const { status } = req.body;
          
// //           if (!status) {
// //             return res.status(400).json({
// //               success: false,
// //               message: 'Status is required'
// //             });
// //           }
          
// //           const roomService = new RoomService();
// //           const updatedRoom = await roomService.updateRoomStatus(id, status);
          
// //           if (!updatedRoom) {
// //             return res.status(404).json({
// //               success: false,
// //               message: 'Room not found'
// //             });
// //           }
          
// //           res.status(200).json({
// //             success: true,
// //             data: updatedRoom
// //           });
// //         } catch (error: any) {
// //           res.status(500).json({
// //             success: false,
// //             message: error.message || 'Failed to update room status'
// //           });
// //         }
// //       }

// //     async deleteRoom(req: Request, res: Response): Promise<void> {
// //         try {
// //             const room = await this.roomService.deleteRoom(req.params.id);
// //             if (!room) {
// //                 apiResponse(res, 404, false, null, 'Room not found');
// //                 return;
// //             }
// //             apiResponse(res, 200, true, room, 'Room deleted successfully');
// //         } catch (error) {
// //             apiResponse(res, 500, false, null, 'Internal server error', error);
// //         }
// //     }
// // }
// import { Request, Response } from 'express';
// import { RoomService } from '../services/roomService';
// import { apiResponse } from '../utils/apiv2response';

// export class RoomController {
//     private roomService: RoomService;

//     constructor() {
//         this.roomService = new RoomService();
//     }

//     async getRooms(req: Request, res: Response): Promise<void> {
//         try {
//             const rooms = await this.roomService.getAllRooms();
//             console.log(rooms);
//             apiResponse(res, 200, true, rooms, 'Rooms fetched successfully');
//         } catch (error) {
//             apiResponse(res, 500, false, null, 'Internal server error', error);
//         }
//     }

//     async getRoomById(req: Request, res: Response): Promise<void> {
//         try {
//             const room = await this.roomService.getRoomById(req.params.id);
//             if (!room) {
//                 apiResponse(res, 404, false, null, 'Room not found');
//                 return;
//             }
//             apiResponse(res, 200, true, room, 'Room fetched successfully');
//         } catch (error) {
//             apiResponse(res, 500, false, null, 'Internal server error', error);
//         }
//     }

//     async getAvailableRooms(req: Request, res: Response): Promise<void> {
//         try {
//             const startDate = new Date(req.query.startDate as string);
//             const endDate = new Date(req.query.endDate as string);

//             // Validate dates
//             if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
//                 apiResponse(res, 400, false, null, 'Invalid date format');
//                 return;
//             }

//             if (startDate >= endDate) {
//                 apiResponse(res, 400, false, null, 'End date must be after start date');
//                 return;
//             }

//             const availableRooms = await this.roomService.getAvailableRooms(startDate, endDate);
//             apiResponse(res, 200, true, availableRooms, 'Available rooms fetched successfully');
//         } catch (error) {
//             apiResponse(res, 500, false, null, 'Internal server error', error);
//         }
//     }

//     // async createRoom(req: Request, res: Response): Promise<void> {
//     //     try {
//     //         console.log('Request files:', req.files);
            
//     //         if (!req.files || !Array.isArray(req.files)) {
//     //             apiResponse(res, 400, false, null, 'No files were uploaded');
//     //             return;
//     //         }

//     //         const files = req.files as Express.Multer.File[];
//     //         // const imageUrls = files.map(file => file.path);
//     //         const imageUrls = files.map(file => `/uploads/${file.filename}`);

//     //         // Parse amenities if it's sent as a JSON string
//     //         let amenities = req.body.amenities;
//     //         if (typeof amenities === 'string') {
//     //             try {
//     //                 // Try to parse it as JSON
//     //                 amenities = JSON.parse(amenities);
//     //             } catch (e) {
//     //                 // If it's not valid JSON, split by comma
//     //                 amenities = amenities.split(',').map((item: string) => item.trim());
//     //             }
//     //         }

//     //         const roomData = {
//     //             ...req.body,
//     //             amenities: amenities,
//     //             image: imageUrls,
//     //             startDate: req.body.startDate ? new Date(req.body.startDate) : undefined,
//     //             endDate: req.body.endDate ? new Date(req.body.endDate) : undefined
//     //         };

//     //         const room = await this.roomService.createRoom(roomData);
//     //         apiResponse(res, 201, true, room, 'Room created successfully');
//     //     } catch (error) {
//     //         console.error('Error creating room:', error);
//     //         apiResponse(res, 500, false, null, 'Internal server error', error instanceof Error ? error.message : 'Unknown error');
//     //     }
//     // }

//     async createRoom(req: Request, res: Response): Promise<void> {
//     try {
//         console.log('Request body:', req.body);
//         console.log('Request files:', req.files);
        
//         // Validate required fields
//         const requiredFields = ['name', 'description', 'price', 'capacity'];
//         const missingFields = requiredFields.filter(field => !req.body[field]);
        
//         if (missingFields.length > 0) {
//             apiResponse(res, 400, false, null, `Missing required fields: ${missingFields.join(', ')}`);
//             return;
//         }

//         // Handle file uploads
//         let imageUrls: string[] = [];
//         if (req.files && Array.isArray(req.files)) {
//             const files = req.files as Express.Multer.File[];
//             imageUrls = files.map(file => `/uploads/${file.filename}`);
//         }

//         // Parse amenities
//         let amenities = req.body.amenities;
//         if (typeof amenities === 'string') {
//             try {
//                 amenities = JSON.parse(amenities);
//             } catch (e) {
//                 amenities = amenities.split(',').map((item: string) => item.trim());
//             }
//         }

//         // Validate and parse dates
//         if (!req.body.startDate || !req.body.endDate) {
//             apiResponse(res, 400, false, null, 'Start date and end date are required');
//             return;
//         }

//         const startDate = new Date(req.body.startDate);
//         const endDate = new Date(req.body.endDate);

//         if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
//             apiResponse(res, 400, false, null, 'Invalid date format');
//             return;
//         }

//         if (startDate >= endDate) {
//             apiResponse(res, 400, false, null, 'End date must be after start date');
//             return;
//         }

//         const roomData = {
//             name: req.body.name,
//             description: req.body.description,
//             price: Number(req.body.price),
//             capacity: Number(req.body.capacity),
//             amenities: amenities || [],
//             image: imageUrls,
//             startDate,
//             endDate,
//             status: req.body.status || 'available'
//         };

//         console.log('Room data to save:', roomData);

//         const room = await this.roomService.createRoom(roomData);
//         apiResponse(res, 201, true, room, 'Room created successfully');
//     } catch (error) {
//         console.error('Error creating room:', error);
//         apiResponse(res, 500, false, null, 'Internal server error', error instanceof Error ? error.message : 'Unknown error');
//     }
// }
//     async updateRoomStatus(req: Request, res: Response) {
//         try {
//           const { id } = req.params;
//           const { status } = req.body;
          
//           if (!status) {
//             return res.status(400).json({
//               success: false,
//               message: 'Status is required'
//             });
//           }
          
//           const roomService = new RoomService();
//           const updatedRoom = await roomService.updateRoomStatus(id, status);
          
//           if (!updatedRoom) {
//             return res.status(404).json({
//               success: false,
//               message: 'Room not found'
//             });
//           }
          
//           res.status(200).json({
//             success: true,
//             data: updatedRoom
//           });
//         } catch (error: any) {
//           res.status(500).json({
//             success: false,
//             message: error.message || 'Failed to update room status'
//           });
//         }
//     }

//     async deleteRoom(req: Request, res: Response): Promise<void> {
//         try {
//             const room = await this.roomService.deleteRoom(req.params.id);
//             if (!room) {
//                 apiResponse(res, 404, false, null, 'Room not found');
//                 return;
//             }
//             apiResponse(res, 200, true, room, 'Room deleted successfully');
//         } catch (error) {
//             apiResponse(res, 500, false, null, 'Internal server error', error);
//         }
//     }
// }
import { Request, Response } from 'express';
import { RoomService } from '../services/roomService';
import { apiResponse } from '../utils/apiv2response';

export class RoomController {
    private roomService: RoomService;

    constructor() {
        this.roomService = new RoomService();
    }

    async getRooms(req: Request, res: Response): Promise<void> {
        try {
            const rooms = await this.roomService.getAllRooms();
            console.log(rooms);
            apiResponse(res, 200, true, rooms, 'Rooms fetched successfully');
        } catch (error) {
            apiResponse(res, 500, false, null, 'Internal server error', error);
        }
    }
    async updateRoom(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        console.log('Updating room:', id);
        console.log('Request body:', req.body);
        console.log('Request files:', req.files);
        
        // Check if room exists first
        const existingRoom = await this.roomService.getRoomById(id);
        if (!existingRoom) {
            apiResponse(res, 404, false, null, 'Room not found');
            return;
        }

        // Validate required fields if provided
        const requiredFields = ['name', 'description', 'price', 'capacity'];
        for (const field of requiredFields) {
            if (req.body[field] !== undefined && !req.body[field]) {
                apiResponse(res, 400, false, null, `${field} cannot be empty`);
                return;
            }
        }

        // Handle image uploads
        let imageUrls: string[] = [];
        if (req.files && Array.isArray(req.files)) {
            const files = req.files as Express.Multer.File[];
            imageUrls = files.map(file => `/uploads/${file.filename}`);
        }
        // If no new images uploaded, keep existing images
        const finalImageUrls = imageUrls.length > 0 ? imageUrls : existingRoom.image;

        // Handle amenities processing (comprehensive handling)
        let amenities: string[] = [];
        if (req.body.amenities !== undefined) {
            if (Array.isArray(req.body.amenities)) {
                amenities = req.body.amenities.filter((item: any) => item && item.trim());
            } else if (typeof req.body.amenities === 'string') {
                const amenitiesStr = req.body.amenities.trim();
                if (amenitiesStr) {
                    try {
                        // Try to parse as JSON first
                        const parsed = JSON.parse(amenitiesStr);
                        if (Array.isArray(parsed)) {
                            amenities = parsed;
                        } else {
                            amenities = [amenitiesStr];
                        }
                    } catch (e) {
                        // If JSON parsing fails, split by comma
                        amenities = amenitiesStr.split(',').map((item: string) => item.trim()).filter((item: string) => item);
                    }
                }
            }
            
            // Clean and validate amenities
            amenities = amenities.filter(amenity => 
                typeof amenity === 'string' && 
                amenity.trim() && 
                !amenity.includes('\"') && 
                !amenity.includes('[') && 
                !amenity.includes(']')
            );
        } else {
            // If amenities not provided, keep existing amenities
            amenities = existingRoom.amenities;
        }

        // Handle date validation
        let startDate = existingRoom.startDate;
        let endDate = existingRoom.endDate;

        if (req.body.startDate) {
            startDate = new Date(req.body.startDate);
            if (isNaN(startDate.getTime())) {
                apiResponse(res, 400, false, null, 'Invalid start date format');
                return;
            }
        }

        if (req.body.endDate) {
            endDate = new Date(req.body.endDate);
            if (isNaN(endDate.getTime())) {
                apiResponse(res, 400, false, null, 'Invalid end date format');
                return;
            }
        }

        if (startDate >= endDate) {
            apiResponse(res, 400, false, null, 'End date must be after start date');
            return;
        }

        // Build complete room data (use existing values as defaults)
        const roomData = {
            name: req.body.name || existingRoom.name,
            description: req.body.description || existingRoom.description,
            price: req.body.price ? Number(req.body.price) : existingRoom.price,
            capacity: req.body.capacity ? Number(req.body.capacity) : existingRoom.capacity,
            amenities: amenities,
            image: finalImageUrls,
            startDate: startDate,
            endDate: endDate,
            // Note: status is NOT updated here - use separate endpoint for status updates
        };

        // Validate numeric fields
        if (isNaN(roomData.price) || roomData.price <= 0) {
            apiResponse(res, 400, false, null, 'Price must be a valid positive number');
            return;
        }

        if (isNaN(roomData.capacity) || roomData.capacity <= 0) {
            apiResponse(res, 400, false, null, 'Capacity must be a valid positive number');
            return;
        }

        console.log('Complete room update data:', roomData);

        const updatedRoom = await this.roomService.updateRoom(id, roomData);
        if (!updatedRoom) {
            apiResponse(res, 404, false, null, 'Room not found');
            return;
        }

        apiResponse(res, 200, true, updatedRoom, 'Room updated successfully');
    } catch (error) {
        console.error('Error updating room:', error);
        apiResponse(res, 500, false, null, 'Internal server error', error instanceof Error ? error.message : 'Unknown error');
    }
}

    async getRoomById(req: Request, res: Response): Promise<void> {
        try {
            const room = await this.roomService.getRoomById(req.params.id);
            if (!room) {
                apiResponse(res, 404, false, null, 'Room not found');
                return;
            }
            apiResponse(res, 200, true, room, 'Room fetched successfully');
        } catch (error) {
            apiResponse(res, 500, false, null, 'Internal server error', error);
        }
    }

    async getAvailableRooms(req: Request, res: Response): Promise<void> {
        try {
            const startDate = new Date(req.query.startDate as string);
            const endDate = new Date(req.query.endDate as string);

            if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
                apiResponse(res, 400, false, null, 'Invalid date format');
                return;
            }

            if (startDate >= endDate) {
                apiResponse(res, 400, false, null, 'End date must be after start date');
                return;
            }

            const availableRooms = await this.roomService.getAvailableRooms(startDate, endDate);
            apiResponse(res, 200, true, availableRooms, 'Available rooms fetched successfully');
        } catch (error) {
            apiResponse(res, 500, false, null, 'Internal server error', error);
        }
    }

    async createRoom(req: Request, res: Response): Promise<void> {
        try {
            console.log('Request body:', req.body);
            console.log('Request files:', req.files);
            
            const requiredFields = ['name', 'description', 'price', 'capacity'];
            const missingFields = requiredFields.filter(field => !req.body[field]);
            
            if (missingFields.length > 0) {
                apiResponse(res, 400, false, null, `Missing required fields: ${missingFields.join(', ')}`);
                return;
            }
            let imageUrls: string[] = [];
            if (req.files && Array.isArray(req.files)) {
                const files = req.files as Express.Multer.File[];
                imageUrls = files.map(file => `/uploads/${file.filename}`);
            }

            let amenities: string[] = [];
            if (req.body.amenities) {
                if (Array.isArray(req.body.amenities)) {
                    amenities = req.body.amenities.filter((item: any) => item && item.trim());
                } else if (typeof req.body.amenities === 'string') {
                    const amenitiesStr = req.body.amenities.trim();
                    if (amenitiesStr) {
                        try {
                            amenities = JSON.parse(amenitiesStr);
                            if (!Array.isArray(amenities)) {
                                amenities = [amenitiesStr];
                            }
                        } catch (e) {
                            amenities = amenitiesStr.split(',').map((item: string) => item.trim()).filter((item: string) => item);
                        }
                    }
                }
            }

        
            amenities = amenities.filter(amenity => 
                typeof amenity === 'string' && 
                amenity.trim() && 
                !amenity.includes('\"') && 
                !amenity.includes('[') && 
                !amenity.includes(']')
            );

            if (!req.body.startDate || !req.body.endDate) {
                apiResponse(res, 400, false, null, 'Start date and end date are required');
                return;
            }

            const startDate = new Date(req.body.startDate);
            const endDate = new Date(req.body.endDate);

            if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
                apiResponse(res, 400, false, null, 'Invalid date format');
                return;
            }

            if (startDate >= endDate) {
                apiResponse(res, 400, false, null, 'End date must be after start date');
                return;
            }

            const roomData = {
                name: req.body.name,
                description: req.body.description,
                price: Number(req.body.price),
                capacity: Number(req.body.capacity),
                amenities: amenities, 
                image: imageUrls,
                startDate,
                endDate,
                status: req.body.status || 'available'
            };

            console.log('Room data to save:', roomData);

            const room = await this.roomService.createRoom(roomData);
            apiResponse(res, 201, true, room, 'Room created successfully');
        } catch (error) {
            console.error('Error creating room:', error);
            apiResponse(res, 500, false, null, 'Internal server error', error instanceof Error ? error.message : 'Unknown error');
        }
    }

    async updateRoomStatus(req: Request, res: Response) {
        try {
          const { id } = req.params;
          const { status } = req.body;
          
          if (!status) {
            return res.status(400).json({
              success: false,
              message: 'Status is required'
            });
          }
          
          const roomService = new RoomService();
          const updatedRoom = await roomService.updateRoomStatus(id, status);
          
          if (!updatedRoom) {
            return res.status(404).json({
              success: false,
              message: 'Room not found'
            });
          }
          
          res.status(200).json({
            success: true,
            data: updatedRoom
          });
        } catch (error: any) {
          res.status(500).json({
            success: false,
            message: error.message || 'Failed to update room status'
          });
        }
    }

    async deleteRoom(req: Request, res: Response): Promise<void> {
        try {
            const room = await this.roomService.deleteRoom(req.params.id);
            if (!room) {
                apiResponse(res, 404, false, null, 'Room not found');
                return;
            }
            apiResponse(res, 200, true, room, 'Room deleted successfully');
        } catch (error) {
            apiResponse(res, 500, false, null, 'Internal server error', error);
        }
    }
}