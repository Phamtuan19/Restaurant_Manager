import { Box, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { CategoryIcon } from '~/component/Icons';
import { Button } from '~/component/client/Button';
import { Card } from '~/component/client/Card';
import { TitleViewAll } from '~/component/client/TitleViewAll';

function ContentRight() {
    return (
        <>
            <Card className={{ padding: ' 1.5rem' }}>
                <H2Title>
                    Today’s <br></br> Special <br></br> Menu
                </H2Title>
                <Box sx={{ textAlign: 'center' }}>
                    <img
                        style={{ marginBottom: '2rem', width: '65%', borderRadius: '5px' }}
                        src="https://templates.iqonic.design/aprycot/react/build/static/media/5.37b93a27.png"
                        alt=""
                    />
                </Box>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button>
                        <ButtonLink to="/menu">ORDER NOW!</ButtonLink>
                    </Button>
                </Stack>
            </Card>

            <Card className={{ padding: ' 1.5rem' }}>
                <TitleViewAll title="Special offer for you" sxLink={{ display: 'none' }} />
                <Stack
                    sx={{
                        flexDirection: 'row',
                        gap: '0 24px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src="	https://templates.iqonic.design/aprycot/react/build/static/media/1.8ffd0bf8.png"
                            alt=""
                            style={{
                                width: '100%',
                            }}
                        />
                    </Box>

                    <Stack
                        sx={{
                            flex: '1 1',
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Stack
                            sx={{
                                height: '100%',
                                justifyContent: 'space-around',
                            }}
                        >
                            <PriceSale>$7,99</PriceSale>
                            <TitleSpecialOffer>Buy 1 Get 1 Free</TitleSpecialOffer>
                        </Stack>
                        <Box>
                            <CategoryIcon />
                        </Box>
                    </Stack>
                </Stack>
            </Card>
        </>
    );
}

const H2Title = styled('h2')({
    fontSize: '2.074rem',
    display: 'inline-block',
    webkitTransform: 'rotate(-30deg)',
    transform: 'rotate(-30deg)',
    marginLeft: '1rem',
    marginBottom: '2rem',
});

const ButtonLink = styled(Link)({
    color: '#fff',
});

const PriceSale = styled('p')({
    fontSize: '1.2rem',
    fontWeight: 'bold',
});

const TitleSpecialOffer = styled('h5')({
    fontSize: '1.2rem',
    fontWeight: 'bold',
});

export default ContentRight;
