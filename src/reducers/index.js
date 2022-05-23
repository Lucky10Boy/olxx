import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import imageReducer from './imageReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';
import subCategoryReducer from './subCategoryReducer';
import superSubCategoryReducer from './superSubCategoryReducer';

export default combineReducers({
  product: productReducer,
  auth: authReducer,
  category: categoryReducer,
  subCategory: subCategoryReducer,
  superSubCategory: superSubCategoryReducer,
  image: imageReducer,
  user: userReducer,
});
