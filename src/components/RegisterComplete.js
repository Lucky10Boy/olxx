import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerComplete } from '../actions/authActions';

const RegisterComplete = (props) => {
  const [emailVerificationCode, setEmailVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.registerComplete(emailVerificationCode);
    navigate('/user/profile');
  };
  return (
    <section className="section-input">
      <form className="form-input" onSubmit={handleSubmit}>
        <div className="input-box">
          <label>
            Введите код который мы вам отправили в вашу электроную почту
          </label>
          <input
            type="text"
            value={emailVerificationCode}
            onChange={(e) => setEmailVerificationCode(e.target.value)}
            placeholder="Укажите код"
          />
          <button className="btn-submit" type="submit">
            Дальше
          </button>
        </div>
      </form>
    </section>
  );
};

export default connect(null, {
  registerComplete,
})(RegisterComplete);
