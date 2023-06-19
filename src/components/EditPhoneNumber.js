import React, { useState } from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';
import { editPhoneNumber } from '../actions/authActions';
import { connect } from 'react-redux';
import { sendToastMsg } from '../utils';

const EditPhoneNumber = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
      size: 'invisible',
    });

    const provider = new firebase.auth.PhoneAuthProvider();
    provider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier)
      .then(function (verificationId) {
        const verificationCode = window.prompt(
          'Пожалуйста укажите код который вам отправили'
        );
        const phoneCredential = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          verificationCode
        );
        auth.currentUser.updatePhoneNumber(phoneCredential);
      })
      .then(async (result) => {
        // Phone credential now linked to current user.
        // User now can sign in with new phone upon logging out.
        await props.editPhoneNumber(phoneNumber, props.user.phoneNumber);
        sendToastMsg('success', 'Ваш номер телефона успешно изменилось');
      })
      .catch((error) => {
        // Error occurred.
        console.log(error);
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
          <button type='submit' className='btn-submit'>
            Изменить номер телефона
          </button>
          <div id='recaptcha'></div>
        </div>
      </form>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.userInfo,
  };
};

export default connect(mapStateToProps, {
  editPhoneNumber,
})(EditPhoneNumber);
