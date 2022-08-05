const express = require('express');
const router = express.Router();
const User = require('../models/user')


// Index
// GET /users
router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({})
        .populate('likedrestaurants')
        .populate('friends')
        .populate('messages')
        .populate('events.location')
        .populate('events.partcipants')
        res.json(users)
    } catch(err) {
        next(err)
    }
})

// Show
// GET /users/:id
router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        .populate('likedrestaurants')
        .populate('friends')
        .populate('messages')
        .populate('events.location')
        .populate('events.partcipants')
        res.json(user)
    } catch(err) {
        next(err)
    }
})

// Create
// POST /users
router.post('/', async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } catch(err) {
        next(err)
    }
})

// Update
// PUT /users/:id
router.put('/:id', async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (updatedUser) {
            res.json(updatedUser)
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})

// Delete
// DELETE /users/:id
router.delete('/:id', async (req, res, next) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.json(deletedUser)
    } catch(err) {
        next(err)
    }
})


module.exports = router;




