import '../IdCard.css';

const IdCard = (props) => {
  return (
    <div className="list">
      <img src={props.picture} alt="profilePic" />
      <ul>
        <li>
          <strong> Last name: </strong> {props.lastName}
        </li>
        <li>
          <strong> First name: </strong> {props.firstName}
        </li>
        <li>
          <strong> Gender: </strong>
          {props.gender}
        </li>
        <li>
          <strong> Height: </strong>
          {props.height / 100} m
        </li>
        <li>
          <strong>Birth: </strong> {props.birth.toDateString()}
        </li>
      </ul>
    </div>
  );
};

export default IdCard;
