/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CircularProgress, Grid, Stack } from '@mui/material';
import { v4 } from 'uuid';
import { memo, useEffect, useState, createContext } from 'react';

import Header from './component/Header';
import TableItem from './component/TableItem';
import ModalDetailTable from './component/ModalDetailTable';
import { useCartAdmin } from '~/redux/SliceReducer/cartsTableAdmin';

export const contextModal = createContext();

function ContentTable() {
    const [renderComponent, setRenderComponent] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [dataTable, setDataTable] = useState({});

    const { tables, dispatchFetchTables } = useCartAdmin();

    useEffect(() => {
        dispatchFetchTables();
    }, [renderComponent]);

    const handleTableOpenModal = (data) => {
        setOpenModal(true);
        setDataTable(data);
    };
    return (
        <contextModal.Provider
            value={{
                tableId: dataTable.id,
                tableStatus: dataTable.status_id,
                setOpenModal,
                renderComponent,
                setRenderComponent,
            }}
        >
            <Box>
                <Header />
                <Stack
                    sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '1.5rem',
                    }}
                >
                    {tables === null ? (
                        <Box
                            sx={{
                                position: 'fixed',
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
                        <Grid container spacing={2}>
                            {(tables || []).map((item) => {
                                return (
                                    <Grid item xs={2} key={v4()}>
                                        <Box onClick={() => handleTableOpenModal(item)}>
                                            <TableItem data={item} />
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    )}
                </Stack>
            </Box>
            <ModalDetailTable openModal={openModal} setOpenModal={setOpenModal} dataTable={dataTable} />
        </contextModal.Provider>
    );
}

export default ContentTable;
