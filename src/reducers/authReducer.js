/* eslint-disable import/no-anonymous-default-export */
import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  IS_SIGNED_IN,
} from '../types';

export default (state = { loading: null }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignedIn: true,
        userInfo: action.payload,
      };
    case LOGIN_FAIL:
      return { ...state, loading: false, isSignedIn: false, userInfo: null };
    case REGISTER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignedIn: true,
        userInfo: action.payload,
      };
    case REGISTER_FAIL:
      return { ...state, loading: false, isSignedIn: false, userInfo: null };
    case IS_SIGNED_IN:
      return { ...state, userInfo: action.user, token: action.token };
    default:
      return state;
  }
};
