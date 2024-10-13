import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div id="link-container">
      <Link id="link1" to="/">
        Home
      </Link>
      <Link id="link2" to="/submit-a-review">
        Submit a review
      </Link>
      <Link id="link3" to="/reviews">
        Reviews
      </Link>
    </div>
  );
}
