import React from 'react';

const Search = () => {
  return (
    <section className="section-search">
      <div className="search-box">
        <div className="input-container">
          <div className="svg-icon">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            placeholder="775 018 объявлений рядом"
            className="search-input"
            style={{ outline: 'none' }}
          />
        </div>

        <div className="search-location-dropdown flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon-md"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Весь Узбекистан
        </div>
        <button className="btn-search flex-center">
          Поиск{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-md"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Search;
