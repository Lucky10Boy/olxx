import axios from 'axios';
import Cookie from 'js-cookie';
import {
  REGISTER_COMPLETE_FAIL,
  REGISTER_COMPLETE_REQUEST,
  REGISTER_COMPLETE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  IS_SIGNED_IN,
  SIGN_OUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  EDIT_PHONE_NUMBER_SUCCESS,
  EDIT_PHONE_NUMBER_FAIL,
  EDIT_PHONE_NUMBER_REQUEST,
} from '../types';
import { sendToastMsg } from '../utils';

export const registerNewUser = (name, email, password) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    await axios.post(`${process.env.REACT_APP_SERVER_API}/user/register`, {
      name,
      email,
      password,
    });
    dispatch({ type: REGISTER_SUCCESS });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response });
    console.log(error);
  }
};
export const registerComplete = (emailVerificationCode) => async (dispatch) => {
  dispatch({ type: REGISTER_COMPLETE_REQUEST });

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/user/register/complete`,
      { emailVerificationCode }
    );
    sendToastMsg(data.status, data.message);
    Cookie.set('token', data.token);
    if (data.status === 'fail') {
      dispatch({ type: REGISTER_COMPLETE_FAIL, payload: { ...data } });
      localStorage.setItem('isSigned', 'false');
    }
    const user = JSON.stringify(data.user);
    localStorage.setItem('user', user);
    localStorage.setItem('isSigned', 'true');
    dispatch({ type: REGISTER_COMPLETE_SUCCESS, payload: data.token });
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: REGISTER_COMPLETE_FAIL, payload: error.response });
    console.log(error);
    sendToastMsg('fail', error.response);
  }
};
export const registerNewUserPhoneNumber =
  (name, phoneNumber, password) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/user/register`,
        {
          name,
          phoneNumber,
          password,
        }
      );
      const { token } = data;
      Cookie.set('token', token);
      if (data.status === 'fail') {
        localStorage.setItem('isSignedIn', 'false');
        dispatch({
          type: REGISTER_FAIL,
        });
      }
      localStorage.setItem('isSignedIn', 'true');
      dispatch({ type: REGISTER_SUCCESS, payload: data.user });
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
      window.location = '/user/profile';
      sendToastMsg(data.status, data.message);
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response });
      console.log(error);
      sendToastMsg('fail', error);
    }
  };

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/user/login`,
      {
        email,
        password,
      }
    );
    const prevToken = Cookie.get('token');
    if (prevToken) {
      Cookie.remove('token');
    }
    Cookie.set('token', data.token);
    const user = JSON.stringify(data.user);

    localStorage.setItem('user', user);
    if (data.status === 'fail') {
      localStorage.setItem('isSignedIn', 'false');
      dispatch({
        type: LOGIN_FAIL,
        payload: { ...data },
      });
      return;
    }
    window.location = '/user/profile';
    localStorage.setItem('isSignedIn', 'true');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { ...data },
    });
    sendToastMsg(data.status, data.message);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response });
    console.log(error);
  }
};
export const loginPhoneNumber = (phoneNumber, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/user/login`,
      {
        phoneNumber,
        password,
      }
    );
    const prevToken = Cookie.get('token');
    if (prevToken) {
      Cookie.remove('token');
    }
    Cookie.set('token', data.token);
    if (data.status === 'fail') {
      localStorage.setItem('isSignedIn', 'false');
      dispatch({ type: LOGIN_FAIL, payload: { ...data } });
      window.location.reload();
    }
    const user = JSON.stringify(data.user);
    const { token } = data;
    localStorage.setItem('user', user);
    localStorage.setItem('isSignedIn', 'true');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { ...data.user, token },
    });
    window.location = '/';
    sendToastMsg(data.status, data.message);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response });
    console.log(error);
  }
};

export const isSignedInFunc = () => async (dispatch) => {
  const token = Cookie.get('token');
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;
  const isSignedIn = localStorage.getItem('isSignedIn');
  if (isSignedIn === null || isSignedIn === undefined) {
    localStorage.setItem('isSignedIn', 'false');
    dispatch({ type: IS_SIGNED_IN });
    return;
  }
  dispatch({
    type: IS_SIGNED_IN,
    payload: { ...user, token },
  });
};
export const signout = () => async (dispatch) => {
  if (Cookie.get('token')) {
    Cookie.remove('token');
  }
  if (localStorage.getItem('user')) {
    localStorage.removeItem('user');
    localStorage.setItem('isSignedIn', 'false');
  }
  sendToastMsg('fail', 'Успешно вышли из аккаунта');

  dispatch({ type: SIGN_OUT });
};
export const editPhoneNumber =
  (phoneNumber, oldPhoneNumber) => async (dispatch) => {
    dispatch({ type: EDIT_PHONE_NUMBER_REQUEST });

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/user/edit/phonenumber`,
        {
          phoneNumber,
          oldPhoneNumber,
        }
      );
      sendToastMsg(data.status, data.message);

      // const user = JSON.stringify(data.user);
      // localStorage.setItem('user', user);
      dispatch({
        type: EDIT_PHONE_NUMBER_SUCCESS,
        payload: { ...data.user },
      });
    } catch (error) {
      dispatch({ type: EDIT_PHONE_NUMBER_FAIL, payload: error.response });
      console.log(error);
    }
  };
