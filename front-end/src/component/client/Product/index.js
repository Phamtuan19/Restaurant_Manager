/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Rating, Skeleton, Stack, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import fomatMoney from '~/Helpers/fomatMoney';
import setToastMessage from '~/Helpers/toastMessage';
import { images } from '~/assets/image';
import { AddNewIcon } from '~/component/Icons';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';
import { useCart } from '~/redux/SliceReducer/cartsReducer';

function Product(props) {
    const { data } = props;
    const { skeleton } = useContext(SkeletonLoading);

    const { useAddCart } = useCart();

    const handleClickAddCart = (dataProduct) => {
        useAddCart(dataProduct);
        setToastMessage('thêm thành công', 'success');
    };

    return (
        <Wrap sx={{ marginTop: { md: '85px', xs: '100px' } }}>
            <WrapImage>
                <Box sx={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden' }}>
                    <Image className="Product_Item_Img" src={data?.image || images.noImage} alt={data.name} />
                </Box>
            </WrapImage>
            <CardBody>
                <Box sx={{ marginTop: '.5rem' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bolder',
                            fontSize: '1rem',
                            fontFamily: "'Roboto Slab', serif !important",
                            '&:hover': {
                                color: '#065fd4',
                            },
                        }}
                    >
                        name
                    </Typography>

                    <Stack spacing={1} sx={{ padding: '12px 0' }}>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    </Stack>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0 24px',
                            }}
                        >
                            <Price>
                                {/* {data?.price_sale !== null ? fomatMoney(data?.price_sale) : fomatMoney(data?.price)} */}
                                20.000đ
                            </Price>
                            {/* {data.price_sale !== undefined ? <PriceSale>$ {data.price}</PriceSale> : ''} */}
                        </Box>
                        <Box
                            onClick={() => handleClickAddCart(data)}
                            // onClick={() => handleAddToCart(data, notifyTypes[0], 'Thêm thành công!')}
                        >
                            <AddNewIcon style={{ color: '#fff' }} />
                        </Box>
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
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    alignItems: 'center',
});

const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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
    fontSize: '1rem',
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
