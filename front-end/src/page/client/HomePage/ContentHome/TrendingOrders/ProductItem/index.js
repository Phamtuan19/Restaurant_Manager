import { Box, Skeleton, Typography, styled } from '@mui/material';
import { AddNewIcon } from '~/component/Icons';

function ProductItem({ data }) {
    return (
        <Wrap>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                }}
            >
                <WrapImage>
                    <Image className="Product_Item_Img" src={data.img} alt={data.title} />
                </WrapImage>

                <Box>
                    <small style={{ color: 'rgb(234,106,18)' }}>{data.top}</small>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bolder',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            fontSize: '1rem',
                            fontFamily: "'Roboto Slab', serif !important",
                            '&:hover': {
                                color: '#065fd4',
                            },
                        }}
                    >
                        {data.title}
                    </Typography>
                    <Div>60 Calories</Div>
                    <Box sx={{ fontSize: '.833rem', color: '#959895' }}>4 persons</Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: '1rem',
                            gap: '0 12px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0 24px',
                            }}
                        >
                            {/* <Price>{fomatMoney(data.price)}</Price> */}
                            {/* {data.price_sale && <PriceSale>$ {data.price}</PriceSale>} */}
                        </Box>

                        <Box>
                            <AddNewIcon className={'AddNewIcon'} style={{ color: '#fff' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Wrap>
    );
}

const Wrap = styled('div')({
    marginRight: '50px',
    padding: '1.5rem',
    background: '#fff',
    transition: 'all .4s ease',
    marginBottom: '2rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #fff',
    borderRadius: '1.5rem',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',

        '.Product_Item_Img': {
            animation: 'rotate-smooth 14s cubic-bezier(.26,.26,1,1) infinite',
        },
    },
});

const WrapImage = styled('div')({
    position: 'absolute',
    top: '-50%',
    right: '-70px',
    margin: 'auto',
    textAlign: 'center',
    transform: 'translateY(95%)',
    zIndex: 1,
});

const Image = styled('img')({
    maxHeight: '130px',
    maxWidth: '130px',
    minWidth: '130px',
    objectFit: 'cover',
    borderRadius: '50rem',
});

const Div = styled('div')({
    position: 'relative',
    transition: 'all .4s ease',
    paddingBottom: '1.5rem',
    marginTop: '0.5rem',
    fontSize: '.833rem',
    color: '#959895',

    '&:before': {
        content: '""',
        borderBottom: '1px solid #e3e1e1',
        width: '32px',
        position: 'absolute',
        left: 0,
        bottom: '12px',
        margin: '0 auto',
        textAlign: 'center',
        transition: 'all .4s ease',
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

const LoadingProduct = () => {
    return (
        <Wrap>
            <Box
                sx={{
                    width: '100%',
                    minHeight: '179.200px',
                    position: 'relative',
                    display: 'flex',
                }}
            >
                <WrapImage>
                    <Skeleton variant="circular" width={130} height={130} />
                </WrapImage>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px 0' }}>
                    <Skeleton variant="text" width={100} height={24} />
                    <Skeleton variant="text" width={100} height={24} />
                    <Box>
                        <Div>
                            <Skeleton variant="text" width={100} height={24} />
                        </Div>
                        <Skeleton variant="text" width={100} height={24} />
                    </Box>

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
                            <Skeleton variant="text" width={45} height={24} />
                            {/* <Skeleton variant="text" width={45} height={12} /> */}
                        </Box>

                        <Skeleton variant="circular" width={25} height={25} />
                    </Box>
                </Box>
            </Box>
        </Wrap>
    );
};

ProductItem.LoadingProduct = LoadingProduct;

export default ProductItem;
