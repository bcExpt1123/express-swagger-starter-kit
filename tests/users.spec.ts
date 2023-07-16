import 'jest';
import request from 'supertest';
import app from '../src/app'

describe('User', () => {
    it('test my info: GET /api/awesome/applicant', async () => {
        await request(app)
            .get('/api/awesome/applicant')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    {
                        data: {
                            id: 1,
                            firstname: "Jhon",
                            lastname: "Doe",
                            email: "example@gmail.com"
                        }
                    }
                )
            })
    })
    it('test to create an user(failed): POST /api/user', async () => {
        await request(app)
            .post('/api/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .then((response) => {
                expect(response.body.error.message)
                    .toEqual('notNull Violation: User.email cannot be null')
            })
    })
    it('test to create an user(succeed): POST /api/user', async () => {
        await request(app)
            .post('/api/user')
            .send({
                email: 'testing@gmail.com',
                firstname: 'tester',
                lastname: 'jest'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .then((response) => {
                console.log(response)
                expect(response.body)
                    .toEqual('notNull Violation: User.email cannot be null')
            })
    })
})