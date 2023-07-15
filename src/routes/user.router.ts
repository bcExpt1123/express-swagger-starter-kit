import express, { Request, Response } from 'express';
import UserController from '../controllers/user.controller';

const controller = new UserController();
const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const result = await controller.fetch(Number(req.params.id));
    res.status(200).send({
      data: result
    });
  } catch(err) {
    res.status(400).send({
      error: {
        message: (err as Error).message
      }
    });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await controller.fetchAll()
    res.status(200).send({
      data: result
    });
  } catch(err) {
    res.status(400).send({
      error: {
        message: (err as Error).message
      }
    });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const result = await controller.create(req.body);
    res.status(200).send({
      data: result
    });
  } catch(err) {
    res.status(400).send({
      error: {
        message: (err as Error).message
      }
    });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const result = await controller.update(req.body, Number(req.params.id));
    res.status(200).send({
      data: result
    });
  } catch(err) {
    res.status(400).send({
      error: {
        message: (err as Error).message
      }
    });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const result = await controller.delete(Number(req.params.id));
    res.status(200).send({
      data: result
    });
  } catch(err) {
    res.status(400).send({
      error: {
        message: (err as Error).message
      }
    });
  }
});

export default router;