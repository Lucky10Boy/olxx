import React, { useState } from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';
import { loginPhoneNumber } from '../actions/authActions';
import { connect } from 'react-redux';
import { sendToastMsg } from '../utils';
import { Link } from 'react-router-dom';

const LoginPhoneNumber = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('+998');
  const [password, setPassword] = useState('');
  const [codeOTP, setCodeOTP] = useState(null);

  const handleCaptcha = async (e) => {
    e.preventDefault();

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
      size: 'invisible',
      callback: function (response) {
        document.getElementById('code').style.display = 'block';
        document.getElementById('codeLabel').style.display = 'block';
        document.getElementById('captchalog').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        sendToastMsg('success', 'Код отправлен в ваш номер телефона');
      },
    });
    document.getElementById('phoneNumber').setAttribute('disabled', 'true');
    document.getElementById('password').setAttribute('disabled', 'true');

    if (phoneNumber.length === 9) {
      setPhoneNumber('+998' + phoneNumber);
      window.phoneNumber = '+998' + phoneNumber;
    }

    window.confirmationResult = await auth.signInWithPhoneNumber(window.phoneNumber, window.recaptchaVerifier);
    console.log(window.confirmationResult);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (codeOTP === null) return;
    window.confirmationResult
      .confirm(codeOTP)
      .then(async function (result) {
        console.log(result);
        await props.loginPhoneNumber(phoneNumber, password);
      })
      .catch((err) => {
        sendToastMsg('fail', 'Код неверен');
        window.location.reload();
      });
  };

  return (
    <div className='input-content'>
      <div className='section-input' id='sec-register'>
        {' '}
        <form className='form-input' onSubmit={handleCaptcha}>
          <ul className='titlebars titlebars-2'>
            <li>Войти</li>
            <li>
              <Link to='/user/register'>Регистрация</Link>
            </li>
          </ul>
          <div className='input-box'>
            <label htmlFor='phoneNumber'>Номер телефона</label>
            <input id='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Укажите свой номер телефона' />
            <label htmlFor='password'>Пароль</label>
            <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Укажите свой пароль' />
            <label htmlFor='code' id='codeLabel'>
              Код был отправлен на ваш номер телефона
            </label>
            <div id='recaptcha'></div>
            <input id='code' value={codeOTP} onChange={(e) => setCodeOTP(e.target.value)} placeholder='Введите код' />
            <button type='submit' id='captchalog' className='btn-submit'>
              Отправить код
            </button>
            <button className='btn-submit' id='login' onClick={handleSubmit} style={{ display: 'none' }}>
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, {
  loginPhoneNumber,
})(LoginPhoneNumber);
