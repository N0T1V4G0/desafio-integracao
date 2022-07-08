import express from 'express';
import morgan from 'morgan';
import { errorMiddleware } from './middlewares/error';
import { categoryRouter } from './routes/category.routes';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/category', categoryRouter);
app.use(errorMiddleware);

export { app };
