// src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import appointmentRoutes from './routes/appointmentsRoutes';
import config from './config/config';

const app = express();
app.use(express.json());

mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Apply the auth middleware to protect the appointments service
app.use('/api/appointments', appointmentRoutes);

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
