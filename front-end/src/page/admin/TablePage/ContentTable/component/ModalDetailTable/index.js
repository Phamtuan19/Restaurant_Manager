import { Box, Button, Modal } from '@mui/material';
import fomatMoney from '~/Helpers/fomatMoney';
import ProductItem from './ProductItem';

function ModalDetailTable({ open, handleClose, data }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 500, height: 630 }}>
                <Box pt={2} pb={2} borderBottom="1px solid">
                    <h2 id="child-modal-title">
                        Thông tin Bàn {data.index_table} - T{data.floor}
                    </h2>
                </Box>
                <Content />
                <Box mt={2} display="flex" gap="12px 6px" justifyContent="space-between" flexWrap="wrap">
                    <Button sx={{ width: '100%' }} type="submit" variant="contained">
                        Thanh toán
                    </Button>
                    <Button type="submit" variant="contained" color="error">
                        Gộp hóa đơn
                    </Button>
                    <Button type="submit" variant="contained" color="secondary">
                        Chuyển bàn
                    </Button>
                    <Button type="submit" variant="contained" color="info">
                        Thêm móm
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}

const Content = () => {
    return (
        <Box sx={{ height: 450, position: 'relative' }}>
            <Box height="95%" overflow="scroll" sx={{ '&::-webkit-scrollbar': { width: '0 !important' } }}>
                <ProductItem />
            </Box>
            <Box position="absolute" bottom="0" left="0" right="0" display="flex" justifyContent="space-between">
                <span>Tổng tiền: </span>
                <span style={{ textAlign: 'end' }}>{fomatMoney(100000)}</span>
            </Box>
        </Box>
    );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    fontFamily: '"Roboto Slab",serif',
    boxShadow: 24,
    zIndex: 999999,
    px: 4,
    pb: 3,
    borderRadius: '5px',
};

export default ModalDetailTable;
