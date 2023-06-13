import { NavLink } from 'react-router-dom';
import { Typography, styled } from '@mui/material';

import { CategoryIcon } from '~/component/Icons';

function TitleComponent({ title, path = '/', component, titleRoute = 'View All', sx }) {
    return (
        <WrapCategory sx={{ ...sx }}>
            <Typography
                component={component || 'h3'}
                sx={{
                    fontSize: 'calc(1.2978rem + .5736vw)',
                    fontFamily: '"Playfair Display", serif',
                }}
            >
                {title}
            </Typography>
            <NavLinkRoute to={path}>
                {titleRoute}
                <CategoryIcon width="16px" />
            </NavLinkRoute>
        </WrapCategory>
    );
}

const WrapCategory = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 0',
});

const NavLinkRoute = styled(NavLink)({
    display: 'flex',
    alignItems: 'center',
    gap: '0 12px',
    color: 'rgba(33, 37, 41)',

    '&:hover': {
        color: '#ccc',
    },
});

export default TitleComponent;
