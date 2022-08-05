const mongoose = require('../db/connection');
 
const messageSchema = new mongoose.Schema({
   subject: String,
   to: [{
       type: mongoose.Schema.Types.ObjectId,
       href:'Receiver'
   }],
   from: [{
       type: mongoose.Schema.Types.ObjectId,
       href:'Sender'
   }],
   body: String,
   timestamps: Boolean,
})
 
const Message = mongoose.model('Message', messageSchema);
 
module.exports = Message;
 

