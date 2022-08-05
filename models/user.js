const { isObjectIdOrHexString } = require('mongoose');
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
      ref: 'Friends'
  }],
  messages:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Messages'
  }],
  events: [{
   type: mongoose.Schema.Types.ObjectId,
   ref:'Events'
 
}],
  password: String,
  email: String,
})
const User = mongoose.model('User', userSchema)
module.exports = User
 
