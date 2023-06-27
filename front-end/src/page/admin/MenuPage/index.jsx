import {
   Box,
   styled,
   Stack,
   Button,
   FormControl,
   Select,
   MenuItem,
   Menu,
   TableContainer,
   Paper,
   TableHead,
   Table,
   TableRow,
   TableCell,
   TableBody,
   TablePagination,
} from '@mui/material';
import { AddNew } from '~/component/Icons';

import React, { createContext, useEffect, useState } from 'react';
import productSeviver from '~/services/product.service';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import ModalConfig from './component/ModalConfig';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';
import moment from 'moment';

const CONTENTMODAL = {
   addProduct: 'addProduct',
   addCategory: 'addCategory',
   detailProduct: 'detailProduct',
};

const columns = [
   { id: 1, label: 'Stt', minWidth: 50, align: 'center' },
   { id: 2, label: 'Hình Ảnh', minWidth: 100, align: 'center' },
   { id: 3, label: 'Tên sản phẩm', minWidth: 150, align: 'center' },
   { id: 4, label: 'Giá gốc', minWidth: 100, align: 'center' },
   { id: 5, label: 'Giá bán', minWidth: 100, align: 'center' },
   { id: 6, label: 'Giá km', minWidth: 100, align: 'center' },
   { id: 7, label: 'Mô tả', minWidth: 200, align: 'center' },
   { id: 8, label: 'Người tạo', minWidth: 100, align: 'center' },
   { id: 9, label: 'Thời gian tạo', minWidth: 140, align: 'center' },
];

export const ContextModalMenu = createContext();

function ProductsList() {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);

   const [productList, setProductList] = useState([]);
   const [select, setSelect] = useState(10);
   const [openModal, setOpenModal] = useState(false);
   const [contentModal, setContentModal] = useState({ component: 'addProduct', data: null });

   const [reRender, setReRender] = useState(false);

   console.log(productList);

   useEffect(() => {
      (async () => {
         const res = await productSeviver.adminProducts();
         console.log(res);
         setProductList(res.products);
         setRowsPerPage(res.products.last_page);
         setPage(res.products.current_page);
      })();
   }, [reRender]);

   const handleOpenModal = (value, data = null) => {
      setOpenModal(true);
      setContentModal((prev) => ({ component: value, data }));
   };

   return (
      <ContextModalMenu.Provider value={{ setReRender }}>
         <Header>
            <Box sx={{ fontSize: '1.6rem' }}>Danh sách sản phẩm</Box>

            <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
               <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                     <>
                        <Button variant="contained" {...bindTrigger(popupState)}>
                           <AddNew width="16px" height="16px" fill="#fff" sx={{ marginRight: '6px' }} />
                           Thêm mới
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                           <MenuItem
                              onClick={() => {
                                 popupState.close();
                                 handleOpenModal(CONTENTMODAL.addProduct);
                              }}
                           >
                              <AddNew width="16px" height="16px" fill="#000" sx={{ marginRight: '6px' }} />
                              Thêm sản phẩm
                           </MenuItem>
                           <MenuItem
                              onClick={() => {
                                 popupState.close();
                                 handleOpenModal(CONTENTMODAL.addCategory);
                              }}
                           >
                              <AddNew width="16px" height="16px" fill="#000" sx={{ marginRight: '6px' }} />
                              Thêm danh mục
                           </MenuItem>
                        </Menu>
                     </>
                  )}
               </PopupState>

               <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <Select id="demo-select-small" value={select} onChange={(event) => setSelect(event.target.value)}>
                     <MenuItem value={10}>Ten</MenuItem>
                     <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
               </FormControl>
            </Stack>
         </Header>

         <Box>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
               <TableContainer sx={{ maxHeight: 500 }}>
                  <Table stickyHeader aria-label="sticky table">
                     <TableHead>
                        <TableRow>
                           {columns.map((column) => (
                              <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                 {column.label}
                              </TableCell>
                           ))}
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {productList.data ? (
                           productList.data.map((product, index) => {
                              return (
                                 <TableRow key={product.id}>
                                    <TableCell align="left">{index + 1}</TableCell>
                                    <TableCell align="left">
                                       <Box width={70} height={70}>
                                          <ImageLazyLoading src={product.image} alt={product.name} />
                                       </Box>
                                    </TableCell>
                                    <TableCell align="left">{product.name}</TableCell>
                                    <TableCell align="left">{product.cost_capital}</TableCell>
                                    <TableCell align="left">{product.price}</TableCell>
                                    <TableCell align="left">{product.price_sale}</TableCell>
                                    <TableCell align="left">{product.description}</TableCell>
                                    <TableCell align="left">{product.user_id}</TableCell>
                                    <TableCell align="left">
                                       {moment(product.updated_at).format('YYYY-MM-DD HH:mm:ss')}
                                    </TableCell>
                                 </TableRow>
                              );
                           })
                        ) : (
                           <TableRow>
                              <TableCell colSpan={9}>Không có sản phẩm</TableCell>
                           </TableRow>
                        )}
                     </TableBody>
                  </Table>
               </TableContainer>
               {productList.data && (
                  <TablePagination
                     component="div"
                     count={productList.data.length}
                     rowsPerPage={rowsPerPage}
                     page={page}
                  />
               )}
            </Paper>
         </Box>
         <ModalConfig openModal={openModal} setOpenModal={setOpenModal} contentModal={contentModal} />
      </ContextModalMenu.Provider>
   );
}

const Header = styled('header')({
   marginBottom: '1.5rem',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
});

export default ProductsList;
