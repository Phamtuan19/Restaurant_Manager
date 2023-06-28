import styled from '@emotion/styled';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import fomatMoney from '~/Helpers/fomatMoney';
import { Delete } from '~/component/Icons';
import ImageLazyLoading from '~/component/customs/ImageLazyLoading';
import { useCart } from '~/redux/SliceReducer/carts.reducer';

const TableProducts = ({ handleClickDown }) => {
   const { listCart, handleUp, actionDeleteCartItem } = useCart();

   if (listCart.length > 0) {
      return (
         <Paper sx={{ bgcolor: 'rgb(255 255 255 / 50%)', border: '1px solid #fff', width: '100%', boxShadow: '0' }}>
            <TableContainer sx={{ maxHeight: 470, '&::-webkit-scrollbar': { width: 0 } }}>
               <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                     <TableRow>
                        <TableCell>STT</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="left">Tên sản phẩm</TableCell>
                        <TableCell align="center">Giá</TableCell>
                        <TableCell align="center">Số lượng</TableCell>
                        <TableCell align="center">Thành tiền</TableCell>
                        <TableCell align="right"></TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {listCart.map((item, index) => (
                        <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                           <TableCell component="th" scope="row">
                              {index + 1}
                           </TableCell>
                           <TableCell align="center">
                              <Box width={50} height={50}>
                                 <ImageLazyLoading src={item.image} alt={item.name} />
                              </Box>
                           </TableCell>
                           <TableCell align="left" sx={styleName}>
                              {item.name}
                           </TableCell>
                           <TableCell align="center">{fomatMoney(item.price_sale || item.price)}</TableCell>
                           <TableCell align="center">
                              <Box display="flex" alignItems="center" justifyContent="center">
                                 <ButtonCustomQuantity
                                    variant="outlined"
                                    onClick={() => handleClickDown(item.quantity, item.id)}
                                 >
                                    -
                                 </ButtonCustomQuantity>
                                 <Box sx={styleQuantity}>{item.quantity}</Box>
                                 <ButtonCustomQuantity variant="outlined" onClick={() => handleUp({ id: item.id })}>
                                    +
                                 </ButtonCustomQuantity>
                              </Box>
                           </TableCell>
                           <TableCell align="center">
                              {fomatMoney(item.quantity * (item.price_sale || item.price))}
                           </TableCell>
                           <TableCell align="right" sx={{ cursor: 'pointer' }}>
                              <Box onClick={() => actionDeleteCartItem({ id: item.id })}>
                                 <Delete />
                              </Box>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Paper>
      );
   }
};

const ButtonCustomQuantity = styled(Box)({
   border: '1px solid rgba(0,0,0,.09)',
   backgroundColor: '#FFF !important',
   outline: 'none',
   cursor: 'pointer',
   lineHeight: 1,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: 32,
   height: 32,
   borderRadius: '5px',
});

const styleName = {
   maxWidth: 150,
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   whiteSpace: 'nowrap',
   fontWeight: 'bolder',
   textTransform: 'capitalize',
};

const styleQuantity = {
   width: 32,
   height: 32,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
};

export default TableProducts;
