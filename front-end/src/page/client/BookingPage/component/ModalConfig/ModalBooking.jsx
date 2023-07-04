import { Box, Button, Grid, TextareaAutosize, Typography, styled } from '@mui/material';
import React from 'react';
import { formYup } from '../../utils/validation';
import { listInput } from '../../utils';
import FormLabel from '~/component/customs/@mui/input/FormLabel';
import ControllerTextField from '~/component/customs/@mui/input/ControllerTextField';

const ModalBooking = ({ handleCloseModal, onSubmit, dataTable }) => {
   const form = formYup();
   const { handleSubmit, control } = form;

   return (
      <Box p={2} mx="auto" width={600} maxWidth="50%" bgcolor="#fff" borderRadius="15px">
         <Typography id="modal-modal-title" variant="h5" component="h2" mb={2}>
            Điền thông tin
         </Typography>
         <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
               {listInput?.map((item) => (
                  <ExtendGrid item key={item.name} xs={item.xs} sm={item.sm}>
                     <FormLabel required title={item.label} name={item.name} gutterBottom />
                     <ControllerTextField type={item.type} id="outlined-basic" name={item.name} control={control} />
                  </ExtendGrid>
               ))}

               <ExtendGrid item xs={12} sm={4}>
                  <FormLabel required title="Số khách" name="partySize" gutterBottom />
                  <ControllerTextField name="partySize" defaultValue={dataTable.totalUser} control={control} />
               </ExtendGrid>
               <ExtendGrid item xs={12}>
                  <FormLabel required title="Ghi chú" name="note" gutterBottom />
                  <StyledTextarea aria-label="minimum height" minRows={3} placeholder="Thêm ghi chú" name="note" />
               </ExtendGrid>
            </Grid>
            <Grid mt={1} mb={2} textAlign="end">
               <Button type="submit" variant="contained" sx={{ mt: 1, mr: 1 }}>
                  Continue
               </Button>
               <Button sx={{ mt: 1, mr: 1 }} variant="contained" color="error" onClick={handleCloseModal}>
                  Close
               </Button>
            </Grid>
         </Box>
      </Box>
   );
};

const StyledTextarea = styled(TextareaAutosize)(
   ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    &:focus-visible {
      outline: 0;
    }
  `,
);

const ExtendGrid = styled(Grid)({
   mb: { xs: '6px', sm: 2 },
});

export default ModalBooking;
