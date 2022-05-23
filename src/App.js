import React, { useEffect } from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Header from './components/Header';
import Contacts from './components/Contacts';
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

const App = (props) => {
  useEffect(() => {
    props.isSignedInFunc();
  });
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route element={<Home />} exact path='/' />
        <Route element={<Register />} exact path='/user/register' />
        <Route
          element={<RegisterComplete />}
          exact
          path='/user/register/complete'
        />
        <Route
          element={<RegisterPhoneNumber />}
          exact
          path='/user/register/phone/number'
        />
        <Route element={<Login />} exact path='/user/login' />
        <Route element={<Profile />} exact path='/user/profile' />
        <Route
          element={<ForgotPassword />}
          exact
          path='/user/forgot/password'
        />
        <Route element={<LoginPhoneNumber />} exact path='/user/login/phone' />
        <Route
          element={<ResetPassword />}
          exact
          path='/user/reset/password/:passwordResetToken'
        />
        <Route element={<CreateProduct />} exact path='/product/create' />
        <Route element={<SingleProduct />} exact path='/product/:id' />
        <Route element={<UserProducts />} exact path='/user/products' />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      <Contacts />
    </>
  );
};

export default connect(null, {
  isSignedInFunc,
})(App);
