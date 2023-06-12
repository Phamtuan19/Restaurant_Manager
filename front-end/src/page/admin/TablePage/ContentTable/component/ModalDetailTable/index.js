/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CircularProgress, Modal } from '@mui/material';
import { createContext, memo, useCallback, useContext, useEffect, useState } from 'react';
import ModalChild from '../ModalChild';
import FooterModal from './FooterModal';
import { v4 } from 'uuid';
import ProductItem from './ProductItem';
import tableService from '~/services/tables.service';
import fomatMoney from '~/Helpers/fomatMoney';
import { contextModal } from '../..';

export const ContextModalChild = createContext();

function ModalDetailTable() {
    const [openChild, setOpenChild] = useState({ isOpen: false, component: '' }); // set content component modal child
    const [invoiceTable, setInvoiceTable] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingEffect, setLoadingEffect] = useState(true);

    const { tableStatus, openModal, setOpenModal, dataTable, setRenderTables } = useContext(contextModal);

    useEffect(() => {
        if (openModal) {
            setInvoiceTable([]);

            const tableId = dataTable.id;
            const getInvoiceTable = async () => {
                setLoading(true);
                const res = await tableService.getInvoiceTable(tableId);
                setInvoiceTable({ data: res.invoiceDetails, totalPrice: res.totalPrice });
                setLoading(false);
            };
            getInvoiceTable();
        }
    }, [openModal, loadingEffect]);

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

    return (
        <ContextModalChild.Provider value={{ setOpenChild, setLoadingEffect }}>
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
                        {loading ? (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <CircularProgress />
                            </Box>
                        ) : (
                            ''
                        )}

                        {(invoiceTable?.data || []).length > 0 ? (
                            <>
                                <Box
                                    height="95%"
                                    overflow="scroll"
                                    sx={{ '&::-webkit-scrollbar': { width: '0 !important' } }}
                                >
                                    {(invoiceTable?.data || []).map((item) => {
                                        return <ProductItem key={v4()} data={item} />;
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
                        <FooterModal handleClickOpenMenu={handleClickOpenMenu} />
                    </Box>

                    {/* Modal child */}
                    <ModalChild openChild={openChild} setOpenChild={setOpenChild} tableId={dataTable.id} />
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

export default ModalDetailTable;
