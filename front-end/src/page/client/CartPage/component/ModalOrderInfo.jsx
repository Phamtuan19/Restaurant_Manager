/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Grid, MenuItem, Modal, Select, TextareaAutosize } from '@mui/material';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ControllerTextField from '~/component/customs/@mui/ControllerTextField';
import { listInput } from '../utils';
import { formYup } from '../utils/validation';
import FormLabel from '~/component/customs/@mui/FormLabel';
import ControllerSelect from '~/component/customs/@mui/ControllerSelect';
import province from '../utils/Provice.service';

const ModalOrderInfo = ({ open, handleClose }) => {
   const form = formYup();
   const { handleSubmit, control } = form;

   const { getDistricts, getWards } = province();

   useEffect(() => {
      (async () => {
         const resDistricts = await getDistricts();
         // const resWards = await getWards();
         console.log(resDistricts);
      })();
   }, []);

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
               <Grid container spacing={1}>
                  {listInput?.map((item) => (
                     <ExtendGrid item key={item.name} xs={item.xs} sm={item.sm}>
                        <FormLabel required title={item.label} name={item.name} gutterBottom />
                        <ControllerTextField type={item.type} id="outlined-basic" name={item.name} control={control} />
                     </ExtendGrid>
                  ))}

                  <ExtendGrid item xs={12} sm={12}>
                     <FormLabel required title="Thành phố" name="partySize" />
                     <Select fullWidth value="Hà Nội">
                        <MenuItem value="Hà Nội">Thành Phố Hà Nội</MenuItem>
                     </Select>
                  </ExtendGrid>
                  <ExtendGrid item xs={12} sm={6}>
                     <FormLabel required title="Quận/Huyện" name="partySize" />
                     <ControllerSelect id="outlined-basic" name="partySize" options={[]} control={control} />
                  </ExtendGrid>
                  <ExtendGrid item xs={12} sm={6}>
                     <FormLabel required title="Xã/Phường" name="partySize" />
                     <ControllerSelect id="outlined-basic" name="partySize" options={[]} control={control} />
                  </ExtendGrid>
                  <ExtendGrid item xs={12}>
                     <FormLabel required title="Ghi chú" name="note" />
                     <StyledTextarea aria-label="minimum height" minRows={3} placeholder="Thêm ghi chú" name="note" />
                  </ExtendGrid>
               </Grid>
               <Grid mt={1} mb={2} textAlign="end">
                  <Button type="submit" variant="contained" sx={{ mt: 1, mr: 1 }}>
                     Continue
                  </Button>
                  <Button sx={{ mt: 1, mr: 1 }} variant="contained" color="error">
                     Close
                  </Button>
               </Grid>
            </Box>
         </Box>
      </Modal>
   );
};

const ExtendGrid = styled(Grid)({
   mb: { xs: '6px', sm: 2 },
});

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
const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 600,
   bgcolor: 'background.paper',
   borderRadius: '1rem',
   boxShadow: 24,
   p: 4,
};

export default ModalOrderInfo;
