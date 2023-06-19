import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductsBySubCategory } from '../actions/productActions';
import { connect } from 'react-redux';

export const SubCategoryProducts = (props) => {
  const { subCategoryId } = useParams();
  useEffect(() => {
    console.log(props);
    props.getProductsBySubCategory(subCategoryId);
  }, []);
  return (
    <div style={{ height: '100vh', backgroundColor: '#f2f4f5' }}>
      <h2 className='section-categories-title' style={{ margin: '8rem 0' }}>
        Продукты в этой субкатегории
      </h2>
      <div className='row'>
        {props.productsBySubCategory ? (
          props.productsBySubCategory.map((p, i) => (
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return { productsBySubCategory: state.product.productsBySubCategory };
};

export default connect(mapStateToProps, { getProductsBySubCategory })(SubCategoryProducts);
