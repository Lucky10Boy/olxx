import { toast } from 'react-toastify';

export const sendToastMsg = (status, msg) => {
  if (status === 'success') {
    return toast.success(msg);
  }
  if (status === 'fail') {
    return toast.error(msg);
  }

  return;
};
