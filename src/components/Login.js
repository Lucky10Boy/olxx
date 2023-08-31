import React, { useState } from 'react';
import { login } from '../actions/authActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.login(email, password);
  };
  return (
    <div className='input-content'>
      <div className='section-input' id='sec-register'>
        <form className='form-input'>
          <ul className='titlebars titlebars-2'>
            <li>Войти</li>
            <li>
              <Link to='/user/register/phone/number'>Регистрация</Link>
            </li>
          </ul>
          <div className='input-box'>
            <label htmlFor='email'>Электронная почта</label>
            <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor='password'>Пароль</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Link to='/user/forgot/password'>
              <b className='forgot-pass'>Забыли пароль</b>
            </Link>
            <Link to='/user/login/phone'>
              <button className='btn-submit-white'>Войти с помощью телефона</button>
            </Link>
            <button className='btn-submit' onClick={handleSubmit}>
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  login,
})(Login);
