import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { registerNewUser } from '../actions/authActions';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

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

    navigate('/complete');
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
          <button className='btn-submit' type='submit'>
            Регистрация
          </button>
          <button className='btn-submit'>
            <Link to='/user/register/phone/number'>Регистрация с помощью телефона</Link>
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
