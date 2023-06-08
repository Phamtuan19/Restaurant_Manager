import { Button } from '@mui/material';
import { memo, useContext } from 'react';
import { contextModal } from '../../..';

function FooterModal({ handleClickOpenMenu }) {
    const { tableStatus } = useContext(contextModal);
    return (
        <>
            <Button disabled={tableStatus === 1 ? true : false} sx={{ width: '100%' }} variant="contained">
                Thanh toán
            </Button>
            <Button
                disabled={tableStatus === 1 ? true : false}
                variant="contained"
                color="error"
                onClick={() => handleClickOpenMenu('merge')}
            >
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
        </>
    );
}

export default memo(FooterModal);
