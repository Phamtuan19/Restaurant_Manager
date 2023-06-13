import { useState } from 'react';
import { Box, styled } from '@mui/material';

import { Header } from '../component/Header';
import Footer from '../component/Footer';
import LayoutSite from '../component/LayoutSite';
import { Sidebar } from '../component/Sidebar';

function DefaultLayout({ children }) {
    const [sidebarActive, setSidebarActive] = useState(false);

    const handleClickSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <>
            <Sidebar sidebarActive={sidebarActive} handleClickSidebar={handleClickSidebar} />
            <Wrap
                sx={{
                    marginLeft: { xs: '0', md: 'var(--width-sidebar)' },
                    transition: 'all 0.5s',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                <Header handleClickSidebar={handleClickSidebar} />

                <Box
                    sx={{
                        minHeight: '100vh',
                        padding: '16px',
                        marginTop: { xs: 'var(--header-height-table)', md: 'var(--height-header-client)' },
                    }}
                    onClick={() => setSidebarActive(false)}
                >
                    {children}
                </Box>
                <Footer />
            </Wrap>
            <LayoutSite />
        </>
    );
}

const Wrap = styled('div')({});

export default DefaultLayout;
