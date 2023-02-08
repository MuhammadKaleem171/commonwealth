import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import useInitApp from 'hooks/useInitApp';
import { ToastContainer } from 'react-toastify';
import AppNavigator from 'navigation/AppNavigator';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { customDomain } = useInitApp();

  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppNavigator customDomain={customDomain} />
        <ToastContainer />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
