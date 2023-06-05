/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import { Box, Checkbox, FormControlLabel, Grid, Stack, TextField, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import SvgLogo from '~/assets/iconSvg/SvgLogo';
import { Facebook, Google } from '~/component/Icons';
import authService from '~/services/auth.service';
import { LoadingButton } from '@mui/lab';
import { useAuthReducer } from '~/redux/SliceReducer/authReducer';

const validate = yup.object({
    email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
    password: yup.string().required('Mật khẩu không được để trống'),
});

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: 'all',
        resolver: yupResolver(validate),
    });

    const [btnLoading, setBtnLoaidng] = useState(false);

    const [resultGoogleApi, setResultGoogleApi] = useState('');
    const { setUserInfoLogin } = useAuthReducer();

    useEffect(() => {
        const resultGoogleApi = async () => {
            const response = await authService.loginGoogle();
            setResultGoogleApi(response.url);
        };
        resultGoogleApi();
    }, []);

    const handleSubmitForm = async (data) => {
        const response = await authService.loginAccount(data);
        // console.log(response);
        setUserInfoLogin(response);
    };

    return (
        <Wrap>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={5}>
                    <Box sx={{ padding: '2rem' }}>
                        <Box sx={{ width: '100%', textAlign: 'center', marginBottom: '1rem' }}>
                            <SvgLogo width="70%" height="97px" />
                            <H3Component>Sing In</H3Component>
                            <p style={{ color: '#959895' }}>Sign in to stay connected.</p>
                        </Box>

                        <Box>
                            <form onSubmit={handleSubmit(handleSubmitForm)}>
                                <Box sx={{ marginBottom: '1.5rem' }}>
                                    <LabelCustom htmlFor="acount">Tài khoản</LabelCustom>
                                    <TextField
                                        id="email"
                                        fullWidth
                                        sx={styleInput}
                                        type="text"
                                        size="small"
                                        variant="outlined"
                                        placeholder="Nhập tài khoản ..."
                                        {...register('email')}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />
                                </Box>
                                <Box sx={{ marginBottom: '1rem' }}>
                                    <LabelCustom htmlFor="acount">Mật khẩu</LabelCustom>
                                    <TextField
                                        id="email"
                                        fullWidth
                                        sx={styleInput}
                                        type="password"
                                        size="small"
                                        variant="outlined"
                                        placeholder="Nhập tài khoản ..."
                                        {...register('password')}
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                    />
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
                                    <LoadingButton
                                        loading={btnLoading}
                                        loadingIndicator="Loading…"
                                        variant="contained"
                                        size="large"
                                        type="submit"
                                    >
                                        Sing In
                                    </LoadingButton>
                                </Box>
                            </form>
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
                                    Don’t have an account? <LinkForgot to="/sing-up">Click here to sign up.</LinkForgot>
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

const styleInput = {
    fontSize: '1rem',
    borderRadius: '8px',
    fontFamily: '"Roboto Slab",serif !important',
};

const LinkForgot = styled(Link)({
    color: '#ea6a12',
    '&:hover': { color: '#bb550e' },
});

export default LoginPage;
