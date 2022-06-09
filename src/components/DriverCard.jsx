import '../DriverCard.css';
import Rating from './Rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div className="driverCard">
      <div className="cardBox">
        <div className="cardPic">
          <img src={img} alt="Profile Pic" />
        </div>
        <div className="cardDetails">
          <h2>{name}</h2>
          <Rating>{rating}</Rating>
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
