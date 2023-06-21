import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signout } from '../actions/authActions';

const Profile = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.user && props.user === null) {
      localStorage.setItem('isSignedIn', 'false');
      navigate('/user/login', { replace: true });
    }
  });

  const handleClick = async (e) => {
    e.preventDefault();
    await props.signout();
    navigate('/', { replace: true });
  };
  return (
    <div className='section-profile'>
      <div className='accordion-profile'>
        <Link to='/user/products'>
          <div className='accordion-settings'>Мои объявления(Изменить, Удалить)</div>
        </Link>
        <Link to='/product/create'>
          <div className='accordion-settings'> Подать объявление</div>
        </Link>
        <Link to='/user/edit/password'>
          <div className='accordion-settings'>Изменить пароль</div>
        </Link>
        <Link to='/user/edit/name'>
          <div className='accordion-settings'>Изменить имя</div>
        </Link>
        {props.user && props.user.phoneNumber ? (
          <Link to='/user/edit/phonenumber'>
            <div className='accordion-settings'>Изменить номер телефона</div>
          </Link>
        ) : (
          ''
        )}
        <div className='accordion-settings' onClick={handleClick}>
          Выйти из аккаунта
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.userInfo,
  };
};
export default connect(mapStateToProps, {
  signout,
})(Profile);
