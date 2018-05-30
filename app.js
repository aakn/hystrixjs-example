import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import root from './routes/root';
import stream from './routes/hystrixStream'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

app.get('/', root);
app.get('/hystrix.stream', stream);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

module.exports = app;