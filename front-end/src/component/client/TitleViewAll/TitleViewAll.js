import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { CategoryIcon } from '~/page/HomePage/ContentHome/MenuCategories/SwiperItem/Item';

function TitleViewAll({ title, path = '/', titleRoute = 'View All', styleWrap, styleNavLink, styleIcon }) {
    return (
        <WrapCategory style={{ ...styleWrap }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: 'calc(1.2978rem + .5736vw)' }}>
                {title}
            </Typography>

            <NavLinkRoute to={path} style={{ ...styleNavLink }}>
                {titleRoute}
                <CategoryIcon width="22px" {...styleIcon} />
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
