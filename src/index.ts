import app from './app';
import * as dotenv from 'dotenv';
dotenv.config();

app.listen(process.env.PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`HTTP Server successfully started at port ${process.env.PORT}`);
});