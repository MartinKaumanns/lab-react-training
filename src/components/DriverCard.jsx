import '../DriverCard.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  const roundingfunct = (val) => {
    let num = Math.round(val);

    if (num === 0) {
      return '☆☆☆☆☆';
    } else if (num === 1) {
      return '★☆☆☆☆';
    } else if (num === 2) {
      return '★★☆☆☆';
    } else if (num === 3) {
      return '★★★☆☆';
    } else if (num === 4) {
      return '★★★★☆';
    } else if (num === 5) {
      return '★★★★★';
    }
  };

  return (
    <div className="driverCard">
      <div className="cardBox">
        <div className="cardPic">
          <img src={img} alt="Profile Pic" />
        </div>
        <div className="cardDetails">
          <h2>{name}</h2>
          <h2>{roundingfunct(rating)}</h2>
          <p>
            {car.model} – {car.licensePlate}
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
