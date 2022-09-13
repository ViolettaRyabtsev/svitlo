import "./body.scss";

const timeObject = [
  {
    number: "20.5K",
    text: "Volunteer hours served in 2022",
  },
  {
    number: "96%",
    text: "All profits profit helping children's hospital in Ukraine ",
  },
  {
    number: "149K",
    text: "bs of food distributed in 2018",
  },
];

const Body = () => {
  return (
    <div className="body-container">
      <div className="body-main-container">
        <div className="header-body-container">
          <div className="color-block"></div>
          <h2>
            Make A Real Change <br></br>In Someone's Life
          </h2>
        </div>
        <div className="first">1 col</div>
        <div className="second"> 2 col </div>
      </div>
      <div className="volunteer-time">
        {timeObject.map((element) => (
          <div className="volunteer-time-box">
            <h3
              style={{
                "font-size": "50px",
                color: "#fdd765",
                "text-shadow": "5px 5px 10px #e3cef9",
              }}
            >
              {" "}
              {element.number}
            </h3>
            <h5 style={{ "font-size": "18px", opacity: "0.8" }}>
              {element.text}
            </h5>
          </div>
        ))}
      </div>
      <div className="image-container-banner">
        <div className="clouds">
          <img src="../cloud1.png" style={{ "--i": "1" }} alt="cloud" />
          <img src="../cloud2.png" style={{ "--i": "2" }} alt="cloud" />
          <img src="../cloud3.png" style={{ "--i": "3" }} alt="cloud" />
          <img src="../cloud4.png" style={{ "--i": "4" }} alt="cloud" />
          <img src="../cloud5.png" style={{ "--i": "5" }} alt="cloud" />
          <img src="../cloud5.png" style={{ "--i": "10" }} alt="cloud" />
          <img src="../cloud5.png" style={{ "--i": "9" }} alt="cloud" />
          <img src="../cloud5.png" style={{ "--i": "8" }} alt="cloud" />
          <img src="../cloud5.png" style={{ "--i": "7" }} alt="cloud" />
          <img src="../cloud5.png" style={{ "--i": "6" }} alt="cloud" />
        </div>
        <section>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/LrFUKPH8gwk"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />{" "}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
