import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useRatingsContext} from "../hooks/useRatingsContext"
import RatingDetails from '../components/RatingDetails';

const DiningHallWithReviews = () => {
  const { id } = useParams();
  const {ratings, dispatch} = useRatingsContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the dining hall details (including reviews)
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
  }, [dispatch]);

  return (
    <div>
      <h2>Reviews</h2>
      {ratings && ratings.map((rating) => (
        <div key={rating._id}> {/* Added a unique key */}
          <RatingDetails rating={rating} /> 
        </div>
      ))}
    </div>
  );
  
}

export default DiningHallWithReviews
