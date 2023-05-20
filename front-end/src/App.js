import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutClient from './layout/client/LayoutClient';
import LayoutAdmin from './layout/admin/LayoutAdmin';

import './index.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<LayoutClient />} />
                <Route path="/admin/*" element={<LayoutAdmin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
