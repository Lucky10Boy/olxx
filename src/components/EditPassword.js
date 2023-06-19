import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { editPassword } from '../actions/userActions';
import { sendToastMsg } from '../utils';

const EditPassword = (props) => {
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    if (password === '') {
      sendToastMsg('fail', 'Пожалуйста укажите свой новый пароль');
      return;
    }
    await props.editPassword(
      password,
      props.user.email && props.user.email,
      props.user.phoneNumber && props.user.phoneNumber
    );
  }
  return (
    <div>
      <section className='section-input' id='sec-register'>
        <form className='form-input' onSubmit={handleSubmit}>
          <div className='input-box'>
            <label htmlFor='password'>Новый пароль</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Укажите свой новый пароль'
            />
            <button className='btn-submit' type='submit'>
              Дальше
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.userInfo,
  };
};
export default connect(mapStateToProps, { editPassword })(EditPassword);
