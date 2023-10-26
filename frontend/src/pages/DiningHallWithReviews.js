import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useRatingsContext} from "../hooks/useRatingsContext"
import RatingDetails from '../components/RatingDetails';
import DiningDetails from '../components/DiningDetails';
import RatingForm from '../components/RatingForm';

const DiningHallWithReviews = () => {
  const { id } = useParams();
  const [diningHall, setDiningHall] = useState(null)
  const {ratings, dispatch} = useRatingsContext();

  useEffect(() => {
    const fetchDiningHall = async () => {
      try {
        const response = await fetch(`/api/diningHalls/single/${id}`);    
        const json = await response.json();
    
        console.log('JSON data from API:', json);
    
        setDiningHall(json);
      } catch (error) {
        console.log('Error fetching dining hall:', error);
      }
    };
    const fetchData = async () => {
      try {
        // Fetch the reviews associated with the dining hall 
        const response = await fetch(`/api/diningHalls/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        if (response.ok) {
          dispatch({
            type: 'SET_RATINGS',
            payload: data
          });
        } else {
          console.error('Error fetching dining hall data');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
    fetchDiningHall();
  }, [dispatch, id]);

  return (
    <>
    <div className = "hallInfo">
      {diningHall && <DiningDetails key = {diningHall._id} diningHall = {diningHall}></DiningDetails>}
      <RatingForm/>
      {ratings && ratings.map((rating) => (
        <div key={rating._id}> 
          <RatingDetails rating={rating} /> 
        </div>
      ))}
      </div>
    </>
  );
  
}

export default DiningHallWithReviews
