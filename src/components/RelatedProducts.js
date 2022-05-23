import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRelatedProducts } from '../actions/productActions';

const RelatedProducts = (props) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      props.getRelatedProducts();
    }, 1000);
  }, []);
  return (
    <>
      {props.relatedProducts &&
        props.relatedProducts.map((p) => (
          <div className='product-card'>
            <img src={p.images && p.images !== [] && p.images[0].url} alt='' />
            <h1>{p.name}</h1>
            <strong>{p.price}</strong>
          </div>
        ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.product.relatedProducts,
  };
};

export default connect(mapStateToProps, {
  getRelatedProducts,
})(RelatedProducts);
