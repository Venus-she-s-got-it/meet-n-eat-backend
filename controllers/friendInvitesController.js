const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Add friend invite
// PUT /friendinvites/:userId
router.put('/:userId', (req, res, next) => {
   User.findById(req.params.userId)
       .then(user => {
           user.friendinvites.push(req.body)
           user.save()
           res.json(user)
       })
       .catch(next)
})

// Delete friend invite
// DELETE /friendinvites/:inviteId/user/:userId
router.delete('/:senderId/user/:userId', (req, res, next) => {
   User.findByIdAndUpdate(req.params.userId, { $pull: { friendinvites: { sender: req.params.senderId}}}, { new: true })
      .then(user => res.json(user))
      .catch(next)
})

module.exports = router