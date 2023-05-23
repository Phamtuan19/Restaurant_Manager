import { Box, Rating, Skeleton, Stack, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import { AddNewIcon } from '~/component/Icons';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';

function Product(props) {
    const { data } = props;

    const { skeleton, notify, types, currencyFormatting } = useContext(SkeletonLoading);
    return (
        <Wrap sx={{ marginTop: { md: '85px', xs: '100px' } }}>
            {skeleton ? (
                <WrapImage sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Skeleton variant="circular" width={170} height={170} />
                </WrapImage>
            ) : (
                <WrapImage>
                    <Image className="Product_Item_Img" src={data.img} alt={data.alt} />
                </WrapImage>
            )}
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
                        {skeleton ? <Skeleton variant="text" width="100%" height={32} /> : 'Mushroom'}
                    </Typography>

                    <Stack spacing={1} sx={{ padding: '12px 0' }}>
                        {skeleton ? (
                            <Skeleton variant="text" width="100%" height={32} />
                        ) : (
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        )}
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
                            {skeleton ? (
                                <Skeleton variant="text" width={50} height={32} />
                            ) : (
                                <Price>
                                    {data.price_sale !== undefined
                                        ? currencyFormatting(data.price_sale)
                                        : currencyFormatting(data.price)}
                                </Price>
                                // {data.price_sale !== undefined ? <PriceSale>$ {data.price}</PriceSale> : ''}
                            )}
                        </Box>
                        {skeleton ? (
                            <Skeleton variant="circular" width={32} height={32} />
                        ) : (
                            <Box onClick={() => notify(types[0], 'Thêm thành công!')}>
                                <AddNewIcon style={{ color: '#fff' }} />
                            </Box>
                        )}
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
    borderRadius: '32rem',
});

const CardBody = styled('div')({
    paddingTop: '85px !important',
    flex: '1 1 auto',
    padding: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #fff',
    borderRadius: '1.5rem',

    '&:hover': {
        backgroundColor: 'var(--white)',
    },
});

const Price = styled('span')({
    fontSize: '1.2rem',
    fontWeight: 'bold',
});

// const PriceSale = styled('small')({
//     fontSize: '0.9rem',
//     fontWeight: 'bold',
//     textDecoration: 'line-through',
// });

const Loading = () => {
    return (
        <Wrap sx={{ marginTop: { md: '85px', xs: '100px' } }}>
            <WrapImage>
                <Skeleton variant="circular" width={170} height={170} />
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
                        <Skeleton variant="text" width="100%" height={32} />
                    </Typography>

                    <Stack spacing={1} sx={{ padding: '12px 0' }}>
                        <Skeleton variant="text" width="100%" height={32} />
                        {/* <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /> */}
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
                            <Skeleton variant="text" width={50} height={32} />
                            {/* <Price>{data.price_sale !== undefined ? data.price_sale : data.price} </Price>
                            {data.price_sale !== undefined ? <PriceSale>$ {data.price}</PriceSale> : ''} */}
                        </Box>

                        <Skeleton variant="circular" width={32} height={32} />
                    </Box>
                </Box>
            </CardBody>
        </Wrap>
    );
};

Product.Loading = Loading;

export default Product;
