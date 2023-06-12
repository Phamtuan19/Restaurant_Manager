import { Box, Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import tableService from '~/services/tables.service';
import TableItem from '../../TableItem';
import { contextModal } from '../../..';

const status = 3;

function ComponentMerge() {
    const [listTable, setListTable] = useState([]);

    const { tableId } = useContext(contextModal);

    useEffect(() => {
        const apiTableStatus = async (status, tableId) => {
            const res = await tableService.getAdminTableStatus(status, tableId);
            if (res) {
                setListTable(res.tables);
            }
        };
        apiTableStatus(status, tableId);
    }, [tableId]);

    const handleClick = (data) => {
        console.log(tableId)
        console.log(data);
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

export default ComponentMerge;
