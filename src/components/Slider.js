import React, { useState, useEffect } from 'react';
import { SkipBack, SkipForward } from 'phosphor-react';
const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(0);
  }, []);
  const next = function () {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = function () {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  console.log(images[index]);
  return (
    <div className='single-image-box'>
      <div className='slider'>
        <span className='icon-left-skip' onClick={prev}>
          <SkipBack className='icon-md' />
        </span>
        {images === [] ? (
          <img
            className='product-details-image'
            alt='img'
            src='../404image.webp'
          />
        ) : (
          <img
            src={images.length === 0 ? '../404image.webp' : images[index].url}
            className='product-details-image'
            alt='img'
          />
        )}

        {/* <img src="../404image.webp" className="main-image" alt="img" /> */}
        <span className='icon-right-skip' onClick={next}>
          <SkipForward className='icon-md' />
        </span>
      </div>
    </div>
  );
};

export default Slider;
