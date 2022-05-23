import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className='product-box-details'>
      <div className='product-box-price'>{product.price}</div>
      <div className='product-box-category'>{product.category.name}</div>
      <div className='product-box-description'>{product.desc}</div>
    </div>
  );
};

export default ProductDetails;
