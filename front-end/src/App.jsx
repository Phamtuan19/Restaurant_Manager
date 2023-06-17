/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutClient from './layout/client/LayoutClient';
import LayoutAdmin from './layout/admin/LayoutAdmin';

import './index.css';
import { ToastContainer } from 'react-toastify';
import useAuth from './hook/useAuth';
import LazyLoadingFullScreen from './component/LazyLoadingFullScreen';
import { createTheme } from './theme';
import { ThemeProvider } from '@mui/material';

const theme = createTheme();

function App() {
    const { isInitialized } = useAuth();

    if (!isInitialized) return <LazyLoadingFullScreen />;
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<LayoutClient />} />
                    <Route path="/admin/*" element={<LayoutAdmin />} />
                </Routes>
                <ToastContainer autoClose={3000} />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
