import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import tableService from '~/services/tables.service';
import TableItem from '../../TableItem';

const status = 3;

function ComponentMerge() {
    const [listTable, setListTable] = useState([]);

    useEffect(() => {
        const apiTableStatus = async (status) => {
            const res = await tableService.getAdminTableStatus(status);

            if (res) {
                console.log(res);
                setListTable(res.tables);
            }
        };

        apiTableStatus(status);
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

export default ComponentMerge;
