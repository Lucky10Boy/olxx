import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { registerNewUser } from '../actions/authActions';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !passwordConfirm || password !== passwordConfirm) {
      return toast.error('Пожалуйста подтвердите пароль');
    }
    const newUser = props.registerNewUser(name, email, password);
    toast.success(newUser.message);

    setTimeout(() => {
      navigate('/user/register/complete');
    }, 3000);
  };

  return (
    <section className='section-input' id='sec-register'>
      <form className='form-input'>
        <ul className='titlebars titlebars-1'>
          <li>
            <Link to='/user/login/phone/number'>Войти</Link>
          </li>
          <li>Регистрация</li>
        </ul>
        <div className='input-box' id='register'>
          <label htmlFor='name'>Имя</label>
          <input type='name' id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Укажите свое имя' />
          <label htmlFor='email'>Электронная почта</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Укажите свою электронную почту' />
          <label htmlFor='password'>Пароль</label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Укажите свой пароль' />
          <label htmlFor='confirmPassword'>Подтвердите Пароль</label>
          <input
            type='password'
            id='confirmPassword'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder='Подтвердите свой пароль'
          />
          <Link to='/user/register/phone/number'>
            <button className='btn-submit-white'>Регистрация с помощью телефона</button>
          </Link>
          <button className='btn-submit' onClick={handleSubmit}>
            Регистрация
          </button>
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  registerNewUser,
})(Register);
