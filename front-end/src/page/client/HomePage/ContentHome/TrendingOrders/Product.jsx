import { Box, styled } from '@mui/material';
import fomatMoney from '~/Helpers/fomatMoney';
import { images } from '~/assets/image';
import { AddNewIcon } from '~/component/Icons';

export default function Product({ data }) {
    return (
        <Wrap>
            <Box sx={{ position: 'relative', display: 'flex' }}>
                <WrapImage>
                    <Box width={130} height={130} borderRadius="50%" overflow="hidden">
                        <img
                            className="Product_Item_Img"
                            width="100%"
                            height="100%"
                            src={data.image || images.noImage}
                            alt={data.name}
                            style={{ objectFit: 'cover' }}
                        />
                    </Box>
                </WrapImage>

                <Box width="70%">
                    <small style={{ color: 'rgb(234,106,18)' }}>Top of the week</small>
                    <Box my="1rem" sx={styleName}>
                        {data.name}
                    </Box>
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0 24px' }}>
                            <Box sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{fomatMoney(data.price)}</Box>
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
        backgroundColor: 'rgba(255, 255, 255)',

        '.Product_Item_Img': {
            animation: 'rotate-smooth 14s cubic-bezier(.26,.26,1,1) infinite',
        },
    },
});

const styleName = {
    fontSize: '1rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: 'bolder',
    textTransform: 'capitalize',
};

const WrapImage = styled('div')({
    position: 'absolute',
    top: '-50%',
    right: '-70px',
    margin: 'auto',
    textAlign: 'center',
    transform: 'translateY(95%)',
    zIndex: 1,
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
