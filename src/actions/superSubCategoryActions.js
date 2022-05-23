import axios from 'axios';
import {
  FIND_SUPER_SUB_CATEGORIES_FAIL,
  FIND_SUPER_SUB_CATEGORIES_REQUEST,
  FIND_SUPER_SUB_CATEGORIES_SUCCESS,
} from '../types';

export const getSuperSubCategories =
  (parentSubCategory) => async (dispatch) => {
    dispatch({ type: FIND_SUPER_SUB_CATEGORIES_REQUEST });
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/super-sub-categories`,
        { parentSubCategory }
      );
      dispatch({
        type: FIND_SUPER_SUB_CATEGORIES_SUCCESS,
        payload: data.superSubCategories,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: FIND_SUPER_SUB_CATEGORIES_FAIL });
    }
  };
