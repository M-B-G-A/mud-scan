import { useMUD } from "./MUDContext";
import { Header } from "./Header";
import { Home } from "./Home";
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/material/Icon';

export const App = () => {
  
  const {
    network: { storeCache },
  } = useMUD();

  const [open, setOpen] = React.useState(false);

  storeCache.tables.Achievements.subscribe((storeEvent) => {
    setOpen(true);
  });

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const styles = {
    wrapper: {
      display: 'table',
      minHeight: '100%',
      height: '100vh',
      width: '100%',
      background: 'linear-gradient(0deg, rgba(52, 95, 206, 0.31) 0%, rgba(52, 95, 206, 0.06) 51.07%)',
    },
    body: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }

  return (
    <>
      <div style={styles.wrapper}>
        <Header />
        <div style={styles.body}>
          <Home />
        </div>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="latest transaction updated 🙌"
          action={action}
         />
      </div>
    </>
  );
};
