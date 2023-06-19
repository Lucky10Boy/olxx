import React, { useEffect } from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import { connect } from 'react-redux';
import { isSignedInFunc } from './actions/authActions';
import NotFound404 from './components/NotFound404';
import Profile from './components/Profile';
import CreateProduct from './components/CreateProduct';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import LoginPhoneNumber from './components/LoginPhoneNumber';
import RegisterPhoneNumber from './components/RegisterPhoneNumber';
import RegisterComplete from './components/RegisterComplete';
import SingleProduct from './components/SingleProduct';
import UserProducts from './components/UserProducts';
import EditPassword from './components/EditPassword';
import EditPhoneNumber from './components/EditPhoneNumber';
import ProductsBySearchTerm from './components/ProductsBySearchTerm';
import EditProduct from './components/EditProduct';
import CategoryProducts from './components/CategoryProducts';
import SubCategoryProducts from './components/SubCategoryProducts';

const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem('isSignedIn') === undefined) {
      localStorage.setItem('isSignedIn', 'false');
    }
    props.isSignedInFunc();
  });
  return (
    <>
      <Header />
      <div>
        <ToastContainer theme='colored' />
      </div>
      <main className='main-content'>
        <Routes>
          <Route element={<Home />} exact path='/' />
          <Route element={<Register />} exact path='/user/register' />
          <Route element={<RegisterComplete />} exact path='/user/register/complete' />
          <Route element={<RegisterPhoneNumber />} exact path='/user/register/phone/number' />
          <Route element={<Login />} exact path='/user/login' />
          <Route element={<Profile />} exact path='/user/profile' />
          <Route element={<ForgotPassword />} exact path='/user/forgot/password' />
          <Route element={<LoginPhoneNumber />} exact path='/user/login/phone' />
          <Route element={<ResetPassword />} exact path='/user/reset/password/:passwordResetToken' />
          <Route element={<EditPhoneNumber />} exact path='/user/edit/phonenumber' />
          <Route element={<EditProduct />} exact path='user/edit/product/:id' />
          <Route element={<ProductsBySearchTerm />} exact path='/search/products/:searchTerm' />
          <Route element={<CreateProduct />} exact path='/product/create' />
          <Route element={<CategoryProducts />} exact path='/products/category/:categoryId' />
          <Route element={<SubCategoryProducts />} exact path='/products/subcategory/:subCategoryId' />
          <Route element={<SingleProduct />} exact path='/product/:id' />

          <Route element={<UserProducts />} exact path='/user/products' />
          <Route element={<EditPassword />} exact path='/user/edit/password' />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </main>
    </>
  );
};

export default connect(null, {
  isSignedInFunc,
})(App);
