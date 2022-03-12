import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../actions/productActions';
import { sendToastMsg } from '../utils';

const CreateProduct = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = props.createProduct(name, price, category, description);
    sendToastMsg(data.status, data.message);
  };

  return (
    <section className="section-register" id="sec-register">
      <form className="form-register" onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="">Имя</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Цена</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="">Категория</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="">Описание</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="btn-submit" type="submit">
            Подать объявление
          </button>
        </div>
      </form>
    </section>
  );
};

export default connect(null, {
  createProduct,
})(CreateProduct);
