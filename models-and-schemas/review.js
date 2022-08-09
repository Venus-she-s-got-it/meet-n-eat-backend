const mongoose = require('../db/connection');
 
const reviewSchema = new mongoose.Schema({
    title: String,
    stars: Number,
    body: String,
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    },
    { timestamps: true }
)

module.exports = reviewSchema;
 

