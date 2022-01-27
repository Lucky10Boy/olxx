/* eslint-disable jsx-a11y/anchor-is-valid */
import { CaretRight, MagnifyingGlass, MapPin } from 'phosphor-react';
import React, { useEffect } from 'react';

const Search = () => {
  useEffect(() => {});
  return (
    <section className="section-search">
      <div className="search-box">
        <div className="input-container">
          <div className="svg-icon">
            <MagnifyingGlass className="icon-md" />
          </div>
          <input
            type="search"
            placeholder="775 018 объявлений рядом"
            className="search-input"
            style={{ outline: 'none' }}
          />
        </div>
        <div className="search-location-dropdown flex-center">
          <MapPin
            id="geo-loc"
            className="icon-md"
            onClick={() => {
              document.getElementById('loc-submenu').classList.toggle('active');
            }}
          />
        </div>
        <button className="btn-search flex-center">
          <MagnifyingGlass className="icon-md" />
          Поиск
        </button>
        <div className="locations-main" id="loc-submenu">
          <p>Весь Узбекистан</p>
          <span className="close-btn">X</span>
          <div className="cols-locations">
            <ul className="first-column-locations column-ul">
              <li>
                <a href="#">
                  <strong>Т</strong>
                  <span>ашкент</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>А</strong>
                  <span>ндижанская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>Б</strong>
                  <span>ухарская область</span>

                  <CaretRight className="icon-md" />
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>Д</strong>
                  <span>жизакская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
            </ul>
            <ul className="second-column-locations column-ul">
              {' '}
              <li>
                <a href="#">
                  <strong>К</strong>
                  <span>аракалпакстан</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
              <li>
                {' '}
                <a href="#">
                  <strong>К</strong>
                  <span>ашкадарьинская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
              <li>
                {' '}
                <a href="#">
                  <strong>Н</strong>
                  <span>авоийская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
              <li>
                {' '}
                <a href="#">
                  <strong>Н</strong>
                  <span>аманганская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
            </ul>
            <ul className="third-column-locations column-ul">
              {' '}
              <li>
                {' '}
                <a href="#">
                  <strong>С</strong>
                  <span>амаркандская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
              <li>
                {' '}
                <a href="#">
                  <strong>С</strong>
                  <span>урхандарьинская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
              <li>
                {' '}
                <a href="#">
                  <strong>С</strong>
                  <span>ырдарьинская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
              <li>
                {' '}
                <a href="#">
                  <strong>Т</strong>
                  <span>ашкентская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
            </ul>
            <ul className="fourth-column-locations column-ul">
              {' '}
              <li>
                {' '}
                <a href="#">
                  <strong>Ф</strong>
                  <span>ерганская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
              <li>
                {' '}
                <a href="#">
                  <strong>Х</strong>
                  <span>орезмская область</span>
                  <CaretRight className="icon-md" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
