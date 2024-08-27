// src/routes/appointmentsRoutes.ts
import { Router } from 'express';
import {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
} from '../controllers/appointmentsController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Apply the authMiddleware to protect all appointment routes
router.use(authMiddleware);

router.post('/', createAppointment);
router.get('/', getAppointments);
router.get('/:id', getAppointmentById);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

export default router;
