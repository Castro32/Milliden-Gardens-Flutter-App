// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import roomRoutes from './routes/roomRoutes';
// import bookingRoutes from './routes/bookingRoutes';
// import contactRoutes from './routes/contactRoute'; 
// import emailRoutes from './routes/contactRoute'; 
// import config from './config/config';
// import adminRoutes from './routes/adminRoutes';
// import path from 'path';
// import fs from 'fs';

// // Use CommonJS __dirname and __filename directly
// declare const __dirname: string;
// declare const __filename: string;

// const app = express();
// const PORT = process.env.PORT || 3001;


// const uploadsDir = path.join(process.cwd(), 'uploads');

// if (!fs.existsSync(uploadsDir)) {
//   console.log(`Creating uploads directory at: ${uploadsDir}`);
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// console.log('Uploads directory path:', uploadsDir);

// // ENHANCED CORS configuration
// const allowedOrigins = {
//   development: [
//     'http://localhost:3000',
//     'http://localhost:3001',
//     'http://localhost:43013', // Flutter web
//     /^http:\/\/localhost:\d+$/ // Any localhost port
//   ],
//   production: [
//     'https://milliden-gardens.vercel.app',
//     'https://your-flutter-web-domain.com'
//   ]
// };

// const origins = process.env.NODE_ENV === 'production' 
//   ? allowedOrigins.production 
//   : allowedOrigins.development;

// app.use(cors({
//   origin: origins,
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
// }));

// // Handle preflight requests
// app.options('*', cors());

// // Middleware - move static file serving BEFORE other middleware
// // ENHANCED static file serving with proper headers
// app.use('/uploads', express.static(uploadsDir, {
//   setHeaders: (res, path) => {
//     // Set proper CORS headers for images
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
//     // Set proper cache headers
//     if (path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.gif')) {
//       res.setHeader('Content-Type', 'image/*');
//       res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day cache
//     }
//   }
// }));

// // Other middleware
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // Add middleware to log all requests to uploads
// app.use('/uploads', (req, res, next) => {
//   console.log(`Serving static file: ${req.path}`);
//   console.log(`Full path: ${path.join(uploadsDir, req.path)}`);
//   console.log(`File exists: ${fs.existsSync(path.join(uploadsDir, req.path))}`);
//   next();
// });

// // Test endpoint to check if uploads directory exists
// app.get('/check-uploads', (req, res) => {
//   const dir = uploadsDir;
//   const exists = fs.existsSync(dir);
  
//   if (exists) {
//     // If directory exists, try to read its contents
//     try {
//       const files = fs.readdirSync(dir);
//       res.json({ 
//         exists: true, 
//         path: dir,
//         fileCount: files.length,
//         files: files.map(file => ({
//           name: file,
//           path: `/uploads/${file}`,
//           fullPath: path.join(dir, file),
//           size: fs.statSync(path.join(dir, file)).size
//         }))
//       });
//     } catch (err) {
//       res.json({ 
//         exists: true, 
//         path: dir,
//         readable: false,
//         error: err instanceof Error ? err.message : String(err)
//       });
//     }
//   } else {
//     res.json({ exists: false, path: dir });
//   }
// });

// // Test endpoint for individual file access
// app.get('/test-image/:filename', (req, res) => {
//   const filename = req.params.filename;
//   const filePath = path.join(uploadsDir, filename);
  
//   console.log(`Testing image access: ${filename}`);
//   console.log(`Full path: ${filePath}`);
//   console.log(`File exists: ${fs.existsSync(filePath)}`);
  
//   if (fs.existsSync(filePath)) {
//     res.sendFile(filePath);
//   } else {
//     res.status(404).json({ 
//       error: 'File not found',
//       filename,
//       path: filePath,
//       uploadsDir,
//       availableFiles: fs.existsSync(uploadsDir) ? fs.readdirSync(uploadsDir) : []
//     });
//   }
// });

// // Test endpoint
// app.get('/test', (req, res) => {
//   res.json({ message: 'Server is working' });
// });

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://fidel:qwerty1234@cluster0.cveawtg.mongodb.net/Milliden?retryWrites=true&w=majority&appName=Cluster0')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/rooms', roomRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api', emailRoutes);
// app.use('/api/admin', adminRoutes);

// // Error handling middleware
// app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.error('Error:', err);
//   res.status(500).json({ 
//     message: 'Server error', 
//     error: err instanceof Error ? err.message : String(err) 
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   console.log(`Uploads served at: http://localhost:${PORT}/uploads/`);
// });
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import roomRoutes from './routes/roomRoutes';
import bookingRoutes from './routes/bookingRoutes';
import contactRoutes from './routes/contactRoute'; 
import emailRoutes from './routes/contactRoute'; 
import config from './config/config';
import adminRoutes from './routes/adminRoutes';
import path from 'path';
import fs from 'fs';

declare const __dirname: string;
declare const __filename: string;

const app = express();
const PORT = process.env.PORT || 3001;

const uploadsDir = path.join(process.cwd(), 'uploads');

if (!fs.existsSync(uploadsDir)) {
  console.log(`Creating uploads directory at: ${uploadsDir}`);
  fs.mkdirSync(uploadsDir, { recursive: true });
}

console.log('Uploads directory path:', uploadsDir);

// FIXED CORS configuration - Apply CORS FIRST before any other middleware
app.use((req, res, next) => {
  const origin = req.headers.origin;
  
  // Define allowed origins (including regex patterns)
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:8080',
    'http://localhost:43013',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:8080',
    'http://127.0.0.1:43013',
    'https://milliden-gardens.vercel.app',
    'https://your-flutter-web-domain.com'
  ];
  
  // Check if origin is allowed (including localhost ports)
  const isAllowed = !origin || 
    allowedOrigins.includes(origin) || 
    /^http:\/\/localhost:\d+$/.test(origin) ||
    /^http:\/\/127\.0\.0\.1:\d+$/.test(origin);
  
  if (isAllowed) {
    res.header('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, X-File-Name');
  res.header('Access-Control-Max-Age', '86400'); // 24 hours
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    console.log(`Preflight request from origin: ${origin}`);
    res.status(200).end();
    return;
  }
  
  next();
});

// Alternative CORS package configuration as backup
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:8080', 
      'http://localhost:43013',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:8080',
      'http://127.0.0.1:43013',
      'https://milliden-gardens.vercel.app'
    ];
    
    const isAllowed = allowedOrigins.includes(origin) || 
      /^http:\/\/localhost:\d+$/.test(origin) ||
      /^http:\/\/127\.0\.0\.1:\d+$/.test(origin);
    
    if (isAllowed) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(null, false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Cache-Control', 'X-File-Name'],
  optionsSuccessStatus: 200,
  preflightContinue: false
}));

// Static file serving with CORS headers
app.use('/uploads', express.static(uploadsDir, {
  setHeaders: (res, filePath) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (filePath.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
      res.setHeader('Content-Type', 'image/*');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
  }
}));

// Other middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware for uploads
app.use('/uploads', (req, res, next) => {
  console.log(`Serving static file: ${req.path}`);
  console.log(`Full path: ${path.join(uploadsDir, req.path)}`);
  console.log(`File exists: ${fs.existsSync(path.join(uploadsDir, req.path))}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    cors: 'enabled',
    environment: process.env.NODE_ENV || 'development'
  });
});

// CORS test endpoint
app.get('/test-cors', (req, res) => {
  console.log('CORS test - Request headers:', {
    origin: req.headers.origin,
    'user-agent': req.headers['user-agent'],
    'access-control-request-method': req.headers['access-control-request-method']
  });
  
  res.json({ 
    message: 'CORS is working',
    origin: req.headers.origin,
    method: req.method,
    timestamp: new Date().toISOString()
  });
});

// Check uploads directory endpoint
app.get('/check-uploads', (req, res) => {
  const dir = uploadsDir;
  const exists = fs.existsSync(dir);
  
  if (exists) {
    try {
      const files = fs.readdirSync(dir);
      res.json({ 
        exists: true, 
        path: dir,
        fileCount: files.length,
        files: files.map(file => ({
          name: file,
          path: `/uploads/${file}`,
          fullPath: path.join(dir, file),
          size: fs.statSync(path.join(dir, file)).size
        }))
      });
    } catch (err) {
      res.json({ 
        exists: true, 
        path: dir,
        readable: false,
        error: err instanceof Error ? err.message : String(err)
      });
    }
  } else {
    res.json({ exists: false, path: dir });
  }
});

// Test individual file access
app.get('/test-image/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadsDir, filename);
  
  console.log(`Testing image access: ${filename}`);
  console.log(`Full path: ${filePath}`);
  console.log(`File exists: ${fs.existsSync(filePath)}`);
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ 
      error: 'File not found',
      filename,
      path: filePath,
      uploadsDir,
      availableFiles: fs.existsSync(uploadsDir) ? fs.readdirSync(uploadsDir) : []
    });
  }
});

// Basic test endpoint
app.get('/test', (req, res) => {
  res.json({ 
    message: 'Server is working',
    timestamp: new Date().toISOString(),
    origin: req.headers.origin
  });
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://fidel:qwerty1234@cluster0.cveawtg.mongodb.net/Milliden?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api', emailRoutes);
app.use('/api/admin', adminRoutes);

// Global error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error details:', {
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    url: req.url,
    method: req.method,
    origin: req.headers.origin
  });
  
  res.status(500).json({ 
    message: 'Server error', 
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.originalUrl}`,
    availableEndpoints: [
      '/health',
      '/test-cors',
      '/test',
      '/api/rooms',
      '/api/bookings',
      '/uploads/*'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📁 Uploads served at: http://localhost:${PORT}/uploads/`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`✅ CORS enabled for development origins`);
});