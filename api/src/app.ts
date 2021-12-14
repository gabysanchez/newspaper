import express from 'express';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const pathLocal = '/api';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import path from 'node:path';
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

import mongoose from 'mongoose';
const mongoDB = 'mongodb://localhost:27017/newspaper';
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose error: '));

//Document
import { swaggerDocument } from './docs/swagger';
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

import { router as routerReporter } from './routes/reporter.routes';
import { router as routerNews } from './routes/news.routes';
import { router as routerViews } from './routes/views.routes';

app.use(`/news`, routerViews);

app.use(`${pathLocal}/reporters`, routerReporter);
app.use(`${pathLocal}/news`, routerNews);

if (process.env.NODE_ENV != 'test') {
  app.listen(8080, () => {
    console.log(`Listening on port 8080`);
  });
}

export default app;
