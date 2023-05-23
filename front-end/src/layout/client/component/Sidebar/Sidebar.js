import { Stack, styled } from '@mui/material';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import SvgLogo from '~/assets/iconSvg/SvgLogo';
import { Home, Menu, Right, Select, ShoppingCart } from '~/component/Icons';
import { SkeletonLoading } from '../../DefaultLayout/DefaultLayoutClient';
import zIndex from '@mui/material/styles/zIndex';

const listMenu = [
    {
        path: '/',
        iconComponent: Home,
        title: 'trang chủ',
        type: 'home',
    },
    {
        path: '/services',
        iconComponent: Select,
        title: 'dịch vụ',
        type: 'select',
    },
    {
        path: '/menu',
        iconComponent: Menu,
        title: 'Thực đơn',
        type: 'menu',
    },
    {
        path: '/shopping-cart',
        iconComponent: ShoppingCart,
        title: 'Giỏ hàng',
        type: 'cart',
    },
];

function Sidebar(props) {
    const { sidebarActive, handleClickSidebar } = props;

    const { carts } = useContext(SkeletonLoading);

    return (
        <Wrap
            sx={{
                width: {
                    xs: sidebarActive ? 'var(--width-sidebar-active)' : '0',
                    md: sidebarActive ? 'var(--width-sidebar-active)' : 'var(--width-sidebar)',
                },
            }}
        >
            <SidebarHeader
                sx={{ justifyContent: `${sidebarActive ? 'space-between' : 'center'}` }}
                onClick={handleClickSidebar}
            >
                <SvgLogo width="100px" height="80%" sx={{ display: `${sidebarActive ? 'block' : 'none'}` }} />
                <Right width="2rem" />
            </SidebarHeader>

            <SidebarItem listMenu={listMenu} sidebarActive={sidebarActive} carts={carts} />
        </Wrap>
    );
}

const SidebarItem = ({ listMenu, sidebarActive, carts }) => {
    return (
        <Stack sx={{ padding: '12px 12px' }}>
            {listMenu.map((item, index) => {
                const ComponentIcomSidebar = item.iconComponent;
                return (
                    <WrapSibarItem key={index}>
                        <SlidebarItem
                            to={item.path}
                            sx={{ alignItems: 'center', justifyContent: 'flex-start', gap: '0 16px' }}
                        >
                            <Stack
                                sx={{
                                    minWidth: '62px !important',
                                    width: '62px !important',
                                    height: '56px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                }}
                            >
                                {item.type === 'cart' ? <TotalCart>{carts}</TotalCart> : ''}
                                <ComponentIcomSidebar width="2rem" height="2rem" />
                            </Stack>
                            <SidebarItemTitle
                                sx={{
                                    opacity: sidebarActive ? 1 : 0,
                                    transform: sidebarActive ? 'translateX(0) scale(1)' : 'translateX(-100%) scale(0)',
                                    transition: 'all .4s ease',
                                    width: sidebarActive ? 'auto' : '0',
                                }}
                            >
                                {item.title}
                            </SidebarItemTitle>
                        </SlidebarItem>
                    </WrapSibarItem>
                );
            })}
        </Stack>
    );
};

const WrapSibarItem = styled('div')({
    position: 'relative',
    marginTop: '12px',

    '.active': {
        '&::before': {
            width: '100%',
            height: '56px',
            transform: 'translate(-50%, -50%) scale(1)',
        },

        h3: {
            color: '#ea6a12',
        },
    },
});

const TotalCart = styled('div')({
    position: 'absolute',
    top: 0,
    right: -10,
    padding: '3px 12px',
    color: 'var(--black)',
    fontSize: '12px',
    borderRadius: '20px',
    border: '1px solid #fff',
    backgroundColor: 'rgb(234 106 18 / 30%)',
});

const SlidebarItem = styled(NavLink)({
    width: '100%',
    height: '56px',
    display: 'flex',
    cursor: 'pointer',
    color: 'var(--black)',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 0,
        height: 0,
        borderRadius: '20px',
        backgroundColor: 'rgba(234,106,18,.1)',
        color: '#ea6a12',
        transform: 'translate(-50%, -50%) scale(1)',
        transition: 'all 0.5s',
        zIndex: -1,
    },

    '&:hover': {
        '&::before': {
            width: '100%',
            height: '56px',
            transform: 'translate(-50%, -50%) scale(1)',
        },

        h3: {
            color: '#ea6a12',
        },
    },
});

const SidebarItemTitle = styled('h3')({
    flex: 1,
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: '"Roboto Slab",serif',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0 12px',
});

const Wrap = styled('div')({
    position: 'fixed',
    top: 0,
    bottom: 0,
    backgroundColor: 'var(--white)',
    boxShadow: '0 0 30px 0 rgba(116,52,9,.05)',
    overflow: 'hidden',
    transition: 'all 0.5s',
    zIndex: 20,
});

const SidebarHeader = styled('div')({
    padding: '8px 12px',
    display: 'flex',
    height: 'calc(var(--height-header-client) - 4px)',
    alignItems: 'center',
    borderBottom: '1px solid #e9e7e7',
    cursor: 'pointer',
});

export default Sidebar;
