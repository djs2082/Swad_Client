import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showToaster } from 'config/actions';
import Toasters from 'components/Toaster/View';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showToaster({ message: 'Hello', type: 'error', timeout: 50000 }));
    dispatch(
      showToaster({ message: 'Hello World', type: 'success', timeout: 50000 })
    );
  }, []);

  return (
    <div className='App'>
      <Toasters />
    </div>
  );
};

export default App;
