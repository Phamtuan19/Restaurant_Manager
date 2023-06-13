import { styled } from '@mui/material';
import { useState } from 'react';
import { RestaurantTable } from '~/component/Icons';
import ModalTable from './Modal';
import setToastMessage from '~/Helpers/toastMessage';

const colorStatsTable = ['var(--color-blur)', '#FFBF00', 'var(--color-red)'];

function Table(props) {
    const { data } = props;

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <BoxRestaurantTable
                sx={{
                    '&::before': { border: `6px solid ${colorStatsTable[data.status_id - 1]}` },
                    '&::after': { border: `6px solid ${colorStatsTable[data.status_id - 1]}` },
                }}
                onClick={() =>
                    data.status_id === 1 ? setOpenModal(true) : setToastMessage('Bàn đã có khách sử dụng', 'error')
                }
            >
                <RestaurantTable />
                <TableItemName sx={{ backgroundColor: colorStatsTable[data.status_id - 1] }}>
                    T{data.floor} - {data.index_table}
                </TableItemName>
            </BoxRestaurantTable>
            <ModalTable data={data} openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
}

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
