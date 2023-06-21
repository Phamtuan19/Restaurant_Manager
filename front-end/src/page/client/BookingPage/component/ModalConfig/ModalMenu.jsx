import {
   Box,
   Button,
   CircularProgress,
   FormControl,
   Grid,
   InputAdornment,
   MenuItem,
   OutlinedInput,
   Pagination,
   Select,
   Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Search } from '@mui/icons-material';

import ProductSkeleton from '~/component/customs/ProductSkeleton';
import bookingService from '~/services/booking.service';
import { useBooking } from '~/redux/SliceReducer/booking.reducer';
import ProductMenu from '../ProductMenu';
import ProductModal from '../ProductModal';

const listLoadingProducts = [1, 2, 3, 4, 5, 6, 7, 8];

const ModalMenu = ({ handleCloseModal, handleNext, handleBack }) => {
   const [products, setProducts] = useState([]);
   const [selectValue, setSelectValue] = useState('0');
   const [loadingSearch, setLoadingSearch] = useState(false);

   const { products: listProductModal, actionDeleteCartItem, actionSetQuantityItem } = useBooking();

   useEffect(() => {
      (async () => {
         const res = await bookingService.getMenuBooking();
         setProducts(res.products);
      })();
   }, [selectValue]);

   return (
      <Box display="flex" width="95%" mx="auto">
         <StyleMenu width="35%">
            <Box display="flex" justifyContent="space-between" alignItems="center" py={2} px={2}>
               <Typography variant="h5" component="h2">
                  Sản phẩm đã chọn
               </Typography>
            </Box>
            <ScrollableBox flex={1}>
               <Grid container spacing={2} sx={{ px: 2 }}>
                  {listProductModal.length > 0 &&
                     listProductModal.map((item) => (
                        <Grid item xs={12} key={item.id}>
                           <ProductModal
                              data={item}
                              actionDeleteCartItem={actionDeleteCartItem}
                              actionSetQuantityItem={actionSetQuantityItem}
                           />
                        </Grid>
                     ))}
               </Grid>
            </ScrollableBox>
            <Box p={2} display="flex" justifyContent="space-between">
               <Button sx={{ mt: 1, mr: 1 }} variant="contained" color="error" onClick={handleCloseModal}>
                  Close
               </Button>
               <Box>
                  <Button variant="contained" sx={{ mt: 1, mr: 1 }} onClick={handleNext}>
                     Continue
                  </Button>
                  <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                     Back
                  </Button>
               </Box>
            </Box>
         </StyleMenu>
         <StyleMenu width="65%">
            <Box display="flex" justifyContent="space-between" alignItems="center" py={1} px={2} bgcolor="#fff">
               <Typography variant="h5" component="h2">
                  Danh sách sản phẩm
               </Typography>

               <BoxSearch>
                  <FormControl sx={{ m: 1 }} variant="outlined" size="small">
                     <OutlinedInput
                        endAdornment={
                           <InputAdornment position="end">
                              {loadingSearch ? (
                                 <CircularProgress size={10} thickness={4} color="inherit" />
                              ) : (
                                 <Search />
                              )}
                           </InputAdornment>
                        }
                     />
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                     <Select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                        <MenuItem value="0">Tất cả</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                     </Select>
                  </FormControl>
               </BoxSearch>
            </Box>
            <ScrollableBox flex={1}>
               <Grid container spacing={2}>
                  {products.length > 0
                     ? products.map((item, index) => (
                          <Grid key={index} item xs={3} md={3}>
                             <ProductMenu data={item} />
                          </Grid>
                       ))
                     : listLoadingProducts.map((item) => (
                          <Grid item key={item} xs={3} md={3}>
                             <ProductSkeleton />
                          </Grid>
                       ))}
               </Grid>
            </ScrollableBox>
            <Box padding={2} display="flex" justifyContent="flex-end">
               <Pagination count={10} color="primary" />
            </Box>
         </StyleMenu>
      </Box>
   );
};

const StyleMenu = styled(Box)(() => {
   return {
      marginLeft: '6px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      height: '93vh',
      borderRadius: '15px',
      backgroundColor: '#F8F8F8',
   };
});

const BoxSearch = styled(Box)({
   display: 'flex',
   alignItems: 'center',
});

const ScrollableBox = styled(Box)(() => {
   return {
      padding: '12px',
      overflow: 'auto',
      scrollbarWidth: 'thin',
      '&::-webkit-scrollbar': {
         width: '0',
      },
   };
});

export default ModalMenu;
