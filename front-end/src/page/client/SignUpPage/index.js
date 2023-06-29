/* eslint-disable react-hooks/exhaustive-deps */
import styled from '@emotion/styled';
import { Box, Checkbox, FormControlLabel, Grid, Stack, TextField } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '~/component/client/Button';
import SvgLogo from '~/assets/iconSvg/SvgLogo';
import { Facebook, Google } from '~/component/Icons';
import authService from '~/services/auth.service';

const validate = yup.object({
   name: yup.string().required('name không được để trống'),
   email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
   password: yup.string().required('Mật khẩu không được để trống').min(6, 'Mật khẩu phải lớn hơn 6 ký tự'),
   confirmPassword: yup
      .string()
      .required('Mật khẩu nhập lại không được để trống')
      .oneOf([yup.ref('password'), null], 'Xác nhận mật khẩu không khớp'),
});

function SignUpPage() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      criteriaMode: 'all',
      resolver: yupResolver(validate),
   });

   const handleSubmitForm = async (data) => {
      const response = await authService.SingupAccount(data);

      console.log(response);
   };

   return (
      <Wrap>
         <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={5}>
               <Box sx={{ padding: '1rem 2rem' }}>
                  <Box sx={{ width: '100%', textAlign: 'center', marginBottom: '.5rem' }}>
                     <SvgLogo width="70%" height="80px" />
                     <H3Component>Sing Up</H3Component>
                     <p style={{ color: '#959895' }}>Create your Aprycot account.</p>
                  </Box>

                  <Box>
                     <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <Box sx={{ marginBottom: '.8rem' }}>
                           <Grid container spacing={1}>
                              <Grid item xs={6}>
                                 <LabelCustom htmlFor="name">Tên Tài khoản</LabelCustom>
                                 <TextField
                                    fullWidth
                                    id="name"
                                    sx={styleInput}
                                    type="text"
                                    size="small"
                                    variant="outlined"
                                    placeholder="Nhập tài khoản ..."
                                    {...register('name')}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                 />
                              </Grid>
                              <Grid item xs={6}>
                                 <LabelCustom htmlFor="email">Email Đăng Nhập</LabelCustom>
                                 <TextField
                                    fullWidth
                                    id="email"
                                    sx={styleInput}
                                    type="text"
                                    size="small"
                                    variant="outlined"
                                    placeholder="Nhập email đăng nhập ..."
                                    {...register('email')}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                 />
                              </Grid>
                           </Grid>
                        </Box>
                        <Box sx={{ marginBottom: '.8rem' }}>
                           <LabelCustom htmlFor="password">Mật khẩu</LabelCustom>
                           <TextField
                              id="password"
                              fullWidth
                              sx={styleInput}
                              type="password"
                              size="small"
                              variant="outlined"
                              placeholder="Nhập mật khẩu ..."
                              {...register('password')}
                              error={!!errors.password}
                              helperText={errors.password?.message}
                           />
                        </Box>
                        <Box sx={{ marginBottom: '.8rem' }}>
                           <LabelCustom htmlFor="confirmPassword">Nhập Lại Mật khẩu</LabelCustom>
                           <TextField
                              id="confirmPassword"
                              fullWidth
                              sx={styleInput}
                              type="password"
                              size="small"
                              variant="outlined"
                              placeholder="Nhập mật khẩu ..."
                              {...register('confirmPassword')}
                              error={!!errors.confirmPassword}
                              helperText={errors.confirmPassword?.message}
                           />
                        </Box>

                        <Stack
                           sx={{
                              marginBottom: '.5rem',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}
                        >
                           <FormControlLabel
                              sx={{ lineHeight: '1rem' }}
                              control={<Checkbox defaultChecked />}
                              label="I agree with the terms of use"
                           />
                        </Stack>

                        <Box
                           sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              alignItems: 'center',
                              justifyContent: 'center',
                           }}
                        >
                           <Button sx={{ borderRadius: '4px', padding: '8px 32px' }}>Sing Up</Button>
                        </Box>
                     </form>
                     <p style={{ margin: '1rem 0', lineHeight: '1rem', textAlign: 'center', color: '#959895' }}>
                        or sign in with other accounts?
                     </p>

                     <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: '0 32px' }}>
                        <Link to="/">
                           <Facebook width="2rem" height="2rem" sx={{ cursor: 'pointer' }} />
                        </Link>
                        <Link>
                           <Google width="2rem" height="2rem" sx={{ cursor: 'pointer' }} />
                        </Link>
                     </Stack>

                     <Box>
                        <p style={{ margin: '1rem 0', textAlign: 'center', color: '#959895' }}>
                           Already have an Account? <LinkForgot to="/login">Sign In</LinkForgot>
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

export default SignUpPage;
