import { Button } from '@mui/material';
import { memo } from 'react';

function FooterModal({ status, handleClickOpenMenu, orders }) {
    if (status === 3) {
        return (
            <>
                <Button sx={{ width: '100%' }} variant="contained">
                    Thanh toán
                </Button>
                <Button variant="contained" color="error" onClick={() => handleClickOpenMenu('merge')}>
                    Gộp hóa đơn
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleClickOpenMenu('move')}>
                    Chuyển bàn
                </Button>
                <Button variant="contained" color="info" onClick={() => handleClickOpenMenu('menu')}>
                    Thêm móm
                </Button>
            </>
        );
    } else if (status === 1) {
        return (
            <>
                <Button sx={{ width: '49%' }} variant="contained" disabled={orders.length > 0 ? false : true}>
                    Order
                </Button>
                <Button
                    sx={{ width: '49%' }}
                    variant="contained"
                    color="secondary"
                    onClick={() => handleClickOpenMenu('menu')}
                >
                    Thêm móm
                </Button>
            </>
        );
    }
}

export default memo(FooterModal);
