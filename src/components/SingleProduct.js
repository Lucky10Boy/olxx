import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSingleProduct, getRelatedProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import Slider from './Slider';
import ProductDetails from './ProductDetails';
import AuthorProducts from './AuthorProducts';
import AuthorContact from './AuthorContact';
import { Link } from 'phosphor-react';
import RelatedProducts from './RelatedProducts';

const SingleProduct = ({ getSingleProduct, product, getRelatedProducts, relatedProducts }) => {
  const params = useParams();
  useEffect(() => {
    getSingleProduct(params.id);
    setTimeout(() => {
      getRelatedProducts();
    }, 500);
  }, []);

  return (
    <section className='section-single-product'>
      <div className='product-box-full'>
        <div className='row'>
          {product && (
            <>
              <div className='single-box-img product-image col-2-of-3-img'>
                <Slider images={product.images} />
              </div>
              <div className='single-box  col-1-of-3-img'>
                <AuthorContact product={product} />
                <ProductDetails product={product} />
              </div>
            </>
          )}
        </div>
        <h1 className='title'>Другие объявления автора</h1>
        <div className='author-products'>
          <AuthorProducts />
        </div>
        <h1 className='title'>Похожие объявления</h1>
        <div className='related-products'>
          <RelatedProducts />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    relatedProducts: state.product.relatedProducts,
  };
};

export default connect(mapStateToProps, {
  getSingleProduct,
  getRelatedProducts,
})(SingleProduct);
