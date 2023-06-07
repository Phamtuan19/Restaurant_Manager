import { Box, styled } from '@mui/material';

import Header from './Header';
import ComponentMenu from './ComponentMenu';
import ComponentMerge from './ComponentMerge';
import ComponentMove from './ComponentMove';

function ModalChild({ openChild, setOpenChild }) {
    return (
        <BoxChildModal
            sx={{
                ...style,
                width: openChild.isOpen ? 500 : 0,
                opacity: openChild.isOpen ? 1 : 0,
                transform: openChild.isOpen ? 'translate(101%, 0%)' : 'translate(0%, 0%)',
            }}
        >
            <Header component={openChild.component} setOpenMenu={setOpenChild} />
            <Box
                sx={{
                    display: 'block',
                    padding: '12px',
                    maxHeight: '92%',
                    overflow: openChild.component === 'menu' ? 'hidden' : 'scroll',
                    '::-webkit-scrollbar': {
                        width: '0',
                    },
                }}
            >
                <Content component={openChild.component} />
            </Box>
        </BoxChildModal>
    );
}

const Content = ({ component }) => {
    if (component === 'merge') {
        return <ComponentMerge />;
    }
    if (component === 'move') {
        return <ComponentMove />;
    }
    if (component === 'menu') {
        return <ComponentMenu />;
    }
};

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
