import { Box, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { AddCart, Heart } from '~/component/Icons';

function ProductItem() {
    return (
        <Wrap
            sx={{
                flexDirection: { xs: 'column', md: 'row' },
                paddingBottom: '2rem',
                borderBottom: '1px solid #e3e1e1!important',
            }}
        >
            <Box sx={{ minWidth: '70px', maxWidth: '150px', minHeight: '70px', maxHeight: '150px' }}>
                <Image src="https://templates.iqonic.design/aprycot/react/build/static/media/5.37b93a27.png" alt="" />
            </Box>
            <Box
                sx={{
                    flex: '1 1',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <LinkName>Veg Cripsy</LinkName>
                <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi, fugiat dignissimos
                    eligendi at sunt nulla sapiente quisquam ducimus voluptatibus minima nobis modi tenetur molestias
                    quo amet facere officiis. Illo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                    quidem dolore maiores dolorum voluptas ea sequi ullam. Illo nihil exercitationem soluta, dicta
                    placeat doloremque aliquam excepturi id, quisquam veniam repudiandae?
                </P>
                <Stack
                    sx={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: '12px',
                    }}
                >
                    <Box sx={{ maxWidth: '150px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <PriceSale>$ 6.673</PriceSale>
                        <Price>$ 7.673</Price>
                    </Box>

                    <Stack
                        sx={{
                            marginTop: { xs: '12px', lg: '0' },
                            maxWidth: '150px',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '0 24px',
                        }}
                    >
                        <WrapIconAddCart>
                            <AddCart />
                        </WrapIconAddCart>
                        <WrapIconHeart>
                            <Heart />
                        </WrapIconHeart>
                    </Stack>
                </Stack>
            </Box>
        </Wrap>
    );
}

const Wrap = styled('div')({
    display: 'flex',
    gap: '0 12px',
    alignItems: 'center',
    cursor: 'pointer',
});

const Image = styled('img')({
    width: '100%',
    height: '100%',
    borderRadius: '50%',
});

const LinkName = styled(Link)({
    marginBottom: '1rem',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'var(--black)',

    '&:hover': {
        color: 'rgb(0, 127, 255)',
    },

    '&:active': {
        color: 'rgb(0, 127, 255)',
    },
});

const P = styled('p')({
    fontSize: '14px',
    maxHeight: '84px',
    overflow: 'hidden',
    textAlign: 'justify',
    marginBottom: '1rem',
    color: '#959895',
});

const Price = styled('span')({
    fontSize: '.9rem',
    fontWeight: 'bold',
    textDecoration: 'line-through',
});

const PriceSale = styled('span')({
    fontSize: '1.2rem',
    fontWeight: 'bold',
});

const WrapIconAddCart = styled('div')({
    '&:hover': {
        svg: {
            fill: 'var(--color-default)',
        },
    },
});

const WrapIconHeart = styled('div')({
    '&:hover': {
        svg: {
            fill: 'red',
        },
    },
});

export default ProductItem;
