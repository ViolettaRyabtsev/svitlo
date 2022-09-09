import "./top-header.scss";

const TopHeader = () => {
  return (
    <>
      <div className="navigation-logo">
        <img src="./Logo_text.png" alt="logo" width="150px" height="40px"></img>
        <h5>is Non-Profit Organization </h5>
        <ul>
          <li>Home</li>
          <li>Our Work</li>
          <li style={{ color: "#feb676" }}>Donate </li>
          <li>Get Involved</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default TopHeader;
