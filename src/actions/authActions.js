import axios from 'axios';
import Cookie from 'js-cookie';
import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  IS_SIGNED_IN,
} from '../types';

export const registerNewUser = (name, email, password) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/new-user`,
      {
        name,
        email,
        password,
      }
    );
    const { token } = data;
    Cookie.set('token', token);
    dispatch({ type: REGISTER_SUCCESS, payload: data.user });
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response });
    console.log(error);
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/login`,
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

    console.log(user);

    localStorage.setItem('user', user);
    dispatch({ type: LOGIN_SUCCESS, payload: data.user, token: data.token });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response });
    console.log(error);
  }
};

export const isSignedInFunc = () => async (dispatch) => {
  const token = Cookie.get('token');
  const user = JSON.parse(localStorage.getItem('user'));

  dispatch({ type: IS_SIGNED_IN, token, user });
};
