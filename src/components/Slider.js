import React, { useState, useEffect } from 'react';
import { ArrowSquareLeft, ArrowSquareRight } from 'phosphor-react';
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
  return (
    <div className='single-image-box'>
      <div className='slider'>
        <span className='icon-left-skip' onClick={prev}>
          <ArrowSquareLeft className='icon-lrg' />
        </span>
        {images === [] ? (
          <img className='product-details-image' alt='img' src='../404image.webp' />
        ) : (
          <img src={images && images[index].url} className='product-details-image' alt='img' />
        )}

        {/* <img src="../404image.webp" className="main-image" alt="img" /> */}
        <span className='icon-right-skip' onClick={next}>
          <ArrowSquareRight className='icon-lrg' />
        </span>
      </div>
    </div>
  );
};

export default Slider;
