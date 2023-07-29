import React from 'react';
import Alert from '@mui/material/Alert';
import { Toaster } from '@/src/config/main.types';
interface FlashMessageProps {
  toast: Toaster;
  messageType: 'success' | 'info' | 'warning' | 'error';
  children: string;
  onRemoveToast: (id: number) => void;
}

const FlashMessage: React.FC<FlashMessageProps> = ({
  toast,
  messageType,
  children,
  onRemoveToast,
}) => {
  return (
    <Alert
      severity={messageType || 'success'}
      elevation={16}
      variant='filled'
      className='absolute top-0 right-0 z-[999] m-sm w-fullscrn h-sm'
      onClose={() => {
        onRemoveToast(toast.id);
      }}
    >
      {children}
    </Alert>
  );
};

export default FlashMessage;
