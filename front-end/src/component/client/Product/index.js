/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Rating, Stack, Typography, styled } from '@mui/material';
import { images } from '~/assets/image';
import { AddNewIcon } from '~/component/Icons';

function Product({ data, turn = false }) {
    return (
        <Wrap
            sx={{
                marginTop: { md: '85px', xs: '100px' },
                '&:hover': {
                    '.Product_Item_Img': {
                        animation: turn ? 'rotate-smooth 14s cubic-bezier(.26,.26,1,1) infinite' : '',
                    },
                },
            }}
        >
            <WrapImage>
                <Box sx={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden' }}>
                    <Image
                        className="Product_Item_Img"
                        src={data?.img || data?.image || images.noImage}
                        alt={data.name}
                    />
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
                            </Price>
                            {/* {data.price_sale !== undefined ? <PriceSale>$ {data.price}</PriceSale> : ''} */}
                        </Box>
                        <Box
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

export default Product;
