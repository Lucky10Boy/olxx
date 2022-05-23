/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import Cookie from 'js-cookie';
import {
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
    const { passwordResetToken } = data;
    Cookie.set('passwordResetToken', passwordResetToken);
    dispatch({
      type: USER_PASSWORD_FORGOT_SUCCESS,
      url: data.url,
      payload: data.passwordResetToken,
    });
    sendToastMsg(data.status, data.message);
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
