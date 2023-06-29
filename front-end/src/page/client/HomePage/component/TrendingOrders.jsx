import { Box, Grid, Typography } from '@mui/material';

import Product from './Product';
import { useContext } from 'react';
import { ContextData } from '..';

function TrendingOrders() {
   const { topProducts } = useContext(ContextData);

   return (
      <Box minHeight={500}>
         {/* <ComponentTitle title="Đơn hàng thịnh hành" sx={{ marginTop: '12px' }} /> */}

         <Typography component="h3" fontSize="calc(1.2978rem + .5736vw)" py="1.5rem">
            Đơn hàng thịnh hành
         </Typography>

         <Grid container spacing={2}>
            {(topProducts || []).map((item, index) => {
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
