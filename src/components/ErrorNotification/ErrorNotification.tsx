import React, { ReactNode } from 'react';
import { Alert, Snackbar } from '@mui/material';

type ErrorNotificationProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const ErrorNotification = (props: ErrorNotificationProps) => {
  const { open, onClose, children } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
        {children}
      </Alert>
    </Snackbar>
  );
};
