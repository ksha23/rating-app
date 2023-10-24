import { useRatingsContext } from "../hooks/useRatingsContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const RatingDetails = ({rating}) => {
  const {dispatch} = useRatingsContext()

  const handleClick = async() => {
    const response = await fetch('/api/ratings/'+rating._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok) {
      dispatch({type: 'DELETE_RATING', payload: json})
    }
  }

  return (
    <div className ="workout-details">
        <h4>{rating.title}</h4>
        <p><strong>Stars: </strong>{'★'.repeat(rating.stars)}</p>
        <p><strong>Rating: </strong>{rating.review}</p>
        <br></br>
        <p font-size = "5px">{formatDistanceToNow(new Date(rating.createdAt), {addSuffix: true})}</p>
        <span className = "material-symbols-outlined" onClick = {handleClick}>delete</span>
    </div>
  )
}

export default RatingDetails