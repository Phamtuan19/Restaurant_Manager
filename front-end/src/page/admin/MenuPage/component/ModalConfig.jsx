import { Box, Modal } from '@mui/material';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
import DetailProduct from './DetailProduct';

const CONTENTMODAL = {
    addProduct: AddProduct,
    addCategory: AddCategory,
    detailProduct: DetailProduct,
};

function ModalConfig({ openModal, setOpenModal, contentModal }) {
    const Component = CONTENTMODAL[contentModal.component];

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <Modal
            keepMounted
            open={openModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Component content={contentModal} setOpenModal={setOpenModal} />
            </Box>
        </Modal>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: '7px 7px 10px 10px',
    outline: 'none',
};

export default ModalConfig;
