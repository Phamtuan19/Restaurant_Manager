/* eslint-disable react-hooks/exhaustive-deps */
import { Box, styled } from '@mui/material';
import { useRequest } from 'ahooks';
import moment from 'moment';

import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fomatMoney from '~/Helpers/fomatMoney';
import setToastMessage from '~/Helpers/toastMessage';
import CoreTable from '~/component/customs/@mui/Table/CoreTable';
import { CoreTableActionEdit, CoreTableActionView } from '~/component/customs/@mui/Table/component/CoreTableActions';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';
import productSeviver from '~/services/product.service';

export const ContextModalMenu = createContext();

function ProductList() {
   const [page, setPage] = useState(1);

   const navigate = useNavigate();

   const {
      data,
      run: getProductList,
      loading,
   } = useRequest(
      async () => {
         const res = await productSeviver.index(page);
         return res;
      },
      {
         manual: true,
         onError: (err) => {
            setToastMessage('Đã có lỗi xảy ra!', 'error');
         },
      },
   );

   useEffect(() => {
      getProductList(page);
   }, [page]);

   const columns = [
      {
         header: 'STT',
         cell: (_, index) => index + 1,
      },
      {
         header: 'Hình Ảnh',
         cell: (row) => (
            <Box width={50} height={50}>
               <ImageLazyLoading src={row.image} alt={row.name} />
            </Box>
         ),
      },
      {
         header: 'Tên sản phẩm',
         cell: (row) => row.name,
      },
      {
         header: 'Danh mục',
         cell: (row) => row.categoryId.name,
      },
      {
         header: 'Giá gốc',
         cell: (row) => fomatMoney(row.costCapital),
      },
      {
         header: 'Giá bán',
         cell: (row) => fomatMoney(row.price),
      },
      {
         header: 'Giá Km',
         cell: (row) => (row.priceSale ? fomatMoney(row.priceSale) : ''),
      },
      {
         header: 'Mô tả',
         cell: (row) => row.description,
      },
      {
         header: 'Người tạo',
         cell: (row) => row.userId.name,
      },
      {
         header: 'Thời gian tạo',
         cell: (row) => moment(row.createdAt).format('YYYY-MM-DD'),
      },
      {
         header: 'Thao tác',
         align: 'center',
         cell: (row) => (
            <Box>
               <CoreTableActionEdit callback={() => navigate(`/admin/products/${row.id}`)} />
               <CoreTableActionView />
            </Box>
         ),
      },
   ];

   return (
      <>
         <Header>
            <Box sx={{ fontSize: '1.6rem' }}>Danh sách sản phẩm</Box>
         </Header>

         <CoreTable
            columns={columns}
            data={data?.data || []}
            page={page}
            pageCount={data?.pageCount || 1}
            height={580}
            loading={loading}
            isPagination={true}
            setPage={setPage}
         />
      </>
   );
}

const Header = styled('header')({
   marginBottom: '1.5rem',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
});

export default ProductList;
