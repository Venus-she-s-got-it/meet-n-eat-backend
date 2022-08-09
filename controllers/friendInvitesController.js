const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Add friend invite
// PUT /friendinvites/:recipientId
router.put('/:recipientId', (req, res, next) => {
   User.findById(req.params.recipientId)
       .then(user => {
           user.friendinvites.push(req.body)
           user.save()
           res.json(user)
       })
       .catch(next)
})

// Delete friend invite
// DELETE /friendinvites/:inviteId/user/:recipientId
router.delete('/:inviteId/user/:recipientId', (req, res, next) => {
   User.findByIdAndUpdate(req.params.recipientId, { $pull: { friendinvites: { _id: req.params.inviteId}}}, { new: true })
      .then(user => res.json(user))
      .catch(next)
})

module.exports = router