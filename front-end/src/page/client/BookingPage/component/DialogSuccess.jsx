import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const DialogSuccess = ({ openDialog, setOpenDialog }) => {
    const handleClose = () => setOpenDialog(false);

    return (
        <div>
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'Xác nhận đặt bàn thành công!'}</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText id="alert-dialog-slide-description" sx={{ textAlign: 'center' }}>
                        <div>
                            
                        </div>
                    </DialogContentText> */}
                    <Box>
                        <Box>Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi. </Box>
                        <Box>Chúng tôi sẽ liên hệ lại với bạn để xác nhận</Box>
                        <Box>dịch vụ. Xin cảm ơn</Box>
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
