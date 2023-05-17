import { Box, Typography, styled } from '@mui/material';

function Item() {
    return (
        <Wrap>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <img
                    width="50%"
                    src="data:image/png;base64,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"
                    alt=""
                />
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
                    Snacks
                </Typography>
            </CategoryItemTitle>
            <CategoryItemIcon>
                <CategoryIcon />
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
    '&:hover': {
        svg: {
            rect: {
                fill: 'rgb(230, 10, 10, .5)',
                transition: 'all 0.5s',
            },
        },
    },
});

export const CategoryIcon = (props) => {
    return (
        <svg
            width="32"
            height="32"
            style={{ ...props }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="24" height="24" rx="12" fill="#ea6a12"></rect>
            <path
                color="var(--white)"
                d="M10.25 8.5L13.75 12L10.25 15.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    );
};

export default Item;
