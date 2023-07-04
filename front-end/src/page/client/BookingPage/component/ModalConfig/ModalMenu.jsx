/* eslint-disable react-hooks/exhaustive-deps */
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
   PaginationItem,
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
import { Link } from 'react-router-dom';
import useDebounce from '~/hooks/useDebounce';
import productSeviver from '~/services/product.service';
import categoriesService from '~/services/categories.service';

const listLoadingProducts = [1, 2, 3, 4, 5, 6, 7, 8];

const ModalMenu = ({ handleCloseModal, handleNext, handleBack }) => {
   const [data, setData] = useState({});
   const [categories, setCategories] = useState([]);
   const [search, setSearch] = useState('');
   const [category, setCategory] = useState(0);
   const [loadingSearch, setLoadingSearch] = useState(false);
   const [page, setPage] = useState(1);

   const searchDebounce = useDebounce(search, 500);

   const { products: listProductModal } = useBooking();

   useEffect(() => {
      (async () => {
         const res = await categoriesService.bookingCategories();
         setCategories(res);
      })();
   }, []);

   useEffect(() => {
      if (search.trim().length > 0) setLoadingSearch(true);
      (async () => {
         const res = await productSeviver.bookingProducts(page, category, searchDebounce);
         setData(res);
         setLoadingSearch(false);
      })();
   }, [page, category, searchDebounce]);

   return (
      <Box display="flex" width="95%" mx="auto">
         <StyleMenu flex={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" py={2} px={2}>
               <Typography variant="h5" component="h2">
                  Sản phẩm đã chọn
               </Typography>
            </Box>
            <ScrollableBox flex={1}>
               <Grid container spacing={2} sx={{ px: 2 }}>
                  {listProductModal.length > 0 &&
                     listProductModal.map((item, index) => (
                        <Grid item xs={12} key={index}>
                           <ProductModal data={item} />
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
         <StyleMenu flex={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center" py={1} px={2} bgcolor="#fff">
               <Typography variant="h5" component="h2">
                  Danh sách sản phẩm
               </Typography>

               <BoxSearch>
                  <FormControl sx={{ m: 1 }} variant="outlined" size="small">
                     <OutlinedInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
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
                     <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <MenuItem value="0">Tất cả</MenuItem>
                        {categories?.map((item, index) => (
                           <MenuItem key={index} value={item._id}>
                              {item.name}
                           </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
               </BoxSearch>
            </Box>
            <ScrollableBox flex={1}>
               <Grid container spacing={2}>
                  {data?.data
                     ? data?.data.map((item, index) => (
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
               <Pagination
                  page={page}
                  count={data?.pageCount || 1}
                  onChange={(event, value) => setPage(value)}
                  renderItem={(item) => <PaginationItem component={Link} to={`?page=${item.page}`} {...item} />}
               />
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
