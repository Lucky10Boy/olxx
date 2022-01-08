/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="section-header">
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
        <li>
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-md"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </li>
        <li>Мой профиль</li>

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
