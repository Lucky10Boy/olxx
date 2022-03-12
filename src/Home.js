import React, { useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import Products from './components/Products';
import Contacts from './components/Contacts';

const Home = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const sectionMain = document.querySelector('.section-main');
    header.style.zIndex = '1000';

    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        if (ent.isIntersecting === false) {
          header.style.transform = 'translateY(0)';
        }
        if (
          ent.isIntersecting === true &&
          header.classList.contains('sticky')
        ) {
          header.style.transform = 'translateY(0)';
        }
      },
      {
        // In viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
      }
    );
    obs.observe(sectionMain);
  });
  return (
    <div>
      <main>
        <div className="section-main">
          <Search />
          <Categories />
          <Products />
        </div>
      </main>
    </div>
  );
};

export default Home;
