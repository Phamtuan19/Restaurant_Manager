import styled from '@emotion/styled';
import {
   Box,
   Button,
   Collapse,
   IconButton,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
   Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';

import React, { useEffect, useState } from 'react';
import { useBooking } from '~/redux/SliceReducer/booking.reducer';
import ProductModal from '../ProductModal';
import bookingService from '~/services/booking.service';
import { useConfirm } from '~/component/customs/@mui/CoreConfirmProvider';

const ModalConfirm = ({ handleCloseModal, handleNext, handleBack }) => {
   const { user, products } = useBooking();
   const [infoBooking, setInfoBooking] = useState([]);
   const [open, setOpen] = useState(false);
   const [loading, setLoading] = useState(false);

   const confirm = useConfirm();

   useEffect(() => {
      setInfoBooking([
         {
            title: 'Người đặt:',
            value: user.name,
         },
         {
            title: 'Số điện thoại:',
            value: user.phone,
         },
         {
            title: 'Vị trí bàn:',
            value: 'Bàn số: ' + user.index,
         },
         {
            title: 'Thời gian:',
            value: user.date + ' ' + user.time,
         },
         {
            title: 'Số người:',
            value: user.partySize,
         },
         {
            title: 'Ghi chú:',
            value: user.note,
         },
      ]);
   }, [user]);

   const handleBookingTable = async () => {
      const data = { ...user, products: [...products] };
      try {
         setLoading(true);
         // await bookingService.postCreateBooking(data);
         setLoading(false);
         handleNext();
         confirm({
            title: 'Thông báo đặt hàng thành công',
            content: 'Đơn hàng của bạn đã được xác nhận',
            btnLoading: false,
         });
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   };

   return (
      <Box display="flex" justifyContent="center" width="95%" mx="auto">
         <Box display="flex" flexDirection="column" width={600} height={600} bgcolor="#FFF" borderRadius="15px">
            <Box px={2} mt={2}>
               <Typography variant="h5" component="h2">
                  Xác nhận thông tin
               </Typography>
            </Box>
            <ScrollableBox flex={1}>
               <TableContainer component={Paper}>
                  <Table sx={{ maxWidth: 600 }} aria-label="caption table">
                     <TableBody>
                        {(infoBooking || []).map((row, index) => (
                           <TableRow key={index}>
                              <TableCell component="th" scope="row">
                                 {row.title}
                              </TableCell>
                              <TableCell align="right" width="70%">
                                 {row.value}
                              </TableCell>
                           </TableRow>
                        ))}

                        <TableRow>
                           <TableCell component="th" scope="row">
                              <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                 {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                              </IconButton>
                           </TableCell>

                           <TableCell align="right" width="70%">
                              Danh sách sản phẩm
                           </TableCell>
                        </TableRow>
                        <TableRow>
                           <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                              <Collapse in={open} timeout="auto" unmountOnExit>
                                 <Box sx={{ margin: 1 }}>
                                    <Table size="small" aria-label="purchases">
                                       <TableBody>
                                          {products.map((product) => (
                                             <TableRow key={product._id}>
                                                <TableCell component="th" scope="row" rowSpan={1}>
                                                   <ProductModal data={product} />
                                                </TableCell>
                                             </TableRow>
                                          ))}
                                       </TableBody>
                                    </Table>
                                 </Box>
                              </Collapse>
                           </TableCell>
                        </TableRow>
                     </TableBody>
                  </Table>
               </TableContainer>
            </ScrollableBox>
            <Box sx={{ mx: 2, mb: 2, display: 'flex', justifyContent: 'space-between' }}>
               <Button
                  sx={{ mt: 1, mr: 1 }}
                  disabled={loading}
                  variant="contained"
                  color="error"
                  onClick={handleCloseModal}
               >
                  Close
               </Button>

               <Box>
                  <LoadingButton
                     loading={loading}
                     startIcon={<SaveIcon />}
                     variant="contained"
                     sx={{ mt: 1, mr: 1 }}
                     onClick={handleBookingTable}
                  >
                     Booking
                  </LoadingButton>
                  <Button disabled={loading} sx={{ mt: 1, mr: 1 }} onClick={handleBack}>
                     Back
                  </Button>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

const ScrollableBox = styled(Box)(() => {
   return {
      padding: '12px',
      overflow: 'auto',
      scrollbarWidth: 'thin',
      '&::-webkit-scrollbar': {
         width: '0',
      },
   };
});

export default ModalConfirm;
