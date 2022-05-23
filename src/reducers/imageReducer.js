/* eslint-disable import/no-anonymous-default-export */
import {
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAIL,
  REMOVE_IMAGES_REQUEST,
  REMOVE_IMAGES_SUCCESS,
  REMOVE_IMAGES_FAIL,
} from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_IMAGES_REQUEST:
      return { ...state };
    case UPLOAD_IMAGES_SUCCESS:
      return { ...state, images: action.payload };
    case UPLOAD_IMAGES_FAIL:
      return { ...state, error: action.payload };
    case REMOVE_IMAGES_REQUEST:
      return { ...state };
    case REMOVE_IMAGES_SUCCESS:
      return { ...state, images: action.payload };
    case REMOVE_IMAGES_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
