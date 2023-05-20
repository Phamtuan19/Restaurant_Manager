import { styled } from '@mui/material';

import Header from '../Header';
import Sidebar from '../Sidebar';
import { useState } from 'react';

function DefaultLayoutAdmin({ children }) {
    const [activeSidebar, setActiveSidebar] = useState(false);

    const handleClickSidebar = () => {
        setActiveSidebar(!activeSidebar);
    };

    return (
        <>
            <Sidebar activeSidebar={activeSidebar} />
            <div>
                <Header handleClickSidebar={handleClickSidebar} />
                <WrapContent>{children}</WrapContent>
            </div>
        </>
    );
}

const WrapContent = styled('div')({
    marginTop: 'var(--height-header-admin)',
    padding: '1rem',
});

export default DefaultLayoutAdmin;
