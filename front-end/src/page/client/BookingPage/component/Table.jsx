import { styled } from '@mui/material';
import React from 'react';
import { RestaurantTable } from '~/component/Icons';

const colorStatsTable = ['var(--color-blur)', '#FFBF00', 'var(--color-red)'];

const Table = ({ data }) => {
    return (
        <React.Fragment>
            <BoxRestaurantTable
                sx={{
                    '&::before': { border: `6px solid ${colorStatsTable[data.status_id - 1]}` },
                    '&::after': { border: `6px solid ${colorStatsTable[data.status_id - 1]}` },
                }}
            >
                <RestaurantTable />
                <TableItemName sx={{ backgroundColor: colorStatsTable[data.status_id - 1] }}>
                    T{data.floor} - {data.index_table}
                </TableItemName>
            </BoxRestaurantTable>
        </React.Fragment>
    );
};

const BoxRestaurantTable = styled('div')({
    position: 'relative',
    display: 'inline-block',
    padding: '24px',
    cursor: 'pointer',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: '24%',
        left: '24%',
        width: '73px',
        height: '73px',
        borderRadius: '50%',
        animation: 'pulsate 2.8s ease-out infinite',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '28%',
        left: '28%',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        animation: 'pulsate 2.8s ease-out infinite',
    },
});

const TableItemName = styled('p')({
    position: 'absolute',
    padding: '6px 12px',
    color: 'var(--white)',
    fontSize: '12px',
    fontWeight: 'bold',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
});

export default Table;
