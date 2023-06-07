/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Modal } from '@mui/material';
import ProductItem from './ProductItem';
import { createContext, memo, useCallback, useState } from 'react';
import ModalChild from '../ModalChild';
import FooterModal from './FooterModal';
import { v4 } from 'uuid';
import totalPrice from '~/Helpers/totalprice';

export const ContentModal = createContext();

function ModalDetailTable({ open, setOpenModal, data }) {
    const [openChild, setOpenChild] = useState({ isOpen: false, component: '' });
    const [orders, setOrders] = useState([]);

    const handleClickOpenMenu = useCallback((component) => {
        setOpenChild((prev) => {
            if (prev) {
                return {
                    isOpen: prev,
                    component,
                };
            }

            return {
                isOpen: !prev,
                component,
            };
        });
    });

    const handleClose = () => {
        setOpenModal(false);
        setOrders([]);
    };

    return (
        <ContentModal.Provider value={{ setOrders }}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box
                    sx={{
                        ...style,
                        transition: 'all 0.5s',
                        transform: openChild.isOpen ? 'translate(-100%, -50%)' : 'translate(-50%, -50%)',
                    }}
                >
                    <Box pt={2} pb={2} borderBottom="1px solid">
                        <h2 id="child-modal-title">
                            Thông tin Bàn {data.index_table} - T{data.floor}
                        </h2>
                    </Box>

                    {/* Nội dung modal */}
                    <Box sx={{ height: data.status_id === 3 ? 450 : 500, position: 'relative' }}>
                        {orders.length > 0 ? (
                            <>
                                <Box
                                    height="95%"
                                    overflow="scroll"
                                    sx={{ '&::-webkit-scrollbar': { width: '0 !important' } }}
                                >
                                    {orders.map((item) => (
                                        <ProductItem key={v4()} data={item} type={true} />
                                    ))}
                                </Box>
                                <Box
                                    position="absolute"
                                    bottom="0"
                                    left="0"
                                    right="0"
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <span>Tổng tiền: </span>
                                    <span style={{ textAlign: 'end' }}>{totalPrice(orders)}</span>
                                </Box>
                            </>
                        ) : (
                            <Box py={3}>
                                <h3>Bàn chưa có người ngồi</h3>
                            </Box>
                        )}
                    </Box>

                    <Box mt={2} display="flex" gap="12px 6px" justifyContent="space-between" flexWrap="wrap">
                        <FooterModal
                            status={data.status_id}
                            handleClickOpenMenu={handleClickOpenMenu}
                            orders={orders}
                        />
                    </Box>

                    {/* Modal child */}
                    <ModalChild openChild={openChild} setOpenChild={setOpenChild} />
                </Box>
            </Modal>
        </ContentModal.Provider>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 500,
    height: 630,
    bgcolor: 'background.paper',
    fontFamily: '"Roboto Slab",serif',
    boxShadow: 24,
    zIndex: 9999,
    px: 4,
    pb: 3,
    borderRadius: '5px',
    outline: 'none',
};

export default memo(ModalDetailTable);
