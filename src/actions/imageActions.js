/* eslint-disable no-loop-func */
import axios from 'axios';
import Resizer from 'react-image-file-resizer';
import { toast } from 'react-toastify';
import {
  UPLOAD_IMAGES_FAIL,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  REMOVE_IMAGES_REQUEST,
  REMOVE_IMAGES_SUCCESS,
  REMOVE_IMAGES_FAIL,
} from '../types';
import { sendToastMsg } from '../utils';

export const uploadImages =
  (files, allUploadedFiles, setLoading, setImages) => (dispatch, getState) => {
    for (let i = 0; i < files.length; i++) {
      Resizer.imageFileResizer(
        files[i],
        720,
        720,
        'JPEG',
        100,
        0,
        async (url) => {
          dispatch({ type: UPLOAD_IMAGES_REQUEST });
          setLoading(true);
          try {
            const {
              auth: {
                userInfo: { token },
              },
            } = getState();
            const { data } = await axios.post(
              `${process.env.REACT_APP_SERVER_API}/upload/product/images`,
              { image: url },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            sendToastMsg(data.status, data.message);
            if (data.status === 'fail') {
              dispatch({ type: UPLOAD_IMAGES_FAIL });
              return;
            }
            if (allUploadedFiles.length >= 3) {
              toast.info('Картинки должны быть не более 3');
            }
            allUploadedFiles.push({
              url: data.url,
              public_id: data.public_id,
            });
            setImages(allUploadedFiles);
            dispatch({
              type: UPLOAD_IMAGES_SUCCESS,
              payload: allUploadedFiles,
            });
            setLoading(false);
          } catch (error) {
            setLoading(false);
            console.log(error);
            dispatch({ type: UPLOAD_IMAGES_FAIL, payload: error });
          }
        },
        'base64'
      );
    }
  };
export const removeImage =
  (image_id, allUploadedFiles, setLoading, setImages) =>
  async (dispatch, getState) => {
    dispatch({ type: REMOVE_IMAGES_REQUEST });
    setLoading(true);
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_API}/remove/image`, {
        image_id,
      });
      allUploadedFiles = allUploadedFiles.filter(
        (item) => item.public_id !== image_id
      );
      setImages(allUploadedFiles);
      dispatch({
        type: REMOVE_IMAGES_SUCCESS,
        payload: allUploadedFiles,
      });
      setLoading(false);
    } catch (error) {
      dispatch({ type: REMOVE_IMAGES_FAIL, payload: error });
    }
  };
