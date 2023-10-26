// import { useRatingsContext } from "../hooks/useRatingsContext"
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// import "./RatingDetails.css"

// const RatingDetails = ({rating}) => {
//   const {dispatch} = useRatingsContext()

//   const handleClick = async() => {
//     const response = await fetch('/api/ratings/'+rating._id, {
//       method: 'DELETE'
//     })
//     const json = await response.json()

//     if(response.ok) {
//       dispatch({type: 'DELETE_RATING', payload: json})
//     }
//   }

//   return (
//     <div className ="workout-details">
//         <h4>{rating.title}</h4>
//         <p><strong>Stars: </strong>{'★'.repeat(rating.stars)}</p>
//         <p><strong>Rating: </strong>{rating.review}</p>
//         <br></br>
//         <p fontSize = "5px">{formatDistanceToNow(new Date(rating.createdAt), {addSuffix: true})}</p>
//         <span className = "material-symbols-outlined" onClick = {handleClick}>delete</span>
//     </div>
//   )
// }

// export default RatingDetails


import { useRatingsContext } from "../hooks/useRatingsContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import "./RatingDetails.css"

const RatingDetails = ({ rating }) => {
  const { dispatch } = useRatingsContext();

  const handleClick = async () => {
    const response = await fetch('/api/ratings/' + rating._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_RATING', payload: json });
    }
  };

  return (
    <div className = "rating-details-cotainer">
    <div className="rating-details">
      <h4 className="rating-title">{rating.title}</h4>
      <p className="stars"><strong>Stars: </strong>{'★'.repeat(rating.stars)}</p>
      <p className="rating-text"><strong>Rating: </strong>{rating.review}</p>
      <p className="time-ago">
        {formatDistanceToNow(new Date(rating.createdAt), { addSuffix: true })}
      </p>
      <br></br>
      <button className="material-symbols-outlined" onClick={handleClick}>delete</button>
    </div>
    </div>
  );
};

export default RatingDetails;
