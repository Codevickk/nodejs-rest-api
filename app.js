// Require Modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const studentRouter = require('./routes/studentRoutes');

const app = express();

// Use Middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});
app.use(morgan('dev'));

// Routes
app.use('/api/students', studentRouter);

module.exports = app;