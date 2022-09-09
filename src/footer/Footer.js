import "./footer.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaBlackberry, FaFacebookF } from "react-icons/fa";

const style = {
  color: "white",
  fontSize: "1.5em",
  "background-color": "black",
  border: "solid 10px black",
  "margin-right": "10px",
  "margin-top": "10px",
};

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
            fill="#b5cadf"
            opacity="0.8"
          >
            <path d="M 100 100 V 10 L 0 100" />
            <path d="M 30 73 L 100 18 V 10 Z" fill="#b5cadf" stroke-width="0" />
          </svg>
        </div>

        <div className="color-block-container">
          <div className="footer-header-container">
            <div className="email-container">
              <h4>Donate Today or Get Involved</h4>
              <form style={{ display: "grid" }}>
                <input
                  placeholder="Email"
                  name="email"
                  value="Email"
                  label="message"
                  className="text-box"
                  type="text"
                  required
                ></input>
                <button type="submit">Join Our Newsletter</button>
              </form>
              <div className="icons-container">
                <FaFacebookF style={style} />
                <BsTwitter style={style} />
                <AiOutlineInstagram style={style} />
              </div>
            </div>
            <div className="logo-icons-container">
              <h2>
                <strong>Help Ukraine</strong> <br></br>
                By
                <em style={{ color: "#5da2d5" }}> Donating </em> Today!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
