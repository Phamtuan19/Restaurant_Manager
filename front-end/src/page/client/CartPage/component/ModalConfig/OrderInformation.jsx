/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Grid, MenuItem, Select, TextareaAutosize, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ControllerTextField from '~/component/customs/@mui/ControllerTextField';
import { formYup } from '../../utils/validation';
import { useCart } from '~/redux/SliceReducer/carts.reducer';
import ordersService from '~/services/orders.service';
import { listInput } from '../../utils';
import FormLabel from '~/component/customs/@mui/FormLabel';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import ControllerSelectCart from '../@mui/ControllerSelectCart';
import { ContextModalCart } from '.';
import proviceService from '../../utils/Provice.service';

const OrderInformation = () => {
   const [loading, setLoading] = useState(false);
   const [districts, setDistricts] = useState([]);
   const [wards, setWards] = useState([]);

   const form = formYup();
   const { handleSubmit, control, register, watch } = form;
   const valueDistrict = watch('district');
   const valueWard = watch('ward');

   const { setOpenDialog, listCart, setOpenModalOrder } = useContext(ContextModalCart);

   useEffect(() => {
      const fetchDistricts = async () => {
         const res = await proviceService.getDistricts();
         setDistricts(res);
      };

      fetchDistricts();
   }, []);

   useEffect(() => {
      const fetchWards = async () => {
         if (valueDistrict !== '') {
            const res = await proviceService.getWards(valueDistrict);
            setWards(res);
         }
      };

      fetchWards();
   }, [valueDistrict]);

   const onSubmit = async (data) => {
      const wardValue = wards.find((value) => value.code === data.ward);
      const districtsValue = districts.find((value) => value.code === Number(data.district));

      const dataOrder = { ...data, district: districtsValue.name, ward: wardValue.name, products: [...listCart] };

      setLoading(true);
      try {
         await ordersService.postOrderOnline(dataOrder);
         setLoading(false);
         setOpenModalOrder(false);
         setOpenDialog(true);
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   };

   return (
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
         <Typography variant="h4" component="h2" mb={2}>
            Form đặt hàng
         </Typography>
         <Grid container spacing={1}>
            {listInput?.map((item) => (
               <ExtendGrid item key={item.name} xs={item.xs} sm={item.sm}>
                  <FormLabel required title={item.label} name="columns" gutterBottom />
                  <ControllerTextField type={item.type} id="outlined-basic" name={item.name} control={control} />
               </ExtendGrid>
            ))}

            <ExtendGrid item xs={12} sm={12}>
               <FormLabel required title="Thành phố" name="province" />
               <Select fullWidth value="Hà Nội" {...register('province')}>
                  <MenuItem value="Hà Nội">Thành Phố Hà Nội</MenuItem>
               </Select>
            </ExtendGrid>
            <ExtendGrid item xs={12} sm={6}>
               <FormLabel required title="Quận/Huyện" name="district" />
               <ControllerSelectCart
                  name="district"
                  options={districts || []}
                  value={valueDistrict}
                  control={control}
               />
            </ExtendGrid>

            <ExtendGrid item xs={12} sm={6}>
               <FormLabel required title="Xã/Phường" name="ward" />
               <ControllerSelectCart name="ward" options={wards || []} value={valueWard} control={control} />
            </ExtendGrid>
            <ExtendGrid item xs={12}>
               <FormLabel required title="Ghi chú" name="note" />
               <StyledTextarea aria-label="minimum height" minRows={3} placeholder="Thêm ghi chú" name="note" />
            </ExtendGrid>
         </Grid>
         <Grid mt={1} textAlign="end">
            <LoadingButton
               type="submit"
               loading={loading}
               startIcon={loading && <SaveIcon />}
               variant="contained"
               sx={{ mt: 1, mr: 1 }}
            >
               Continue
            </LoadingButton>
            <Button sx={{ mt: 1, mr: 1 }} variant="contained" color="error" onClick={() => setOpenModalOrder(false)}>
               Close
            </Button>
         </Grid>
      </Box>
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

export default OrderInformation;
