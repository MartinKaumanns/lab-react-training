import '../ClickablePicture.css';
import React, { useState } from 'react';
import maxcence from '../assets/images/maxence.png';
import maxcenceShades from '../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
  console.log();

  const arrayOfPictures = [maxcence, maxcenceShades];
  console.log(arrayOfPictures[1]);

  const [count, setCount] = useState(0);
  const picToggle = () => {
    setCount(count + 1);
    if (count < arrayOfPictures.length - 1) {
      setCount(count + 1);
    } else setCount(0);
  };

  /*   const { img, imgClicked } = props;

  const imgPath = `".${img}"`;
  console.log(imgPath); */

  return (
    <div>
      <button className="buttonOnPic" onClick={() => picToggle()}>
        <img src={arrayOfPictures[count]} alt="Maxence" />
      </button>
    </div>
  );
};
export default ClickablePicture;
