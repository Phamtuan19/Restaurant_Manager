import { Box, Button, Modal, styled } from '@mui/material';

import { v4 } from 'uuid';

import { createContext, useContext, useEffect, useState } from 'react';
import ModalProductItem from './ModalProductItem';
import ModalChild from './ModalChild';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';
import ModalBooking from './ModalBooking';

export const ContextModalBooking = createContext();

function ModalTable({
    openModal,
    handleClose,
    modalChildProduct,
    setModalChildProduct,
    data,
    modalChildBooking,
    setModalChildBooking,
}) {
    const [listProductOrder, setListProductOrder] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { currencyFormatting } = useContext(SkeletonLoading);
    const [transformModal, setTransformModal] = useState(false);

    // Tính tổng tiền
    useEffect(() => {
        const total = listProductOrder.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity;
        }, 0);

        setTotalPrice(total);
    }, [listProductOrder]);

    useEffect(() => {
        if (modalChildProduct || modalChildBooking) {
            setTransformModal(true);
        } else {
            setTransformModal(false);
        }
    }, [modalChildProduct, modalChildBooking]);

    // Thêm sản phẩm
    const handleClickAddProduct = (data) => {
        const productItem = listProductOrder.find((item) => item.id === data.id);
        if (productItem) {
            setListProductOrder((prev) => {
                const listProduct = prev.filter((item) => item.id !== productItem.id);

                const newListProductOrder = [...listProduct, { ...productItem, quantity: productItem.quantity + 1 }];

                return newListProductOrder;
            });
        } else {
            setListProductOrder((prev) => [...prev, { ...data, quantity: 1 }]);
        }
    };

    // Xóa sản phẩm
    const handleDeleteProduct = (data) => {
        const productItem = listProductOrder.find((item) => item.id === data.id);

        if (productItem) {
            setListProductOrder((prev) => {
                const listProduct = prev.filter((item) => item.id !== productItem.id);
                return listProduct;
            });
        }
    };

    const handleOpenModalProduct = () => {
        setModalChildBooking(false);
        setModalChildProduct(true);
    };

    const handleCloseModalProduct = () => {
        setModalChildProduct(false);
    };

    const handleOpenModalBooking = () => {
        setModalChildProduct(false);
        setModalChildBooking(true);
    };

    const handleCloseModalBooking = () => {
        setModalChildBooking(false);
    };

    return (
        <ContextModalBooking.Provider value={{ handleClickAddProduct, handleDeleteProduct }}>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box
                    sx={{
                        ...style,
                        width: { xs: '90%', md: 400 },
                        transform: transformModal
                            ? {
                                  xs: 'translate(-50%, -58%)',
                                  md: 'translate(-112%, -58%)',
                                  lg: 'translate(-115%, -58%)',
                              }
                            : 'translate(-50%, -58%)',
                    }}
                >
                    <Box>
                        <Header id="child-modal-title">
                            <h2>Bàn {data.title}</h2>
                        </Header>
                        <Content
                            sx={{
                                height: '430px',
                                overflow: 'scroll',
                                '::-webkit-scrollbar': {
                                    width: '0',
                                },
                            }}
                        >
                            <span>{listProductOrder.length > 0 ? '' : 'Vui lòng Thêm sản phẩm trước khi đặt bàn'}</span>

                            <Box sx={{ ...styleModalChild }}>
                                {listProductOrder.map((item) => {
                                    return <ModalProductItem key={v4()} data={item} iconDelete={true} />;
                                })}
                            </Box>
                        </Content>
                        <Box
                            sx={{
                                position: 'relative',
                                padding: '2.5rem 12px 12px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Button
                                variant="contained"
                                disabled={modalChildProduct ? true : false}
                                onClick={handleOpenModalProduct}
                            >
                                Thêm món
                            </Button>
                            <Button
                                variant="contained"
                                disabled={modalChildBooking || listProductOrder.length === 0 ? true : false}
                                onClick={handleOpenModalBooking}
                            >
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
                                <Box sx={{ fontWeight: 500 }}>{currencyFormatting(totalPrice)}</Box>
                            </Box>
                        </Box>
                    </Box>
                    <ModalChild
                        modalChildProduct={modalChildProduct}
                        handleCloseModalProduct={handleCloseModalProduct}
                    />
                    <ModalBooking
                        modalChildBooking={modalChildBooking}
                        handleCloseModalBooking={handleCloseModalBooking}
                    />
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
    transition: 'all .5s',
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

const Content = styled('div')({
    padding: '12px',
});

const styleModalChild = {
    maxHeight: 450,
    overflow: 'scroll',

    '::-webkit-scrollbar': {
        width: '0',
    },
};

export default ModalTable;
