import { useEffect, useState } from 'react';
import { Box, Grid, styled } from '@mui/material';
import { Link } from 'react-router-dom';

import ComponentTitle from './ComponentTitle';
import { Alacarteroom, Both, Buffe, CategoryIcon, Room, Ship, VipRoom } from '~/component/Icons';
import Product from '~/component/client/Product';
import productSeviver from '~/services/product.service';

const catetoryList = [
   {
      image: Room,
      name: 'Đặt Alacarte',
      path: '/dat-ban',
   },
   {
      image: VipRoom,
      name: 'Đặt phòng vip',
      path: '/dat-phong-vip',
   },
   {
      image: Alacarteroom,
      name: 'Đặt tiệc',
      path: '/dat-tiec',
   },

   {
      image: Buffe,
      name: 'Buffe',
      path: '/dat-ban',
   },
   {
      image: Both,
      name: 'Cặp đôi',
      path: '/dat-ban',
   },
   {
      image: Ship,
      name: 'Đặt Ship',
      path: '/dat-ban',
   },
];

function Categories() {

   const [productList, setProductList] = useState([]);

   useEffect(() => {
      (async () => {
         const res = await productSeviver.homeProductCategories();
         console.log(res)
         setProductList(res.data);
      })();
   }, []);

   return (
      <Box minHeight={500}>
         <ComponentTitle title="Danh Mục" titleRoute="View Title" />
         <Grid container spacing={2} mb={3}>
            {catetoryList.map((item, index) => {
               const Svg = item.image;
               return (
                  <Grid item lg={2} key={index}>
                     <WarpBoxItem>
                        <Wrap>
                           <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                              <Box width={100} pb="50%" position="relative" overflow="hidden">
                                 <Box position="absolute" top={0} left={0} width="100%" height="100%">
                                    <Svg
                                       width="100%"
                                       height="100%"
                                       sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                 </Box>
                              </Box>
                           </Box>

                           <CategoriesName className="Category_Item_Title">
                              <Name>{item.name}</Name>
                           </CategoriesName>
                           <CategoryItemIcon to="/menu">
                              <CategoryIcon />
                           </CategoryItemIcon>
                        </Wrap>
                     </WarpBoxItem>
                  </Grid>
               );
            })}
         </Grid>

         {/* Product Item Menu */}
         <Grid container spacing={2}>
            {(productList || []).map((item, index) => {
               return (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                     <Product data={item} turn={true} />
                  </Grid>
               );
            })}
         </Grid>
      </Box>
   );
}

const WarpBoxItem = styled(Box)({
   backgroundColor: 'rgba(255, 255, 255,0.5)',
   borderRadius: '1rem',
   border: '1px solid #fff !important',
   paddingTop: 12,

   '&:hover': {
      backgroundColor: 'rgba(255, 255, 255,0.9) !important',
   },
});

const Wrap = styled('div')({
   width: '100%',
   overflow: 'hidden',
   cursor: 'pointer',

   '&:hover': {
      '.Category_Item_Title': {
         '&:before': {
            width: '50%',
         },
      },
   },
});

const Name = styled(Box)({
   padding: '0 12px 12px',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   whiteSpace: 'nowrap',
   fontWeight: 'bolder',
   textTransform: 'capitalize',
   textAlign: 'center',
});

const CategoriesName = styled(Box)({
   position: 'relative',

   '&:before': {
      content: '""',
      borderBottom: '1px solid #ea6a12',
      width: '32px',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      margin: '0 auto',
      textAlign: 'center',
      transition: 'all .4s ease',
   },
});

const CategoryItemIcon = styled(Link)({
   padding: '1.5rem',
   display: 'flex',
   justifyContent: 'center',

   '&:hover': {
      svg: {
         rect: {
            fill: 'rgb(230, 10, 10, .5)',
            transition: 'all 0.5s',
         },
      },
   },
});

export default Categories;
