import { Box, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const { data } = props;
    return (
        <LinkCustom to="/admin/product/12">
            <WrapImage className="Menu_Product_Img">
                <Image src={`${data.img}`} alt={data.alt} />
            </WrapImage>
            <Box sx={{ backgroundColor: 'var(--white)', borderRadius: '1.5rem', padding: '1rem' }}>
                <Box sx={{ marginTop: '60px', paddingTop: '24px' }}>
                    <ProductTitle>{data.title}</ProductTitle>
                    <Stack sx={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Price>$ {data.price}</Price>
                        <PriceSale>$ {data.price}</PriceSale>
                    </Stack>
                </Box>
            </Box>
        </LinkCustom>
    );
}

const LinkCustom = styled(Link)({
    marginTop: '50px',
    borderRadius: '1.25rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '16px 0',
    cursor: 'pointer',
    border: '0 solid rgba(0,0,0,.125)',

    '&:hover': {
        '.Menu_Product_Img': {
            img: {
                animation: 'rotate-smooth 14s cubic-bezier(.26,.26,1,1) infinite',
            },
        },

        h3: {
            color: '#065fd4',
        },
    },
});

const WrapImage = styled('div')({
    position: 'absolute',
    top: '0%',
    left: '0%',
    transform: 'translateY(-50px)',
    alignItems: 'center',
});

const Image = styled('img')({
    minWidth: '124px',
    minHeight: '123px',
    width: '60%',
    borderRadius: '50%',
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
