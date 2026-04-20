// Metodik_BE/server.ts
// This file sets up the Express server and connects to the MongoDB database
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes';
//import { connectToDB } from './db/connect';
//import adminRouter from './routes/adminRoutes';

// Configuración del servidor
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'http://localhost:5173', // tu local
    'https://dra-diana-hernandez.vercel.app' // tu frontend
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Rutas
app.use('/api', contactRoutes);
//app.use('/api/admin', adminRouter);

// Conexión a la DB y arranque del servido
  app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});