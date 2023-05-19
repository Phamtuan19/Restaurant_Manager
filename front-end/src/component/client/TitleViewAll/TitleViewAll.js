import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, styled } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
    const [skeleton, setSkeleton] = useState(true);

    useEffect(() => {
        setTimeout(() => setSkeleton(false), 5000);
    }, []);

    return (
        <>
            {skeleton ? (
                <Skeleton height="32px" count={1} style={{ marginTop: '1.5rem', marginBottom: '2rem' }} />
            ) : (
                <WrapCategory sx={{ ...sx }}>
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
            )}
        </>
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
