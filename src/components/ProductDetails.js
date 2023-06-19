import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className='product-box-details'>
      <h1 className='product-box-name'>Имя: {product.name}</h1>
      {product.category && product.category !== undefined && <h4 className='product-box-category'>Категория: {product.category.name}</h4>}
      {product.subCategory && product.subCategory !== undefined && <h4 className='product-box-category'>Субкатегория: {product.subCategory.name}</h4>}
      {product.superSubCategory && product.superSubCategory !== undefined && (
        <h4 className='product-box-category'>Суперсубкатегория: {product.superSubCategory[0].name}</h4>
      )}
      <h4 className='product-box-description'>Описание: {product.desc}</h4>
      <h4 className='product-box-description'>Объявлено в {new Date(product.createdAt).toLocaleString()}</h4>{' '}
      <h1 className='product-box-price'>Цена: {product.price}</h1>
    </div>
  );
};

export default ProductDetails;
