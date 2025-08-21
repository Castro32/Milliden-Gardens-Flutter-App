// // import { Router } from 'express';
// // import { RoomController } from '../controllers/roomController';

// // const router = Router();
// // const roomController = new RoomController();

// // // Wrap controller methods to handle async/await and maintain proper typing
// // const asyncHandler = (fn: (req: any, res: any) => Promise<void>) => 
// //   (req: any, res: any, next: any) => 
// //     Promise.resolve(fn(req, res)).catch(next);

// // // Routes
// // router.get('/', asyncHandler(roomController.getRooms.bind(roomController)));
// // router.get('/available', asyncHandler(roomController.getAvailableRooms.bind(roomController)));
// // router.get('/:id', asyncHandler(roomController.getRoomById.bind(roomController)));
// // router.post('/', asyncHandler(roomController.createRoom.bind(roomController)));
// // router.put('/:id', asyncHandler(roomController.updateRoom.bind(roomController)));
// // router.delete('/:id', asyncHandler(roomController.deleteRoom.bind(roomController)));

// // export default router;
// import { Router } from 'express';
// import { Request, Response, NextFunction } from 'express';
// import { RoomController } from '../controllers/roomController';
// import { uploadRoomImages } from '../utils/fileUpload';

// const router = Router();
// const roomController = new RoomController();

// const asyncHandler = (fn: (req: Request, res: Response) => Promise<any>) => 
//   (req: Request, res: Response, next: NextFunction) => 
//     Promise.resolve(fn(req, res)).catch(next);

// // Routes
// router.post(
//   '/',
//   uploadRoomImages, 
//   asyncHandler(roomController.createRoom.bind(roomController))
// );
// router.get('/', asyncHandler(roomController.getRooms.bind(roomController)));
// router.get('/available', asyncHandler(roomController.getAvailableRooms.bind(roomController)));
// router.get('/:id', asyncHandler(roomController.getRoomById.bind(roomController)));
// router.post('/', asyncHandler(roomController.createRoom.bind(roomController)));
// // router.put('/:id', asyncHandler(roomController.updateRoom.bind(roomController)));
// router.patch('/:id/status', asyncHandler(roomController.updateRoomStatus.bind(roomController)));
// router.delete('/:id', asyncHandler(roomController.deleteRoom.bind(roomController)));

// export default router;
import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
import { RoomController } from '../controllers/roomController';
import { uploadRoomImages } from '../utils/fileUpload';

const router = Router();
const roomController = new RoomController();

const asyncHandler = (fn: (req: Request, res: Response) => Promise<any>) => 
  (req: Request, res: Response, next: NextFunction) => 
    Promise.resolve(fn(req, res)).catch(next);

// Routes
router.post(
  '/',
  uploadRoomImages, 
  asyncHandler(roomController.createRoom.bind(roomController))
);
router.get('/', asyncHandler(roomController.getRooms.bind(roomController)));
router.get('/available', asyncHandler(roomController.getAvailableRooms.bind(roomController)));
router.get('/:id', asyncHandler(roomController.getRoomById.bind(roomController)));
// Remove duplicate route
// router.post('/', asyncHandler(roomController.createRoom.bind(roomController)));
router.patch('/:id/status', asyncHandler(roomController.updateRoomStatus.bind(roomController)));
router.delete('/:id', asyncHandler(roomController.deleteRoom.bind(roomController)));
router.put('/:id', uploadRoomImages, asyncHandler(roomController.updateRoom.bind(roomController)));


export default router;