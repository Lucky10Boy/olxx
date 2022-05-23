import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthorProducts } from '../actions/productActions';

const AuthorProducts = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.getAuthorProducts();
    }, 1000);
  }, []);
  return (
    <>
      {props.authorProducts &&
        props.authorProducts.map((p) => (
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
    authorProducts: state.product.authorProducts,
  };
};

export default connect(mapStateToProps, { getAuthorProducts })(AuthorProducts);
