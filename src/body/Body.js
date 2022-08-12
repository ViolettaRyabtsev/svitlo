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
        <div className="first">1 colon</div>
        <div className="second"> 2 colon </div>
      </div>
      <div className="volunteer-time">
        {timeObject.map((element) => (
          <div className="volunteer-time-box">
            <h3 style={{ "font-size": "50px", color: "#F3D250" }}>
              {" "}
              {element.number}
            </h3>
            <h5 style={{ "font-size": "18px", opacity: "0.8" }}>
              {element.text}
            </h5>
          </div>
        ))}
      </div>
      <div className="image-container">
        <img src="../candel.jpg" alt="event" />
      </div>
    </div>
  );
};

export default Body;
