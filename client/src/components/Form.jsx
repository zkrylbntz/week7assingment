import { useState } from "react";
export default function Form() {
  // We need state to save the form formValues
  //! We do not need useEffect in here
  const [formValues, setFormValues] = useState({
    users_name: "",
    book_name: "",
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
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="users_name">Users name</label>
        <input
          type="text"
          id="users_name"
          name="users_name"
          value={formValues.users_name}
          onChange={handleInputChange}
        />

        <label htmlFor="book_name">Book Title</label>
        <input
          type="text"
          id="book_name"
          name="book_name"
          value={formValues.book_name}
          onChange={handleInputChange}
        />

        <label htmlFor="review">Review</label>
        <input
          type="text"
          id="review"
          name="review"
          value={formValues.review}
          onChange={handleInputChange}
        />

        <label htmlFor="rating">rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formValues.rating}
          onChange={handleInputChange}
        />
        <p>Name: {formValues.usesrs_name}</p>
        <p>Email: {formValues.book_name}</p>
        <button type="submit">Submit</button>
      </form>
      <p>{formValues.users_name}</p>
      <p>{formValues.book_name}</p>
      <p>{formValues.review}</p>
      <p>{formValues.rating}</p>
      <p>{JSON.stringify(formValues)}</p>
      {/* We need to track the changes in the inputs of our form */}
      {/* We need to submit event to send the data */}
    </>
  );
}
