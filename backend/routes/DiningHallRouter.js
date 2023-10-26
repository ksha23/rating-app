const express = require("express");
const {
  getDiningHalls,
  getDiningHall,
  getRatingsByDiningHallId,
  updateReviewList,
} = require("../controllers/diningHallController");

const router = express.Router();

router.get("/", getDiningHalls);

router.get("/single/:id", getDiningHall);

router.get("/:id", getRatingsByDiningHallId);

router.patch("/:id", updateReviewList); // add a review to the dining hall
// /api/diningHalls/id with body containing review

// router.patch("/stats/:id", updateReviewStats);

module.exports = router;
