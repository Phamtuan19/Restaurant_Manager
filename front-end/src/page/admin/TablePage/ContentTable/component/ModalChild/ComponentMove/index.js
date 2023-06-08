import { useContext, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import tableService from '~/services/tables.service';
import TableItem from '../../TableItem';
import { v4 } from 'uuid';
import { contextModal } from '../../..';
import ordersService from '~/services/orders.service';

function ComponentMove() {
    const [listTable, setListTable] = useState([]);

    const { tableId, setOpenModal, setRenderComponent } = useContext(contextModal);

    useEffect(() => {
        const apiTableStatus = async () => {
            const res = await tableService.getAdminTableStatus();
            if (res) {
                console.log(res);
                setListTable(res.tables);
            }
        };

        apiTableStatus();
    }, []);

    const handleClick = (dataTable) => {
        const data = {
            tableId: tableId,
            tableMoveId: dataTable.id,
        };
        console.log(data);
        const api = async () => {
            const res = await ordersService.postOrderMove(data);
            if (res.status === 200) {
                setRenderComponent((prev) => !prev);
                setOpenModal((prev) => !prev);
            }
        };
        api();
    };

    return (
        <Box sx={{ height: '95%', overflow: 'hidden' }}>
            <Grid container spacing={2}>
                {(listTable || []).map((data) => {
                    return (
                        <Grid item xs={4} key={v4()}>
                            <Box onClick={() => handleClick(data)}>
                                <TableItem data={data} />
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default ComponentMove;
