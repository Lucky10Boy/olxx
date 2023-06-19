/* eslint-disable jsx-a11y/anchor-is-valid */
import { CaretRight, MagnifyingGlass, MapPin } from 'phosphor-react';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../actions/productActions';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  async function handleSearch(e) {
    navigate(`/search/products/${searchTerm}`);
  }
  return (
    <section className='section-search'>
      <form className='search-box' onSubmit={handleSearch}>
        <div className='input-container'>
          <input
            type='search'
            className='search-input'
            style={{ outline: 'none' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className='btn-search flex-center' type='submit'>
          <MagnifyingGlass className='icon-md' />
          Поиск
        </button>
        <div className='locations-main' id='loc-submenu'>
          <p>Весь Узбекистан</p>
          <span className='close-btn'>X</span>
          <div className='cols-locations'>
            <ul className='first-column-locations column-ul'>
              <li id='1-li'>
                <a href='#'>
                  <strong>Т</strong>
                  <span>ашкент</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <strong>А</strong>
                  <span>ндижанская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <strong>Б</strong>
                  <span>ухарская область</span>

                  <CaretRight className='icon-md' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <strong>Д</strong>
                  <span>жизакская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
            </ul>
            <ul className='second-column-locations column-ul'>
              <li>
                <a href='#'>
                  <strong>К</strong>
                  <span>аракалпакстан</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <strong>К</strong>
                  <span>ашкадарьинская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <strong>Н</strong>
                  <span>авоийская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <strong>Н</strong>
                  <span>аманганская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
            </ul>
            <ul className='third-column-locations column-ul'>
              <li>
                <a href='#'>
                  <strong>С</strong>
                  <span>амаркандская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <strong>С</strong>
                  <span>урхандарьинская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <strong>С</strong>
                  <span>ырдарьинская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <strong>Т</strong>
                  <span>ашкентская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
            </ul>
            <ul className='fourth-column-locations column-ul'>
              <li>
                <a href='#'>
                  <strong>Ф</strong>
                  <span>ерганская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <strong>Х</strong>
                  <span>орезмская область</span>
                  <CaretRight className='icon-md' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </section>
  );
};

export default connect(null, {
  searchProducts,
})(Search);
