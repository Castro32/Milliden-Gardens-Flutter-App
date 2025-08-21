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

// Use CommonJS __dirname and __filename directly
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

// ENHANCED CORS configuration
const allowedOrigins = {
  development: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:43013', // Flutter web
    /^http:\/\/localhost:\d+$/ // Any localhost port
  ],
  production: [
    'https://milliden-gardens.vercel.app',
    'https://your-flutter-web-domain.com'
  ]
};

const origins = process.env.NODE_ENV === 'production' 
  ? allowedOrigins.production 
  : allowedOrigins.development;

app.use(cors({
  origin: origins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));

// Handle preflight requests
app.options('*', cors());

// Middleware - move static file serving BEFORE other middleware
// ENHANCED static file serving with proper headers
app.use('/uploads', express.static(uploadsDir, {
  setHeaders: (res, path) => {
    // Set proper CORS headers for images
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Set proper cache headers
    if (path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.gif')) {
      res.setHeader('Content-Type', 'image/*');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day cache
    }
  }
}));

// Other middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Add middleware to log all requests to uploads
app.use('/uploads', (req, res, next) => {
  console.log(`Serving static file: ${req.path}`);
  console.log(`Full path: ${path.join(uploadsDir, req.path)}`);
  console.log(`File exists: ${fs.existsSync(path.join(uploadsDir, req.path))}`);
  next();
});

// Test endpoint to check if uploads directory exists
app.get('/check-uploads', (req, res) => {
  const dir = uploadsDir;
  const exists = fs.existsSync(dir);
  
  if (exists) {
    // If directory exists, try to read its contents
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

// Test endpoint for individual file access
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

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working' });
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

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ 
    message: 'Server error', 
    error: err instanceof Error ? err.message : String(err) 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Uploads served at: http://localhost:${PORT}/uploads/`);
});