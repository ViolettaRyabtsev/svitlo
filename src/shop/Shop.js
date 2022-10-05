import "./shop.scss";

const data = [
  "https://s3.amazonaws.com/www.svitlola.com/images/IMG_32C5ED662408-2.jpeg",
  "https://s3.amazonaws.com/www.svitlola.com/images/IMG_32C5ED662408-3.jpeg",
  "https://s3.amazonaws.com/www.svitlola.com/images/IMG_32C5ED662408-4.jpeg",
];
const Shop = () => {
  return (
    <>
      <div className="shop-container">
        <div className="text-container">
          <h2>Svitlo</h2>
          <p>
            We are building community to support Ukraine by bringing people
            together to fun sensory experience.<br></br>All process go to
            children aids.
          </p>
          <button>Shop</button>
        </div>
        <div className="img-container">
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/IMG_32C5ED662408-1.jpeg"
            alt="t-shirt"
            width="550px"
            height="700px"
          ></img>
        </div>
      </div>
      <div className="shop-container-items">
        {data.map((url, index) => (
          <div>
            <img src={url} alt={index}></img>
            <h4>Topanga Day Fest Tee</h4>
            <h5>$35 </h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
