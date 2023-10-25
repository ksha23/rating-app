const express = require("express")
const {
    getRating,
    getRatings,
    createRating,
    deleteRating,
    updateRating,
} = require("../controllers/reviewController")

const router = express.Router()

router.get('/', getRatings)

router.get('/:id', getRating)

router.post('/', createRating)

router.delete('/:id', deleteRating)

router.patch('/:id', updateRating)

module.exports = router