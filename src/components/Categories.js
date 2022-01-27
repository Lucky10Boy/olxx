import React, { useEffect } from 'react';
import { CaretRight } from 'phosphor-react';

const Categories = () => {
  const toggleDropdown = (element, e) => {
    const elems = document.querySelectorAll('.helpclass');
    console.log(elems);
    for (let i = 0; i < elems.length; i++) {
      elems[i].className = 'dropdown helpclass';
    }

    document.getElementById(element).classList.add('active-dropdown');

    const catSection = document.getElementById('sec-cat');

    catSection.classList.add('row-gap-seccat');
  };

  const closeX = () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((d) => {
      d.classList.remove('active-dropdown');
      document.getElementById('sec-cat').classList.remove('row-gap-seccat');
    });
  };

  useEffect(() => {
    document
      .querySelector('.section-categories')
      .addEventListener('click', (e) => {
        const dropdowns = document.querySelectorAll('.dropdown');

        for (let i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.remove('active-dropdown');
          document.getElementById('sec-cat').classList.remove('row-gap-seccat');
        }
      });

    if (window.elems)
      if (document.getElementById('sec-cat').classList.contains('flex')) {
        const dropdowns = document.querySelectorAll('.dropdown');

        for (let i = 0; i < dropdowns.length; i++) {
          dropdowns[i].remove();
        }
      }
  });
  return (
    <>
      <h2 className="section-categories-title">Главные категории</h2>
      <section className="section-categories" id="sec-cat">
        <div className="item">
          <div className="category-circle">
            <img
              src="../stroller.svg"
              alt="Baby Stroller"
              className="category-circle-img"
            />
          </div>
          <span
            className="span-nav-toggle"
            onClick={(e) => toggleDropdown('det')}
          >
            Детский мир
          </span>
        </div>
        <div className="item">
          <div className="category-circle">
            <img
              src="../key.png"
              alt="Keys of House"
              className="category-circle-img"
            />
          </div>
          <span onClick={() => toggleDropdown('nedv')}>Недвижимость</span>
        </div>
        <div className="item">
          <div className="category-circle">
            <img src="../auto.png" alt="Auto" className="category-circle-img" />
          </div>
          <span onClick={() => toggleDropdown('auto')}>Авто</span>
        </div>
        <div className="item">
          <div className="category-circle">
            <img
              src="../briefcase.png"
              alt="Briefcase"
              className="category-circle-img"
            />
          </div>
          <span onClick={() => toggleDropdown('job')}>Работа</span>
        </div>
        <div className="item">
          <div className="category-circle">
            <img
              src="../phone.png"
              alt="Phone"
              className="category-circle-img"
            />
          </div>
          <span onClick={() => toggleDropdown('tech')}>Электроника</span>
        </div>
        <div className="item">
          <div className="category-circle">
            <img
              src="../service.png"
              alt="Service"
              className="category-circle-img"
            />
          </div>
          <span onClick={() => toggleDropdown('business')}>Бизнес</span>
        </div>
        <div className="item">
          <div className="category-circle">
            <img
              src="../fashion.png"
              alt="Baby Stroller"
              className="category-circle-img"
            />
          </div>
          <span onClick={() => toggleDropdown('moda')}>Мода</span>
        </div>
        <div className="item">
          <div className="category-circle">
            <img
              src="../service.png"
              alt="Baby Stroller"
              className="category-circle-img"
            />
          </div>
          <span onClick={() => toggleDropdown('')}>salom</span>
        </div>
        <div className="item">
          <div className="category-circle">
            <img
              src="../service.png"
              alt="Baby Stroller"
              className="category-circle-img"
            />
          </div>
          <span onClick={() => toggleDropdown('')}>salom</span>
        </div>
        <div className="dropdown helpclass" id="det">
          <span className="close-btn" onClick={() => closeX()}>
            X
          </span>
          <p className="submenu-title">
            <CaretRight className="icon-md" />
            Просмотреть все объявления в Детский мир
          </p>
          <ul className="submenu">
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <a href="/detskiy">Детская одежда</a>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Детская мебель</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span> Товары для школьников</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Детская обувь</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight> <span>Игрушки</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Прочие детские товары</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Детские коляски</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Детский транспорт</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span> Детские автокресла</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Кормление</span>
            </li>
          </ul>
        </div>
        <div className="dropdown helpclass" id="nedv">
          <span className="close-btn" onClick={() => closeX()}>
            X
          </span>
          <p className="submenu-title">
            <span>Просмотреть все объявления в Недвижимость</span>
          </p>
          <ul className="submenu">
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Квартиры</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight> <span>Дома</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Коммерческие помещения</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight> <span>Земля</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Гаражи / Стоянки</span>
            </li>
          </ul>
        </div>
        <div className="dropdown helpclass" id="auto">
          <span className="close-btn" onClick={() => closeX()}>
            X
          </span>
          <p className="submenu-title">
            <span>Просмотреть все объявления в Автомобили</span>
          </p>
          <ul className="submenu">
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Легковые автомобили</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Автозапчасти и аксессуары</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Шины, диски и колёса</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight> <span>Мото</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Мотозапчасти и аксессуары</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Другой транспорт</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Автобусы</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Грузовые автомобили</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight> <span>Прицепы</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Спецтехника</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Сельхозтехника</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Запчасти для спец / с.х. техники</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Водный транспорт</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Прочие запчасти</span>
            </li>
          </ul>
        </div>
        <div className="dropdown helpclass" id="job">
          <span className="close-btn" onClick={() => closeX()}>
            X
          </span>
          <p className="submenu-title">
            <span>Просмотреть все объявления в Работа</span>
          </p>
          <ul className="submenu">
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Розничная торговля / Продажи</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Транспорт / логистика</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Строительство</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Бары / рестораны</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Юриспруденция и бухгалтерия</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Охрана / безопасность</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Домашний персонал</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Красота / фитнес / спорт</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Туризм / отдых / развлечения</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Образование</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Культура / искусство</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Медицина / фармация</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>ИТ / телеком / компьютеры</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Недвижимость</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Маркетинг / реклама / дизайн</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Производство / энергетика</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Cекретариат / АХО</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Начало карьеры / Студенты</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Сервис и быт</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Другие сферы занятий</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Частичная занятость</span>
            </li>
          </ul>
        </div>
        <div className="dropdown helpclass" id="tech">
          <span className="close-btn" onClick={() => closeX()}>
            X
          </span>
          <p className="submenu-title">
            <span>Просмотреть все объявления в Электроника</span>
          </p>
          <ul className="submenu">
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Телефоны</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Компьютеры</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Фото / видео</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Тв / видеотехника</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Аудиотехника</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Игры и игровые приставки</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Техника для дома</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Техника для кухни</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Климатическое оборудование</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Аксессуары и комплектующие</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Прочая электроника</span>
            </li>
          </ul>
        </div>
        <div className="dropdown helpclass" id="business">
          <span className="close-btn" onClick={() => closeX()}>
            X
          </span>
          <p className="submenu-title">
            <span>Просмотреть все объявления в Бизнес</span>
          </p>
          <ul className="submenu">
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Строительство / ремонт / уборка</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Финансовые услуги / партнерство</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Перевозки / аренда транспорта</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Реклама / полиграфия / маркетинг / интернет</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Няни / сиделки</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Сырьё / материалы</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Красота / здоровье</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Оборудование</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Образование / Спорт</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Услуги для животных</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Продажа бизнеса</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Развлечения / Искусство / Фото / Видео</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight> <span>Туризм</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Услуги переводчиков / набор текста</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Авто / мото услуги</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Обслуживание, ремонт техники</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Юридические услуги</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Прокат товаров</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Прочие услуги</span>
            </li>
          </ul>
        </div>
        <div className="dropdown helpclass" id="moda">
          <span className="close-btn" onClick={() => closeX()}>
            X
          </span>
          <p className="submenu-title">
            <span>Просмотреть все объявления в Мода</span>
          </p>
          <ul className="submenu">
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Одежда/обувь</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Для свадьбы</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Мода разное</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Наручные часы</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Аксессуары</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight> <span>Подарки</span>
            </li>
            <li>
              <CaretRight className="icon-md"></CaretRight>
              <span>Красота / здоровье</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Categories;
