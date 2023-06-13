/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CircularProgress, Grid, Stack } from '@mui/material';
import { v4 } from 'uuid';
import { useEffect, useState, createContext } from 'react';

import tableService from '~/services/tables.service';
import Header from './component/Header';
import Table from '~/component/Table';
import ModalDetail from './component/ModalTable';

export const contextModal = createContext();

function TablePage() {
    const [renderTables, setRenderTables] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [dataTable, setDataTable] = useState({});

    const [listTable, setListTable] = useState([]);

    useEffect(() => {
        const apiGetTables = async () => {
            const res = await tableService.getAdminTables();
            setListTable(res.tables);
            setRenderTables(false);
        };

        apiGetTables();
    }, [renderTables]);

    const handleClickTable = (data) => {
        setOpenModal(true);
        setDataTable(data);
    };
    return (
        <contextModal.Provider
            value={{
                tableId: dataTable.id,
                tableStatus: dataTable.status_id,
                dataTable,
                openModal,
                setOpenModal,
                renderTables,
                setRenderTables,
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
                    {listTable === null ? (
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
                            {(listTable || []).map((item) => {
                                return (
                                    <Grid item xs={2} key={v4()} onClick={() => handleClickTable(item)}>
                                        <Table data={item} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    )}
                </Stack>
            </Box>
            <ModalDetail />
        </contextModal.Provider>
    );
}

export default TablePage;
