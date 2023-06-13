import { Box, Collapse, Stack, styled } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { Categories, DownArrow } from '~/component/Icons';

const listSidebar = [
    {
        icon: Categories,
        title: 'Danh mục',
        subCategories: [{ path: '/admin/categories', title: 'danh sách danh mục' }],
    },
    {
        icon: Categories,
        title: 'Sản Phẩm',
        subCategories: [
            { path: '/admin/products/create', title: 'Thêm Sản phẩm' },
            { path: '/admin/products', title: 'danh sách sản phẩm' },
        ],
    },
    {
        icon: Categories,
        title: 'Kho Hàng',
        subCategories: [{ path: '/admin/warehouse', title: 'danh sách kho hàng' }],
    },
];

function Sidebar({ activeSidebar, handleMouseEnter, handleMouseLeave }) {
    return (
        <WrapSidebar
            sx={{
                width: activeSidebar ? 'var(--width-sidebar-admin-active)' : 'var(--width-sidebar-admin)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Stack sx={{ padding: '1.5rem 12px' }}>
                {listSidebar.map((item, index) => (
                    <SidebarItem key={index} activeSidebar={activeSidebar} data={item} />
                ))}
            </Stack>
        </WrapSidebar>
    );
}

const SidebarItem = ({ activeSidebar, data }) => {
    const [open, setOpen] = useState(false);

    const IconComponent = data.icon;

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (!activeSidebar) {
            setOpen(false);
        }
    }, [activeSidebar]);

    return (
        <>
            <Box sx={{ position: 'relative', marginTop: '12px' }} onClick={handleClick}>
                <SlidebarItem
                    // className="sidebar_admin_active"
                    sx={{ alignItems: 'center', justifyContent: 'flex-start' }}
                >
                    <Stack
                        sx={{
                            minWidth: '56px',
                            width: '56px !important',
                            height: '56px',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <IconComponent width="2rem" height="2rem" />
                    </Stack>
                    <SidebarItemTitle
                        sx={{
                            opacity: activeSidebar ? 1 : 0,
                            transform: activeSidebar ? 'translateX(0) scale(1)' : 'translateX(-100%) scale(0)',
                            transition: 'all .4s ease',
                            width: activeSidebar ? '200px' : '0',
                        }}
                    >
                        {data.title}
                        <DownArrow sx={{ marginRight: '12px' }} />
                    </SidebarItemTitle>
                </SlidebarItem>
            </Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box
                    sx={{
                        margin: '.5rem 1.5rem',
                        width: '90%',
                        backgroundColor: 'var(--white)',
                        boxShadow: 'var(--box-shadow-fa)',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {data.subCategories.map((item) => {
                        return (
                            <LinkCustomCollapse key={v4()} to={item.path}>
                                {item.title}
                            </LinkCustomCollapse>
                        );
                    })}
                </Box>
            </Collapse>
        </>
    );
};

const LinkCustomCollapse = styled(Link)({
    padding: '12px 16px',
    color: 'var(--black)',
    fontFamily: '"Roboto Slab",serif',
    textTransform: 'capitalize',

    '&:hover': {
        backgroundColor: '#cccccc2b',
    },
});

const WrapSidebar = styled('div')({
    position: 'fixed',
    top: 'calc(var(--height-header-admin) )',
    bottom: 0,
    backgroundColor: 'var(--white)',
    zIndex: 20,
    transition: 'all .5s',
    boxShadow: 'var(--box-shadow-fa)',

    '&:hover': {
        // width: 'var(--width-sidebar-admin-active) !important',
        // h3: {
        //     opacity: 1,
        //     transform: 'translateX(0) scale(1)',
        //     transition: 'all .4s ease',
        //     width: '200px',
        // },
    },

    '.sidebar_admin_active': {
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

const SlidebarItem = styled('div')({
    width: '100%',
    height: '56px',
    display: 'flex',
    cursor: 'pointer',

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

export default memo(Sidebar);
