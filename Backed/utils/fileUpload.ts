// // // import multer from 'multer';
// // // import { Request } from 'express';

// // // const storage = multer.diskStorage({
// // //   destination: function (req: Request, file, cb) {
// // //     cb(null, 'uploads/');
// // //   },
// // //   filename: function (req: Request, file, cb) {
// // //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
// // //     cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
// // //   }
// // // });

// // // const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
// // //   if (file.mimetype.startsWith('image/')) {
// // //     cb(null, true);
// // //   } else {
// // //     cb(new Error('Only image files are allowed!'));
// // //   }
// // // };


// // // const upload = multer({
// // //   storage: storage,
// // //   fileFilter: fileFilter,
// // //   limits: { fileSize: 1024 * 1024 * 5 }
// // // });

// // // export const uploadRoomImages = upload.array('images', 5);
// // import multer from 'multer';
// // import { Request, Response, NextFunction } from 'express';
// // import path from 'path';

// // const storage = multer.diskStorage({
// //   destination: function (req: Request, file, cb) {
// //     cb(null, 'uploads/');
// //   },
// //   filename: function (req: Request, file, cb) {
// //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
// //     cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
// //   }
// // });

// // const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
// //   if (file.mimetype.startsWith('image/')) {
// //     cb(null, true);
// //   } else {
// //     cb(new Error('Only image files are allowed!'));
// //   }
// // };
// // const upload = multer({
// //   storage: storage,
// //   fileFilter: fileFilter,
// //   limits: { fileSize: 1024 * 1024 * 5 }
// // });

// // export const uploadRoomImages = [
// //   upload.array('images', 5),
// //   (req: Request, res: Response, next: NextFunction) => {
// //     if (req.files && Array.isArray(req.files)) {
// //       req.files.forEach((file: Express.Multer.File) => {
// //         file.path = file.path.replace(/\\/g, '/');
// //       });
// //     }
// //     next();
// //   }
// // ];
// import multer from 'multer';
// import { Request, Response, NextFunction } from 'express';
// import path from 'path';

// const storage = multer.diskStorage({
//   destination: function (req: Request, file, cb) {
//     // Use absolute path that matches your static file serving
//     cb(null, path.join(__dirname, 'uploads'));
//     //cb(null, path.join(process.cwd(), 'dist', 'uploads'));
//   },
//   filename: function (req: Request, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
//   }
// });

// const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true);
//   } else {
//     cb(new Error('Only image files are allowed!'));
//   }
// };

// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 1024 * 1024 * 5 }
// });

// export const uploadRoomImages = [
//   upload.array('images', 5),
//   (req: Request, res: Response, next: NextFunction) => {
//     if (req.files && Array.isArray(req.files)) {
//       req.files.forEach((file: Express.Multer.File) => {
//         file.path = file.path.replace(/\\/g, '/');
//       });
//     }
//     next();
//   }
// ];
// // import multer from 'multer';
// // import { Request } from 'express';

// // const storage = multer.diskStorage({
// //   destination: function (req: Request, file, cb) {
// //     cb(null, 'uploads/');
// //   },
// //   filename: function (req: Request, file, cb) {
// //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
// //     cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
// //   }
// // });

// // const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
// //   if (file.mimetype.startsWith('image/')) {
// //     cb(null, true);
// //   } else {
// //     cb(new Error('Only image files are allowed!'));
// //   }
// // };


// // const upload = multer({
// //   storage: storage,
// //   fileFilter: fileFilter,
// //   limits: { fileSize: 1024 * 1024 * 5 }
// // });

// // export const uploadRoomImages = upload.array('images', 5);
// import multer from 'multer';
// import { Request, Response, NextFunction } from 'express';
// import path from 'path';

// const storage = multer.diskStorage({
//   destination: function (req: Request, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req: Request, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
//   }
// });

// const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true);
//   } else {
//     cb(new Error('Only image files are allowed!'));
//   }
// };
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 1024 * 1024 * 5 }
// });

// export const uploadRoomImages = [
//   upload.array('images', 5),
//   (req: Request, res: Response, next: NextFunction) => {
//     if (req.files && Array.isArray(req.files)) {
//       req.files.forEach((file: Express.Multer.File) => {
//         file.path = file.path.replace(/\\/g, '/');
//       });
//     }
//     next();
//   }
// ];
import multer from 'multer';
import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    // Use absolute path from project root
    const uploadPath = path.join(process.cwd(), 'uploads');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: function (req: Request, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }
});

export const uploadRoomImages = [
  upload.array('images', 5),
  (req: Request, res: Response, next: NextFunction) => {
    if (req.files && Array.isArray(req.files)) {
      req.files.forEach((file: Express.Multer.File) => {
        file.path = file.path.replace(/\\/g, '/');
      });
    }
    next();
  }
];