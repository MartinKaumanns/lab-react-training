import { useState } from 'react';

const Carousel = (props) => {
  const { images } = props;

  console.log(images.length + 'hello');
  const [photoIndex, setPhotoIndex] = useState(1);

  const handleLeftClick = () => {
    if (!photoIndex) {
      setPhotoIndex(images.length - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };
  const handleRightClick = () => {
    if (photoIndex === images.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };

  return (
    <div>
      <img src={images[photoIndex]} height="400px" alt="" />
      <br />
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
    </div>
  );
};
export default Carousel;
