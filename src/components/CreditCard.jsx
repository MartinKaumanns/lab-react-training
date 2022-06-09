import '../CreditCard.css';
import imgVisa from '../assets/images/visa.png';
import imgMaster from '../assets/images/master-card.svg';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  /*   const formatedExpirationMonth =
    expirationMonth < 10 ? 0`${expirationMonth}` : { expirationMonth }; */

  const typeLogofunct = (word) => {
    if (word === 'Visa') {
      return <img src={imgVisa} alt="Visa" className="logo" />;
    } else return <img src={imgMaster} alt="Master Card" className="logo" />;
  };

  const censoredNumberfunct = (number) =>
    '•••• •••• •••• ' + number.substring(12, 16);

  /*   const censoredNumber = censoredNumberfunct(number);
  console.log(censoredNumber); */

  return (
    <div className="Cards" style={divStyle}>
      <div>
        <p className="logo">{typeLogofunct(type)}</p>
        <br />
        <h1>{censoredNumberfunct(number)}</h1>
        <div className="details">
          <p>
            <span>
              Expires on {expirationMonth} / {expirationYear - 2000}
            </span>
            <span> {bank}</span>
          </p>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
