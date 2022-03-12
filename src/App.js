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

const App = (props) => {
  useEffect(() => {
    props.isSignedInFunc();
  });
  return (
    <>
      <Header />
      <ToastContainer />
      <div style={{ minHeight: '46vmax' }}>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Register />} exact path="/user/register" />
          <Route element={<Login />} exact path="/user/login" />
          <Route element={<Profile />} exact path="/user/profile" />
          <Route element={<CreateProduct />} exact path="/product/create" />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
      <Contacts />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  isSignedInFunc,
})(App);
