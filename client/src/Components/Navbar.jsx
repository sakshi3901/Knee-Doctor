import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <a>Home</a>
      <a>About Us</a>
      <a>Treatments +</a>
      <a>Destinations +</a>
      <a>Hospitals</a>
      <a>FAQs</a>
      <a>Blog</a>
      <a>Request A Quote</a>
      <div className="search">
        <img src="assets/search.svg" alt="search" style={{ width: "30px" }} />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}
