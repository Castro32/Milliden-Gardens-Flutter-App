// import { RoomModel } from '../models/roomModel';
// import { Room } from '../interfaces/room.interface';

// export class RoomService {
//   /**
//    * Get all rooms
//    * @returns Promise with all rooms
//    */
//   async getAllRooms(): Promise<Room[]> {
//     try {
//       return await RoomModel.find({});
//     } catch (error) {
//       throw error;
//     }
//   }

//   /**
//    * Get a single room by ID
//    * @param id Room ID
//    * @returns Promise with the room or null if not found
//    */
//   async getRoomById(id: string): Promise<Room | null> {
//     try {
//       return await RoomModel.findById(id);
//     } catch (error) {
//       throw error;
//     }
//   }

//   /**
//    * Get available rooms between two dates
//    * @param startDate booking start date
//    * @param endDate booking end date
//    * @returns Promise with available rooms
//    */
//   async getAvailableRooms(startDate: Date, endDate: Date): Promise<Room[]> {
//     try {
//       // Find rooms that don't overlap with the requested period
//       return await RoomModel.find({
//         $or: [
//           { endDate: { $lte: startDate } },
//           { startDate: { $gte: endDate } }
//         ]
//       });
//     } catch (error) {
//       throw error;
//     }
//   }

//   /**
//    * Create a new room
//    * @param roomData Room data
//    * @returns Promise with the created room
//    */
//   async createRoom(roomData: Partial<Room>): Promise<Room> {
//     try {
//       const room = new RoomModel(roomData);
//       return await room.save();
//     } catch (error) {
//       throw error;
//     }
//   }

//   /**
//    * Update a room
//    * @param id Room ID
//    * @param roomData Updated room data
//    * @returns Promise with the updated room
//    */
//   async updateRoom(id: string, roomData: Partial<Room>): Promise<Room | null> {
//     try {
//       return await RoomModel.findByIdAndUpdate(id, roomData, { new: true });
//     } catch (error) {
//       throw error;
//     }
//   }

//   /**
//    * Delete a room
//    * @param id Room ID
//    * @returns Promise with deletion result
//    */
//   async deleteRoom(id: string): Promise<Room | null> {
//     try {
//       return await RoomModel.findByIdAndDelete(id);
//     } catch (error) {
//       throw error;
//     }
//   }
// }
import { RoomModel } from '../models/roomModel';
import { Room } from '../interfaces/room.interface';

export class RoomService {
  /**
   * Get all rooms
   * @returns Promise with all rooms
   */
  async getAllRooms(): Promise<Room[]> {
    try {
      return await RoomModel.find({});
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a single room by ID
   * @param id Room ID
   * @returns Promise with the room or null if not found
   */
  async getRoomById(id: string): Promise<Room | null> {
    try {
      return await RoomModel.findById(id);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get available rooms between two dates
   * @param startDate booking start date
   * @param endDate booking end date
   * @returns Promise with available rooms
   */
  async getAvailableRooms(startDate: Date, endDate: Date): Promise<Room[]> {
    try {
      // Find rooms that are available and don't overlap with the requested period
      return await RoomModel.find({
        status: 'available',
        $or: [
          { endDate: { $lte: startDate } },
          { startDate: { $gte: endDate } }
        ]
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create a new room
   * @param roomData Room data
   * @returns Promise with the created room
   */
  async createRoom(roomData: Partial<Room>): Promise<Room> {
    try {
      const room = new RoomModel(roomData);
      return await room.save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update a room's status
   * @param id Room ID
   * @param status New status ('available' | 'reserved' | 'occupied' | 'maintenance')
   * @returns Promise with the updated room
   */
  async updateRoomStatus(id: string, status: string): Promise<Room | null> {
    try {
      return await RoomModel.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update room details
   * @param id Room ID
   * @param roomData Updated room data
   * @returns Promise with the updated room
   */
  async updateRoom(id: string, roomData: Partial<Room>): Promise<Room | null> {
    try {
        return await RoomModel.findByIdAndUpdate(
            id,
            { ...roomData, updatedAt: new Date() }, // Add updatedAt timestamp
            { new: true, runValidators: true } // Run mongoose validators
        );
    } catch (error) {
        throw error;
    }
}

  /**
   * Delete a room
   * @param id Room ID
   * @returns Promise with deletion result
   */
  async deleteRoom(id: string): Promise<Room | null> {
    try {
      return await RoomModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}