import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import addSessionDataToStoreAction from 'common/Model/actions';

const useAppViewModel = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const queryParams = new URLSearchParams(location.search);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const addSessionDataToStore = () => {
    dispatch(
      addSessionDataToStoreAction({
        restaurantName: queryParams.get('rn'),
        tableNumber: queryParams.get('tn'),
      })
    );
  };

  const setDeviceWidthAndHeight = () => {
    const deviceHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    document.documentElement.style.setProperty(
      '--device-height',
      `${deviceHeight}px`
    );
  };

  return {
    addSessionDataToStore,
    setDeviceWidthAndHeight,
    loading,
  };
};

export default useAppViewModel;
