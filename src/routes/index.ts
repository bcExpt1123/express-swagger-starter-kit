import express, { Request, Response } from 'express';
import UserRouter from './user.router';

const router = express.Router();

router.get('/awesome/applicant', (_req: Request, res: Response) => {
    res.status(200).json({
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
});

router.use('/user', UserRouter);

export default router;
