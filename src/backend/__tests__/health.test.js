const request = require('supertest');
const express = require('express');

const app = express();
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

describe('GET /health', () => {
    it('should return status ok', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status: 'ok' });
    });
});
