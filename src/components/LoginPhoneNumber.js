import React, { useState } from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';
import { loginPhoneNumber } from '../actions/authActions';
import { connect } from 'react-redux';
import { sendToastMsg } from '../utils';

const LoginPhoneNumber = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
          .then(async function (result) {
            await props.loginPhoneNumber(phoneNumber, password);
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
    <section className='section-input'>
      <form className='form-input' onSubmit={handleSubmit}>
        <div className='input-box'>
          <label htmlFor='phoneNumber'>Номер телефона</label>
          <input
            id='phoneNumber'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='Укажите свой номер телефона'
          />
          <label htmlFor='password'>Пароль</label>
          <input
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Укажите свой пароль'
          />
          <button type='submit' className='btn-submit'>
            Войти с помощью телефона
          </button>
          <div id='recaptcha'></div>
        </div>
      </form>
    </section>
  );
};

export default connect(null, {
  loginPhoneNumber,
})(LoginPhoneNumber);
