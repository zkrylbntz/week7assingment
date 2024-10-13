import bookStack from "/public/bookStack.webp";
// import crumpled from "/public/crumpled.webp";

import "./Home.css";

export default function Home() {
  return (
    <>
      <div id="main-container">
        {/* <img id="book-stack" src={bookStack} /> */}
        <p>
          Welcome to <b>ReviewBook</b>.
          <br /> Here you can find some recommendations for your next book to
          read.
          <br />
          <br />
          Know of any good books?
          <br />
          Leave a review, you could inspire someone else to read it!
          <br />
          <br />
          Enjoy!
        </p>
        <img id="book-stack" src={bookStack} />
      </div>
    </>
  );
}
