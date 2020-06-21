// import app from './app';
// import config from './config';

// const { PORT } = config;

// app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

// old super simple server.js code 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
