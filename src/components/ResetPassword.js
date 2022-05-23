import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../actions/userActions';
import { sendToastMsg } from '../utils';
import Cookie from 'js-cookie';

const ResetPassword = (props) => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigation = useNavigate();
  let { passwordResetToken } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return sendToastMsg('fail', 'Поля не совпадают');
    }
    if (!Cookie.get('passwordResetToken')) {
      // sendToastMsg('fail', 'Пожалуйста сначала')
      return navigation('/');
    }
    if (Cookie.get('passwordResetToken') !== passwordResetToken) {
      return sendToastMsg('fail', 'Ваш токен неверен');
    }
    await props.resetPassword(password, passwordResetToken);
  }
  return (
    <div>
      <section className="section-input" id="sec-register">
        <form className="form-input" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Укажите новый пароль"
            />

            <label htmlFor="passwordConfirm">Пароль</label>
            <input
              type="passwordConfirm"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="Подтвердите свой пароль"
            />

            <button className="btn-submit" type="submit">
              Дальше
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default connect(null, { resetPassword })(ResetPassword);
