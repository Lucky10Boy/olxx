/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import Cookie from 'js-cookie';
import {
  USER_PASSWORD_EDIT_FAIL,
  USER_PASSWORD_EDIT_REQUEST,
  USER_PASSWORD_EDIT_SUCCESS,
  USER_PASSWORD_FORGOT_FAIL,
  USER_PASSWORD_FORGOT_REQUEST,
  USER_PASSWORD_FORGOT_SUCCESS,
  USER_PASSWORD_RESET_FAIL,
  USER_PASSWORD_RESET_REQUEST,
  USER_PASSWORD_RESET_SUCCESS,
} from '../types';
import { sendToastMsg } from '../utils';

export const forgotPassword = (email) => async (dispatch) => {
  dispatch({ type: USER_PASSWORD_FORGOT_REQUEST });

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/user/forgot/password`,
      {
        email,
      }
    );
    if (data.status === 'fail') {
      dispatch({ type: USER_PASSWORD_FORGOT_FAIL });
      return;
    }
    sendToastMsg(data.status, data.message);
    const { passwordResetToken } = data;
    Cookie.set('passwordResetToken', passwordResetToken);
    dispatch({
      type: USER_PASSWORD_FORGOT_SUCCESS,
      url: data.url,
      payload: data.passwordResetToken,
    });
  } catch (error) {
    dispatch({ type: USER_PASSWORD_FORGOT_FAIL, payload: error.response });
    console.log(error);
    sendToastMsg('fail', error);
  }
};
export const resetPassword =
  (password, passwordResetToken) => async (dispatch) => {
    dispatch({ type: USER_PASSWORD_RESET_REQUEST });

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/user/reset/password/${passwordResetToken}`,
        {
          password,
        }
      );
      if (data.status === 'fail') {
        dispatch({ type: USER_PASSWORD_RESET_FAIL });
        return;
      }
      sendToastMsg(data.status, data.message);
      dispatch({
        type: USER_PASSWORD_RESET_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: USER_PASSWORD_RESET_FAIL });
      console.log(error);
      sendToastMsg('fail', error);
    }
  };
export const editPassword =
  (password, email, phoneNumber) => async (dispatch) => {
    dispatch({ type: USER_PASSWORD_EDIT_REQUEST });
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_SERVER_API}/user/edit/password`,
        {
          password,
          email,
          phoneNumber,
        }
      );
      if (data.status === 'fail') {
        dispatch({ type: USER_PASSWORD_EDIT_FAIL });
        return;
      }
      sendToastMsg(data.status, data.message);
      dispatch({
        type: USER_PASSWORD_EDIT_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: USER_PASSWORD_EDIT_FAIL });
      console.log(error);
      sendToastMsg('fail', error);
    }
  };
