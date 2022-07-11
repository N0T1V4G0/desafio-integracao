import express from 'express';
import morgan from 'morgan';
import { errorMiddleware } from './middlewares/error';
import { categoryRouter } from './routes/category.routes';
import { productRouter } from './routes/product.routes';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use(errorMiddleware);

export { app };
