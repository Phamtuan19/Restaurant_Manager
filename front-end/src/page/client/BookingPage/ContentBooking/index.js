/* eslint-disable array-callback-return */
import { Box, Grid, Stack, styled } from '@mui/material';
import ContentHeader from './ContentHeader';
import Table from './Table';

const listTable = [
    {
        id: 1,
        title: '1 - T1',
        position: 'left',
        status: 'empty'
    },
    {
        id: 2,
        title: '2 - T1',
        position: 'left',
        status: 'booked'
    },
    {
        id: 3,
        title: '3 - T1',
        position: 'left',
        status: 'using'
    },
    {
        id: 4,
        title: '4 - T1',
        position: 'left',
        status: 'empty'
    },
    {
        id: 5,
        title: '5 - T1',
        position: 'left',
        status: 'booked'
    },
    {
        id: 6,
        title: '6 - T1',
        position: 'left',
        status: 'empty'
    },
    {
        id: 7,
        title: '7 - T1',
        position: 'left',
        status: 'booked'
    },
    {
        id: 8,
        title: '8 - T1',
        position: 'left',
        status: 'using'
    },
    {
        id: 9,
        title: '9 - T1',
        position: 'left',
        status: 'empty'
    },
    {
        id: 10,
        title: '10 - T1',
        position: 'buttom',
        status: 'booked'
    },
    {
        id: 11,
        title: '11 - T1',
        position: 'buttom',
        status: 'using'
    },
    {
        id: 12,
        title: '12 - T1',
        position: 'buttom',
        status: 'empty'
    },
    {
        id: 13,
        title: '13 - T1',
        position: 'buttom',
        status: 'empty'
    },
    {
        id: 2,
        title: '2 - T1',
        position: 'buttom',
        status: 'empty'
    },
    {
        id: 14,
        title: '14 - T1',
        position: 'buttom',
        status: 'empty'
    },
    {
        id: 14,
        title: '14 - T1',
        position: 'buttom',
        status: 'booked'
    },
    {
        id: 16,
        title: '16 - T1',
        position: 'right',
        status: 'using'
    },
    {
        id: 17,
        title: '17 - T1',
        position: 'right',
        status: 'empty'
    },
    {
        id: 18,
        title: '18 - T1',
        position: 'right',
        status: 'booked'
    },
    {
        id: 19,
        title: '19 - T1',
        position: 'right',
        status: 'using'
    },
];

const colorTable = {
    green: '#228B22',
    yellow: '#FFBF00',
    red: '#FF4500',
};

function ContentBooking() {
    return (
        <Box>
            <ContentHeader />

            <WrapListTable>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <ViewTable>
                            {listTable.map((item, index) => {
                                if (item.position === 'left') {
                                    return <Table key={index} data={item} />;
                                }
                            })}
                        </ViewTable>
                    </Grid>
                    <Grid item xs={12} lg={2}></Grid>

                    <Grid item xs={12} lg={4}>
                        <ViewTable sx={{ marginBottom: '196px' }}>
                            {listTable.map((item, index) => {
                                if (item.position === 'right') {
                                    return <Table key={index} data={item} />;
                                }
                            })}
                        </ViewTable>
                    </Grid>

                    <Grid item xs={12} lg={12}>
                        <ViewTable>
                            {listTable.map((item, index) => {
                                if (item.position === 'buttom') {
                                    return <Table key={index} data={item} />;
                                }
                            })}
                        </ViewTable>
                    </Grid>
                </Grid>
            </WrapListTable>
        </Box>
    );
}

const WrapListTable = styled('div')({
    marginTop: '1.5rem',
});

const ViewTable = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #fff',
    borderRadius: '1.5rem',
});

export default ContentBooking;
