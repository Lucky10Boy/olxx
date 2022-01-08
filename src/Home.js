import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import Products from './components/Products';
import Contacts from './components/Contacts';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Search />
        <Categories />
        <Products />
        <Contacts />
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Home;
