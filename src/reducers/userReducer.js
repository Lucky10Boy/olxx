/* eslint-disable import/no-anonymous-default-export */
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

export default (state = { url: null }, action) => {
  switch (action.type) {
    case USER_PASSWORD_RESET_REQUEST:
      return { ...state };
    case USER_PASSWORD_RESET_SUCCESS:
      return { ...state };
    case USER_PASSWORD_RESET_FAIL:
      return { ...state };
    case USER_PASSWORD_EDIT_REQUEST:
      return { ...state };
    case USER_PASSWORD_EDIT_SUCCESS:
      return { ...state };
    case USER_PASSWORD_EDIT_FAIL:
      return { ...state };
    case USER_PASSWORD_FORGOT_REQUEST:
      return { ...state };
    case USER_PASSWORD_FORGOT_SUCCESS:
      return { ...state, url: action.url, passwordResetToken: action.payload };
    case USER_PASSWORD_FORGOT_FAIL:
      return { ...state };

    default:
      return state;
  }
};
