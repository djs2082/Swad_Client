import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'index';
import { removeToaster } from 'config/actions';
import { difference } from 'config/service';
import { ToasterType } from '../types';

const useToasterViewModel = () => {
  const [toasters, setToasters] = useState<ToasterType[]>([]);

  const dispatch = useDispatch();

  const toastersInRedux = useSelector(
    (store: RootState) => store.toasterReducer.toasters
  );

  const onRemoveToast = (toasterId: number | undefined) => {
    dispatch(removeToaster({ id: toasterId }));
  };

  useEffect(() => {
    const newToasters = difference(toastersInRedux, toasters);
    if (newToasters.length)
      newToasters.forEach((toast: ToasterType): void => {
        setTimeout((): void => onRemoveToast(toast.id), toast.timeout);
      });
    setToasters(toastersInRedux);
  }, [toastersInRedux]);

  return {
    toasters,
    onRemoveToast,
  };
};

export default useToasterViewModel;
