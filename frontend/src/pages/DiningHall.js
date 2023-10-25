import { useState, useEffect } from "react"
import DiningDetails from "../components/DiningDetails"

const DiningHall = () => {

    const[halls, setHalls] = useState([])
  
    useEffect(() => {
      const fetchDiningHalls = async () => {
          const response = await fetch('/api/diningHalls')
          const json = await response.json()
  
          if(response.ok) {
              setHalls(json)
          }
      }
  
      fetchDiningHalls()
    }, [])
  
    return (
      <div className ="home">
          <div className = "workouts">
              {halls && halls.map((hall)=>(
                  <DiningDetails key = {hall._id} diningHall = {hall}/>
              ))}
          </div>
      </div>
    )
  }

  export default DiningHall