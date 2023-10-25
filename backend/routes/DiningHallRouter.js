const express = require("express")
const {
    getDiningHalls,
    getRatingsByDiningHallId,
    updateReviewList

} = require("../controllers/diningHallController")

const router = express.Router()

router.get('/', getDiningHalls)

router.get('/:id', getRatingsByDiningHallId)

router.patch('/:id', updateReviewList) // add a review to the dining hall
// /api/diningHalls/id with body containing review

module.exports = router