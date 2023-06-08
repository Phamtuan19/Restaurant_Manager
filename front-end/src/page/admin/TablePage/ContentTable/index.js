/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, Stack } from '@mui/material';
import { v4 } from 'uuid';

import Header from './component/Header';
import TableItem from './component/TableItem';
import { useEffect, useState } from 'react';
import ModalDetailTable from './component/ModalDetailTable';
import { useCartAdmin } from '~/redux/SliceReducer/cartsTableAdmin';

function ContentTable() {
    const [openModal, setOpenModal] = useState(false);
    const [dataTable, setDataTable] = useState({});

    const { tables, dispatchFetchTables } = useCartAdmin();

    useEffect(() => {
        dispatchFetchTables();
    }, []);

    const handleOpen = (data) => {
        setOpenModal(true);
        setDataTable(data);
    };
    return (
        <>
            <Box>
                <Header />

                <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                    <Grid container spacing={2}>
                        {(tables || []).map((item) => {
                            return (
                                <Grid item xs={2} key={v4()}>
                                    <Box>
                                        <TableItem data={item} handleOpen={handleOpen} />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Stack>
            </Box>
            <ModalDetailTable openModal={openModal} setOpenModal={setOpenModal} dataTable={dataTable} />
        </>
    );
}

export default ContentTable;
