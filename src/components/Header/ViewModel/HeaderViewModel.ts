import { RootState } from 'index';
import { useSelector } from 'react-redux';

const useHeaderViewModel = () => {
  const sessionData = useSelector((store: RootState) => ({
    restaurantName: store.authReducer.restaurantName,
    tableNumber: store.authReducer.tableNumber,
  }));

  return {
    sessionData,
  };
};

export default useHeaderViewModel;
