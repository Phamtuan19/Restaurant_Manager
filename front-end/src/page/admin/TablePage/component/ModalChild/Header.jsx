import { Box } from '@mui/material';
import { Delete } from '~/component/Icons';

function Header({ component, setOpenMenu }) {
    return (
        <Box id="child-modal-title" sx={styleHeader}>
            <Box
                sx={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    transform: 'translate(50%, -50%)',
                }}
                onClick={() => setOpenMenu((prev) => !prev)}
            >
                <Delete />
            </Box>
            <Title component={component} />
        </Box>
    );
}

const Title = ({ component }) => {
    if (component === 'merge') {
        return <h2>Gộp bàn</h2>;
    }
    if (component === 'move') {
        return <h2>Chuyển bàn</h2>;
    }
    if (component === 'menu') {
        return <h2>Menu</h2>;
    }
};

export default Header;

const styleHeader = {
    position: 'relative',
    borderBottom: '1px solid rgb(224, 227, 231)',
    padding: '12px',

    h2: {
        fontSize: '1.3rem',
        fontFamily: '"Roboto Slab",serif',
    },
};
