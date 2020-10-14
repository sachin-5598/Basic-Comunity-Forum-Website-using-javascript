const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const { notFound, errorHandler } = require('./middleware');

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(cors());

// our routes go here...
app.get('/', (req,res) => {
  res.json({
    message: 'First time express',
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;