import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
//import { AdminUser, UserRole } from '../models/adminModel';
import { AdminUser, UserRole } from './models/adminModel';
//import config from '../config/config';
import config from './config/config';


/**
 * Script to initialize the admin user
 * Run this once during system setup or deployment
 */
async function initAdmin() {
  try {
    await mongoose.connect(config.mongoUri as string);
    
    // Check if the connection was successful
    if (mongoose.connection.readyState !== 1) {
      console.error('Failed to connect to the database');
      process.exit(1);
    }
    
    // Connection successful
    console.log('Database connection established successfully');

    // Check if admin already exists
    const adminExists = await AdminUser.findOne({ role: UserRole.ADMIN });

    if (adminExists) {
      console.log('Admin user already exists');
      await mongoose.disconnect();
      return;
    }

    // Admin credentials from config (which loads from environment variables)
    const adminEmail = config.adminCredentials.adminEmail;
    const adminPassword = config.adminCredentials.adminPassword;
    const adminFirstName = config.adminCredentials.adminFirstName;
    const adminLastName = config.adminCredentials.adminLastName;
    
    if (!adminEmail || !adminPassword) {
      console.error('ERROR: Admin email and password must be provided via environment variables');
      process.exit(1);
    }

    // Hash password
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);

    // Create admin user
    const admin = new AdminUser({
      firstName: adminFirstName,
      lastName: adminLastName,
      email: adminEmail,
      password: hashedPassword,
      role: UserRole.ADMIN
    });

    await admin.save();

    console.log(`Admin user created successfully with email: ${adminEmail}`);
    console.log('Make sure to change the default password immediately after first login');

    await mongoose.disconnect();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error initializing admin user:', error);
    process.exit(1);
  }
}

// Run the initialization
initAdmin();