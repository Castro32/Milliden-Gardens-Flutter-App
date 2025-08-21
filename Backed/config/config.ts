import dotenv from 'dotenv';
dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    accessTokenExpiration: parseInt(process.env.JWT_ACCESS_TOKEN_EXPIRATION || '3600', 10) // 1 hour in seconds
  },
  adminCredentials: {
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD,
    adminFirstName: process.env.ADMIN_FIRST_NAME || 'Admin',
    adminLastName: process.env.ADMIN_LAST_NAME || 'User'
  },
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
  }
};

export default config;

declare global {
  namespace Express {
    interface User {
      id: string;
      email: string;
      role: string;
      firstName: string;
      lastName: string;
    }

    interface Request {
      admin?: User;
    }
  }
}

export {};