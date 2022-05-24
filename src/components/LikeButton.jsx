import React, { useState } from 'react';
import '../LikeButton.css';

const LikeButton = () => {
  const bgColor = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [count, setCount] = useState(0);
  const [colorCount, setColor] = useState(0);

  const fancyClicking = () => {
    setCount(count + 1);
    if (colorCount < bgColor.length - 1) {
      setColor(colorCount + 1);
    } else setColor(0);
  };

  /*   console.log(bgColor[+3]); */

  return (
    <div>
      <button
        className="button"
        style={{ backgroundColor: bgColor[colorCount], color: 'white' }}
        onClick={() => fancyClicking()}
      >
        {count} Likes
      </button>
    </div>
  );
};
export default LikeButton;
