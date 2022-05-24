const IdCard = (props) => {
  return (
    <div>
      <p>
        <strong> Last name: </strong> {props.lastName}
      </p>
      <p>
        <strong> First name: </strong> {props.firstName}
      </p>
      <p>
        <strong> Gender:</strong>
        {props.gender}
      </p>
      <p>
        <strong> Height:</strong>
        {props.height}
      </p>
      <p>
        <strong>Birth: </strong> {props.birth.toLocaleDateString()}
      </p>
      <img src={props.picture} alt="profilePic" />
    </div>
  );
};

export default IdCard;
