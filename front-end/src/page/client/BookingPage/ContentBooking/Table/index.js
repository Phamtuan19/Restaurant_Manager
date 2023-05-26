import { styled } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { RestaurantTable } from '~/component/Icons';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';
import ModalTable from './Modal';

function Table(props) {
    const { data } = props;

    const [openModal, setOpenModal] = useState(false);
    const [modalChildProduct, setModalChildProduct] = useState(false);
    const [modalChildBooking, setModalChildBooking] = useState(false);
    const [colorStatusTable, setColorStatusTable] = useState('');

    const { notifyTypes } = useContext(SkeletonLoading);

    const handleOpen = () => {
        if (data.status === 'empty') {
            setOpenModal(true);
        }

        if (data.status === 'booked')
            toast('Bàn đã được đặt trước', {
                type: notifyTypes['1'],
            });
        if (data.status === 'using')
            toast('Bàn đã có khách sử dụng', {
                type: notifyTypes['3'],
            });
    };
    
    const handleClose = () => {
        setOpenModal(false);
        setModalChildProduct(false);
        setModalChildBooking(false);
    };

    useEffect(() => {
        if (data.status === 'empty') {
            setColorStatusTable('var(--color-blur)');
        }

        if (data.status === 'booked') {
            setColorStatusTable('#FFBF00');
        }
        if (data.status === 'using') {
            setColorStatusTable('red');
        }
    }, [data]);

    return (
        <>
            <BoxRestaurantTable
                sx={{
                    '&::before': { border: `6px solid ${colorStatusTable}` },
                    '&::after': { border: `6px solid ${colorStatusTable}` },
                }}
                onClick={handleOpen}
            >
                <RestaurantTable width="9rem" height="9rem" />
                <TableItemName sx={{ backgroundColor: colorStatusTable }}>{data.title}</TableItemName>
            </BoxRestaurantTable>
            <ModalTable
                openModal={openModal}
                handleClose={handleClose}
                modalChildProduct={modalChildProduct}
                setModalChildProduct={setModalChildProduct}
                modalChildBooking={modalChildBooking}
                setModalChildBooking={setModalChildBooking}
                data={data}
            />
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
        top: '22.9%',
        left: '22.9%',
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        animation: 'pulsate 2.8s ease-out infinite',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '26.9%',
        left: '26.7%',
        width: '75px',
        height: '75px',
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
