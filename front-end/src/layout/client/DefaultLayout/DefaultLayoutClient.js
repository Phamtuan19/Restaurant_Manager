import { createContext, useEffect, useState } from 'react';
import { styled } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

import { Sidebar } from '../component/Sidebar';
import { Header } from '../component/Header';
import Footer from '../component/Footer';
import LayoutSite from '../component/LayoutSite';

export const SkeletonLoading = createContext();

function DefaultLayout({ children }) {
    const [sidebarActive, setSidebarActive] = useState(false);
    const [skeleton, setSkeleton] = useState(true);

    // useEffect(() => {
    //     const timeout = () => {
    //         setTimeout(() => {
    //             setSkeleton(false);
    //         }, 1000);
    //     };

    //     timeout();
    // }, []);

    const handleClickSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <SkeletonLoading.Provider value={{ skeleton }}>
            <Sidebar sidebarActive={sidebarActive} handleClickSidebar={handleClickSidebar} />
            <Wrap sx={{ marginLeft: { xs: '0', md: 'var(--width-sidebar)' }, position: 'relative', zIndex: 10 }}>
                <Header handleClickSidebar={handleClickSidebar} />

                <Content
                    sx={{ marginTop: { xs: 'var(--header-height-table)', md: 'var(--height-header-client)' } }}
                    onClick={() => setSidebarActive(false)}
                >
                    {children}
                </Content>
                <Footer />
            </Wrap>
            <LayoutSite />
        </SkeletonLoading.Provider>
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
