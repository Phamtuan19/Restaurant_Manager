import { useState } from 'react';
import { styled } from '@mui/material';

import { RestaurantTable } from '~/component/Icons';
import ModalTable from './ModalTable';

const colorStatsTable = ['var(--color-blur)', '#FFBF00', 'var(--color-red)'];

function Table({ data }) {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenMdoal = () => {
        setOpenModal(true);
    };

    // const GetModalMenu = () => {
    //     const { getModalMenu } = useModalMenu();
    //     useEffect(() => {
    //         getModalMenu();
    //     }, []);
    // };

    return (
        <>
            <BoxRestaurantTable
                sx={{
                    '&::before': { border: `6px solid ${colorStatsTable[data.status_id - 1]}` },
                    '&::after': { border: `6px solid ${colorStatsTable[data.status_id - 1]}` },
                }}
                onClick={handleOpenMdoal}
            >
                <RestaurantTable />
                <TableItemName sx={{ backgroundColor: colorStatsTable[data.status_id - 1] }}>
                    T{data.floor} - {data.index_table}
                </TableItemName>
            </BoxRestaurantTable>
            <ModalTable dataTable={data} openModal={openModal} setOpenModal={setOpenModal} />
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
        top: '20%',
        left: '21%',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        animation: 'pulsate 2.8s ease-out infinite',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '24.9%',
        left: '25.7%',
        width: '65px',
        height: '65px',
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
