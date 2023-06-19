import axios from 'axios';
import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAIL,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_FAIL,
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
  PRODUCT_REMOVE_SUCCESS,
  PRODUCT_REMOVE_FAIL,
  PRODUCT_REMOVE_REQUEST,
} from '../types';
import { sendToastMsg } from '../utils';

export const createProduct = (values) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  try {
    const {
      auth: {
        userInfo: { token },
      },
    } = getState();
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER_API}/product/create`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.status === 'fail') {
      dispatch({ type: PRODUCT_CREATE_FAIL });
    }
    window.location = '/user/profile';
    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    sendToastMsg(data.status, data.message);
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: error });
  }
};
export const editProduct = (values, id) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_EDIT_REQUEST });
  try {
    const {
      auth: {
        userInfo: { token },
      },
    } = getState();
    const { data } = await axios.patch(`${process.env.REACT_APP_SERVER_API}/product/edit/${id}`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.status === 'fail') {
      dispatch({ type: PRODUCT_EDIT_FAIL });
    }
    window.location = '/user/profile';
    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
    sendToastMsg(data.status, data.message);
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_EDIT_FAIL, payload: error });
  }
};
export const getProducts = () => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_GET_REQUEST });
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_API}/products/get`);

    dispatch({ type: PRODUCT_GET_SUCCESS, payload: data.products });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_GET_FAIL, payload: error });
  }
};
export const getSingleProduct = (id) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_SINGLE_GET_REQUEST });
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER_API}/product/single/get`, { id });

    dispatch({ type: PRODUCT_SINGLE_GET_SUCCESS, payload: data.product });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_SINGLE_GET_FAIL, payload: error });
  }
};

export const getRelatedProducts = () => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_RELATED_GET_REQUEST });
  try {
    const {
      product: {
        product: {
          category: { _id },
        },
      },
    } = getState();
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER_API}/product/related/get`, { category: _id });

    dispatch({ type: PRODUCT_RELATED_GET_SUCCESS, payload: data.products });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_RELATED_GET_FAIL, payload: error });
  }
};

export const getAuthorProducts = () => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_AUTHOR_GET_REQUEST });
  try {
    const {
      product: {
        product: { postedBy },
      },
    } = getState();
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER_API}/product/author/get`, { author: postedBy });

    dispatch({ type: PRODUCT_AUTHOR_GET_SUCCESS, payload: data.products });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_AUTHOR_GET_FAIL, payload: error });
  }
};
export const getUserProducts = () => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_USER_GET_REQUEST });
  try {
    const {
      auth: { userInfo },
    } = getState();
    const user = window.localStorage.getItem('user');

    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/product/user/get`,
      { user: user._id },
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({ type: PRODUCT_USER_GET_SUCCESS, payload: data.products });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_USER_GET_FAIL, payload: error });
  }
};
export const removeProduct = (id) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_REMOVE_REQUEST });
  try {
    const {
      auth: { userInfo },
    } = getState();

    await axios.delete(`${process.env.REACT_APP_SERVER_API}/product/remove/${id}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    sendToastMsg('success', 'Объявление успешно удалено');

    dispatch({ type: PRODUCT_REMOVE_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_REMOVE_FAIL, payload: error });
  }
};

export const searchProducts = (key) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_SEARCH_REQUEST });
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_API}/products/search/${key}`);
    dispatch({ type: PRODUCT_SEARCH_SUCCESS, payload: data.filteredProducts });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_SEARCH_FAIL, payload: error });
  }
};
