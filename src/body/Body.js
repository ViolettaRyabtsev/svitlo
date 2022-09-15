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
    number: "$24K",
    text: "Spent funds",
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
        <div className="first">
          <p>
            On March 19th, 7 women got together in one of the neighborhoods of
            Los Angeles and made 1000+ traditional Ukrainian dumplings to host a
            fundraiser to support funding for Ukranian children’s hospitals with
            dobro.ua.The idea was to make homemade vareniki and feed 30+ people.
            They were shocked on the morning of the event when they discovered
            over 100 tickets were sold. During the event, attendees made more
            donations and even more people came without tickets who were willing
            to donate and support the fundraiser. There were Ukrainians using
            every opportunity to support their homeland, Russians against the
            war and standing with Ukraine and local Americans willing to help
            Ukrainian children. Luckily, there were enough varenikis made for
            everyone. On that day they raised $6,425. Next day, Peter Diamandis,
            the chairman of XPRIZE and a person with a big heart, showed
            interest and matched their proceeds.
          </p>
        </div>
        <div className="second">
          {" "}
          <p>
            Now they were at over 12,000. Next, Assembly, an LA based e-commerce
            platform, did a 50% match on the fundraise, bringing the total to
            $16,050 a few days after the fundraiser.As the story was being told,
            more and more people were getting inspired and willing to
            participate. A few more generous individuals supported the
            fundraiser making the total $20,000 a week after the event. Next
            week, hospitals are receiving the proceedings and first children
            will receive help. This is the story how without much resources from
            backyard in Culver city you can make a big impact and difference for
            children in need. Even though $20k is still a drop in the ocean when
            millions of Ukrainians are in need, those women believed that if
            everyone puts in an effort and stands for humanity, a massive change
            will come.
          </p>
        </div>
      </div>
      <div className="volunteer-time">
        {timeObject.map((element) => (
          <div className="volunteer-time-box">
            <h3> {element.number}</h3>
            <h5>{element.text}</h5>
          </div>
        ))}
      </div>
      <div className="image-container-banner">
        <div className="clouds">
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud1.png"
            style={{ "--i": "1" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud2.png"
            style={{ "--i": "2" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud3.png"
            style={{ "--i": "3" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud4.png"
            style={{ "--i": "4" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud5.png"
            style={{ "--i": "5" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud1.png"
            style={{ "--i": "10" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud3.png"
            style={{ "--i": "9" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud4.png"
            style={{ "--i": "8" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud2.png"
            style={{ "--i": "7" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud1.png"
            style={{ "--i": "6" }}
            alt="cloud"
          />
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
