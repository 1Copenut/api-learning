import './config';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import path from 'path';

// Routes
import indexRouter from './routes/index';
import categoriesRouter from './routes/categories';
import seriesRouter from './routes/series';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use('/test', indexRouter);
app.use('/api/v1/categories', categoriesRouter);
app.use('/api/v1/series', seriesRouter);

export default app;