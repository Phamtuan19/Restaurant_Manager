import { Box, styled } from '@mui/material';

import Header from '../Header';
import Sidebar from '../Sidebar';
import { useState } from 'react';

function DefaultLayoutAdmin({ children }) {
    const [activeSidebar, setActiveSidebar] = useState(false);

    const handleSetActioveSidebar = () => {
        setActiveSidebar((prev) => !prev);
    };

    return (
        <>
            <Sidebar activeSidebar={activeSidebar} />
            <Box>
                <Header handleSetActioveSidebar={handleSetActioveSidebar} />
                <WrapContent
                    sx={{
                        marginLeft: activeSidebar ? 'var(--width-sidebar-admin-active)' : 'var(--width-sidebar-admin)',
                    }}
                >
                    {children}
                </WrapContent>
            </Box>
        </>
    );
}

const WrapContent = styled('div')({
    marginTop: 'var(--height-header-admin)',
    padding: '2.5rem',
    backgroundColor: '#F8F8F8',
    minHeight: '100vh',
    transition: 'all 0.5s ease'
});

export default DefaultLayoutAdmin;
