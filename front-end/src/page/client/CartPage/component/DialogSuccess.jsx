import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';
import { useCart } from '~/redux/SliceReducer/carts.reducer';

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="down" ref={ref} {...props} />;
});

const DialogSuccess = ({ openDialog, setOpenDialog }) => {
   const { clearCart } = useCart();
   
   const handleClose = () => {
      setOpenDialog(false);
      clearCart([]);
   };

   return (
      <div>
         <Dialog
            open={openDialog}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
         >
            <DialogTitle>{'Xác nhận đặt hàng thành công!'}</DialogTitle>
            <DialogContent>
               {/* <DialogContentText id="alert-dialog-slide-description" sx={{ textAlign: 'center' }}>
                        <div>
                            
                        </div>
                    </DialogContentText> */}
               <Box textAlign="center">
                  <Box>Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi. </Box>
                  <Box>Xin cảm ơn!</Box>
               </Box>
            </DialogContent>
            <DialogActions>
               <Button variant="contained" onClick={handleClose}>
                  OK
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
};

export default DialogSuccess;
