const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ratingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: false,
    },
    stars: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    hallID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rating", ratingSchema);
