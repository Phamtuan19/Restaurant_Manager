import { Box, styled } from '@mui/material';

import Header from '../Header';
import Sidebar from '../Sidebar';
import { useState } from 'react';

function DefaultLayoutAdmin({ children }) {
    const [activeSidebar, setActiveSidebar] = useState(false);

    const handleMouseEnter = () => {
        setActiveSidebar(true);
    };

    const handleMouseLeave = () => {
        setActiveSidebar(false);
    };
    return (
        <>
            <Sidebar
                activeSidebar={activeSidebar}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />
            <Box>
                <Header />
                <WrapContent>{children}</WrapContent>
            </Box>
        </>
    );
}

const WrapContent = styled('div')({
    marginTop: 'var(--height-header-admin)',
    marginLeft: 'var(--width-sidebar-admin)',
    padding: '2.5rem',
    backgroundColor: '#F8F8F8',
    minHeight: '100vh',
});

export default DefaultLayoutAdmin;
