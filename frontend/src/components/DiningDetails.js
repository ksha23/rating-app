import './DiningDetails.css'; // Import the CSS file
import { Link } from "react-router-dom";

const DiningDetails = ({diningHall}) => {

  return (
    <div className ="dining-details">
        <img src={diningHall.image} alt={diningHall.name} />
        <Link to={`/dininghall/${diningHall._id}`}>{diningHall.name}</Link>
        <p><strong>Rating: </strong>{'★'.repeat(diningHall.averageReview)}</p>
        <p>Number of Reviews: {diningHall.numberOfReviews}</p>
        <p><strong>Location: </strong>{diningHall.location}</p>
        <br></br>
    </div>
  )
}

export default DiningDetails