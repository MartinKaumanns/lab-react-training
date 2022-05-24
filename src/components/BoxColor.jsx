import rgbHex from 'rgb-hex';

const BoxColor = (props) => {
  const { r, g, b } = props;

  const divStyle = {
    height: '100px',
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  const hex = rgbHex(r, g, b);

  return (
    <div style={divStyle}>
      rgb({r}/{g}/{b}) <br />#{hex}
    </div>
  );
};

export default BoxColor;
