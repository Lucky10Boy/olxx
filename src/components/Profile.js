import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signout } from '../actions/authActions';
import { sendToastMsg } from '../utils';

const Profile = (props) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    await props.signout();
    sendToastMsg('success', 'Вы вышли из аккаунта');
    navigate('/');
  };
  return (
    <section className='section-profile'>
      <Link to='/product/create'>
        <button className='btn-submit'> Подать объявление</button>
      </Link>

      <div className='accordion-profile'>
        <div className='accordion-settings' onClick={handleClick}>
          Выйти из аккаунта
        </div>
        <div className='accordion-settings'>Изменить пароль</div>
        <div className='accordion-settings'>Изменить имя</div>
        {props.user.phoneNumber ? (
          <div className='accordion-settings'> Изменить номер телефона</div>
        ) : (
          ''
        )}
        <Link to='/user/products'>
          <div className='accordion-settings'>Мои объявления</div>
        </Link>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user: state.auth.userInfo,
  };
};
export default connect(mapStateToProps, {
  signout,
})(Profile);
