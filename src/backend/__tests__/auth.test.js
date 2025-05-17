const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('../routes/auth');

const app = express();
app.use(bodyParser.json());
app.use('/api', authRoutes);

describe('Auth API', () => {
    it('should login successfully with email and password', async () => {
        const res = await request(app)
            .post('/api/login')
            .send({ email: 'test@example.com', password: 'password123' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.token).toBeDefined();
    });

    it('should fail login without credentials', async () => {
        const res = await request(app).post('/api/login').send({});
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toBeDefined();
    });

    it('should logout successfully', async () => {
        const res = await request(app).post('/api/logout');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual("Logged out");
    });

    test('GET /api/me should return user profile', async () => {
        const res = await request(app).get('/api/me');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('name', 'Soliman Faragy');
    });
});
