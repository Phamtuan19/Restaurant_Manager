/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { contextModal } from '..';
import tableService from '~/services/tables.service';
import { Box, Button, Dialog, DialogActions, DialogContent, Modal } from '@mui/material';
import ProductModal from './ProductModal';
import { v4 } from 'uuid';
import fomatMoney from '~/Helpers/fomatMoney';
import ModalChild from './ModalChild';
import ComponentMerge from './ModalChild/ComponentMerge';
import ComponentMove from './ModalChild/ComponentMove';
import ComponentMenu from './ModalChild/ComponentMenu';

export const ContextModalChild = createContext();

const buttomList = [
    {
        color: 'error',
        contentModalChild: ComponentMerge,
        title: 'Gộp hóa đơn',
    },
    {
        color: 'secondary',
        contentModalChild: ComponentMove,
        title: 'Chuyển bàn',
    },
    {
        color: 'info',
        contentModalChild: ComponentMenu,
        title: 'Thêm móm',
    },
];

function ModalDetail() {
    const [openChild, setOpenChild] = useState({ isOpen: false, componentName: '' }); // set content component modal child
    const [invoiceTable, setInvoiceTable] = useState([]);
    const [loadingEffect, setLoadingEffect] = useState(true);

    console.log(openChild);

    const { openModal, setOpenModal, dataTable } = useContext(contextModal);

    useEffect(() => {
        if (openModal) {
            setInvoiceTable([]);

            const tableId = dataTable.id;
            const getInvoiceTable = async () => {
                const res = await tableService.getInvoiceTable(tableId);
                setInvoiceTable({ data: res.invoiceDetails, totalPrice: res.totalPrice });
            };
            getInvoiceTable();
        }
    }, [openModal, loadingEffect]);

    const handleClickOpenMenu = (componentName) => {
        setOpenChild((prev) => {
            return {
                isOpen: true,
                componentName,
            };
        });
    };

    return (
        <ContextModalChild.Provider value={{ openChild, setOpenChild, setLoadingEffect }}>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
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
                            Thông tin Bàn {dataTable?.index_table} - T{dataTable?.floor}
                        </h2>
                    </Box>

                    {/* Nội dung modal */}
                    <Box sx={{ height: 450, position: 'relative' }}>
                        {(invoiceTable?.data || []).length > 0 ? (
                            <>
                                <Box
                                    height="95%"
                                    overflow="scroll"
                                    sx={{ '&::-webkit-scrollbar': { width: '0 !important' } }}
                                >
                                    {(invoiceTable?.data || []).map((item) => {
                                        return <ProductModal key={v4()} data={item} />;
                                    })}
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
                                    <span style={{ textAlign: 'end' }}>{fomatMoney(invoiceTable.totalPrice)}</span>
                                </Box>
                            </>
                        ) : (
                            ''
                        )}
                    </Box>

                    {/* All buttom action */}
                    <Box mt={2} display="flex" gap="12px 6px" justifyContent="space-between" flexWrap="wrap">
                        <Button fullWidth variant="contained">
                            Thanh toán
                        </Button>
                        {buttomList.map((item) => {
                            return (
                                <Button
                                    key={v4()}
                                    variant="contained"
                                    color={item.color}
                                    onClick={() => handleClickOpenMenu(item.contentModalChild)}
                                >
                                    {item.title}
                                </Button>
                            );
                        })}
                    </Box>

                    {/* Modal child */}
                    <ModalChild />
                </Box>
            </Modal>
        </ContextModalChild.Provider>
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

export default ModalDetail;
