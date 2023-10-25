const express = require("express")
require("dotenv").config()
const ratingRoutes = require("./routes/RatingRouter")
const diningHallRoutes = require("./routes/DiningHallRouter")

const mongoose = require("mongoose")

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/ratings', ratingRoutes)
app.use('/api/diningHalls', diningHallRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT, () => {
            console.log("Connected to mongoDB and listening on port 4000")
        })
    })
    .catch((error)=> {
        console.log(error)
    })



