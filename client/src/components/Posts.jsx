import { useEffect, useState } from "react";

export default function Posts() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch("http://localhost:8080/reviews");
      const data = await response.json();
      // const wrangledData = data.reviews;
      console.log(data);
      setReviews(data);
    }
    fetchReviews();
  }, []);

  return (
    <>
      {reviews.map((review) => (
        <div key={review.id}>
          <h1>{review.users_name}</h1>
          <h2>{review.book_name}</h2>
          <p>{review.review}</p>
          <p>{review.rating}</p>
        </div>
      ))}
    </>
  );
}
