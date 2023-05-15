import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutClient from './layout/LayoutClient';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<LayoutClient />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
