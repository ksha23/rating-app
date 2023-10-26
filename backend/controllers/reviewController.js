const Rating = require("../models/ratingModel");
const mongoose = require("mongoose");
const DiningHall = require("../models/DiningHallModel");

// get all
const getRatings = async (req, res) => {
  const ratings = await Rating.find({}).sort({ createdAt: -1 });
  res.status(200).json(ratings);
};

// get one by ID
const getRating = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such rating" });
  }

  const workout = await Rating.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such rating" });
  }

  res.status(200).json(workout);
};

// create new
const createRating = async (req, res) => {
  const { title, stars, review, hallID } = req.body;
  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!stars) {
    emptyFields.push("stars");
  }
  if (!review) {
    emptyFields.push("review");
  }
  if (!hallID) {
    emptyFields.push("hallID");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const workout = await Rating.create({ title, stars, review, hallID });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete
const deleteRating = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such rating" });
  }

  const rating = await Rating.findOneAndDelete({ _id: id });

  if (!rating) {
    return res.status(404).json({ error: "No such rating" });
  }

  //update DiningHall Rating stats
  try {
    console.log("Hello?");
    const hall = await DiningHall.findById(rating.hallID);
    const oldAverageReview = hall.averageReview;
    const oldTotalReviews = hall.numberOfReviews;
    const newAverageReview =
      (oldAverageReview * oldTotalReviews - rating.stars) /
      (oldTotalReviews - 1);
    hall.averageReview = newAverageReview;
    hall.numberOfReviews = oldTotalReviews - 1;

    const updatedHall = await hall.save();
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to update review stats for dining hall" });
  }

  res.status(200).json(rating);
};

//update
const updateRating = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such rating" });
  }

  const rating = await Rating.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!rating) {
    return res.status(404).json({ error: "No such rating" });
  }

  res.status(200).json(rating);
};

module.exports = {
  getRatings,
  getRating,
  createRating,
  deleteRating,
  updateRating,
};
