import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { searchProducts } from '../actions/productActions';
import SearchProducts from './SearchProducts';

const ProductsBySearchTerm = (props) => {
  const { searchTerm } = useParams();
  useEffect(() => {
    props.searchProducts(searchTerm);
  }, []);

  return (
    <>
      <SearchProducts />
      <section className='section-products'>
        <div className='row'>
          {props.filteredProducts &&
            props.filteredProducts.map((p, i) => (
              <Link className='col-1-of-3' to={`/product/${p._id}`} key={p._id}>
                <div className='product-card' key={i}>
                  {p.images.length === 0 ? (
                    <img className='product-card-image' src='../404image.webp' alt='404' />
                  ) : (
                    <img src={p.images[0].url} className='product-card-image' alt='alt' key={p.images[0].url} />
                  )}

                  <div className='product-card-content'>
                    <h1 className='product-card-name'>{p.name}</h1>
                    <div className='product-card-details'>Объявлено в {new Date(p.createdAt).toLocaleString()}</div>
                    <div className='product-card-price'>{p.price}$</div>
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
    filteredProducts: state.product.filteredProducts,
  };
};

export default connect(mapStateToProps, { searchProducts })(ProductsBySearchTerm);
