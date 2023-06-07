import { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import tableService from '~/services/tables.service';
import TableItem from '../../TableItem';
import { v4 } from 'uuid';

function ComponentMove() {
    const [listTable, setListTable] = useState([]);

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

    return (
        <Box sx={{ height: '95%', overflow: 'hidden' }}>
            <Grid container spacing={2}>
                {(listTable || []).map((ele) => {
                    return (
                        <Grid item xs={4} key={v4()}>
                            <Box>
                                <TableItem data={ele} />
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default ComponentMove;
