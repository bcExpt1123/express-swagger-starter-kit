import express, { Request, Response } from 'express';
import userRouter from './user.router';
import UserController from '../controllers/user.controller';

const router = express.Router();

router.get('/awesome/applicant', async (_req: Request, res: Response) => {
  const controller = new UserController();
  try {
    const result = await controller.fetchWithEmail('artem0408pavlov@gmail.com');
    res.status(200).send({
      data: result
    });
  } catch (err) {
    res.status(400).send({
      error: {
        message: (err as Error).message
      }
    });
  }
});

router.use('/user', userRouter);

export default router;
