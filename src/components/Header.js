/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'phosphor-react';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <header className="section-header sticky" id="sec-header">
      <Link className="header-logo" to="/">
        OLXX
      </Link>
      <ul className="header-nav">
        <li>
          <a href="#" className="header-langs">
            <span>O'Z</span> | <span>РУ</span>
          </a>
        </li>

        <li className="my-profile flex-center">
          <User className="icon-md" />
          <span>
            <Link
              to={
                props.isSignedIn === false || props.isSignedIn === null
                  ? '/user/login'
                  : '/user/profile'
              }
            >
              Мой профиль
            </Link>
          </span>
        </li>

        <li>
          <Link
            className="btn-cta"
            to={props.isSignedIn ? '/user/profile' : '/user/login'}
            style={{ textDecoration: 'none' }}
          >
            <span>Подать объявление</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userInfo: state.auth.userInfo,
  };
};

export default connect(mapStateToProps, null)(Header);
