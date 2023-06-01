import { Box, Checkbox, FormControlLabel, Grid, Stack, styled } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SvgLogo from '~/assets/iconSvg/SvgLogo';
import { Facebook, Google } from '~/component/Icons';
import { Button } from '~/component/client/Button';

function LoginPage() {
    const [resultGoogleApi, setResultGoogleApi] = useState('');

    console.log(resultGoogleApi);

    useEffect(() => {
        const resultGoogleApi = async () => {
            try {
                const response = await axios(`http://127.0.0.1:8000/api/auth/google/url`);
                setResultGoogleApi(response.data.url);
            } catch (error) {
                console.log(error);
            }
        };

        resultGoogleApi();
    }, []);

    // const handleGoogleApi = async () => {
    //     try {
    //         const response = await axios('http://127.0.0.1:8000/api/auth/google/callback');
    //         setResultGoogle(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <Wrap>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={5}>
                    <Box sx={{ padding: '2rem' }}>
                        <Box sx={{ width: '100%', textAlign: 'center', marginBottom: '3rem' }}>
                            <SvgLogo width="70%" sx={{ marginBottom: '.5rem' }} />
                            <H3Component>Sing In</H3Component>
                            <p style={{ color: '#959895' }}>Sign in to stay connected.</p>
                        </Box>

                        <Box>
                            <Box sx={{ marginBottom: '1.5rem' }}>
                                <LabelCustom htmlFor="acount">Tài khoản</LabelCustom>
                                <InputCustom type="text" id="acount" placeholder="Nhập tài khoản ..." />
                            </Box>
                            <Box sx={{ marginBottom: '1rem' }}>
                                <LabelCustom htmlFor="acount">Mật khẩu</LabelCustom>
                                <InputCustom type="password" id="acount" placeholder="Nhập mật khẩu ..." />
                            </Box>

                            <Stack
                                sx={{
                                    marginBottom: '1.5rem',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                                <LinkForgot to="/">Forgot Password?</LinkForgot>
                            </Stack>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button sx={{ borderRadius: '4px', padding: '8px 32px' }}>Sing In</Button>
                            </Box>
                            <p style={{ margin: '1rem 0', textAlign: 'center', color: '#959895' }}>
                                or sign in with other accounts?
                            </p>

                            <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: '0 32px' }}>
                                <Link to="/">
                                    <Facebook width="2rem" height="2rem" sx={{ cursor: 'pointer' }} />
                                </Link>
                                <Link to={resultGoogleApi}>
                                    <Google width="2rem" height="2rem" sx={{ cursor: 'pointer' }} />
                                </Link>
                            </Stack>

                            <Box>
                                <p style={{ margin: '1rem 0', textAlign: 'center', color: '#959895' }}>
                                    Don’t have an account? <LinkForgot to="/">Click here to sign up.</LinkForgot>
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Wrap>
    );
}

const Wrap = styled('div')({
    height: '100vh',
    width: '100%',
    // backgroundColor: 'rgba(234,106,18,.2)',
    position: 'relative',
    overflow: 'hidden',

    '@media (min-width: 898px)': {
        '&:before': {
            content: '""',
            position: 'absolute',
            webkitTransform: 'translate(9%,-58%) scale(3)',
            transform: 'translate(9%,-58%) scale(3)',
            height: '50%',
            width: '30%',
            background: 'rgba(234,106,18,.2)',
            borderRadius: ' 50%',
            top: 0,
            right: 0,
        },
    },
});

const H3Component = styled('h3')({
    fontSize: '2rem',
    marginBottom: '.5rem',
});

const LabelCustom = styled('label')({
    color: '#959895',
    display: 'inline-block',
    marginBottom: '6px',
});

const InputCustom = styled('input')({
    fontSize: '1rem',
    padding: '12px 24px',
    width: '100%',
    border: '1px solid #e3e1e1 !important',
    borderRadius: '8px',

    '&:active': {
        border: '1px solid #e3e1e1 !important',
    },
});

const LinkForgot = styled(Link)({
    color: '#ea6a12',
    '&:hover': { color: '#bb550e' },
});

export default LoginPage;
