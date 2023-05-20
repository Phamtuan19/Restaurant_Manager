import { Box, Typography, styled } from '@mui/material';
import { Card } from '~/component/client/Card';

function BannerDiscount() {
    return (
        <Card className={{ backgroundColor: 'transparent', width: '100%' }}>
            <WrapSaleOf>
                <DivImage>
                    <Image
                        src="https://templates.iqonic.design/aprycot/react/build/static/media/8.74cad6a3.png"
                        alt="profile-img"
                    />
                </DivImage>
                <Box
                    sx={{
                        marginTop: '9.2rem',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            marginBottom: '0.5rem',
                            fontSize: '2.074rem',
                            fontFamily: '"Playfair Display",serif',
                        }}
                        variant="h2"
                        component="h2"
                    >
                        50 % off
                    </Typography>
                    <Box
                        sx={{
                            color: '#959895',
                        }}
                    >
                        The full price of burgers
                    </Box>
                </Box>
            </WrapSaleOf>
        </Card>
    );
}

const WrapSaleOf = styled('div')({
    position: 'relative',
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: 'hsla(0,0%,100%,.6)',
    borderRadius: '1.5rem',
});

const DivImage = styled('div')({
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    transform: 'translateY(-4.5rem)',
});

const Image = styled('img')({
    maxWidth: '65%',

    '@media (min-width: 576px)': {
        maxWidth: '50%',
    },

    '@media (min-width: 768px)': {
        maxWidth: '45%',
    },

    '@media (min-width: 992px)': {
        maxWidth: '35% ',
    },

    '@media (min-width: 1200px)': {
        maxWidth: '65%',
    },
});

export default BannerDiscount;
