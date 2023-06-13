/* eslint-disable array-callback-return */
import { Box, Grid, styled } from '@mui/material';
import ContentHeader from './ContentHeader';
import Table from './Table';
import tableService from '~/services/tables.service';
import { useEffect, useState } from 'react';

function ContentBooking() {
    const [listTable, setListTable] = useState([]);

    useEffect(() => {
        const apiGetTables = async () => {
            const res = await tableService.getAdminTables();
            setListTable(res.tables);
        };
        apiGetTables();
    }, []);

    return (
        <Box>
            <ContentHeader />

            <Box mt="1.5rem">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <ViewTable sx={{ justifyContent: { lg: 'space-between' } }}>
                            {listTable.map((item, index) => {
                                if (index <= 8) {
                                    return <Table key={index} data={item} />;
                                }
                            })}
                        </ViewTable>
                    </Grid>
                    <Grid item xs={12} lg={2}></Grid>

                    <Grid item xs={12} lg={4}>
                        <ViewTable sx={{ justifyContent: { lg: 'space-around' } }}>
                            {listTable.map((item, index) => {
                                if (index > 8 && index <= 12) {
                                    return <Table key={index} data={item} />;
                                }
                            })}
                        </ViewTable>
                    </Grid>

                    <Grid item xs={12} lg={12}>
                        <ViewTable sx={{ justifyContent: { lg: 'space-between' } }}>
                            {listTable.map((item, index) => {
                                if (index > 12) {
                                    return <Table key={index} data={item} />;
                                }
                            })}
                        </ViewTable>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
const ViewTable = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #fff',
    borderRadius: '1.5rem',
});

export default ContentBooking;
