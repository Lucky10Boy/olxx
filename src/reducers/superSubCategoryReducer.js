import {
  FIND_SUPER_SUB_CATEGORIES_FAIL,
  FIND_SUPER_SUB_CATEGORIES_REQUEST,
  FIND_SUPER_SUB_CATEGORIES_SUCCESS,
} from '../types';

/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  switch (action.type) {
    case FIND_SUPER_SUB_CATEGORIES_REQUEST:
      return { ...state };
    case FIND_SUPER_SUB_CATEGORIES_SUCCESS:
      return { ...state, superSubCategories: action.payload };
    case FIND_SUPER_SUB_CATEGORIES_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
