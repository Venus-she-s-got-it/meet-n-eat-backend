const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

// Index
// GET /restaurants
router.get('/', (req, res, next) => {
  Restaurant.find({})
    .then((restaurants) => res.json(restaurants))
    .catch(next);
});

// Show
// GET /restaurants/:id
router.get('/:id', (req, res, next) => {
  Restaurant.findById(req.params.id)
    .then((restaurants) => res.json(restaurants))
    .catch(next);
});

// Create
// POST /restaurants
router.post('/', (req, res, next) => {
  Restaurant.create(req.body)
    .then((restaurants) => res.status(201).json(restaurants))
    .catch(next);
});

// Update
// PUT /restaurants/:id
router.put('/:id', (req, res, next) => {
  Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((restaurant) => res.json(restaurant))
  .catch(next)
});

// Delete
// DELETE /restaurants/:id
router.delete('/:id', (req, res, next) => {
  Restaurant.findByIdAndDelete(req.params.id)
   .then((restaurant) => res.json(restaurant))
   .catch(next)
});

module.exports = router;
