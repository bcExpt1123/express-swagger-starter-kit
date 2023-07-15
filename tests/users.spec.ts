import 'jest';
import request from 'supertest';
import app from '../src'

describe('User', () => {
    it('test /awesome/applicant endpoint', async () => {
        const response = await request(app).get('/api/awesome/applicant');
        expect(response.body).toEqual({
            firstname: 'XXX',
            lastname: 'YYY',
            contact: {
                email: 'xxyy.gmail.com',
                phone: '1 (234) 567 8901'
            },
            skills: [
                {
                    field: 'Node.js',
                    level: 'Expert'
                },
                {
                    field: 'Angular',
                    level: 'Expert'
                }
            ],
            summary: 'Full Stack Developer'
        })
    })
})