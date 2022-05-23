import React, { useState } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../actions/userActions';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await props.forgotPassword(email);
  }
  return (
    <div>
      <section className="section-input" id="sec-register">
        <form className="form-input" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Укажите свою электронную почту"
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
export default connect(null, { forgotPassword })(ForgotPassword);
