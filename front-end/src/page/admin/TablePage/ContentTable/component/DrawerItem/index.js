import { Box, Drawer, Modal, Typography } from '@mui/material';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { DrawerTitle, SpanTime, TableCustom, WrapAction, WrapTime } from './customComponent';
import { Button } from '~/component/client/Button';

function DrawerItem({ showDrawer, handleClick, title }) {
    const [timeOut, setTimeOut] = useState();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeOut = moment().format('HH:mm:ss DD:MM:YYYY');
            setTimeOut(newTimeOut);
        }, 1000);

        interval();
    }, []);

    return (
        <Drawer anchor="right" open={showDrawer} onClose={handleClick}>
            <Box sx={{ width: '450px', position: 'relative', height: '100vh' }}>
                <DrawerTitle>
                    Bàn số " <span style={{ color: 'var(--color-red)' }}>{title}</span> "
                </DrawerTitle>
                <WrapTime>
                    <Box>
                        <SpanTime sx={{ marginRight: '6px' }}>Giờ vào: </SpanTime>
                        <SpanTime>00:29:44 21:05:2023</SpanTime>
                    </Box>
                    {'-'}
                    <Box>
                        <SpanTime sx={{ marginRight: '6px' }}>Giờ về: </SpanTime>
                        <SpanTime>{timeOut}</SpanTime>
                    </Box>
                </WrapTime>
                <Box sx={{ padding: '1rem 8px' }}>
                    <TableCustom>
                        <thead>
                            <tr>
                                <td>Món</td>
                                <td>SL</td>
                                <td>Đ Giá</td>
                                <td>T Giá</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Trà tranh</td>
                                <td>1</td>
                                <td>12.000đ</td>
                                <td>12.000đ</td>
                            </tr>
                            <tr>
                                <td>Trà tranh</td>
                                <td>1</td>
                                <td>12.000đ</td>
                                <td>12.000đ</td>
                            </tr>
                            <tr>
                                <td>Trà tranh</td>
                                <td>1</td>
                                <td>12.000đ</td>
                                <td>12.000đ</td>
                            </tr>
                            <tr>
                                <td>Trà tranh</td>
                                <td>1</td>
                                <td>12.000đ</td>
                                <td>12.000đ</td>
                            </tr>
                        </tbody>
                    </TableCustom>
                    <Box sx={{ padding: '12px', display: 'flex', justifyContent: 'space-between' }}>
                        <SpanTime sx={{ fontSize: '16px', fontWeight: '500' }}>Tổng cộng: </SpanTime>
                        <SpanTime sx={{ fontSize: '16px', fontWeight: '500' }}>250.000đ</SpanTime>
                    </Box>
                </Box>

                <WrapAction>
                    <Button
                        sx={{
                            width: '60%',
                            borderRadius: '5px',
                            backgroundColor: '#007bff',
                            '&:hover': { backgroundColor: '#0069d9', borderColor: '#0069d9' },
                        }}
                    >
                        Thanh Toán
                    </Button>
                    <Button
                        sx={{
                            width: '40%',
                            borderRadius: '5px',
                            backgroundColor: '#17a2b8',
                            '&:hover': { backgroundColor: '#17a2b8', borderColor: '#17a2b8' },
                        }}
                        onClick={handleOpen}
                    >
                        Thêm Món
                    </Button>
                </WrapAction>
            </Box>

            <ModalMenu open={open} handleClose={handleClose} />
        </Drawer>
    );
}

const ModalMenu = ({ open, handleClose }) => {
    return (
        <Modal
            className="Modal_Menu_Admin"
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-73.5%, -50%)',
    width: 1000,
    height: '80%',
    bgcolor: 'background.paper',
    border: '1px solid #e3e1e1',
    borderRadius: 'clamp(0px, (100vw - 750px) * 9999, 10px)',
    boxShadow: 'rgba(62, 80, 96, 0.2) 0px 4px 20px',
    padding: '1rem 1.5rem',
};

export default DrawerItem;
