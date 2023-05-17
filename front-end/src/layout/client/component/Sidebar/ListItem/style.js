import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const SidebarBody = styled('div')({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px 0',

    '.active': {
        '&::before': {
            width: '100%',
            height: '60px',
            transform: 'translate(-50%, -50%) scale(1)',
        },

        '.sidebarActive_Item_Title': {
            color: '#ea6a12',
        },

        '.sidebarActive_Item_Icon': {
            fill: '#ea6a12',
        },
    },
});

export const LinkItem = styled(NavLink)({
    width: '100%',
    height: '60px',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',

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
        color: '#ea6a12',

        '&::before': {
            width: '100%',
            height: '60px',
            transform: 'translate(-50%, -50%) scale(1)',
        },
    },
});

export const ItemTitle = styled('span')({
    color: '#07143b',
    fontWeight: 500,
    textTransform: 'capitalize',
    transition: 'all .4s ease',
    webkitTransform: 'translateX(0)',
    transform: 'translateX(0)',
    opacity: 1,
});
