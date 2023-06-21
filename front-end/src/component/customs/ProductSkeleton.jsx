import React from 'react';
import { Box, Stack, Rating } from '@mui/material';
import { Skeleton } from '@mui/material';

const ProductSkeleton = () => {
   return (
      <Box sx={{ position: 'relative', cursor: 'pointer', marginTop: { md: '85px', xs: '100px' } }}>
         <Box sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Box
               sx={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 0.3125rem 0.3125rem 0 rgba(82,63,105,.05)',
               }}
            >
               {/* Skeleton for image */}
               <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  animation="wave"
                  sx={{ backgroundColor: '#E0E0E0' }}
               />
            </Box>
         </Box>
         <Box paddingTop="85px">
            <Box sx={{ marginTop: '.5rem' }}>
               {/* Skeleton for product name */}
               <Skeleton
                  variant="text"
                  width="60%"
                  height="1rem"
                  animation="wave"
                  sx={{ backgroundColor: '#E0E0E0' }}
               />
            </Box>
            <Stack spacing={1} sx={{ padding: '12px 0' }}>
               {/* Skeleton for rating */}
               <Skeleton
                  variant="text"
                  width="50%"
                  height="1rem"
                  animation="wave"
                  sx={{ backgroundColor: '#E0E0E0' }}
               />
            </Stack>
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
               }}
            >
               <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '0 24px' }}>
                  {/* Skeleton for price */}
                  <Skeleton
                     variant="text"
                     width="80px"
                     height="1rem"
                     animation="wave"
                     sx={{ backgroundColor: '#E0E0E0' }}
                  />
                  {/* Skeleton for price sale */}
                  <Skeleton
                     variant="text"
                     width="80px"
                     height="1rem"
                     animation="wave"
                     sx={{ backgroundColor: '#E0E0E0' }}
                  />
               </Box>
               <Box>
                  {/* Skeleton for add to cart icon */}
                  <Skeleton
                     variant="circular"
                     width="30px"
                     height="30px"
                     animation="wave"
                     sx={{ backgroundColor: '#E0E0E0' }}
                  />
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default ProductSkeleton;
