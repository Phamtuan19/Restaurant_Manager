/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Routes } from 'react-router-dom';

import './index.css';
import { ToastContainer } from 'react-toastify';
import useAuth from './hooks/useAuth';
import { createTheme } from './theme';
import { ThemeProvider } from '@mui/material';
import LazyLoadingFullScreen from './component/customs/LazyLoadingFullScreen';
import Routers from './routes';

const theme = createTheme();

function App() {
   const { isInitialized } = useAuth();

   if (!isInitialized) return <LazyLoadingFullScreen />;
   return (
      <ThemeProvider theme={theme}>
         <Routes>
            <Routers />
         </Routes>
         <ToastContainer autoClose={3000} />
      </ThemeProvider>
   );
}

export default App;
