import { Stack, Avatar, Popover, Typography, Box } from '@mui/material';
import { useState } from 'react';

import styled from '@emotion/styled';
import LoginIcon from '../../../../assets/imageSvg/LoginIcon';

function HeaderUser() {
    const user = false;

    const [show, setShow] = useState(false);

    const handlClick = () => {
        setShow((prev) => !prev);
    };

    return (
        <Stack alignItems="flex-end">{user ? <UserInfo /> : <UserLogin show={show} handlClick={handlClick} />}</Stack>
    );
}

const UserLogin = () => {
    return (
        <CustomButtom size="small" variant="filled">
            <LoginIcon className="HeaderUser_Icon" />
            Đăng nhập
        </CustomButtom>
    );
};

const CustomButtom = styled('button')({
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

    '&:hover': {
        color: '#0072E5',

        svg: {
            fill: '#0072E5',
        },
    },
});

const UserInfo = ({ show, handlClick }) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <Avatar sx={{ cursor: 'pointer', width: '32px', height: '32px' }} src="" onClick={handlClick}>
                P
            </Avatar>

            <Popover
                sx={{
                    position: 'absolute',
                    top: '-50px',
                }}
                show={show}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Typography sx={{ p: 2 }}>Đăng nhập</Typography>
                <Typography sx={{ p: 2 }}>Đăng ký</Typography>
            </Popover>
        </Box>
    );
};

export default HeaderUser;
