import {
  FIND_SUB_CATEGORIES_FAIL,
  FIND_SUB_CATEGORIES_REQUEST,
  FIND_SUB_CATEGORIES_SUCCESS,
} from '../types';

/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  switch (action.type) {
    case FIND_SUB_CATEGORIES_REQUEST:
      return { ...state };
    case FIND_SUB_CATEGORIES_SUCCESS:
      return { ...state, subCategories: action.payload };
    case FIND_SUB_CATEGORIES_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
