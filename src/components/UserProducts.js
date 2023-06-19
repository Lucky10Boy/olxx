import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProducts, removeProduct } from '../actions/productActions';
import { Link } from 'react-router-dom';
import { X } from 'phosphor-react';

const UserProducts = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.getUserProducts(200);
    });
  }, []);

  return (
    <section className='section-user-products'>
      <div className='row user-products'>
        {props.userProducts &&
          props.userProducts.map((p) => (
            <Link to={`/user/edit/product/${p._id}`} className='col-1-of-3' key={p._id}>
              <div className='product-card'>
                <span className='x-btn' onClick={() => props.removeProduct(p._id)}>
                  <X className='icon-md' />
                </span>
                <img src={p.images && p.images !== [] && p.images[0].url} alt='' />
                <h1>{p.name}</h1>
                <strong>{p.price}</strong>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    userProducts: state.product.userProducts,
  };
};

export default connect(mapStateToProps, { getUserProducts, removeProduct })(UserProducts);
