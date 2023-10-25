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
1. Add global context for dining hall reviews?
2. UI and CSS
3. Sign in
4. Sorting
5. Searching
6. Updating overall review count and average review
7. Removing review references (maybe?)
8. Adding location data (intergrate google maps)
9. Add upvote and downvote on reviews
