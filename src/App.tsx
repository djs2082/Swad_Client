import Toasters from './Components/Toaster';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showToaster } from './Config/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showToaster({ message: 'hi', type: 'error' }));
  }, []);

  return (
    <div className='App'>
      <Toasters />
    </div>
  );
}

export default App;
