import { Box, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import fomatMoney from '~/Helpers/fomatMoney';

function ProductItem(props) {
    const { data } = props;

    return (
        <LinkCustom to="/admin/product/12">
            <WrapImage className="Menu_Product_Img">
                <Box sx={{ width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden' }}>
                    <Image src={`${data.image}`} alt={data.name} />
                </Box>
            </WrapImage>
            <Box
                className="Menu_Product_Content"
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    border: '1px solid #fff',
                    borderRadius: '1.5rem',
                    padding: '1rem',
                }}
            >
                <Box sx={{ marginTop: '60px', paddingTop: '24px' }}>
                    <ProductTitle>{data.name}</ProductTitle>
                    <Stack sx={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Price>{fomatMoney(data.price)}</Price>
                        <PriceSale sx={{ display: data.price_sale ? 'flex' : 'none' }}>
                            {data.price_sale ? fomatMoney(data.price_sale) : null}
                        </PriceSale>
                    </Stack>
                </Box>
            </Box>
        </LinkCustom>
    );
}

const LinkCustom = styled(Link)({
    marginTop: '5rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    cursor: 'pointer',

    '&:hover': {
        '.Menu_Product_Img': {
            img: {
                animation: 'rotate-smooth 14s cubic-bezier(.26,.26,1,1) infinite',
            },
        },

        h3: {
            color: '#065fd4',
        },

        '.Menu_Product_Content': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
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

const ProductTitle = styled('h3')({
    fontSize: '18px',
    fontFamily: '"Roboto Slab",serif',
    marginBottom: '1rem',
    color: 'var(--black)',
});

const Price = styled('span')({
    fontWeight: '600',
    color: 'var(--color-red)',
});
const PriceSale = styled('span')({
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--black)',
    textDecoration: 'line-through',
});

export default ProductItem;
