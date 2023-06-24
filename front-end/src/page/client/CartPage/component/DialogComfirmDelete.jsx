import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useCart } from '~/redux/SliceReducer/carts.reducer';

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="down" ref={ref} {...props} />;
});

const DialogComfirmDelete = ({ productId, openDialogComfirm, setOpenDialogComfirm }) => {
   const { actionDeleteCartItem } = useCart();
   const handleClose = () => setOpenDialogComfirm(false);

   const handleCloseDelete = () => {
      actionDeleteCartItem({ id: productId });
      setOpenDialogComfirm(false);
   };

   if (productId !== '') {
      return (
         <div>
            <Dialog
               open={openDialogComfirm}
               TransitionComponent={Transition}
               keepMounted
               aria-describedby="alert-dialog-slide-description"
            >
               <DialogTitle color="error">{'Bạn chắc chắn muốn bỏ sản phẩm này?'}</DialogTitle>
               <DialogContent sx={{ height: 30 }}></DialogContent>
               <DialogActions>
                  <Button variant="contained" sx={{ width: '50%' }} onClick={handleCloseDelete}>
                     Confirm
                  </Button>
                  <Button variant="contained" sx={{ width: '50%' }} onClick={handleClose} color="error">
                     Close
                  </Button>
               </DialogActions>
            </Dialog>
         </div>
      );
   }
};

export default DialogComfirmDelete;
