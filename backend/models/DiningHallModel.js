const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Rating = require("../models/ratingModel");

const diningHallSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  numberOfReviews: {
    type: Number,
    required: true,
  },
  averageReview: {
    type: Number,
    required: true,
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
  hours: {
    type: [
      {
        day: String, // day of the week
        meals: [
          {
            type: String, // e.g., "Breakfast", "Lunch", "Dinner"
            startTime: String, // e.g., "7 am", "11 am"
            endTime: String, // e.g., "10 am", "2 pm"
          },
        ],
      },
    ],
    required: false,
  },
});

const DiningHall = mongoose.model("DiningHall", diningHallSchema);

module.exports = DiningHall;
