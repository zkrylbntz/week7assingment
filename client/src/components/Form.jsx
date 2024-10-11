export default function Form() {
  // We need state to save the form formValues
  //! We do not need useEffect in here

  // A submit handler
  function handleSubmit() {
    // Something to prevent the default behaviour of the form
    // Something to fetch the POST endpoint in the server
    // fetch("url", {
    // method: "POST",
    //         body: formValues,
    //         headers: {
    //         "Content-Type": "application/json"
    //         }
    // })
  }

  // We also need to handle change

  return (
    <>
      <h1>Form</h1>
      <form>
        {/* We need to track the changes in the inputs of our form */}
        {/* We need to submit event to send the data */}
      </form>
    </>
  );
}
