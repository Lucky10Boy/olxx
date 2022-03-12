import axios from 'axios';
import { PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS } from '../types';

export const createProduct =
  (name, price, category, description) => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    try {
      const {
        auth: { token },
      } = getState();
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/product`,
        { name, price, category, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(data);
      dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: error });
    }
  };
