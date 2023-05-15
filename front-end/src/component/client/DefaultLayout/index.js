import { styled } from '@mui/material';
import Header from '../Header';
import Sidebar from '../SideBar';

import './DefaultLayout.css';
import { useState } from 'react';

function DefaultLayout({ children }) {
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <>
            <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
            <Wrap sx={{ marginLeft: { xs: '0', md: 'var(--width-sidebar)' } }}>
                <Header setSidebarActive={setSidebarActive} />
                <DefaultLayoutContent
                    sx={{ marginTop: { xs: 'var(--header-height-table)', md: 'var(--header-height)' } }}
                    onClick={() => setSidebarActive(false)}
                >
                    {children}
                </DefaultLayoutContent>
            </Wrap>
        </>
    );
}

const Wrap = styled('div')({
    marginLeft: 'var(--width-sidebar)',
    transition: 'all 0.5s',
});

const DefaultLayoutContent = styled('div')({
    padding: '16px 16px 16px 16px',
});

export default DefaultLayout;
