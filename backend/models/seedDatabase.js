/*
CAUTION! THIS IS FOR SEEDING THE DATABASE. THIS WILL DELETE ALL REVIEWS AND DINING HALLS!
*/

const mongoose = require("mongoose");
const DiningHall = require("./DiningHallModel");
const Review = require("./ratingModel");

// Connect to your MongoDB database
mongoose.connect("url", { useNewUrlParser: true });

async function deleteDiningHalls() {
  try {
    await DiningHall.deleteMany({}); // Delete all dining halls
    console.log("All dining halls deleted.");
  } catch (error) {
    console.error("Error deleting dining halls:", error);
  }
}

async function deleteReviews() {
  try {
    await Review.deleteMany({}); // Delete all reveiws
    console.log("All Reviews deleted.");
  } catch (error) {
    console.error("Error deleting Reviews:", error);
  }
}

// Create a function to seed your database
async function seedDiningHalls() {
  try {
    await deleteDiningHalls(); // Call the delete function first
    await deleteReviews();

    // Create and save the reviews
    // const review1 = new Review({
    //   title: "Review 1",
    //   stars: 4,
    //   review: "Good food",
    // });
    // const review2 = new Review({
    //   title: "Review 2",
    //   stars: 5,
    //   review: "Excellent service",
    // });
    // const review3 = new Review({
    //   title: "Review 3",
    //   stars: 4,
    //   review: "Decent food",
    // });
    // const review4 = new Review({
    //   title: "Review 4",
    //   stars: 2,
    //   review: "Terrible",
    // });
    // await review1.save();
    // await review2.save();
    // await review3.save();
    // await review4.save();

    // Use the obtained review IDs when creating dining hall objects
    const diningHallsData = [
      {
        name: "Carson's Market",
        image:
          "https://d9mfr5qxp4i37.cloudfront.net/wp-content/uploads/sites/132/2017/03/2013-07-16-carsons-24-1500x1000.jpg",
        location: "1515 Tripp Circle",
        numberOfReviews: 0,
        averageReview: 0,
        reviews: [],
      },
      {
        name: "Four Lakes Market",
        image:
          "https://d9mfr5qxp4i37.cloudfront.net/wp-content/uploads/sites/132/2019/06/2012-08-21-four-lakes-dining-stations-hubert-3-900x600.jpg",
        location: "640 Elm Dr.",
        numberOfReviews: 0,
        averageReview: 0,
        reviews: [],
      },
      {
        name: "Gordon Avenue Market",
        image:
          "https://d9mfr5qxp4i37.cloudfront.net/wp-content/uploads/sites/132/2019/06/2012-09-05-gordon-interiors-10-900x600.jpg",
        location: "770 W. Dayton St.",
        numberOfReviews: 0,
        averageReview: 0,
        reviews: [],
      },
      {
        name: "Liz's Market",
        image:
          "https://d9mfr5qxp4i37.cloudfront.net/wp-content/uploads/sites/132/2019/08/2016-11-03-lizs-market-1-1499x1000.jpg",
        location: "1200 Observatory Dr.",
        numberOfReviews: 0,
        averageReview: 0,
        reviews: [],
      },
      {
        name: "Lowell Market",
        image:
          "https://d9mfr5qxp4i37.cloudfront.net/wp-content/uploads/sites/132/2022/12/2022-09-28-lowell-interior-market-3-3000x2000.jpg",
        location: "610 Langdon St.",
        numberOfReviews: 0,
        averageReview: 0,
        reviews: [],
      },
      {
        name: "Rheta's Market",
        image:
          "https://d9mfr5qxp4i37.cloudfront.net/wp-content/uploads/sites/132/2023/02/2014-07-02-rhetas-market-28-3000x2000.jpg",
        location: "420 N. Park St.",
        numberOfReviews: 0,
        averageReview: 0,
        reviews: [],
      },

      // Add more dining hall objects here
    ];

    // Save dining halls
    for (const diningHallData of diningHallsData) {
      const diningHall = new DiningHall(diningHallData);
      await diningHall.save();
      console.log(`Dining hall ${diningHall.name} seeded successfully.`);
    }
  } catch (error) {
    console.error("Error seeding dining halls:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Seed the database
seedDiningHalls();
