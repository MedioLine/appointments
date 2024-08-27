// src/models/appointmentModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
    patientId: string;
    doctorId: string;
    appointmentDate: Date;
    status: 'scheduled' | 'completed' | 'cancelled';
    notes?: string;
}

const AppointmentSchema: Schema = new Schema({
    patientId: { type: String, required: true },
    doctorId: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    status: { type: String, required: true, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' },
    notes: { type: String },
});

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
