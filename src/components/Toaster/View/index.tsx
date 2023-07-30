import React from 'react';
import Alert from '@mui/material/Alert';
import useToasterViewModel from '../ViewModel/ToasterViewModel';
import { ToasterType } from '../types';

const Toaster: React.FC = () => {
  const viewModel = useToasterViewModel();

  const { toasters, onRemoveToast } = viewModel;

  return toasters ? (
    <>
      {toasters.map((toast: ToasterType) => (
        <div key={toast.id}>
          <Alert
            severity={toast.type || 'success'}
            elevation={16}
            variant='filled'
            className='absolute top-0 right-0 z-[999] m-sm w-fullscrn h-sm'
            onClose={() => {
              onRemoveToast(toast.id);
            }}
          >
            {toast.message}
          </Alert>
        </div>
      ))}
    </>
  ) : null;
};

export default Toaster;
