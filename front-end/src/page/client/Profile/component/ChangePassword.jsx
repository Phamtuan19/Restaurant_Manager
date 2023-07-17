import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ControllerTextField from '~/component/customs/@mui/input/ControllerTextField';
import FormGroup from '~/component/customs/@mui/input/FormGroup';
import FormLabel from '~/component/customs/@mui/input/FormLabel';
import { LoadingButton } from '@mui/lab';
import authService from '~/services/auth.service';
import setToastMessage from '~/Helpers/toastMessage';

const validate = yup.object({
   currentPassword: yup
      .string()
      .required('Mật khẩu hiện tại không được để trống')
      .min(6, 'Mật khẩu phải từ 6 ký tự')
      .trim(),
   newPassword: yup.string().required('Mật khẩu mới không được để trống').min(6, 'Mật khẩu phải từ 6 ký tự').trim(),
   passwordConfirmation: yup
      .string()
      .required('Mật khẩu nhập lại không được để trống')
      .min(6, 'Mật khẩu phải từ 6 ký tự')
      .oneOf([yup.ref('newPassword'), null], 'Mật khẩu nhập lại phải trùng khớp với mật khẩu mới')
      .trim(),
});

const ChangePassword = () => {
   const [loading, setLoading] = useState(false);
   const form = useForm({
      mode: 'onChange',
      resolver: yupResolver(validate),
   });

   const { handleSubmit, control } = form;

   const handleSubmitForm = async (data) => {
      setLoading(true);
      try {
         const res = await authService.changePassword(data);
         setToastMessage(res.message);
      } catch (error) {
         console.log(error);
      }
      setLoading(false);
   };

   return (
      <>
         <Box mt="40px">
            <Typography
               component="h2"
               variant="h5"
               sx={{
                  fontWeight: '400',
                  p: '12px 0 5px 12px',
                  mb: '20px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
               }}
            >
               Thay đổi mật khẩu
            </Typography>

            <form onSubmit={handleSubmit(handleSubmitForm)}>
               <FormGroup>
                  <FormLabel title="Mật khẩu hiện tại" name="currentPassword" required gutterBottom />
                  <ControllerTextField
                     type="password"
                     name="currentPassword"
                     placeholder="Nhập mật khẩu hiện tại"
                     control={control}
                  />
               </FormGroup>
               <FormGroup>
                  <FormLabel title="Mật khẩu mới" name="newPassword" required gutterBottom />
                  <ControllerTextField
                     type="password"
                     name="newPassword"
                     placeholder="Mật khẩu mới"
                     control={control}
                  />
               </FormGroup>
               <FormGroup>
                  <FormLabel title="Nhập lại mật khẩu mới" name="passwordConfirmation" required gutterBottom />
                  <ControllerTextField
                     type="password"
                     name="passwordConfirmation"
                     placeholder="Nhập lại mật khẩu mới"
                     control={control}
                  />
               </FormGroup>

               <LoadingButton loading={loading} type="submit" variant="contained" sx={{ mt: 3 }}>
                  Xác nhận
               </LoadingButton>
            </form>
         </Box>
      </>
   );
};

export default ChangePassword;
