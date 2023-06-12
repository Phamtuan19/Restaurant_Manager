/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutClient from './layout/client/LayoutClient';
import LayoutAdmin from './layout/admin/LayoutAdmin';

import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';



function App() {
    

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/*" element={<LayoutClient />} />
                    <Route path="/admin/*" element={<LayoutAdmin />} />
                </Routes>
                <ToastContainer autoClose={3000} />
            </Provider>
        </BrowserRouter>
    );
}

export default App;
