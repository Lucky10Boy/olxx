import React, { useEffect, useState } from 'react';
import { login } from '../actions/authActions';
import { sendToastMsg } from '../utils';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = props.login(email, password);
    if (data.status === 'success') {
      sendToastMsg(data.status, data.message);
      navigate('/user/profile');
    }
    sendToastMsg(data.status, data.message);
  };
  return (
    <div>
      <section className="section-input" id="sec-register">
        <form className="form-input" onSubmit={handleSubmit}>
          <ul className="titlebars titlebars-2">
            <li>Войти</li>
            <li>
              <Link to="/user/register">Регистрация</Link>
            </li>
          </ul>
          <div className="input-box">
            <label htmlFor="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Укажите свою электронную почту"
            />

            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Укажите свой пароль"
            />

            <button className="btn-submit" type="submit">
              Войти
            </button>
            <button className="btn-submit" type="submit">
              <Link to="/user/login/phone">Войти с помощью телефона</Link>
            </button>
            <p>
              <Link to="/user/forgot/password">Забыли пароль</Link>
            </p>
          </div>
        </form>
      </section>
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
