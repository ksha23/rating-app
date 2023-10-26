import { useState, useEffect } from "react";
import { useRatingsContext } from "../hooks/useRatingsContext";
import "./RatingForm.css";

const RatingForm = () => {
  const [diningHalls, setDiningHalls] = useState([]);
  const [selectedDiningHall, setSelectedDiningHall] = useState("");

  const { dispatch } = useRatingsContext();
  const [title, setTitle] = useState("");
  const [stars, setStars] = useState("");
  const [review, setReview] = useState("");
  const [hallID, setSelectedDiningHallID] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  useEffect(() => {
    // const updateDiningHallStats = async (id, stars) => {
    //   try {
    //     const response = await fetch(`/api/diningHalls/stats/${id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ stars }),
    //     });

    //     if (response.ok) {
    //       console.log("Dining hall stats updated successfully.");
    //       // You can handle success here, such as updating the UI.
    //     } else {
    //       console.error("Failed to update dining hall stats.");
    //       // Handle the error case here.
    //     }
    //   } catch (error) {
    //     console.error(
    //       "An error occurred while updating dining hall stats:",
    //       error
    //     );
    //     // Handle the error case here.
    //   }
    // };

    const fetchDiningHalls = async () => {
      try {
        const response = await fetch("/api/diningHalls");
        if (response.ok) {
          const data = await response.json();
          setDiningHalls(data);
        } else {
          console.error("Error fetching dining halls");
        }
      } catch (error) {
        console.error("Error fetching dining halls", error);
      }
    };
    fetchDiningHalls();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rating = { title, stars, review, hallID };

    const responseRating = await fetch("/api/ratings", {
      method: "POST",
      body: JSON.stringify(rating),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonRating = await responseRating.json();

    if (!responseRating.ok) {
      setError(jsonRating.error);
      setEmptyFields(jsonRating.emptyFields);
    }

    if (responseRating.ok) {
      setTitle("");
      setStars("");
      setReview("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_RATING", payload: jsonRating });
    }

    try {
      console.log("jsonRating:" + JSON.stringify(jsonRating));
      const responseDiningHall = await fetch(
        `/api/diningHalls/${selectedDiningHall}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonRating),
        }
      );

      if (responseDiningHall.ok) {
        // Handle success (e.g., clear the form)
        setSelectedDiningHall("");
      } else {
        // Handle errors
        console.error("Could not add the review to the dining hall");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add a New Rating</h3>
      <label>Dining Hall:</label>
      <select
        value={selectedDiningHall}
        onChange={(e) => {
          setSelectedDiningHall(e.target.value);

          const selectedHall = diningHalls.find(
            (hall) => hall._id === e.target.value
          );
          setSelectedDiningHallID(selectedHall ? selectedHall._id : "");
        }}
      >
        <option value="">Select a dining hall</option>
        {diningHalls.map((hall) => (
          <option key={hall._id} value={hall._id}>
            {hall.name}
          </option>
        ))}
      </select>

      <label>Rating Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      ></input>

      <label>Stars:</label>
      <input
        type="number"
        onChange={(e) => {
          // Ensure the value is within the desired range (0 to 5)
          // const value = Math.min(5, Math.max(0, e.target.value));
          setStars(e.target.value);
        }}
        value={stars}
        min="0" // Set the minimum value to 0
        max="5" // Set the maximum value to 5
        className={emptyFields.includes("stars") ? "error" : ""}
      />
      {/* <input 
            type = "number"
            onChange = {(e)=> setStars(e.target.value)}
            value = {stars}
            className={emptyFields.includes('stars')?'error':''}
            >
        </input> */}

      <label>Review: </label>
      <textarea
        type="text"
        onChange={(e) => setReview(e.target.value)}
        value={review}
        className={emptyFields.includes("review") ? "error" : ""}
      ></textarea>
      <button>Add Rating</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default RatingForm;
