/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Rating, Stack, styled } from '@mui/material';
import fomatMoney from '~/Helpers/fomatMoney';
import { images } from '~/assets/image';
import { AddNewIcon } from '~/component/Icons';

function Product({ data }) {
    return (
        <Box sx={{ position: 'relative', cursor: 'pointer', marginTop: { md: '85px', xs: '100px' } }}>
            <Box sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Box
                    sx={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        boxShadow: '0 0.3125rem 0.3125rem 0 rgba(82,63,105,.05)',
                    }}
                >
                    <img
                        className="Product_Item_Img"
                        src={data?.img || data?.image || images.noImage}
                        alt={data.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            </Box>
            <CardBody>
                <Box sx={{ marginTop: '.5rem' }}>
                    <Box
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            fontWeight: 'bolder',
                            textTransform: 'capitalize',
                            '&:hover': {
                                color: '#065fd4',
                            },
                        }}
                    >
                        {data.name}
                    </Box>

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
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '0 24px' }}>
                            <Price>
                                {data?.price_sale !== null ? fomatMoney(data?.price_sale) : fomatMoney(data?.price)}
                            </Price>
                            {data.price_sale !== undefined ? <PriceSale>{fomatMoney(data.price)}</PriceSale> : ''}
                        </Box>
                        <Box
                        // onClick={() => handleAddToCart(data, notifyTypes[0], 'Thêm thành công!')}
                        >
                            <AddNewIcon style={{ color: '#fff' }} />
                        </Box>
                    </Box>
                </Box>
            </CardBody>
        </Box>
    );
}

const CardBody = styled('div')({
    paddingTop: '85px !important',
    flex: '1 1 auto',
    padding: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #fff',
    borderRadius: '1.5rem',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255)',
    },
});

const Price = styled('span')({
    fontSize: '1rem',
    fontWeight: 'bold',
});

const PriceSale = styled('small')({
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: 'line-through',
});

export default Product;
