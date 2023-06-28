import { Box, styled } from '@mui/material';

import React, { createContext, useEffect, useState } from 'react';
import CoreTable from '~/component/customs/@mui/Table/CoreTable';
import productSeviver from '~/services/product.service';

const header = [
   { label: 'Hình Ảnh', name: 'image', w: 100, align: 'center' },
   { label: 'Tên sản phẩm', name: 'name', w: 150, align: 'center' },
   { label: 'Danh mục', name: 'categori_name', w: 120, align: 'center' },
   { label: 'Giá gốc', name: 'cost_capital', w: 100, align: 'center' },
   { label: 'Giá bán', name: 'price', w: 100, align: 'center' },
   { label: 'Giá km', name: 'price_sale', w: 100, align: 'center' },
   { label: 'Mô tả', name: 'description', w: 200, align: 'center' },
   { label: 'Người tạo', name: 'user_name', w: 100, align: 'center' },
   { label: 'Thời gian tạo', name: 'created_at', w: 140, align: 'center' },
   { label: 'Hành Động', name: '', w: 150, align: 'center' },
];

export const ContextModalMenu = createContext();

function ProductsList() {
   const [page, setPage] = useState(0);

   const [table, setTable] = useState({ header: header, body: [], isPagination: true });

   useEffect(() => {
      (async () => {
         const res = await productSeviver.adminProducts(page);
         console.log(res);
         setTable((tablePrev) => ({ ...tablePrev, body: res.products.data }));
      })();
   }, [page]);

   return (
      <>
         <Header>
            <Box sx={{ fontSize: '1.6rem' }}>Danh sách sản phẩm</Box>
         </Header>

         <Box>
            <CoreTable table={table} />
         </Box>
      </>
   );
}

const Header = styled('header')({
   marginBottom: '1.5rem',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
});

export default ProductsList;
