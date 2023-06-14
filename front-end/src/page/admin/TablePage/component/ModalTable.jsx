/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import ProductModal from './ProductModal';
import { v4 } from 'uuid';
import fomatMoney from '~/Helpers/fomatMoney';
import { Delete } from '~/component/Icons';
import ContentMenu from './ContentMenu';
import ContentMove from './ContentMove';
import ContentMerge from './ContentMerge';
import tableService from '~/services/tables.service';

const buttomAction = [
    {
        title: 'Gộp hóa đơn',
        color: 'error',
        componentName: 'ContentMerge',
    },
    {
        title: 'Chuyển bàn',
        color: 'secondary',
        componentName: 'ContentMove',
    },
    {
        title: 'Thêm móm',
        color: 'info',
        componentName: 'ContentMenu',
    },
];

const conponentChild = [
    {
        name: 'ContentMenu',
        component: ContentMenu,
        title: 'Danh sách sản phẩm',
    },
    {
        name: 'ContentMerge',
        title: 'Gộp hóa đơn',
        component: ContentMerge,
    },
    {
        name: 'ContentMove',
        title: 'Chuyển bàn',
        component: ContentMove,
    },
];

function ModalTable({ dataTable, openModal, setOpenModal }) {
    const [invoiceTable, setInvoiceTable] = useState([]);
    const [componentName, setComponentName] = useState('');
    const [openModalChild, setOpenModalChild] = useState(false);

    // useEffect(() => {
    //     setInvoiceTable([]);
    //     const getInvoiceTable = async () => {
    //         const res = await tableService.getInvoiceTable(dataTable.id);
    //         setInvoiceTable({ data: res.invoiceDetails, totalPrice: res.totalPrice });
    //     };
    //     getInvoiceTable();
    // }, []);

    const handleOpenMdoalChild = (componentName) => {
        setOpenModalChild(true);
        setComponentName(componentName);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setOpenModalChild(false);
    };

    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, transform: openModalChild ? 'translate(-101%, -50%)' : 'translate(-50%, -50%)' }}>
                <Box py={2} borderBottom="1px solid rgb(224, 227, 231)">
                    Thông tin Bàn {dataTable?.index_table} - T{dataTable?.floor}
                </Box>

                {/* Nội dung modal */}
                <Box sx={{ height: 420, position: 'relative' }}>
                    <>
                        <Box height="95%" overflow="scroll" sx={{ '&::-webkit-scrollbar': { width: '0 !important' } }}>
                            {(invoiceTable?.data || []).map((item) => {
                                return <ProductModal key={v4()} data={item} />;
                            })}
                        </Box>
                    </>
                </Box>

                {/* All buttom action */}
                <Box mt={2} display="flex" justifyContent="space-between" flexWrap="wrap">
                    <Box mb={1} width="100%" display="flex" justifyContent="space-between">
                        <span>Tổng tiền: </span>
                        <span>{fomatMoney(invoiceTable.totalPrice)}</span>
                    </Box>
                    <Button fullWidth variant="contained" sx={{ mb: 1 }}>
                        Thanh toán
                    </Button>
                    {buttomAction.map((item) => (
                        <Button
                            key={v4()}
                            variant="contained"
                            color={item.color}
                            onClick={() => handleOpenMdoalChild(item.componentName)}
                        >
                            {item.title}
                        </Button>
                    ))}
                </Box>

                {/* Modal child */}
                {openModalChild && (
                    <Box sx={{ ...styleModalChild }}>
                        {conponentChild.map((item) => {
                            if (item.name === componentName) {
                                const ComponentChild = item.component;
                                return (
                                    <Box key={v4()}>
                                        {/* Header Modal Child */}
                                        <Box py={2} sx={styleHeader}>
                                            <Box
                                                sx={{
                                                    cursor: 'pointer',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                    transform: 'translate(150%, -50%)',
                                                }}
                                                onClick={() => setOpenModalChild((prev) => !prev)}
                                            >
                                                <Delete />
                                            </Box>
                                            {item.title}
                                        </Box>

                                        {/* Content Modal Child */}
                                        <ComponentChild />
                                    </Box>
                                );
                            }
                        })}
                    </Box>
                )}
            </Box>
        </Modal>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    outline: 'none',
    zIndex: 9999,
    borderRadius: '5px',
    py: 1,
    px: 4,
};

const styleModalChild = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 500,
    background: '#fff',
    borderRadius: '5px',
    opacity: 1,
    height: 620,
    bgcolor: 'white',
    transform: 'translate(101%, -0.2%)',
    py: 1,
    px: 4,
};

const styleHeader = {
    position: 'relative',
    borderBottom: '1px solid rgb(224, 227, 231)',

    h2: {
        fontSize: '1.3rem',
        fontFamily: '"Roboto Slab",serif',
    },
};

export default ModalTable;
