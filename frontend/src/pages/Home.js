import { useEffect } from "react"
import {useRatingsContext} from "../hooks/useRatingsContext"

import RatingDetails from "../components/RatingDetails"
import RatingForm from "../components/RatingForm"

const Home = () => {

  const{ratings, dispatch} = useRatingsContext()

  useEffect(() => {
    const fetchRatings = async () => {
        const response = await fetch('/api/ratings')
        const json = await response.json()

        if(response.ok) {
            dispatch({
                type: 'SET_RATINGS',
                payload: json
            })
        }
    }

    fetchRatings()
  }, [dispatch])

  return (
    <div className ="home">
        <div className = "workouts">
            {ratings && ratings.map((rating)=>(
                <RatingDetails key = {rating._id} rating = {rating}/>
            ))}
        </div>
        <RatingForm/>
    </div>
  )
}

export default Home