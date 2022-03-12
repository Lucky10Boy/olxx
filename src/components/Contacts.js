import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <footer className="section-contacts" id="footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <polyline
          points="224 208 32 208 32 48"
          fill="none"
          stroke="#072eed"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="208 64 128 144 96 112 32 176"
          fill="none"
          stroke="#f9e406"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="208 104 208 64 168 64"
          fill="none"
          stroke="#f50000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </svg>
      <p>Начните бизнес в интернете с OLXX!</p>

      <Link className="btn-cta" to="/login" style={{ textDecoration: 'none' }}>
        <span>Подробнее...</span>
      </Link>
    </footer>
  );
};

export default Contacts;
