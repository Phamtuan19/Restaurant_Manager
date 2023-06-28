import { useEffect, useState } from 'react';
import { Box, FormControl, FormControlLabel, FormLabel, List, Radio, RadioGroup, styled } from '@mui/material';
import { Search } from '~/component/Icons';
import productSeviver from '~/services/product.service';

function Categories({ search, setSearch, category, setCategory }) {
   const [listFilter, setListFilter] = useState([]);

   useEffect(() => {
      (async () => {
         const res = await productSeviver.getMenuFilter();
         setListFilter(res.categories);
      })();
   }, []);

   const handleChangeRadioCategories = (e) => {
      setCategory(e.target.value);
   };

   return (
      <>
         <Box sx={{ position: 'relative' }}>
            <Search
               width="18px"
               sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '15px',
                  transform: 'translateY(-50%)',
               }}
            />
            <InputCategories
               value={search}
               onChange={(e) => setSearch(e.target.value.trim())}
               placeholder="Nhập sản phẩm tìm kiếm ... "
            />
         </Box>
         <Box
            sx={{
               mt: 3,
               padding: '1.5rem',
               backgroundColor: 'rgba(255, 255, 255, 0.4)',
               border: '2px solid #fff',
               borderRadius: '1rem',
            }}
         >
            <Box>
               <List sx={{ width: '100%', maxWidth: 360 }}>
                  <FormControl fullWidth>
                     <ExtendFormLabel id="demo-radio-buttons-group-label">Danh mục sản phẩm</ExtendFormLabel>
                     <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        value={category}
                        onChange={(e) => handleChangeRadioCategories(e)}
                     >
                        <FormControlLabel value="" control={<Radio />} label="Tất cả" />
                        {(listFilter || []).map((item) => {
                           return (
                              <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.name} />
                           );
                        })}
                     </RadioGroup>
                  </FormControl>
               </List>
            </Box>
         </Box>
      </>
   );
}

const InputCategories = styled('input')({
   width: '100%',
   padding: '0.4rem 1rem 0.4rem 3rem',
   fontSize: '1rem',
   lineHeight: '2.25',
   backgroundColor: '#fff',
   borderRadius: '1rem',
   border: '1px solid #e3e1e1',
});

const ExtendFormLabel = styled(FormLabel)(({ theme }) => ({
   marginBottom: '12px',
   paddingBottom: '6px',
   borderBottom: '2px solid rgb(0 0 0 / 10%)',
   fontSize: '18px',
}));

export default Categories;
