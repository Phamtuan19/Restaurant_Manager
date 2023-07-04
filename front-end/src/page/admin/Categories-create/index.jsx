import { LoadingButton } from '@mui/lab';
import { Box, Stack } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import ControllerTextField from '~/component/customs/@mui/input/ControllerTextField';
import FormGroup from '~/component/customs/@mui/input/FormGroup';
import FormLabel from '~/component/customs/@mui/input/FormLabel';
import categoriesService from '~/services/categories.service';
import setToastMessage from '~/Helpers/toastMessage';

const validate = yup.object({
   name: yup.string().required('Tên sản phẩm không được để trống'),
});

const CategoriesCreate = () => {
   const form = useForm({
      mode: 'onBlur',
      resolver: yupResolver(validate),
   });

   const { handleSubmit, control } = form;
   const [loading, setLoading] = useState(false);

   const handleSubmitForm = async (data) => {
      setLoading(true);
      try {
         const res = await categoriesService.create(data);
         setToastMessage(res.message);
      } catch (err) {
         console.log(err);
      }
      setLoading(false);
   };

   return (
      <Box>
         <Stack mb="1rem">
            <Box sx={{ arginBottom: '1.5rem', fontSize: '1.6rem', isplay: 'flex', lignItems: 'center' }}>
               Thêm danh mục
            </Box>
         </Stack>

         <Box p="1.5rem" borderRadius={2} bgcolor="var(--white)">
            <form onSubmit={handleSubmit(handleSubmitForm)}>
               <Box width="50%" mb={3}>
                  <FormGroup>
                     <FormLabel required title="Tên danh mục" name="name" gutterBottom />
                     <ControllerTextField id="outlined-basic" name="name" control={control} size="small" />
                  </FormGroup>
               </Box>

               <LoadingButton
                  type="submit"
                  loading={loading}
                  variant="contained"
                  loadingPosition="end"
                  endIcon={<SaveIcon />}
               >
                  <span>Thêm mới</span>
               </LoadingButton>
            </form>
         </Box>
      </Box>
   );
};

export default CategoriesCreate;
