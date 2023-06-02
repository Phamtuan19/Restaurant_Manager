import { Stack, Avatar, Popover, Box, styled, Divider } from '@mui/material';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { CartHeader, LoginIcon, Notification } from '~/component/Icons';
import { useAuthInfo } from '~/redux/SliceReducer/AuthReducer';
import useAuth from '~/services/auth.service';

function Authentication() {
    const { userInfo, setIsAuthenticated } = useAuthInfo();

    return (
        <Stack justifyContent="flex-end" flexDirection="row" alignItems="center">
            <WrapIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Notification width="2rem" height="2rem" className="HeaderUser_Icon" sx={{ cursor: 'pointer' }} />
            </WrapIcon>
            <WrapIcon sx={{ display: { xs: 'none', md: 'flex' } }}>
                <CartHeader width="2rem" height="2rem" className="HeaderUser_Icon" sx={{ cursor: 'pointer' }} />
            </WrapIcon>
            <Box>
                {userInfo.isAuthenticated ? (
                    <UserInfo userInfo={userInfo} setIsAuthenticated={setIsAuthenticated} />
                ) : (
                    <UserLogin />
                )}
            </Box>
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

const UserInfo = ({ userInfo, setIsAuthenticated }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { logoutAccount } = useAuth();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleLogout = () => {
        const response = logoutAccount();

        if (response) {
            setIsAuthenticated({ isAuthenticated: false });
        }
    };

    return (
        <Box>
            <Avatar
                aria-describedby={id}
                sx={{ cursor: 'pointer', width: '32px', height: '32px' }}
                sizes="small"
                src={userInfo?.user?.avatar || userInfo?.user?.image}
                onClick={handleClick}
            />

            <Popover
                sx={{ top: 40 }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Box sx={{ padding: '12px 24px' }}>
                    <Box sx={{ display: 'flex', margin: '10px 0' }}>
                        <Avatar
                            sx={{ width: '50px', height: '50px' }}
                            src={userInfo?.user?.avatar || userInfo?.user?.image}
                        />
                        <Box sx={{ flex: 1, marginLeft: '12px' }}>
                            <Box sx={{ fontSize: '1rem', fontWeight: 600, color: '#292929' }}>
                                {userInfo?.user?.name}
                            </Box>
                            <Box sx={userEmail}>{userInfo?.user?.email}</Box>
                        </Box>
                    </Box>
                    <Divider sx={hrStyle} />
                    <Box>
                        <LinkDom to="/">Trang cá nhân</LinkDom>
                    </Box>
                    <Divider sx={hrStyle} />
                    <Box onClick={handleLogout}>
                        <LinkDom>Đăng xuất</LinkDom>
                    </Box>
                </Box>
            </Popover>
        </Box>
    );
};

const userEmail = {
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
