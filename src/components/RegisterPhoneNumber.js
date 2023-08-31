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
  const [codeOTP, setCodeOTP] = useState(null);
  console.log(phoneNumber);

  const handleCaptcha = async (e) => {
    e.preventDefault();
    if (!password || !passwordConfirm || password !== passwordConfirm) {
      return toast.error('Пожалуйста подтвердите пароль');
    }
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
      size: 'invisible',
      callback: function (response) {
        document.getElementById('code').style.display = 'block';
        document.getElementById('codeLabel').style.display = 'block';
        document.getElementById('captchalog').style.display = 'none';
        document.getElementById('login').style.display = 'block';
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
        await props.registerNewUserPhoneNumber(name, phoneNumber, password);
      })
      .catch((err) => {
        sendToastMsg('fail', 'Код неверен');
        setTimeout(() => {
          window.location.reload();
        }, 400);
      });
  };
  return (
    <section className='section-input' id='sec-register'>
      <form className='form-input' onSubmit={handleCaptcha}>
        <ul className='titlebars titlebars-1'>
          <li>
            <Link to='/user/login'>Войти</Link>
          </li>
          <li>Регистрация</li>
        </ul>
        <div className='input-box'>
          <label htmlFor='name'>Имя</label>
          <input type='name' id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Укажите свое имя' />
          <label htmlFor='phoneNumber'>Номер телефона</label>
          <input id='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Укажите свой номер телефона' />
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
