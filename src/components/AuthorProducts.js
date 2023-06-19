import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthorProducts } from '../actions/productActions';
import { Link, useParams } from 'react-router-dom';

const AuthorProducts = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.getAuthorProducts();
    }, 500);
  }, []);
  return (
    <div className='row'>
      {props.authorProducts ? (
        props.authorProducts.map((p, i) => (
          <Link to={`/product/${p._id}`} className='col-1-of-3' key={p._id}>
            <div className='product-card' key={i}>
              {p.images.length === 0 ? (
                <img className='product-card-image' src='../404image.webp' alt='404' />
              ) : (
                <img src={p.images[0].url} className='product-card-image' alt='alt' key={p.images[0].url} />
              )}

              <div className='product-card-content'>
                <h1 className='product-card-name'>{p.name}</h1>
                <div className='product-card-price'>Цена: {p.price}$</div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    authorProducts: state.product.authorProducts,
  };
};

export default connect(mapStateToProps, { getAuthorProducts })(AuthorProducts);
