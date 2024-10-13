import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [formValues, setFormValues] = useState({
    users_name: "",
    book_name: "",
    author: "",
    review: "",
    rating: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", JSON.stringify(formValues));
    fetch("https://week7assingment-server.onrender.com/add-review", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(JSON.stringify({ formValues }));
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <div id="form-container">
        <h1>Submit a review!</h1>
        <p>
          Read a great book? Let us know all about it here and spread the word!
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="users_name"></label>
          <input
            type="text"
            id="users_name"
            name="users_name"
            placeholder="What's your name?"
            value={formValues.users_name}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <label htmlFor="book_name"></label>
          <input
            type="text"
            id="book_name"
            name="book_name"
            placeholder="Book title"
            value={formValues.book_name}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <label htmlFor="author"></label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            value={formValues.author}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <div className="review-container">
            <label htmlFor="review"></label>
            <textarea
              rows={4}
              cols={40}
              type="text"
              id="review"
              name="review"
              placeholder="Write your review"
              value={formValues.review}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <label htmlFor="rating"></label>
          <input
            type="number"
            id="rating"
            name="rating"
            placeholder="Rate this book (1-10)"
            value={formValues.rating}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
