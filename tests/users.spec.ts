import 'jest';
import request from 'supertest';
import app from '../src/app'
import { IUserPayload } from '../src/interfaces';

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
                            firstname: "Artem",
                            lastname: "Pavlov",
                            email: "artem0408pavlov@gmail.com",
                            phone: "+1 (662) 307 2258"
                        }
                    }
                )
            })
    })
    let user: IUserPayload
    it('test to create an user: POST /api/user', async () => {
        await request(app)
            .post('/api/user')
            .send({
                email: 'testing@gmail.com',
                firstname: 'tester',
                lastname: 'jest',
                phone: '+1 (662) 307 9999'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                user = response.body.data
                expect(response.body.data.firstname)
                    .toEqual('tester')
                expect(response.body.data.lastname)
                    .toEqual('jest')
                expect(response.body.data.email)
                    .toEqual('testing@gmail.com')
            })
    })
    it('test to fetch an user: GET /api/user/:id', async () => {
        await request(app)
            .get(`/api/user/${user.id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body.data.firstname)
                    .toEqual('tester')
                expect(response.body.data.lastname)
                    .toEqual('jest')
                expect(response.body.data.email)
                    .toEqual('testing@gmail.com')
            })
    })
    it('test to update an user: PUT /api/user/:id', async () => {
        await request(app)
            .put(`/api/user/${user.id}`)
            .send({
                firstname: 'tester1',
                lastname: 'jest1'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                user = {
                    ...user,
                    ...response.body.data
                }
                expect(response.body.data.firstname)
                    .toEqual('tester1')
                expect(response.body.data.lastname)
                    .toEqual('jest1')
            })
    })
    it('test to delete an user: DELETE /api/user/:id', async () => {
        await request(app)
            .delete(`/api/user/${user.id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    data: 1
                })
            })
    })
})