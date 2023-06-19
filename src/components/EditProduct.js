import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { editProduct, getSingleProduct } from '../actions/productActions';
import { sendToastMsg } from '../utils';
import { getCategories } from '../actions/categoryActions';
import { getSubCategories } from '../actions/subCategoryActions';
import { getSuperSubCategories } from '../actions/superSubCategoryActions';
import { uploadImages, removeImage } from '../actions/imageActions';
import { Spinner } from 'phosphor-react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const EditProduct = (props) => {
  const [name, setName] = useState(props.product && props.product.name);
  const [images, setImages] = useState(props.product && props.product.images && props.product.images);
  const [price, setPrice] = useState(props.product && props.product.price);
  const [category, setCategory] = useState(props.product && props.product.category);
  const [subCategory, setSubCategory] = useState(props.product && props.product.subCategory);
  const [superSubCategory, setSuperSubCategory] = useState(props.product && props.product.superSubCategory !== [] && props.product.superSubCategory);
  const [desc, setDesc] = useState(props.product && props.product.desc);
  const [loading, setLoading] = useState(false);

  let allUploadedFiles = images;
  const params = useParams();
  useEffect(() => {
    props.getSingleProduct(params.id);

    props.getCategories();
    setTimeout(() => {
      if (category !== '') {
        props.getSubCategories(category);
        if (subCategory !== '') {
          props.getSuperSubCategories(subCategory);
        }
      }
    }, 100);
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

    const data = props.editProduct(values, props.product._id);
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
  return props.product ? (
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
            {images &&
              images.map((image) => (
                <>
                  <img alt={image.public_id} key={image.public_id} src={image.url}></img>
                  <span className='close-btn-x-badge' onClick={() => handleRemoveImage(image.public_id)}>
                    X
                  </span>{' '}
                </>
              ))}{' '}
          </div>
          <label>Имя</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          <label>Цена</label>
          <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
          <label>Категория</label>
          <select
            className='custom-select custom-select-lg mb-3'
            style={{ width: '90%' }}
            onChange={(e) => {
              setCategory(e.target.value);
              props.getSubCategories(category !== undefined && category);
            }}>
            <option value={props.product.category._id} hidden>
              {props.product.category.name}
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
            onChange={(e) => {
              setSubCategory(e.target.value);
              props.getSuperSubCategories(subCategory);
            }}>
            <option value={props.product.subCategory._id} hidden>
              {props.product.subCategory.name}
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
            onChange={(e) => {
              setSuperSubCategory(e.target.value);
            }}>
            <option value='' hidden>
              Выберите суперсубкатегорию
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
  ) : (
    <div>loading</div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    categories: state.category.categories,
    subCategories: state.subCategory.subCategories,
    superSubCategories: state.superSubCategory.superSubCategories,
    images: state.image.images,
  };
};

export default connect(mapStateToProps, {
  editProduct,
  getSingleProduct,
  getCategories,
  getSubCategories,
  getSuperSubCategories,
  uploadImages,
  removeImage,
})(EditProduct);
