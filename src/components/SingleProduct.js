import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSingleProduct } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import Slider from './Slider';
import ProductDetails from './ProductDetails';
import AuthorProducts from './AuthorProducts';
import RelatedProducts from './RelatedProducts';
import AuthorContact from './AuthorContact';
const SingleProduct = ({ getSingleProduct, product }) => {
  const params = useParams();
  useEffect(() => {
    getSingleProduct(params.id);
  }, []);
  console.log(product);
  return (
    <section className='section-single-product'>
      <div className='product-box-full'>
        <div className='single-product-box'>
          {product && (
            <>
              <div className='single-box product-image'>
                <Slider images={product.images} />
              </div>
              <div className='single-box product-details'>
                <h1>{product.name}</h1>
                <ProductDetails product={product} />
              </div>
            </>
          )}
        </div>
        <div className='author-products'>
          <AuthorProducts />
        </div>
        <div className='related-products'>
          <RelatedProducts />
        </div>
      </div>
      <div className='author-contact'>
        <AuthorContact />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};

export default connect(mapStateToProps, {
  getSingleProduct,
})(SingleProduct);
