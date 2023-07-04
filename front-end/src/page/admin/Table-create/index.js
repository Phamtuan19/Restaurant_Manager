import { Box, Grid, Stack, TextField, styled } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import React, { useEffect, useState } from 'react';

import ControllerTextField from '~/component/customs/@mui/input/ControllerTextField';
import FormLabel from '~/component/customs/@mui/input/FormLabel';
import { images } from '~/assets/image';
import { formYup } from './utils';
import tableService from '~/services/tables.service';
import setToastMessage from '~/Helpers/toastMessage';

const TableCreate = () => {
   const [imgUpload, setImgUpload] = useState(null);
   const [loading, setLoading] = useState(false);

   const from = formYup();
   const { handleSubmit, control, reset, watch } = from;

   const imageUrl = watch('image');

   useEffect(() => {
      setImgUpload(imageUrl);
   }, [imageUrl]);

   const handleSubmitForm = async (data) => {
      console.log(data);
      try {
         const res = await tableService.create(data);
         setToastMessage(res.message);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Box>
         <Stack mb="1rem">
            <Box sx={{ arginBottom: '1.5rem', fontSize: '1.6rem', isplay: 'flex', lignItems: 'center' }}>Thêm bàn</Box>
         </Stack>

         <Box sx={{ padding: '1.5rem', backgroundColor: 'var(--white)', borderRadius: '10px' }}>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
               <Grid container spacing={2} sx={{ flexWrap: 'nowrap', mb: 2 }}>
                  <Grid item lg={12}>
                     <Grid container spacing={4}>
                        <Grid item lg={6}>
                           <FormLabel required name="floorId" title="Tầng đặt bàn" gutterBottom />
                           <ControllerTextField id="outlined-basic" name="floorId" control={control} />
                        </Grid>
                        <Grid item lg={6}>
                           <FormLabel required name="areaId" title="Khu vực đặt bàn" gutterBottom />
                           <ControllerTextField id="outlined-basic" name="areaId" control={control} />
                        </Grid>
                        <Grid item lg={6}>
                           <FormLabel required name="index" title="Vị trí đặt bàn" gutterBottom />
                           <ControllerTextField id="outlined-basic" name="index" control={control} />
                        </Grid>
                        <Grid item lg={6}>
                           <FormLabel required name="totalUser" title="Sức chứa" gutterBottom />
                           <ControllerTextField id="outlined-basic" name="totalUser" control={control} />
                        </Grid>

                        <Grid item lg={12}>
                           <FormLabel required name="description" title="Mô tả bàn" gutterBottom />
                           <StyledTextarea
                              aria-label="minimum height"
                              minRows={7}
                              placeholder="Minimum 3 rows"
                              name="description"
                           />
                        </Grid>
                     </Grid>
                  </Grid>
               </Grid>

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

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => {
   return {
      width: '100%',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      padding: '12px',
      borderRadius: '12px 12px 0 12px',
      '&:focusVisible': {
         outline: 0,
      },
   };
});

const LabelCustom = styled('label')({
   marginBottom: '.5rem',
   display: 'inline-block',
   fontSize: '1rem',
   fontWeight: 400,
   lineHeight: 1.5,
   color: '#212529',
   textAlign: 'left',
   fontFamily: '"Roboto Slab",serif',
});

export default TableCreate;
