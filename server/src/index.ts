import 'dotenv/config';
import dns from 'node:dns';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { router as api } from './routes';
import { authRoutes } from './routes/auth';
import { adminRoutes } from './routes/admin';
import { featureToggleRoutes } from './routes/featureToggles';
import { publicFeatureToggleRoutes } from './routes/publicFeatureToggles';

// Use public resolvers for MongoDB Atlas SRV lookups. Some local/router DNS
// servers resolve through nslookup but refuse Node's SRV queries.
dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:8080',
  'https://veerify-ai-frontend.vercel.app',
  'https://veerify-ai-ashy.vercel.app',
  'https://api.veerifyai.com',
  'https://veerifyai.com',
  'https://www.veerifyai.com',
  'https://veerify-ai-three.vercel.app',
  'https://*.vercel.app'
];

// Add dynamic origin from environment variable
if (process.env.FRONTEND_URL) {
  const frontendUrl = process.env.FRONTEND_URL.replace(/\/$/, ''); // Remove trailing slash
  if (!allowedOrigins.includes(frontendUrl)) {
    allowedOrigins.push(frontendUrl);
  }
}

app.use(cors({ 
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list or matches wildcard patterns
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (allowedOrigin.includes('*')) {
        const pattern = allowedOrigin.replace(/\*/g, '.*');
        return new RegExp(pattern).test(origin);
      }
      return allowedOrigin === origin;
    });
    
    if (isAllowed) {
      callback(null, true);
    } else {
      console.log(`CORS blocked origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Add a simple root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'CSV Sensei Dashboard API', 
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      records: '/api/records'
    }
  });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/feature-toggles', featureToggleRoutes);
app.use('/api/feature-toggles', publicFeatureToggleRoutes);
app.use('/api', api);

const port = parseInt(process.env.PORT || '4001', 10);
console.log(`Starting server on port: ${port}`);
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/csv-sensei-dash';

if (!process.env.MONGODB_URI) {
  console.log('⚠️ MONGODB_URI not set, using default local MongoDB');
}

// MongoDB connection with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    console.log('⚠️ Continuing without database connection (using fallback data)');
    // Don't exit the process, continue with fallback data
  }
};

// Start server
const startServer = async () => {
  await connectDB();
  
  app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 API server running on port ${port}`);
    console.log(`📊 CSV Sensei Dashboard API ready`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
};

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  mongoose.connection.close().then(() => {
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  mongoose.connection.close().then(() => {
    process.exit(0);
  });
});

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
