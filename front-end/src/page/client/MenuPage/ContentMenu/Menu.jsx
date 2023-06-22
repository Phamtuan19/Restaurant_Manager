import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { Box, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import { Search } from '~/component/Icons';
import productSeviver from '~/services/product.service';

function Categories({ search, setSearch, checked, setChecked }) {
   const [categories, setCategories] = useState([]);

   const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
      if (currentIndex === -1) {
         newChecked.push(value);
      } else {
         newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
   };

   useEffect(() => {
      const menuFilter = async () => {
         const res = await productSeviver.getMenuFilter();
         setCategories(res.categories);
      };
      menuFilter();
   }, []);

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
               onChange={(e) => setSearch(e.target.value)}
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
               <WrapTitle>
                  <Box sx={{ fontSize: '18px' }}>Categories</Box>
               </WrapTitle>

               <List sx={{ width: '100%', maxWidth: 360 }}>
                  {categories.map((value) => {
                     const labelId = `checkbox-list-label-${value.id}`;
                     return (
                        <ListItem key={v4()} disablePadding>
                           <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
                              <ListItemIcon>
                                 <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                 />
                              </ListItemIcon>
                              <ListItemText id={labelId} primary={value.name} />
                           </ListItemButton>
                        </ListItem>
                     );
                  })}
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

const WrapTitle = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   cursor: 'pointer',
   mb: 12,
});

export default Categories;
