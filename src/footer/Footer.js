import "./footer.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useState, useEffect } from "react";
import { addCollectionsAndDocuments } from "../utils/firebase.utils";
// AwKoEoAcPDGZBa85crAZ
const style = {
  color: "white",
  fontSize: "1.5em",
  "background-color": "black",
  border: "solid 10px black",
  "margin-right": "10px",
  "margin-top": "10px",
};

const Footer = () => {
  const [email, setEmail] = useState({ emailBody: "", data: "" });

  const [err, setErr] = useState(null);

  const validEmail = (text) => {
    return /\S+@\S+\.\S+/.test(text);
  };

  const handleChange = (e) => {
    if (!validEmail(e.target.value)) {
      setErr("Email is invalid");
    } else {
      setErr(null);
    }
    setEmail({ emailBody: e.target.value, data: new Date() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (err === null) {
      addCollectionsAndDocuments("emails", email);
      setEmail({ emailBody: "", data: "" });
    }
  };

  // useEffect(() => {
  //   addCollectionsAndDocuments("emails", email);
  // }, [email]);

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
              <form onSubmit={handleSubmit} style={{ display: "grid" }}>
                <input
                  placeholder="Email"
                  name="email"
                  value={email.emailBody}
                  label="message"
                  className="text-box"
                  type="text"
                  onChange={handleChange}
                  required
                ></input>
                <button type="submit">Join Our Newsletter</button>
                {err && <h5 style={{ color: "black" }}>{err}</h5>}
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
                <em style={{ color: "#5594d4" }}> Donating </em> Today!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
