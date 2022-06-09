import rgbHex from 'rgb-hex';

const BoxColor = (props) => {
  const { r, g, b } = props;

  const divStyle = {
    height: '150px',
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  const hex = rgbHex(r, g, b);

  return (
    <div className="greeting" style={divStyle}>
      rgb({r}/{g}/{b}) <br />#{hex}
    </div>
  );
};

export default BoxColor;

/*   const textColor = () => {
    if (r + g + b < 382.5) {
      color: 'white';
    } */
