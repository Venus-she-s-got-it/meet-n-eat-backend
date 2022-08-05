const mongoose = require('../db/connection');
const userSchema = new mongoose.Schema({
  username: String,
  displayname: String,
  profileimg: String,
  location: String,
  about: String,
  likedrestaurants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant'
  }],
  friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }],
  messages:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
  }],
  events: [{
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Restaurant'
    },
    partcipants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'User'
    }],
  }],
  password: String,
  email: String,
})
const User = mongoose.model('User', userSchema)
module.exports = User
 
