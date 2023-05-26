import { Box, Button, Stack, TextField, styled } from '@mui/material';
import { Delete } from '~/component/Icons';

function ModalBooking({ modalChildBooking, handleCloseModalBooking }) {
    return (
        <BoxChildModal
            sx={{
                minHeight: modalChildBooking ? { xs: 580, md: 'auto' } : 0,

                width: modalChildBooking ? { xs: '105%', md: 500 } : 400,
                opacity: modalChildBooking ? 1 : 0,
                transform: modalChildBooking
                    ? { xs: 'translate(2.5%, -0.3%)', md: 'translate(101%, -0.3%)' }
                    : 'translate(0%, 0%)',
            }}
        >
            <Header id="child-modal-title">
                <Box
                    sx={{
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        transform: 'translate(50%, -50%)',
                    }}
                    onClick={handleCloseModalBooking}
                >
                    <Delete />
                </Box>
                <h2>From Đặt hàng</h2>
            </Header>
            <Content
                sx={{
                    height: '100%',
                    display: modalChildBooking ? 'flex' : 'none',
                    flexDirection: 'column',
                    padding: '2rem 2rem 1rem 2rem',
                }}
            >
                <Box sx={{ marginBottom: '12px' }}>
                    <Box>
                        <label htmlFor="modal-name" style={{ ...styleLable }}>
                            Tên khách hàng
                        </label>
                        <TextField
                            fullWidth
                            id="modal-name"
                            variant="outlined"
                            size="small"
                            sx={{ marginBottom: '1rem' }}
                        />
                    </Box>
                    <Box>
                        <label htmlFor="modal-phone" style={{ ...styleLable }}>
                            Số điện thoại
                        </label>
                        <TextField
                            fullWidth
                            id="modal-phone"
                            variant="outlined"
                            size="small"
                            sx={{ marginBottom: '1rem' }}
                        />
                    </Box>
                    <Stack sx={{ flexDirection: 'row', gap: '0 12px' }}>
                        <Box sx={{ flex: 1 }}>
                            <label htmlFor="modal-phone" style={{ ...styleLable }}>
                                Thời gian
                            </label>
                            <TextField
                                fullWidth
                                id="modal-phone"
                                type="date"
                                variant="outlined"
                                size="small"
                                sx={{ marginBottom: '1rem' }}
                            />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <label htmlFor="modal-phone" style={{ ...styleLable }}>
                                Thời gian
                            </label>
                            <TextField
                                fullWidth
                                id="modal-phone"
                                type="time"
                                variant="outlined"
                                size="small"
                                sx={{ marginBottom: '1rem' }}
                            />
                        </Box>
                    </Stack>
                    <Box>
                        <label htmlFor="modal-note" style={{ ...styleLable }}>
                            Ghi chú
                        </label>
                        <TextField
                            fullWidth
                            id="modal-note"
                            placeholder="Nhập vào ghi chú của bạn ..."
                            multiline
                            rows={2}
                        />
                    </Box>
                </Box>
                <Stack sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained">Đặt hàng</Button>
                </Stack>
            </Content>
        </BoxChildModal>
    );
}

const styleLable = {
    marginBottom: '6px',
    display: 'inline-block',
};

const Header = styled('div')({
    position: 'relative',
    borderBottom: '1px solid rgb(224, 227, 231)',
    padding: '12px',

    h2: {
        fontSize: '1.3rem',
        fontFamily: '"Roboto Slab",serif',
    },
});

const Content = styled('div')({
    padding: '12px',
});

const BoxChildModal = styled('div')({
    position: 'absolute',
    top: 0,
    right: 0,
    background: '#fff',
    border: '2px solid #fff',
    borderRadius: '5px',
    outline: 'none',
    transition: 'all .5s',
});

export default ModalBooking;
