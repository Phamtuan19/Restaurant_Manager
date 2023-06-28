/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutClient from './layout/client/LayoutClient';

import './index.css';
import { ToastContainer } from 'react-toastify';
import useAuth from './hooks/useAuth';
import { createTheme } from './theme';
import { ThemeProvider } from '@mui/material';
import ErrorBoundary from './component/customs/ErrorBoundary';
import LazyLoadingFullScreen from './component/customs/LazyLoadingFullScreen';
import LayoutAdmin from './layout/admin';

const theme = createTheme();

function App() {
   const { isInitialized } = useAuth();

   if (!isInitialized) return <LazyLoadingFullScreen />;
   return (
      <ErrorBoundary>
         <ThemeProvider theme={theme}>
            <BrowserRouter>
               <Routes>
                  <Route path="/*" element={<LayoutClient />} />
                  <Route path="/admin/*" element={<LayoutAdmin />} />
               </Routes>
               <ToastContainer autoClose={3000} />
            </BrowserRouter>
         </ThemeProvider>
      </ErrorBoundary>
   );
}

export default App;
