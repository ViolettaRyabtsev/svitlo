import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="mission-container">
        <div className="mission-header">
          <div className="color-block"></div>
          <h2>Our Mission</h2>
          <h4>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </h4>
        </div>

        <div className="mission-first">
          <h3>Consectetur adipiscing elit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="mission-second">
          <h3>Consectetur adipiscing elit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="mission-third">
          <h3>Consectetur adipiscing elit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>

      <div className="footer-contact-container">
        <div className="separator">
          <svg
            className="separator__svg"
            width="100%"
            height="200"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="#5da2d5"
            opacity="0.8"
          >
            <path d="M 100 100 V 10 L 0 100" />
            <path d="M 30 73 L 100 18 V 10 Z" fill="#5da2d5" stroke-width="0" />
          </svg>
        </div>

        <div className="color-block-container">
          <div className="footer-header-container">
            <div className="email-container">
              <h4>donate today or get involved</h4>
              <form>
                <input
                  placeholder="Email"
                  name="email"
                  value="text"
                  label="message"
                  className="text-box"
                  type="text"
                  required
                ></input>
                <button type="submit">Join Our Newsletter</button>
              </form>
            </div>
            <div className="logo-icons-container">
              <h2>
                <strong>Help Ukraine</strong> <br></br>
                By
                <em style={{ color: "#5da2d5" }}> Donating </em> Today!
              </h2>
              <div className="icons-container">icons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
