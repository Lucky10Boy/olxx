import axios from 'axios';
import {
  FIND_CATEGORIES_FAIL,
  FIND_CATEGORIES_REQUEST,
  FIND_CATEGORIES_SUCCESS,
} from '../types';

export const getCategories = () => async (dispatch) => {
  dispatch({ type: FIND_CATEGORIES_REQUEST });
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_API}/categories`
    );
    if (data.status === 'fail') {
      dispatch({ type: FIND_CATEGORIES_FAIL });
      return;
    }
    dispatch({ type: FIND_CATEGORIES_SUCCESS, payload: data.categories });
  } catch (err) {
    console.log(err);
    dispatch({ type: FIND_CATEGORIES_FAIL });
  }
};
