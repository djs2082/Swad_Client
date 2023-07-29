/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { difference } from 'Config/service';
import { Toaster } from 'Config/main.types';
import { removeToaster } from 'Config/actions';
import FlashMessage from './FlashMessage';

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
