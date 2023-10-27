const DiningHall = require("../models/DiningHallModel");
const Rating = require("../models/ratingModel"); // Import the Rating model at the top of your dining hall controller file
const mongoose = require("mongoose");

// get all dining halls
const getDiningHalls = async (req, res) => {
  const halls = await DiningHall.find({}).sort({ createdAt: -1 });
  res.status(200).json(halls);
};

// get one dining hall by ID
const getDiningHall = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such hall" });
  }

  const hall = await DiningHall.findById(id);

  if (!hall) {
    return res.status(404).json({ error: "No such hall" });
  }

  res.status(200).json(hall);
};

// get all ratings one dining hall by dining hall ID
const getRatingsByDiningHallId = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such hall" });
  }

  try {
    // Find the dining hall by its ID
    const diningHall = await DiningHall.findById(id);

    if (!diningHall) {
      return res.status(404).json({ error: "No such hall" });
    }

    // Use the `reviews` field to get ratings associated with this dining hall
    const ratings = await Rating.find({ _id: { $in: diningHall.reviews } });

    res.status(200).json(ratings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// add a new review to a dining hall (associate it)
const updateReviewList = async (req, res) => {
  const { id } = req.params; // The ID of the dining hall to be edited
  const reviewData = req.body; // The new review data to be added

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such dining hall" });
  }

  try {
    // Find the dining hall by its ID
    const diningHall = await DiningHall.findById(id);

    if (!diningHall) {
      return res.status(404).json({ error: "No such dining hall" });
    }

    // Add the new review data to the `reviews` property
    diningHall.reviews.unshift(reviewData);
    const oldStars = diningHall.averageReview;
    const oldTotalReviews = diningHall.numberOfReviews;
    const stars = reviewData.stars;
    const newStars =
      (oldStars * oldTotalReviews + stars) / (oldTotalReviews + 1);

    diningHall.averageReview = newStars;
    diningHall.numberOfReviews = oldTotalReviews + 1;

    // Save the updated dining hall with the new review data
    const updatedDiningHall = await diningHall.save();

    res.status(200).json(updatedDiningHall);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDiningHalls,
  getDiningHall,
  getRatingsByDiningHallId,
  updateReviewList,
};
