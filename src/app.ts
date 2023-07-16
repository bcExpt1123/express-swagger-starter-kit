import express, { Application } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import Router from './routes';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/api', Router);

export default app