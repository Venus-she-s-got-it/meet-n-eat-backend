const mongoose = require('../db/connection');
const messageSchema = require('./message');
const friendInviteSchema = require('./friendInvite')
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
  friendinvites: [friendInviteSchema],
  messages:[messageSchema],
  events: [{
    restaurant: {
      type: ObjectId,
      ref:'Restaurant'
    },
    participants: [{
      type: ObjectId,
      // ref:'User'
    }],
  }],
  password: String,
  email: String,
},
  {timestamps: Boolean}
)
const User = mongoose.model('User', userSchema)
module.exports = User
 
