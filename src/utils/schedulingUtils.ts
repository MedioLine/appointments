// src/utils/schedulingUtils.ts
import Appointment from '../models/appointmentModel';

export const checkAvailability = async (doctorId: string, appointmentDate: Date): Promise<boolean> => {
    const existingAppointment = await Appointment.findOne({ doctorId, appointmentDate });
    return !existingAppointment;
};

// Add other utility functions as needed
