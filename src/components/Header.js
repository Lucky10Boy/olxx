/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'phosphor-react';
import { connect } from 'react-redux';

const Header = () => {
  const isSignedIn = localStorage.getItem('isSignedIn');
  useEffect(() => {
    if (isSignedIn === null || isSignedIn === undefined) {
      localStorage.setItem('isSignedIn', 'false');
    }
  }, []);
  return (
    <header className='section-header sticky' id='sec-header'>
      <Link className='header-logo' to='/'>
        BOZORTOY
      </Link>
      <ul className='header-nav'>
        <li className='my-profile flex-center'>
          <User className='icon-md' />
          <span>
            <Link to={isSignedIn === 'true' ? '/user/profile' : '/user/login'}>Мой профиль</Link>
          </span>
        </li>

        <li>
          <Link className='btn-cta' to={isSignedIn === 'true' ? '/product/create' : '/user/login/phone'} style={{ textDecoration: 'none' }}>
            <span>Подать объявление</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.userInfo,
  };
};

export default connect(mapStateToProps, null)(Header);
