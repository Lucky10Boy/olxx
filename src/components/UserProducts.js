import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProducts } from '../actions/productActions';

const UserProducts = (props) => {
  useEffect(() => {
    load();
  }, []);
  const load = async () => {
    await props.getUserProducts();
  };
  return (
    <>
      {props.userProducts &&
        props.userProducts.map((p) => (
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
    userProducts: state.product.userProducts,
  };
};

export default connect(mapStateToProps, { getUserProducts })(UserProducts);
