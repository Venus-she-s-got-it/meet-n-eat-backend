const mongoose = require('../db/connection');
const messageSchema = require('./message');
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
  username: String,
  displayname: String,
  profileimg: String,
  location: String,
  about: String,
  likedrestaurants: [{
      type: ObjectId,
      ref: 'Restaurant'
  }],
  friends: [{
      type: ObjectId,
      ref: 'User'
  }],
  messages:[messageSchema],
  events: [{
    location: {
      type: ObjectId,
      ref:'Restaurant'
    },
    partcipants: [{
      type: ObjectId,
      ref:'User'
    }],
  }],
  password: String,
  email: String,
})
const User = mongoose.model('User', userSchema)
module.exports = User
 
