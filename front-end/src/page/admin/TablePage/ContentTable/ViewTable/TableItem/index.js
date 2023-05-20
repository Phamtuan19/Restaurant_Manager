import { styled } from '@mui/material';
import { useState } from 'react';
import { RestaurantTable } from '~/component/Icons';
import DrawerItem from './DrawerItem';

function TableItem({ title }) {
    const [showDrawer, setShowDrawer] = useState(false);
    

    const handleClick = () => {
        setShowDrawer(!showDrawer);
    };

    return (
        <>
            <BoxRestaurantTable
                sx={{
                    '&::before': { border: '6px solid var(--color-blur)' },
                    '&::after': { border: '6px solid var(--color-blur)' },
                }}
                onClick={handleClick}
            >
                <RestaurantTable />
                <TableItemName sx={{ backgroundColor: 'var(--color-blur)' }}>{title}</TableItemName>
            </BoxRestaurantTable>

            <DrawerItem showDrawer={showDrawer} handleClick={handleClick} title={title} />
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

export default TableItem;
