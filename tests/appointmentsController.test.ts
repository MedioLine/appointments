// tests/appointmentsController.test.ts
import request from 'supertest';
import app from '../src/index'; // Make sure app is exported from your index.ts

describe('Appointments API', () => {
    it('should create a new appointment', async () => {
        const response = await request(app)
            .post('/api/appointments')
            .send({
                patientId: '12345',
                doctorId: '67890',
                appointmentDate: new Date(),
                notes: 'First appointment',
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('_id');
    });

    // Add more tests as needed
});
