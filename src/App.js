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
  console.log(process.env);
  return (
    <>
      <Header />
      <div>
        <ToastContainer theme='colored' />
      </div>
      <main className='main-content'>
        <Routes>
          <Route element={<Home />} exact path={process.env.PUBLIC_URL + '/'} />
          <Route element={<Register />} exact path={process.env.PUBLIC_URL + '/user/register'} />
          <Route element={<RegisterComplete />} exact path={process.env.PUBLIC_URL + '/user/register/complete'} />
          <Route element={<RegisterPhoneNumber />} exact path={process.env.PUBLIC_URL + '/user/register/phone/number'} />
          <Route element={<Login />} exact path={process.env.PUBLIC_URL + '/user/login'} />
          <Route element={<Profile />} exact path={process.env.PUBLIC_URL + '/user/profile'} />
          <Route element={<ForgotPassword />} exact path={process.env.PUBLIC_URL + '/user/forgot/password'} />
          <Route element={<LoginPhoneNumber />} exact path={process.env.PUBLIC_URL + '/user/login/phone'} />
          <Route element={<ResetPassword />} exact path={process.env.PUBLIC_URL + '/user/reset/password/:passwordResetToken'} />
          <Route element={<EditPhoneNumber />} exact path={process.env.PUBLIC_URL + '/user/edit/phonenumber'} />
          <Route element={<EditProduct />} exact path={process.env.PUBLIC_URL + 'user/edit/product/:id'} />
          <Route element={<ProductsBySearchTerm />} exact path={process.env.PUBLIC_URL + '/search/products/:searchTerm'} />
          <Route element={<CreateProduct />} exact path={process.env.PUBLIC_URL + '/product/create'} />
          <Route element={<CategoryProducts />} exact path={process.env.PUBLIC_URL + '/products/category/:categoryId'} />
          <Route element={<SubCategoryProducts />} exact path={process.env.PUBLIC_URL + '/products/subcategory/:subCategoryId'} />
          <Route element={<SingleProduct />} exact path={process.env.PUBLIC_URL + '/product/:id'} />

          <Route element={<UserProducts />} exact path={process.env.PUBLIC_URL + '/user/products'} />
          <Route element={<EditPassword />} exact path={process.env.PUBLIC_URL + '/user/edit/password'} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </main>
    </>
  );
};

export default connect(null, {
  isSignedInFunc,
})(App);
