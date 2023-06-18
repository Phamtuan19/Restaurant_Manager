import { Box, styled } from '@mui/material';
import fomatMoney from '~/Helpers/fomatMoney';

export default function Product({ data }) {
    return (
        <Wrap>
            <Box sx={{ position: 'relative', display: 'flex' }}>
                <Box sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translate(50%, -50%)' }}>
                    <Box sx={{ height: '130px', width: '130px', borderRadius: '50rem', overflow: 'hidden' }}>
                        <img
                            src={data.image}
                            alt={data.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                </Box>

                <Box width="70%">
                    <Box mb="1rem" sx={styleName}>
                        {data.name}
                    </Box>
                    <Box sx={styleCalories}>60 Calories</Box>
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
                            <Box sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                {data.price_sale ? fomatMoney(data.price_sale) : fomatMoney(data.price_sale)}
                            </Box>
                            <Box sx={{ fontSize: '.8rem', fontWeight: 'bold' }}>{fomatMoney(data.price)}</Box>
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
    boxShadow: '0 4px 18px rgba(47, 43, 61 ,.1), 0 0 transparent, 0 0 transparent',
});

const styleName = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: 'bolder',
    textTransform: 'capitalize',
    '&:hover': { color: '#065fd4' },
};

const styleCalories = {
    position: 'relative',
    transition: 'all .4s ease',
    paddingBottom: '1.5rem',
    marginTop: '0.5rem',
    fontSize: '.833rem',
    color: '#959895',

    '&:before': {
        content: '""',
        borderBottom: '1px solid #e3e1e1',
        width: '50%',
        position: 'absolute',
        left: 0,
        bottom: '12px',
        margin: '0 auto',
        textAlign: 'center',
        transition: 'all .4s ease',
    },
};
