import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { registerNewUserPhoneNumber } from '../actions/authActions';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';
import { sendToastMsg } from '../utils';

const RegisterPhoneNumber = (props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !passwordConfirm || password !== passwordConfirm) {
      return toast.error('Пожалуйста подтвердите пароль');
    }
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
      size: 'invisible',
    });
    auth
      .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then(function (confirmationResult) {
        let code = prompt('Введите код', '');
        if (code == null) return;
        confirmationResult
          .confirm(code)
          .then(async function () {
            await props.registerNewUserPhoneNumber(name, phoneNumber, password);
          })
          .catch((err) => {
            sendToastMsg('fail', 'Код неверен');
          });
      })
      .catch((error) => {
        console.log(error);
        sendToastMsg('fail', error);
      });
  };

  return (
    <section className='section-input' id='sec-register'>
      <form className='form-input' onSubmit={handleSubmit}>
        <ul className='titlebars titlebars-1'>
          <li>
            <Link to='/user/login'>Войти</Link>
          </li>
          <li>Регистрация</li>
        </ul>
        <div className='input-box'>
          <label htmlFor='name'>Имя</label>
          <input
            type='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Укажите свое имя'
          />
          <label htmlFor='phoneNumber'>Номер телефона</label>
          <input
            id='phoneNumber'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='Укажите свой номер телефона'
          />
          <label htmlFor='password'>Пароль</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Укажите свой пароль'
          />
          <label htmlFor='confirmPassword'>Подтвердите Пароль</label>
          <input
            type='password'
            id='confirmPassword'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder='Подтвердите свой пароль'
          />
          <div id='recaptcha'></div>
          <button className='btn-submit' type='submit'>
            Регистрация с помощью номера телефона
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
  registerNewUserPhoneNumber,
})(RegisterPhoneNumber);
