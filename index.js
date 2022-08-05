// MAKE SURE YOU HAVE RUN npm i express mongoose dotenv
// Basic config

const express = require('express');
const app = express();
require('dotenv').config();
app.set('port', process.env.PORT || 8000);
const cors = require('cors');

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
/// Redirect
app.get('/', (req, res) => {
  res.redirect('/restaurants');
});

/// Controllers

const restaurantsController = require('./controllers/restaurantsController');
app.use('/restaurants', restaurantsController);

const messagesController = require('./controllers/messagesController');
app.use('/messages', messagesController);

const reviewsController = require('./controllers/reviewsController');
app.use('/reviews', reviewsController);

const usersController = require('./controllers/usersController');
app.use('/users', usersController);

// Error handle
app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).send(message);
});

// Start server
app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
