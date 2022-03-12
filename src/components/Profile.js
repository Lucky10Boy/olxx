import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <section className="section-profile">
      <Link to="/user/createproduct">
        <button className="btn-submit"> Подать объявление</button>{' '}
      </Link>
      <div className="accordion-profile">
        <div className="accordion-settings">Изменить электронную почту</div>
        <div className="accordion-settings">Изменить пароль</div>
        <div className="accordion-settings">Изменить имя</div>
        <div className="accordion-settings">Изменить номер телефона</div>
      </div>
    </section>
  );
};

export default Profile;
