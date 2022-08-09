const express = require('express')
const router = express.Router();
const User = require('../models/user')

// Index
// GET /messages
router.get('/', (req, res, next) => {
    User.find({})
      .populate('sender')
      .populate('recipients')
      .then((message) => res.json(message))
      .catch(next)
})


// Show
// GET /messages/:id
router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
    .populate('sender')
    .populate('recipients')
    .then((messages) => res.json(messages))
    .catch(next)
})

// Update
// PUT /messages/:id
router.put('/:id', (req, res, next) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(messages => res.json(messages))
    .catch(next)
})

// Create
// POST /messages
router.post('/', (req, res, next) => {
   User.create(req.body)
      .then(message => res.status(201).json(message))
      .catch(next)
})

// Delete
// DELETE /messages/:id
router.delete('/:id', (req, res, next) => {
   Message.findByIdAndDelete(req.params.id)
      .then(message => res.json(message))
      .catch(next)
})

module.exports = router