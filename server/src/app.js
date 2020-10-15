const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();

const { notFound, errorHandler } = require('./middleware');
const auth = require('../auth');

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// our routes go here...
app.get('/', (req,res) => {
  res.json({
    message: 'First time express',
  });
});

// our app routers
app.use('/auth', auth);

// our error handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;