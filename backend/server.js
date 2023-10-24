const express = require("express")
require("dotenv").config()
const ratingRoutes = require("./routes/RatingRouter")
const mongoose = require("mongoose")

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/ratings', ratingRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT, () => {
            console.log("Connected to mongoDB and listening on port 4000")
        })
    })
    .catch((error)=> {
        console.log(error)
    })



