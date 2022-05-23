/* eslint-disable import/no-anonymous-default-export */
import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_COMPLETE_FAIL,
  REGISTER_COMPLETE_REQUEST,
  REGISTER_COMPLETE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  IS_SIGNED_IN,
  SIGN_OUT,
} from '../types';

export default (state = { isSignedIn: null }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state };
    case LOGIN_SUCCESS:
      return { ...state, isSignedIn: true, userInfo: action.payload };
    case LOGIN_FAIL:
      return { ...state, isSignedIn: false, userInfo: null };
    case REGISTER_REQUEST:
      return { ...state };
    case REGISTER_SUCCESS:
      return {
        ...state,
      };
    case REGISTER_FAIL:
      return { ...state };
    case REGISTER_COMPLETE_REQUEST:
      return { ...state };
    case REGISTER_COMPLETE_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };
    case REGISTER_COMPLETE_FAIL:
      return { ...state, isSignedIn: false, userInfo: null };
    case IS_SIGNED_IN:
      return { ...state, isSignedIn: true, userInfo: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userInfo: null };
    default:
      return state;
  }
};
