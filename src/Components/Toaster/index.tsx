/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { difference } from 'src/config/service';
import { Toaster } from 'src/config/main.types.ts';
import { removeToaster } from 'src/config/actions';
import FlashMessage from './FlashMessage.tsx';

const Toasters = (): JSX.Element => {
  const dispatch = useDispatch();
  const [toasters, setToasters] = useState([]);
  const toastersInRedux = useSelector(
    (store: any) => store.toasterReducer.toasters
  );

  const onRemoveToast = (toasterId: number) => {
    dispatch(removeToaster({ id: toasterId }));
  };

  useEffect(() => {
    const newToasters = difference(toastersInRedux, toasters);
    if (newToasters.length)
      newToasters.forEach((toast: Toaster): any =>
        setTimeout((): any => onRemoveToast(toast.id), toast.timeout)
      );
    setToasters(toastersInRedux);
  }, [toastersInRedux]);

  return toasters ? (
    <>
      {toasters.map((toast: Toaster) => (
        <div key={toast.id}>
          <FlashMessage
            toast={toast}
            messageType={toast.type}
            onRemoveToast={onRemoveToast}
          >
            {toast.message}
          </FlashMessage>
        </div>
      ))}
    </>
  ) : null;
};
export default Toasters;
