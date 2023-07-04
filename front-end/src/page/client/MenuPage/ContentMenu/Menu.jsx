import React, { useEffect, useState } from 'react';
import { Box, FormControl, FormControlLabel, FormLabel, List, Radio, RadioGroup, styled } from '@mui/material';
import productSeviver from '~/services/product.service';
import { Link } from 'react-router-dom';

function Categories({ category, setCategory }) {
   const [listFilter, setListFilter] = useState([]);

   useEffect(() => {
      (async () => {
         const res = await productSeviver.menuCategories();
         setListFilter(res.data);
      })();
   }, []);

   return (
      <>
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
                        onChange={(e) => setCategory(e.target.value)}
                     >
                        <FormControlLabel value="" control={<Radio />} label="Tất cả" />
                        {(listFilter || []).map((item) => {
                           return (
                              <FormControlLabel key={item._id} value={item._id} control={<Radio />} label={item.name}  />
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

const ExtendFormLabel = styled(FormLabel)(({ theme }) => ({
   marginBottom: '12px',
   paddingBottom: '6px',
   borderBottom: '2px solid rgb(0 0 0 / 10%)',
   fontSize: '18px',
}));

export default React.memo(Categories);
