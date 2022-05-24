const Rating = (props) => {
  const { children } = props;

  const roundingfunct = (str) => {
    let num = Number(str);
    num = Math.round(num);

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

  return <div>{roundingfunct(children)}</div>;
};

export default Rating;
