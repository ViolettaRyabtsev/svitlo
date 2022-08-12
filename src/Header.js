import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="navigation-container">
          <h2>
            <strong>Help Ukraine</strong> <br></br>
            By
            <em style={{ color: "#5da2d5" }}> Donating </em> Today!
          </h2>
          <ul>
            <li>About</li>
            <li>Our Work</li>
            <li>Shop</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="border-bottom"></div>
    </>
  );
};

export default Header;
