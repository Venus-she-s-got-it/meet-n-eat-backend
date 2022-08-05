const express = require('express')
const router = express.Router();
const Review = require('../models/review')

//GET - index
router.get('/', async (req, res, next) => {
    try {
        const reviews = await Review.find({})
        res.json(reviews)
    } catch(err) {
        next(err)
    }
})

// GET by id

router.get('/:id', async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id)
        res.json(review)
    } catch (err) {
        next(err)
    }
})

// POST - create

router.post('/', async (req, res, next) => {
    try {
        const newReview = await Review.create(req.body)
        res.json(newReview)
    } catch(err) {
        next
    }
})

// PUT - update
router.put('/:id', async (req, res, next) => {
    try {
        const updatedReview = await User.findbyIdAndUpdate(req.params.id, req.body, { new: true})
        if (updatedReview) {
            res.json(updatedReview)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

// DELETE - delete
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedReview = await Review.findOneAndDelete(req.params.id)
        res.json(deletedReview)
    } catch(err) {
        next(err)
    }
})

module.exports = router;