import { Box, Grid, Typography } from '@mui/material';

import Product from './Product';
import { useContext } from 'react';
import { ContextData } from '..';
import { images } from '~/assets/image';

const trendingOrder = [
   {
      top: 'Top of the day',
      image: images.image5,
      name: 'Tôm Hùm',
      persons: '4 persons',
      price: 120,
   },
   {
      top: 'Top of the week',
      image: images.image5,
      name: 'Tôm Hùm',
      persons: '4 persons',
      price: 120,
   },
   {
      top: 'Top of the month',
      image: images.image5,
      name: 'Tôm Hùm',
      persons: '4 persons',
      price: 120,
   },
   {
      top: 'Top of the week',
      image: images.image5,
      name: 'Tôm Hùm',
      persons: '4 persons',
      price: 120,
   },
   {
      top: 'Top of the month',
      image: images.image5,
      name: 'Tôm Hùm',
      persons: '4 persons',
      price: 120,
   },
   {
      top: 'Top of the week',
      image: images.image5,
      name: 'Tôm Hùm',
      persons: '4 persons',
      price: 120,
   },
];

function TrendingOrders() {
   const { topProducts } = useContext(ContextData);

   return (
      <Box minHeight={500}>
         {/* <ComponentTitle title="Đơn hàng thịnh hành" sx={{ marginTop: '12px' }} /> */}

         <Typography component="h3" fontSize="calc(1.2978rem + .5736vw)" py="1.5rem">
            Đơn hàng thịnh hành
         </Typography>

         <Grid container spacing={2}>
            {(topProducts || trendingOrder).map((item, index) => {
               return (
                  <Grid item key={index} xs={12} sm={6} lg={4}>
                     <Product data={item} />
                  </Grid>
               );
            })}
         </Grid>
      </Box>
   );
}

export default TrendingOrders;
