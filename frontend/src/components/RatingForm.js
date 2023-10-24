import { useState } from "react"
import { useRatingsContext } from "../hooks/useRatingsContext"

const RatingForm = () => {
  const {dispatch} = useRatingsContext()
  const [title, setTitle] = useState('')
  const [stars, setStars] = useState('')
  const [review, setReview] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async(e) => {
    e.preventDefault()
    const rating = {title, stars, review}

    const response = await fetch('/api/ratings', {
        method: 'POST',
        body: JSON.stringify(rating),
        headers: {
            "Content-Type":"application/json"
        }
    })
    const json = await response.json()

    if(!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
    }

    if(response.ok) {
        setTitle('')
        setStars('')
        setReview('')
        setError(null)
        setEmptyFields([])
        console.log("New rating add", json)
        dispatch({type: 'CREATE_RATING', payload: json})
    }

  }

  return (
    <form className = "create" onSubmit = {handleSubmit}> 
        <h3>Add a New Rating</h3>
        <label>Rating Title:</label>
        <input 
            type = "text"
            onChange = {(e)=> setTitle(e.target.value)}
            value = {title}
            className={emptyFields.includes('title')?'error':''}
            >
        </input>

        <label>Stars:</label>
        <input 
            type = "number"
            onChange = {(e)=> setStars(e.target.value)}
            value = {stars}
            className={emptyFields.includes('load')?'error':''}
            >
        </input>

        <label>Review: </label>
        <input 
            type = "text"
            onChange = {(e)=> setReview(e.target.value)}
            value = {review}
            className={emptyFields.includes('reps')?'error':''}
            >

        </input>
        <button>Add Rating</button>
        {error && <div className = "error">{error}</div>}
    </form>
  )
}

export default RatingForm