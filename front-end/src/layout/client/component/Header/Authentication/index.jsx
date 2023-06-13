/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Box, styled } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AvatarHeader from '~/component/AvatartHeader';
import { CartHeader, LoginIcon, Notification } from '~/component/Icons';
import useAuth from '~/hook/useAuth';

function Authentication() {
    const { user, userPermission, getUser, isAuthenticated } = useAuth();

    useEffect(() => {
        if (userPermission === null || user === null) {
            getUser();
        }
    }, [userPermission, user]);

    return (
        <Stack justifyContent="flex-end" flexDirection="row" alignItems="center">
            <WrapIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Notification width="2rem" height="2rem" className="HeaderUser_Icon" sx={{ cursor: 'pointer' }} />
            </WrapIcon>
            <WrapIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                <CartHeader width="2rem" height="2rem" className="HeaderUser_Icon" sx={{ cursor: 'pointer' }} />
            </WrapIcon>
            <Box>
                {isAuthenticated ? (
                    <AvatarHeader />
                ) : (
                    <CustomButtom to="/login">
                        <LoginIcon sx={{ marginRight: '12px' }} className="HeaderUser_Icon" />
                        Login
                    </CustomButtom>
                )}
            </Box>
        </Stack>
    );
}

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

export default Authentication;
