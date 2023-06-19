import React, { Fragment, useEffect } from 'react';
import { CaretRight } from 'phosphor-react';
import { connect } from 'react-redux';
import { getCategories } from '../actions/categoryActions';
import { getAllSubCategories } from '../actions/subCategoryActions';
import { X } from 'phosphor-react';
import { Link } from 'react-router-dom';

const Categories = (props) => {
  const toggleDropdown = (element, e) => {
    const elems = document.querySelectorAll('.helpclass');
    for (let i = 0; i < elems.length; i++) {
      elems[i].className = 'dropdown helpclass';
    }

    document.getElementById(element).classList.add('active-dropdown');

    const catSection = document.getElementById('sec-cat');

    catSection.classList.add('row-gap-seccat');
  };

  const closeX = () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((d) => {
      d.classList.remove('active-dropdown');
      document.getElementById('sec-cat').classList.remove('row-gap-seccat');
    });
  };
  useEffect(() => {
    props.getCategories();
    props.getAllSubCategories();

    document.querySelector('.section-categories').addEventListener('click', (e) => {
      const dropdowns = document.querySelectorAll('.dropdown');

      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('active-dropdown');
        document.getElementById('sec-cat').classList.remove('row-gap-seccat');
      }
    });
  }, []);
  return (
    <>
      <h2 className='section-categories-title'>Главные категории</h2>
      <section className='section-categories' id='sec-cat'>
        {props.categories !== undefined &&
          props.categories.map((c) => (
            <Link to={`/products/category/${c._id}`} key={c._id}>
              <div className='item'>
                <div className='category-circle'>
                  <img src={c.image} alt='category' className='category-circle-img' />
                </div>
                <span className='span-nav-toggle' onClick={(e) => toggleDropdown(c.domId)}>
                  {c.name}
                </span>
              </div>
              <div className='dropdown helpclass' id={c.domId}>
                <span className='close-btn' onClick={() => closeX()}>
                  <X className='icon-md' />
                </span>
                <p className='submenu-title'>
                  <CaretRight className='icon-md' />
                  <Link to={`/products/category/${c._id}`}>Посмотреть все объявления в {c.name} </Link>
                </p>
                <ul className='submenu'>
                  {props.subCategories &&
                    props.subCategories.map((s) =>
                      c.subCategory.includes(s._id) ? (
                        <li key={s._id}>
                          <CaretRight className='icon-md' />
                          <Link to={`/products/subcategory/${s._id}`}>{c.subCategory.includes(s._id) ? s.name : ''}</Link>
                        </li>
                      ) : (
                        ''
                      )
                    )}
                </ul>
              </div>
            </Link>
          ))}
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
    subCategories: state.subCategory.subCategories,
  };
};

export default connect(mapStateToProps, { getCategories, getAllSubCategories })(Categories);
