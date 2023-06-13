/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Avatar, Popover, Box, styled, Divider, Menu, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { CartHeader, LoginIcon, Notification } from '~/component/Icons';
import useAuth from '~/hook/useAuth';
import authService from '~/services/auth.service';

function Authentication() {
    const { userPermission, getUser, isAuthenticated } = useAuth();

    useEffect(() => {
        if (userPermission === null) {
            getUser();
        }
    }, [userPermission]);

    return (
        <Stack justifyContent="flex-end" flexDirection="row" alignItems="center">
            <WrapIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Notification width="2rem" height="2rem" className="HeaderUser_Icon" sx={{ cursor: 'pointer' }} />
            </WrapIcon>
            <WrapIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                <CartHeader width="2rem" height="2rem" className="HeaderUser_Icon" sx={{ cursor: 'pointer' }} />
            </WrapIcon>
            <Box>{isAuthenticated ? <UserDetail /> : <UserLogin />}</Box>
        </Stack>
    );
}

const UserLogin = () => {
    return (
        <CustomButtom to="/login">
            <LoginIcon sx={{ marginRight: '12px' }} className="HeaderUser_Icon" />
            Login
        </CustomButtom>
    );
};

const WrapIcon = styled('div')({
    padding: '6px 16px',
    alignItems: 'center',

    '&:hover': {
        svg: {
            path: {
                fill: '#0072E5',
            },
        },
    },
});

const CustomButtom = styled(Link)({
    fontSize: '16px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    padding: '6px 16px',
    cursor: 'pointer',
    background: 'var(--white)',
    border: '1px solid transparent',
    borderRadius: '25px',
    transition: 'all 0.3s',
    textTransform: 'capitalize',
    fontFamily: 'var(--font-poppins)',
    color: 'var(--black) !important',

    '&:hover': {
        color: '#0072E5 !important',

        svg: {
            fill: '#0072E5',
        },
    },
});

const UserDetail = () => {
    const { user, logoutAccount } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleLogout = async () => {
        logoutAccount();
    };

    return (
        <Box>
            <Avatar
                aria-describedby={id}
                sx={{ cursor: 'pointer', width: '32px', height: '32px' }}
                sizes="small"
                src={user?.image}
                onClick={handleClick}
            />
            <Menu anchorEl={anchorEl} id={id} open={open} onClose={handleClose}>
                <MenuItem sx={{ display: 'flex', margin: '10px 0' }}>
                    <Avatar sx={{ width: '50px', height: '50px' }} src={user?.image} />
                    <Box sx={{ flex: 1, marginLeft: '12px' }}>
                        <Box sx={{ fontSize: '1rem', fontWeight: 600, color: '#292929' }}>{user?.name}</Box>
                        <Box sx={email}>{user?.email}</Box>
                    </Box>
                </MenuItem>
                <Divider sx={hrStyle} />
                <MenuItem>
                    <LinkDom to="/">Trang cá nhân</LinkDom>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <LinkDom>Đăng xuất</LinkDom>
                </MenuItem>
            </Menu>
        </Box>
    );
};

const email = {
    color: '#757575',
    fontSize: '.9rem',
    textTransform: 'capitalize',
    marginTop: '4px',
    width: '130px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};

const hrStyle = {
    border: 'none',
    borderTop: '1px solid rgba(0,0,0,.05)',
    margin: '8px 0',
};

const LinkDom = styled(Link)({
    color: '#666',
    cursor: 'pointer',
    display: 'block',
    fontSize: '1rem',
    padding: '10px 0',
    lineHeight: '1.2rem',

    '&:hover': {
        color: 'var(--black)',
    },
});

export default Authentication;
