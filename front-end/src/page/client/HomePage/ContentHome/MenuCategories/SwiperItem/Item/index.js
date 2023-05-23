import { Box, Skeleton, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import { CategoryIcon } from '~/component/Icons';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';

function Item({ data }) {
    const { skeleton } = useContext(SkeletonLoading);

    return (
        <Wrap>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                {skeleton ? (
                    <Skeleton variant="circular" width="100px" height="100px" />
                ) : (
                    <img width="50%" src={data.img} alt={data.title} />
                )}
            </Box>

            {skeleton ? (
                <Box sx={{ padding: '0 12px' }}>
                    <Skeleton variant="text" width="100%" height={32} />
                </Box>
            ) : (
                <CategoryItemTitle className="Category_Item_Title">
                    <Typography
                        variant="h1"
                        sx={{
                            textTransform: 'capitalize',
                            transition: 'all .4s ease',
                            fontWeight: 'bolder',
                            fontSize: '1.5rem',
                            paddingBottom: '1.5rem',
                            display: 'block',
                            fontFamily: '"Poppins", sans-serif',
                        }}
                    >
                        {data.title}
                    </Typography>
                </CategoryItemTitle>
            )}
            <CategoryItemIcon>
                {skeleton ? <Skeleton variant="circular" width={32} height={32} /> : <CategoryIcon />}
            </CategoryItemIcon>
        </Wrap>
    );
}

const Wrap = styled('div')({
    width: '100%',
    overflow: 'hidden',
    cursor: 'pointer',

    '&:hover': {
        '.Category_Item_Title': {
            '&:before': {
                width: '50%',
            },
        },
    },
});

const CategoryItemTitle = styled('div')({
    position: 'relative',

    '&:before': {
        content: '""',
        borderBottom: '1px solid #ea6a12',
        width: '32px',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        margin: '0 auto',
        textAlign: 'center',
        transition: 'all .4s ease',
    },
});

const CategoryItemIcon = styled('div')({
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'center',

    '&:hover': {
        svg: {
            rect: {
                fill: 'rgb(230, 10, 10, .5)',
                transition: 'all 0.5s',
            },
        },
    },
});

function LoadingItem() {
    return (
        <Wrap>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Skeleton variant="circular" width="100%" />
            </Box>
            <CategoryItemTitle className="Category_Item_Title">
                <Typography
                    variant="h1"
                    sx={{
                        textTransform: 'capitalize',
                        transition: 'all .4s ease',
                        fontWeight: 'bolder',
                        fontSize: '1.5rem',
                        paddingBottom: '1.5rem',
                        display: 'block',
                    }}
                >
                    <Skeleton variant="text" width="100%" height={32} />
                </Typography>
            </CategoryItemTitle>
            <CategoryItemIcon>
                <Skeleton variant="circular" width={32} height={32} />
            </CategoryItemIcon>
        </Wrap>
    );
}

Item.LoadingItem = LoadingItem;

export default Item;
