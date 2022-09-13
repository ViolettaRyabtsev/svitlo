import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="navigation-container">
          <h2>
            <strong>Help Ukraine</strong> <br></br>
            By
            <em style={{ color: "#5594d4" }}> Donating </em> Today!
          </h2>
        </div>
      </div>
      <div className="border-bottom"></div>
    </>
  );
};

export default Header;
