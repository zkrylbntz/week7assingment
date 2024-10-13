import { useEffect, useState } from "react";
import "./Posts.css";

export default function Posts() {
  const [reviews, setReviews] = useState([]);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch(
        "https://week7assingment-server.onrender.com/reviews"
      );
      const data = await response.json();
      console.log(data);
      setReviews(data);
    }
    fetchReviews();
  }, []);

  function handleClick() {
    setInfo(!info);
  }

  return (
    <>
      <div id="posts-container">
        <h1>Reviews</h1>
        <p>Pick a book, click to expand, read a review and get inspired!</p>
        {reviews.map((review) => (
          <div id="review-container" key={review.id}>
            <h2 onClick={handleClick}>{review.book_name}</h2>
            {info ? (
              <>
                <p>Author: {review.author}</p>
                <p>Reviewed by: {review.users_name}</p>
                <p>
                  Review:
                  <br />
                  <br />
                  {review.review}
                </p>
                <p>Rating: {review.rating}</p>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
