import { Box, Button, Modal, styled } from '@mui/material';
import { createContext, useState } from 'react';
import ChildBooking from './component/ChildBooking';
import ChildMenu from './component/ChildMenu';

export const ContextModalBooking = createContext();

function ModalTable({ data, openModal, setOpenModal }) {
    const [openModalBooking, setOpenModalBooking] = useState(false);
    const [openModalMenu, setOpenModelMenu] = useState(false);

    const handleModalMenu = () => {
        setOpenModalBooking(false);
        setOpenModelMenu(true);
    };
    const handleModalBooking = () => {
        setOpenModalBooking(true);
        setOpenModelMenu(false);
    };

    return (
        <ContextModalBooking.Provider value={{}}>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box
                    sx={{
                        ...style,
                        width: { xs: '90%', md: 500 },
                        transform:
                            openModalMenu || openModalBooking ? 'translate(-100%, -50%)' : 'translate(-50%, -50%)',
                    }}
                >
                    <Box>
                        <Header id="child-modal-title">
                            <h2>
                                Bàn {data.index_table} - T{data.floor}
                            </h2>
                        </Header>
                        <Box sx={styleModalContent}></Box>
                        <Box
                            sx={{
                                position: 'relative',
                                padding: '2.5rem 12px 12px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '12px',
                            }}
                        >
                            <Button fullWidth variant="contained" onClick={handleModalMenu}>
                                Thêm món
                            </Button>
                            <Button fullWidth variant="contained" onClick={handleModalBooking}>
                                Đặt bàn
                            </Button>

                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 12,
                                    right: 12,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box sx={{ fontWeight: 500 }}>Tổng tiền: </Box>
                                <Box sx={{ fontWeight: 500 }}></Box>
                            </Box>
                        </Box>
                    </Box>
                    <ChildBooking openModalBooking={openModalBooking} setOpenModalBooking={setOpenModalBooking} />
                    <ChildMenu openModalMenu={openModalMenu} setOpenModelMenu={setOpenModelMenu} />
                </Box>
            </Modal>
        </ContextModalBooking.Provider>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    borderRadius: '5px',
    boxShadow: 24,
    outline: 'none',
    zIndex: 15000,
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

const styleModalContent = {
    height: 450,
    overflow: 'scroll',
    padding: '12px',

    '::-webkit-scrollbar': {
        width: '0',
    },
};

export default ModalTable;
