import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutClient from './layout/client/LayoutClient';
import LayoutAdmin from './layout/admin/LayoutAdmin';

import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/*" element={<LayoutClient />} />
                    <Route path="/admin/*" element={<LayoutAdmin />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
