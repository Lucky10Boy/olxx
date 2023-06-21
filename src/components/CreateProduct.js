import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../actions/productActions';
import { sendToastMsg } from '../utils';
import { getCategories } from '../actions/categoryActions';
import { getSubCategories } from '../actions/subCategoryActions';
import { getSuperSubCategories } from '../actions/superSubCategoryActions';
import { uploadImages, removeImage } from '../actions/imageActions';
import { Spinner } from 'phosphor-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateProduct = (props) => {
  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [superSubCategory, setSuperSubCategory] = useState([]);
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  let allUploadedFiles = images;
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.user && props.user === null) {
      localStorage.setItem('isSignedIn', 'false');
      navigate('/user/login', { replace: true });
    }
    props.getCategories();
    if (category !== '') {
      props.getSubCategories(category);
      if (subCategory !== '') {
        props.getSuperSubCategories(subCategory);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, subCategory]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      name,
      price,
      category,
      subCategory,
      superSubCategory,
      images,
      desc,
    };

    const data = props.createProduct(values);
    toast.success(data.message);
  };
  const handleUpload = (e) => {
    const files = e.target.files;
    if (files) {
      props.uploadImages(files, allUploadedFiles, setLoading, setImages);
    }
  };
  const handleRemoveImage = async (id) => {
    await props.removeImage(id, allUploadedFiles, setLoading, setImages);
  };
  return (
    <section className='section-input' id='sec-register'>
      <form className='form-input' onSubmit={handleSubmit}>
        <div className='input-box'>
          <div className='image-select-box'>
            <label
              className='btn-submit'
              style={{
                color: '#fff',
                width: '100%',
                padding: '.4rem 1.6rem',
                fontSize: '1.6rem',
              }}>
              Выбрать фото
              <input type='file' accept='images/*' multiple hidden onChange={handleUpload} />
            </label>
          </div>
          <label>Фото</label>
          <div className='image-box'>
            {loading ? <Spinner weight='fill' className='icon-loading' /> : ''}
            {props.images &&
              props.images.map((image) => (
                <>
                  <img alt={image.public_id} key={image.public_id} src={image.url}></img>{' '}
                  <span className='close-btn-x-badge' onClick={() => handleRemoveImage(image.public_id)}>
                    X
                  </span>
                </>
              ))}{' '}
          </div>
          <label>Имя</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          <label>Цена</label>
          <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
          <label>Категория</label>
          <select className='custom-select custom-select-lg mb-3' style={{ width: '90%' }} onChange={(e) => setCategory(e.target.value)}>
            <option value='' hidden>
              Выбирайте категорию
            </option>
            {props.categories &&
              props.categories.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
          <label>Суб Категория</label>
          <select
            className='custom-select custom-select-lg mb-3'
            style={{ width: '90%' }}
            disabled={!props.subCategories}
            onChange={(e) => setSubCategory(e.target.value)}>
            <option value='' hidden>
              Выбирайте суб категорию
            </option>
            {props.subCategories &&
              props.subCategories.map((s, i) => (
                <option key={i} value={s._id}>
                  {s.name}
                </option>
              ))}
          </select>
          <label>Супер Суб Категория</label>
          <select
            className='custom-select custom-select-lg mb-3'
            style={{ width: '90%' }}
            disabled={!props.superSubCategories}
            onChange={(e) => setSuperSubCategory(e.target.value)}>
            <option value='' hidden>
              Выбирайте супер суб категорию
            </option>
            {props.subCategories &&
              props.superSubCategories &&
              props.superSubCategories.map((s, i) => (
                <option key={i} value={s._id}>
                  {s.name}
                </option>
              ))}
          </select>
          <label>Описание</label>
          <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)} />
          <button className='btn-submit' type='submit'>
            Подать объявление
          </button>
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
    subCategories: state.subCategory.subCategories,
    superSubCategories: state.superSubCategory.superSubCategories,
    images: state.image.images,
    user: state.auth.userInfo,
  };
};

export default connect(mapStateToProps, {
  createProduct,
  getCategories,
  getSubCategories,
  getSuperSubCategories,
  uploadImages,
  removeImage,
})(CreateProduct);
