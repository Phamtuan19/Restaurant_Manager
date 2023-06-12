import { Box, Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { memo, useContext, useState } from 'react';
import { contextModal } from '../../..';
import { LoadingButton } from '@mui/lab';
import ordersService from '~/services/orders.service';
import setToastMessage from '~/Helpers/toastMessage';
import { ContextModalChild } from '..';

function FooterModal({ handleClickOpenMenu }) {
    const { tableId, tableStatus } = useContext(contextModal);
    const [loadingButton, setLoaidngButton] = useState(false);
    const [open, setOpen] = useState(false);

    const { setOpenChild } = useContext(ContextModalChild);
    const { setOpenModal, setRenderTables } = useContext(contextModal);

    const handleClickPay = async (tableId) => {
        setLoaidngButton(true);
        const res = await ordersService.postOrderPay(tableId);
        if (res.status === 200) {
            console.log(res);
            setToastMessage(res.message, 'success');
            setOpenChild({ isOpen: false, component: '' });
            setOpenModal(false);
            setRenderTables(true);
        } else {
            setLoaidngButton(false);
        }
    };

    return (
        <>
            <Button
                disabled={tableStatus === 1 ? true : false}
                sx={{ width: '100%' }}
                variant="contained"
                onClick={() => setOpen(true)}
            >
                Thanh toán
            </Button>
            <Button disabled={true} variant="contained" color="error" onClick={() => handleClickOpenMenu('merge')}>
                Gộp hóa đơn
            </Button>
            <Button
                disabled={tableStatus === 1 ? true : false}
                variant="contained"
                color="secondary"
                onClick={() => handleClickOpenMenu('move')}
            >
                Chuyển bàn
            </Button>
            <Button variant="contained" color="info" onClick={() => handleClickOpenMenu('menu')}>
                Thêm móm
            </Button>

            <Dialog open={open} aria-labelledby="draggable-dialog-title">
                <DialogContent sx={{ textAlign: 'center' }}>
                    <Box>
                        <h3>Xác nhận thanh toán!</h3>
                        <Box mt={1}>Đảm bảo đã nhận đủ số tiền trước khi xác nhận.</Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <LoadingButton loading={loadingButton} variant="contained" onClick={() => handleClickPay(tableId)}>
                        Thanh toán
                    </LoadingButton>
                    <Button onClick={() => setOpen(false)} disabled={loadingButton} variant="contained" color="error">
                        Hủy
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default memo(FooterModal);
