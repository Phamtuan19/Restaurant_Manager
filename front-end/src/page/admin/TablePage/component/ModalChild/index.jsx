import { Box, styled } from '@mui/material';

import Header from './Header';
import { useContext } from 'react';
import { ContextModalChild } from '../ModalTable';

function ModalChild() {
    const { openChild, setOpenChild, tableId } = useContext(ContextModalChild);
    return (
        <>
            <BoxChildModal
                sx={{
                    ...style,
                    width: openChild.isOpen ? 500 : 0,
                    opacity: openChild.isOpen ? 1 : 0,
                    transform: openChild.isOpen ? 'translate(101%, 0%)' : 'translate(0%, 0%)',
                }}
            >
                {/* <Header component={openChild.componentName} setOpenMenu={setOpenChild} /> */}
                <Box
                    sx={{
                        display: 'block',
                        padding: '12px',
                        maxHeight: '92%',
                        overflow: openChild.componentName === 'menu' ? 'hidden' : 'scroll',
                        '::-webkit-scrollbar': {
                            width: '0',
                        },
                    }}
                ></Box>
            </BoxChildModal>
        </>
    );
}

const style = {
    opacity: 1,
    height: 630,
    bgcolor: 'white',
    outline: 'none',
};

const BoxChildModal = styled('div')({
    position: 'absolute',
    top: 0,
    right: 0,
    background: '#fff',
    border: '2px solid #fff',
    borderRadius: '5px',
    outline: 'none',
    transition: 'all .5s',
});

export default ModalChild;
