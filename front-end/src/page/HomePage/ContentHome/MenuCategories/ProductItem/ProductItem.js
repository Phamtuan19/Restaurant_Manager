import { Box, Rating, Stack, Typography, styled } from '@mui/material';
import { AddNewIcon } from '~/component/Icons';
import Skeleton from '~/component/Skeleton';

function ProductItem(props) {
    const { data } = props;

    return (
        <Wrap sx={{ marginTop: { md: '85px', xs: '100px' } }}>
            <WrapImage>
                <Image className="Product_Item_Img" src={data.img} alt={data.alt} />
            </WrapImage>
            <CardBody>
                <Box sx={{ marginTop: '1.5rem' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bolder',
                            marginTop: '1.5rem',
                            fontSize: '1rem',
                            fontFamily: "'Roboto Slab', serif !important",
                            '&:hover': {
                                color: '#065fd4',
                            },
                        }}
                    >
                        Mushroom
                    </Typography>

                    <Stack spacing={1} sx={{ padding: '12px 0' }}>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    </Stack>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: '1rem',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0 24px',
                            }}
                        >
                            <Price>{data.price_sale !== undefined ? data.price_sale : data.price} </Price>
                            {data.price_sale !== undefined ? <PriceSale>$ {data.price}</PriceSale> : ''}
                        </Box>

                        <AddNewIcon style={{ color: '#fff' }} />
                    </Box>
                </Box>
            </CardBody>
        </Wrap>
    );
}

const Wrap = styled(Box)({
    width: '100%',
    position: 'relative',
    // marginTop: '85px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all .4s ease',
    border: '0 solid rgba(0,0,0,.125)',
    color: '#07143b',

    '&:hover': {
        '.Product_Item_Img': {
            animation: 'rotate-smooth 14s cubic-bezier(.26,.26,1,1) infinite',
        },
    },
});

const WrapImage = styled('div')({
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    transform: 'translateY(-85px)',
    zIndex: 1,
});

const Image = styled('img')({
    maxHeight: '170px',
    maxWidth: '170px',
    minWidth: '170px',
    objectFit: 'cover',
    borderRadius: '50rem',
});

const CardBody = styled('div')({
    paddingTop: '85px !important',
    flex: '1 1 auto',
    padding: '1.5rem',
    backgroundColor: 'var(--white)',
    borderRadius: '1.5rem',
});

const Price = styled('span')({
    fontSize: '1.2rem',
    fontWeight: 'bold',
});

const PriceSale = styled('small')({
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: 'line-through',
});

const Loading = () => {
    return <Skeleton className={{ width: '100%', height: '300px' }}></Skeleton>;
};

ProductItem.Loading = Loading;

export default ProductItem;
