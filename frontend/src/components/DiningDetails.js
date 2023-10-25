import './DiningDetails.css'; // Import the CSS file
import { Link } from "react-router-dom";

const DiningDetails = ({diningHall}) => {

  return (
    <div className ="dining-details">
        <img src={diningHall.image} alt={diningHall.name} />
        <h4>{diningHall.name}</h4>
        <p><strong>Rating: </strong>{'★'.repeat(diningHall.averageReview)}</p>
        <p><strong>Location: </strong>{diningHall.location}</p>
        <Link to={`/dininghall/${diningHall._id}`}>{diningHall.name}</Link>
        <br></br>
        <br></br>
    </div>
  )
}

export default DiningDetails