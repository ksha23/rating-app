# UW-Madison Dining Hall Rating Website

## Local Setup

1. git clone locally
2. setup mongoDB either through Atlas or locally
3. cd into backend/models and run "node seedDatabase.js" to seed database (NOTE: THIS DELETES ALL DININGHALLS AND RATINGS IF THEY CURRENTLY EXIST!)
4. set mongoDB URI in .env file under MONGO_URI
5. set port under PORT in .env file
6. run npm install (install dependencies)
7. for the backend, run "npm run dev"
8. for the frontend, run "npm start"

## Things to do:

1. UI and CSS
2. Sorting
3. Searching
4. Removing review references (maybe?)
5. Add upvote and downvote on reviews
