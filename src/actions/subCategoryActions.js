import axios from 'axios';
import {
  FIND_SUB_CATEGORIES_FAIL,
  FIND_SUB_CATEGORIES_REQUEST,
  FIND_SUB_CATEGORIES_SUCCESS,
} from '../types';

export const getSubCategories = (parentCategory) => async (dispatch) => {
  dispatch({ type: FIND_SUB_CATEGORIES_REQUEST });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/category/sub-categories`,
      { parentCategory }
    );
    dispatch({
      type: FIND_SUB_CATEGORIES_SUCCESS,
      payload: data.subCategories,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: FIND_SUB_CATEGORIES_FAIL });
  }
};
export const getAllSubCategories = () => async (dispatch) => {
  dispatch({ type: FIND_SUB_CATEGORIES_REQUEST });
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_API}/sub-categories/all`
    );
    dispatch({
      type: FIND_SUB_CATEGORIES_SUCCESS,
      payload: data.subCategories,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: FIND_SUB_CATEGORIES_FAIL });
  }
};
