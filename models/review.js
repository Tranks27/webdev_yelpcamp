const mongoose = require('mongoose');
const Schema = mongoose.Schema; // just for shortening

const reviewSchema = new Schema({
    body: String,
    rating: Number
});

module.exports = mongoose.model('Review', reviewSchema);
