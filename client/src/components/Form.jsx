import { useState } from "react";
import "./Form.css";

export default function Form() {
  // We need state to save the form formValues
  //! We do not need useEffect in here
  const [formValues, setFormValues] = useState({
    users_name: "",
    book_name: "",
    author: "",
    review: "",
    rating: "",
  });
  // A submit handler
  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", JSON.stringify(formValues));
    // Something to prevent the default behaviour of the form
    // Something to fetch the POST endpoint in the server
    fetch("http://localhost:8080/add-review", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(JSON.stringify({ formValues }));
  }

  // We also need to handle change
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
          {/* <p>Name: {formValues.usesrs_name}</p>
        <p>Email: {formValues.book_name}</p> */}
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
      {/* <p>{formValues.users_name}</p>
      <p>{formValues.book_name}</p>
      <p>{formValues.review}</p>
      <p>{formValues.rating}</p>
      <p>{JSON.stringify(formValues)}</p> */}
      {/* We need to track the changes in the inputs of our form */}
      {/* We need to submit event to send the data */}
    </>
  );
}
