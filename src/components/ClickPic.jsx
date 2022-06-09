import React, { useState } from 'react';
import maxcence from '../assets/images/maxence.png';
import maxcenceShades from '../assets/images/maxence-glasses.png';

/* Using Toggle */

const ClickPic = () => {
  const [isClicked, setIsClicked] = useState(false);

  const togglePicture = () => setIsClicked(!isClicked);

  const picture = isClicked ? maxcenceShades : maxcence;
  return (
    <div>
      <div>
        <span onClick={togglePicture}>
          <img alt="" src={picture} />
        </span>
      </div>
    </div>
  );
};

export default ClickPic;
