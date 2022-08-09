const express = require('express');
const router = express.Router();
const Restaurant = require('../models-and-schemas/restaurant');

// Restaurant CRUD
// ========================================================================================================

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
    .then((restaurant) => res.status(201).json(restaurant))
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

// Reviews
// ========================================================================================================

// Get by Restaurant ID
// GET /restaurants/:restaurantId/reviews
router.get('/:restaurantId/reviews', (req, res, next) => {
  Restaurant.findById(req.params.restaurantId)
    .select('reviews')
    .then(reviews => res.json(reviews))
    .catch(next)
})

// Create a Review
// POST /restaurants/:restaurantId/reviews
router.post('/:restaurantId/reviews', async (req, res, next) => {
  try {
      const restaurant = await Restaurant.findById(req.params.restaurantId)
      restaurant.reviews.push(req.body)
      await restaurant.save()
      res.json(restaurant.reviews)
  } catch(err) {
      next(err)
  }
})

// Delete a Review
// DELETE /restaurants/:restaurantId/reviews/:reviewId
router.delete('/:restaurantId/reviews/:reviewId', (req, res, next) => {
  Restaurant.findByIdAndUpdate(req.params.restaurantId, { $pull: { reviews: { _id: req.params.reviewId }}}, { new: true })
    .then(restaurant => res.json(restaurant.reviews))
    .catch(next)
})

module.exports = router;
