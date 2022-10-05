import "./top-header.scss";
import { Link, Outlet } from "react-router-dom";
const TopHeader = () => {
  return (
    <>
      <div className="navigation-logo">
        <img
          src="https://s3.amazonaws.com/www.svitlola.com/images/Logo_text.png"
          alt="logo"
          width="150px"
          height="40px"
        ></img>
        <h5>is Non-Profit Organization </h5>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="our-work">Our Work</Link>
          </li>
          <li style={{ color: "#fdd765" }}>Donate </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>Contact Us</li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default TopHeader;
