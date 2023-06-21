import { Avatar, Box, Divider, Menu, MenuItem, styled } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '~/hook/useAuth';

function AvatarHeader() {
    const { user, logoutAccount } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        logoutAccount();
    };

    return (
        <Box>
            <Avatar
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ cursor: 'pointer', width: '32px', height: '32px' }}
                sizes="small"
                src={user?.image}
            />
            <Menu
                anchorEl={anchorEl}
                id="basic-menu"
                open={open}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                onClose={handleClose}
            >
                <MenuItem>
                    <Box sx={{ display: 'flex', margin: '10px 0' }}>
                        <Avatar sx={{ width: '50px', height: '50px' }} src={user?.image} />
                        <Box sx={{ flex: 1, marginLeft: '12px', textTransform: 'capitalize' }}>
                            <Box sx={{ fontSize: '1rem', fontWeight: 600, color: '#292929' }}>{user?.name}</Box>
                            <Box sx={email}>{user?.email}</Box>
                        </Box>
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
}

const email = {
    color: '#757575',
    fontSize: '.9rem',
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

export default AvatarHeader;
