import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../actions/productActions';

const Products = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);
  return (
    <>
      <h2 className='section-products-title'>Топ Объявления</h2>
      <section className='section-products'>
        <div className='row'>
          {props.products &&
            props.products.map((p, i) => (
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
            ))}
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};

export default connect(mapStateToProps, { getProducts })(Products);
