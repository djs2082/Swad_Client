/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FlashMessage from './FlashMessage';
import { difference } from '../../Config/service';
import { Toaster } from '../../Config/main.types';
import { removeToaster } from '../../Config/actions';



const Toasters = () => {

  const dispatch = useDispatch();
  const [ toasters, setToasters ] = useState([]);
  const toastersInRedux = useSelector((store:any) => store.toasterReducer.toasters);
  

  useEffect(()=>{
    console.log(toastersInRedux, toasters)
    let newToasters = difference(toastersInRedux, toasters)
    if(newToasters.length)
      newToasters.forEach((toast:Toaster):any => setTimeout(():any=> dispatch(removeToaster({id: toast.id})), toast.timeout))
    setToasters(toastersInRedux);
  },[toastersInRedux]);

  // const onRemoveToast = (event, toasterId) => {
  //   event.preventDefault();
  //   dispatch(removeToaster(toasterId));
  // }

  return (
    <>
      {
        toasters ?
          toasters.map((toast) => <FlashMessage />) : null
      }
    </>
  );
}
export default Toasters;