const mongoose = require('../db/connection');
 
const reviewSchema = new mongoose.Schema({
    title: String,
    stars: Number,
    body: String,
    reviewers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    },
    { timestamps: true }
)
 
const Review = mongoose.model('Review', reviewSchema);
 
module.exports = Review;
 

