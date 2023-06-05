import { Box, Grid, Stack } from '@mui/material';
import { v4 } from 'uuid';

import Header from './component/Header';
import TableItem from './component/TableItem';
import { useEffect, useState } from 'react';
import tableService from '~/services/tables.service';
import ModalDetailTable from './component/ModalDetailTable';

const listTable = [
    {
        id: 1,
        title: '1 - T1',
    },
    {
        id: 2,
        title: '2 - T1',
    },
    {
        id: 3,
        title: '3 - T1',
    },
    {
        id: 4,
        title: '4 - T1',
    },
    {
        id: 5,
        title: '5 - T1',
    },
    {
        id: 6,
        title: '6 - T1',
    },
];

function ContentTable() {
    const [tableList, setTableList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [dataTable, setDataTable] = useState({});
    const handleOpen = (data) => {
        setOpenModal(true);
        setDataTable(data);
    };
    const handleClose = () => {
        setOpenModal(false);
    };
    useEffect(() => {
        const apiTableList = async () => {
            const res = await tableService.getAdminTables();
            if (res) {
                console.log(res);
                setTableList(res?.tables);
            }
        };

        apiTableList();
    }, []);

    return (
        <Box>
            <Header />

            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                <Grid container spacing={2}>
                    {(tableList || []).map((item) => {
                        return (
                            <Grid item xs={2} key={v4()}>
                                <Box onClick={() => handleOpen(item)}>
                                    <TableItem item={item} />
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Stack>
            <ModalDetailTable open={openModal} handleClose={handleClose} data={dataTable} />
        </Box>
    );
}

export default ContentTable;
