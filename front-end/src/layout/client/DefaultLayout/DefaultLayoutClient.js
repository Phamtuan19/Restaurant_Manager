import { styled } from '@mui/material';

import { useState } from 'react';
import { Sidebar } from '../component/Sidebar';
import { Header } from '../component/Header';

function DefaultLayout({ children }) {
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <>
            <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
            <Wrap sx={{ marginLeft: { xs: '0', md: 'var(--width-sidebar)' } }}>
                <Header setSidebarActive={setSidebarActive} />
                <Content
                    sx={{ marginTop: { xs: 'var(--header-height-table)', md: 'var(--height-header-client)' } }}
                    onClick={() => setSidebarActive(false)}
                >
                    {children}
                </Content>
            </Wrap>
        </>
    );
}

const Wrap = styled('div')({
    marginLeft: 'var(--width-sidebar)',
    transition: 'all 0.5s',
});

const Content = styled('div')({
    padding: '16px',
});

export default DefaultLayout;
