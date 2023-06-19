import React, { useEffect } from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import SearchProducts from './components/SearchProducts';

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
    <main className='section-main'>
      <SearchProducts />
      <Categories />
      <Products />
    </main>
  );
};

export default Home;
