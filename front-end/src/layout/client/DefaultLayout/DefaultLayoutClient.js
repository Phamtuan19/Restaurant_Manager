import { createContext, useEffect, useState } from 'react';
import { styled } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Sidebar } from '../component/Sidebar';
import { Header } from '../component/Header';
import Footer from '../component/Footer';
import LayoutSite from '../component/LayoutSite';

export const SkeletonLoading = createContext();

const currencyFormatting = (val) => {
    return val.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};

const notifyTypes = ['success', 'info', 'warning', 'error'];

function DefaultLayout({ children }) {
    const [sidebarActive, setSidebarActive] = useState(false);
    const [skeleton, setSkeleton] = useState(true);
    const [carts, setCarts] = useState([]);

    console.log(carts);

    const handleAddToCart = (data, typeToast, messge) => {
        // toast(messge, {
        //     type: typeToast,
        // });

        const product = carts.find((item) => item.id === data.id);

        console.log(product);

        if (product) {
            return setCarts((prev) => {
                const listProductCart = prev.filter((item) => item !== product.id);

                const newCarts = [...listProductCart, { ...product, quantity: product.quantity + 1 }];

                return newCarts;
            });
        }
        return setCarts((prev) => [...prev, { ...data, quantity: 1 }]);
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
        <SkeletonLoading.Provider value={{ skeleton, notifyTypes, carts, handleAddToCart, currencyFormatting }}>
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
