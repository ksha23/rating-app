import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RatingDetails from './RatingDetails';

const DiningHallWithReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

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

        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.error('Error fetching dining hall data');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review._id}> {/* Added a unique key */}
          <RatingDetails rating={review} /> 
        </div>
      ))}
    </div>
  );
  
}

export default DiningHallWithReviews
