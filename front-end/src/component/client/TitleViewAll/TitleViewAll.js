import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { CategoryIcon } from '~/component/Icons';


function TitleViewAll({
    title,
    path = '/',
    component,
    titleRoute = 'View All',
    sx,
    sxTypo,
    sizeTitle,
    sxLink,
    sxIcon,
}) {
    return (
        <WrapCategory style={{ ...sx }}>
            <Typography
                component={component || 'h3'}
                sx={{ ...sxTypo, fontSize: sizeTitle || 'calc(1.2978rem + .5736vw)' }}
            >
                {title}
            </Typography>

            <NavLinkRoute to={path} style={{ ...sxLink }}>
                {titleRoute}
                <CategoryIcon width="16px" {...sxIcon} />
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

export default TitleViewAll;
