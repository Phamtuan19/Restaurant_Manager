/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutClient from './layout/client/LayoutClient';
import LayoutAdmin from './layout/admin/LayoutAdmin';

import './index.css';
import { ToastContainer } from 'react-toastify';
import useAuth from './hook/useAuth';
import LazyLoadingFullScreen from './component/LazyLoadingFullScreen';
import { useEffect } from 'react';

function App() {
    const { isInitialized, getUser } = useAuth();
    useEffect(() => {
        getUser();
    }, []);

    if (!isInitialized) return <LazyLoadingFullScreen />;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<LayoutClient />} />
                <Route path="/admin/*" element={<LayoutAdmin />} />
            </Routes>
            <ToastContainer autoClose={3000} />
        </BrowserRouter>
    );
}

export default App;
