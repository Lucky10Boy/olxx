/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'phosphor-react';

const Header = () => {
  return (
    <header className="section-header sticky" id="sec-header">
      <Link className="header-logo" to="/">
        {/* Ol<span>xx</span> */}
        <img src="../olx-logo-main.png" alt="OLX" />
      </Link>
      <ul className="header-nav">
        <li>
          <a href="#" className="header-langs">
            <span>O'Z</span> | <span>РУ</span>
          </a>
        </li>

        <li className="my-profile flex-center">
          <User className="icon-md" />
          <span> Мой профиль</span>{' '}
        </li>

        <li>
          <Link
            className="btn-cta"
            to="/login"
            style={{ textDecoration: 'none' }}
          >
            <span>Подать объявление</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
