import express, { Application } from 'express';
import morgan from 'morgan';
import { json, urlencoded } from 'body-parser';
import Router from './routes';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const app: Application = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/api', Router);

app.listen(process.env.PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`HTTP Server successfully started at port ${process.env.PORT}`);
});

export default app