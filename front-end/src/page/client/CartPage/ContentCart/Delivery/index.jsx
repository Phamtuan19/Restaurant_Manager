/* eslint-disable react-hooks/exhaustive-deps */
import { styled, Stack, Box, Modal, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import fomatMoney from '~/Helpers/fomatMoney';

import { Card } from '~/component/client/Card';
import TitleComponent from '~/page/client/HomePage/ContentHome/TitleComponent';
import { useCart } from '~/redux/SliceReducer/carts.reducer';

function Delivery() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { listCart } = useCart();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const total = listCart.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.price_sale || currentValue.price) * currentValue.quantity;
        }, 0);
        setTotalPrice(total);
    }, [listCart]);

    return (
        <Card className={{ padding: '0 1.5rem 2rem ' }}>
            <Stack>
                <TitleComponent
                    title="Delivery"
                    sx={{ borderBottom: '1px dashed rgb(227, 225, 225)', marginBottom: '2rem' }}
                />
            </Stack>
            <Stack
                sx={{
                    flexDirection: 'row',
                    borderBottom: '1px dashed  rgb(227, 225, 225)',
                }}
            >
                <InputPromocode placeholder="Promo Code ..." />
                <Button
                    sx={{
                        borderRadius: '0 10px 10px 0',
                        marginBottom: '2rem',
                    }}
                    variant="contained"
                >
                    Apply
                </Button>
            </Stack>

            <Box>
                <Stack sx={{ cursor: 'pointer', borderBottom: '1px dashed  rgb(227, 225, 225)' }}>
                    <Box sx={{ padding: '1rem 0' }}>
                        <p style={{ float: 'left' }}>SubTotal</p>
                        <p style={{ float: 'right' }}>$0.00</p>
                    </Box>
                    <Box sx={{ padding: '.7rem 0', color: '#989898' }}>
                        <p style={{ float: 'left' }}>Discount</p>
                        <p style={{ float: 'right' }}>$0.00</p>
                    </Box>
                    <Box sx={{ padding: '.7rem 0', color: '#989898' }}>
                        <p style={{ float: 'left' }}>Ship</p>
                        <p style={{ float: 'right' }}>$0.00</p>
                    </Box>
                </Stack>
                <Stack sx={{ marginBottom: '2rem', cursor: 'pointer', borderBottom: '1px dashed  rgb(227, 225, 225)' }}>
                    <Box sx={{ padding: '1rem 0' }}>
                        <p style={{ float: 'left' }}>Total</p>
                        <p style={{ float: 'right' }}>{fomatMoney(totalPrice)}</p>
                    </Box>
                </Stack>

                <Stack>
                    <Button variant="contained" onClick={handleOpen} sx={{ py: '12px', borderRadius: '1.5rem' }}>
                        Proceed to Order
                    </Button>
                </Stack>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Card>
    );
}

const InputPromocode = styled('input')({
    width: '100%',
    borderRadius: '20px 0 0 20px',
    padding: '0.7rem 1rem 0.7rem 1rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.75,
    color: '#959895',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #e3e1e1',
    transition: 'all 0.5s',
    marginBottom: '2rem',

    '&:focus': {
        outline: 'none',
        width: '100%',
    },
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default Delivery;
