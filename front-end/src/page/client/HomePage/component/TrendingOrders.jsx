import { Box, Grid, Typography } from '@mui/material';

import Product from './Product';
import { useContext, useEffect, useState } from 'react';
import productSeviver from '~/services/product.service';

function TrendingOrders() {
   const [productList, setProductList] = useState([]);

   useEffect(() => {
      (async () => {
         const res = await productSeviver.homeTrendingOrder();
         setProductList(res.data);
      })();
   }, []);

   return (
      <Box minHeight={500}>
         {/* <ComponentTitle title="Đơn hàng thịnh hành" sx={{ marginTop: '12px' }} /> */}

         <Typography component="h3" fontSize="calc(1.2978rem + .5736vw)" py="1.5rem">
            Đơn hàng thịnh hành
         </Typography>

         <Grid container spacing={2}>
            {(productList || []).map((item, index) => {
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
