import { Box, Typography, styled } from '@mui/material';
import { AddNewIcon } from '~/component/Icons';

function Trending({ data }) {
    return (
        <Wrap>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                }}
            >
                <WrapImage>
                    <Image className="Product_Item_Img" src={data.img} alt={data.alt} />
                </WrapImage>

                <CardBody>
                    <small style={{ color: 'rgb(234,106,18)' }}>Top of the week</small>
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
                        {data.name}
                    </Typography>
                    <Div>60 Calories</Div>
                    <Box sx={{ fontSize: '.833rem', color: '#959895' }}>4 persons</Box>
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
                            <Price>$ 7.6</Price>
                            {/* {data.price_sale !== undefined ? <PriceSale>$ {data.price}</PriceSale> : ''} */}
                        </Box>

                        <AddNewIcon className={'AddNewIcon'} style={{ color: '#fff' }} />
                    </Box>
                </CardBody>
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
    backgroundColor: '#fff',
    border: '0 solid rgba(0,0,0,.125)',
    borderRadius: '1.5rem',
    cursor: 'pointer',

    '&:hover': {
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

const CardBody = styled('div')({
    backgroundColor: 'var(--white)',
    borderRadius: '1.5rem',
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

const PriceSale = styled('small')({
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: 'line-through',
});

export default Trending;
