import { createContext, useEffect, useState } from 'react';
import { styled } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Sidebar } from '../component/Sidebar';
import { Header } from '../component/Header';
import Footer from '../component/Footer';

export const SkeletonLoading = createContext();

const currencyFormatting = (val) => {
    return val.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};

const types = ['success', 'info', 'warning', 'error'];

function DefaultLayout({ children }) {
    const [sidebarActive, setSidebarActive] = useState(false);
    const [skeleton, setSkeleton] = useState(true);
    const [carts, setCarts] = useState(0);

    const notify = (typeToast, messge) => {
        setCarts((prev) => prev + 1);
        toast(messge, {
            type: typeToast,
        });
    };

    useEffect(() => {
        const timeout = () => {
            setTimeout(() => {
                setSkeleton(false);
            }, 1000);
        };

        timeout();
    }, []);

    const handleClickSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <SkeletonLoading.Provider value={{ skeleton, notify, types, carts, currencyFormatting }}>
            <Sidebar sidebarActive={sidebarActive} handleClickSidebar={handleClickSidebar} />
            <Wrap sx={{ marginLeft: { xs: '0', md: 'var(--width-sidebar)' } }}>
                <Header handleClickSidebar={handleClickSidebar} />
                <Content
                    sx={{ marginTop: { xs: 'var(--header-height-table)', md: 'var(--height-header-client)' } }}
                    onClick={() => setSidebarActive(false)}
                >
                    {children}
                </Content>
                <Footer />
            </Wrap>
            <ToastContainer autoClose={3000} />
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
