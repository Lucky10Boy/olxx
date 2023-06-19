import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAIL,
  PRODUCT_SINGLE_GET_REQUEST,
  PRODUCT_SINGLE_GET_SUCCESS,
  PRODUCT_SINGLE_GET_FAIL,
  PRODUCT_RELATED_GET_REQUEST,
  PRODUCT_RELATED_GET_SUCCESS,
  PRODUCT_RELATED_GET_FAIL,
  PRODUCT_AUTHOR_GET_REQUEST,
  PRODUCT_AUTHOR_GET_SUCCESS,
  PRODUCT_AUTHOR_GET_FAIL,
  PRODUCT_USER_GET_REQUEST,
  PRODUCT_USER_GET_SUCCESS,
  PRODUCT_USER_GET_FAIL,
  PRODUCT_REMOVE_REQUEST,
  PRODUCT_REMOVE_SUCCESS,
  PRODUCT_REMOVE_FAIL,
  PRODUCT_SEARCH_FAIL,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_FAIL,
} from '../types';

/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { ...state };
    case PRODUCT_CREATE_SUCCESS:
      return { ...state, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { ...state, error: action.payload };
    case PRODUCT_EDIT_REQUEST:
      return { ...state };
    case PRODUCT_EDIT_SUCCESS:
      return { ...state, product: action.payload };
    case PRODUCT_EDIT_FAIL:
      return { ...state, error: action.payload };
    case PRODUCT_REMOVE_REQUEST:
      return { ...state };
    case PRODUCT_REMOVE_SUCCESS:
      return { ...state };
    case PRODUCT_REMOVE_FAIL:
      return { ...state, error: action.payload };
    case PRODUCT_GET_REQUEST:
      return { ...state };
    case PRODUCT_GET_SUCCESS:
      return { ...state, products: action.payload };
    case PRODUCT_GET_FAIL:
      return { ...state, error: action.payload };
    case PRODUCT_SEARCH_REQUEST:
      return { ...state };
    case PRODUCT_SEARCH_SUCCESS:
      return { ...state, filteredProducts: action.payload };
    case PRODUCT_SEARCH_FAIL:
      return { ...state, error: action.payload };
    case PRODUCT_SINGLE_GET_REQUEST:
      return { ...state };
    case PRODUCT_SINGLE_GET_SUCCESS:
      return { ...state, product: action.payload };
    case PRODUCT_SINGLE_GET_FAIL:
      return { ...state, error: action.payload };
    case PRODUCT_RELATED_GET_REQUEST:
      return { ...state };
    case PRODUCT_RELATED_GET_SUCCESS:
      return { ...state, relatedProducts: action.payload };
    case PRODUCT_RELATED_GET_FAIL:
      return { ...state, error: action.payload };
    case PRODUCT_AUTHOR_GET_REQUEST:
      return { ...state };
    case PRODUCT_AUTHOR_GET_SUCCESS:
      return { ...state, authorProducts: action.payload };
    case PRODUCT_AUTHOR_GET_FAIL:
      return { ...state, error: action.payload };
    case PRODUCT_USER_GET_REQUEST:
      return { ...state };
    case PRODUCT_USER_GET_SUCCESS:
      return { ...state, userProducts: action.payload };
    case PRODUCT_USER_GET_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
