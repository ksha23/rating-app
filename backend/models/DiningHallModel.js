const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Rating = require('../models/ratingModel');

const diningHallSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  numberOfReviews: {
    type: Number,
  },
  averageReview: {
    type: Number,
    required: false
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Rating' }],
});

const DiningHall = mongoose.model('DiningHall', diningHallSchema);

module.exports = DiningHall;
