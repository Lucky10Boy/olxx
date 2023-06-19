import { toast } from 'react-toastify';

export const sendToastMsg = (status, msg) => {
  if (status === 'success') {
    toast.success(msg);
    return;
  }
  if (status === 'fail' || status === 'error') {
    toast.error(msg);
    return;
  }

  return;
};
