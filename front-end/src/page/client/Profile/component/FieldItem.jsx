import { Box, Button, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useAuth from '~/hooks/useAuth';

import authService from '~/services/auth.service';
import setToastMessage from '~/Helpers/toastMessage';
import { useForm } from 'react-hook-form';
import ControllerTextField from '~/component/customs/@mui/input/ControllerTextField';
import { LoadingButton } from '@mui/lab';

const FieldItem = ({ value, name, placeholder, title, description, btnEdit }) => {
   const [open, setOpen] = useState(true);
   const [loading, setLoading] = useState(false);
   const { getUser } = useAuth();

   const { handleSubmit, control } = useForm({
      mode: 'onChange',
   });

   const handleSubmitFrom = async (data) => {
      setLoading(true);
      try {
         const res = await authService.edit(data);
         await getUser();
         setOpen(true);
         setToastMessage(res.message);
      } catch (error) {
         console.log(error);
      }
      setLoading(false);
   };

   return (
      <form onSubmit={handleSubmit(handleSubmitFrom)}>
         <Box display="flex" justifyContent="space-between" mb={4}>
            <WrapFrom>
               <Typography component="h3" variant="h6" sx={{ fontSize: '1rem !important', fontWeight: '500' }}>
                  {title}
               </Typography>
               <Box mt="16px" width="100%">
                  <Box sx={{ marginBottom: '10px' }}>
                     <ControllerTextField
                        fullWidth
                        name={name}
                        variant="standard"
                        defaultValue={value}
                        placeholder={placeholder}
                        disabled={open}
                        control={control}
                     />
                  </Box>
                  <Box sx={{ color: '#757575', fontSize: '.9rem', lineHeight: '2rem' }}>
                     <Box component="span" sx={{ margin: '14px 0', fontSize: '14px' }}>
                        {description}
                     </Box>
                  </Box>
               </Box>
            </WrapFrom>

            {btnEdit && (
               <Box p="16px 0 20px">
                  {open ? (
                     <ExtendButtom variant="outlined" sx={{ borderRadius: '1rem' }} onClick={() => setOpen(false)}>
                        Chỉnh sửa
                     </ExtendButtom>
                  ) : (
                     <>
                        <ExtendLoadingButtom
                           loading={loading}
                           type="submit"
                           variant="outlined"
                           sx={{ borderRadius: '1rem', mr: 1, border: '' }}
                        >
                           Lưu
                        </ExtendLoadingButtom>
                        <ExtendButtom variant="outlined" sx={{ borderRadius: '1rem' }} onClick={() => setOpen(true)}>
                           Hủy
                        </ExtendButtom>
                     </>
                  )}
               </Box>
            )}
         </Box>
      </form>
   );
};

const WrapFrom = styled(Box)({
   display: 'flex',
   flex: 1,
   maxWidth: 550,
   alignItems: 'flex-start',
   flexDirection: 'column',
   p: '16px 0 20px',
   mr: 1,
});

const ExtendButtom = styled(Button)(({ theme }) => {
   return {
      padding: '8px 14px',
      fontSize: '.9rem',
      fontWeight: 400,
      color: 'rgba(0,0,0,.54)',
      border: '1px solid rgba(0,0,0,.15)',
      borderRadius: '30px',
      transition: 'background-color .1s,border-color .1s,color .1s,fill .1s;',
   };
});

const ExtendLoadingButtom = styled(LoadingButton)(({ theme }) => {
   return {
      padding: '8px 14px',
      fontSize: '.9rem',
      fontWeight: 400,
      color: 'rgba(0,0,0,.54)',
      border: '1px solid rgba(0,0,0,.15)',
      borderRadius: '30px',
      transition: 'background-color .1s,border-color .1s,color .1s,fill .1s;',
   };
});

FieldItem.prototype = {
   value: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   title: PropTypes.string.isRequired,
   description: PropTypes.string,
   btnEdit: PropTypes.bool,
};

export default React.memo(FieldItem);
