import {
    Box,
    Button,
    Collapse,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField,
    styled,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Delete } from '~/component/Icons';
import moment from 'moment';
import { forwardRef, useContext, useState } from 'react';
import { ContextModalBooking } from '..';
import { v4 } from 'uuid';
import fomatMoney from '~/Helpers/fomatMoney';

const regexPhoneNumber = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

const validate = yup
    .object({
        fullName: yup.string().required('Tên không được để trống'),
        phoneNumber: yup
            .string()
            .required('Số điện thoại không được để trống')
            .matches(regexPhoneNumber, 'Số điện thoại không đúng'),
        dateBooking: yup
            .date()
            .typeError('Ngày không được để trống')
            .test('is-valid-date', 'Vui lòng chọn đúng ngày nhận', (value) => {
                const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
                return value >= yesterday;
            }),
        timeBooking: yup
            .string()
            .required('Thời gian nhận bàn không được để trống')
            .test('is-valid-time', 'Vui lòng chọn đúng giờ nhận', (value) => {
                const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                return value >= currentTime;
            }),
    })
    .required();

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function ChildBooking({ table, openModalBooking, setOpenModalBooking }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: 'all',
        resolver: yupResolver(validate),
        defaultValues: {
            dateBooking: new Date().toISOString().substr(0, 10),
            timeBooking: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
    });

    const [open, setOpen] = useState(false);
    const [userInfoBookingTable, setUserInfoBookingTable] = useState({});

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {
        const newData = {
            ...data,
            dateBooking: moment(data.dateBooking).format('YYYY-MM-DD'),
            ...table,
        };
        setUserInfoBookingTable(newData);
        setOpen(true);
    };

    if (openModalBooking) {
        return (
            <Box
                sx={{
                    minHeight: { xs: 580, md: 'auto' },
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    background: '#fff',
                    borderRadius: '5px',
                    width: { xs: '100%', md: 500 },
                    transform: {
                        xs: 'translate(0%, 0%)',
                        lg: 'translate(102%, 0%)',
                    },
                }}
            >
                <Header>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            transform: 'translate(50%, -50%)',
                        }}
                        onClick={() => setOpenModalBooking(false)}
                    >
                        <Delete />
                    </Box>
                    <h2>From Đặt hàng</h2>
                </Header>
                <Box sx={{ padding: { xs: '1rem' }, display: 'flex', height: '100%', flexDirection: 'column' }}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ marginBottom: '12px' }}>
                            <Box>
                                <label
                                    htmlFor="modal-name"
                                    style={{ ...styleLable, color: errors.fullName ? '#d32f2f' : 'black' }}
                                >
                                    Tên khách hàng
                                </label>
                                <TextField
                                    fullWidth
                                    id="modal-name"
                                    variant="outlined"
                                    size="small"
                                    sx={{ marginBottom: '1rem' }}
                                    {...register('fullName')}
                                    error={!!errors.fullName}
                                    helperText={errors.fullName?.message}
                                />
                            </Box>
                            <Box>
                                <label
                                    htmlFor="modal-phone"
                                    style={{ ...styleLable, color: errors.phoneNumber ? '#d32f2f' : 'black' }}
                                >
                                    Số điện thoại
                                </label>
                                <TextField
                                    fullWidth
                                    id="modal-phone"
                                    variant="outlined"
                                    size="small"
                                    sx={{ marginBottom: '1rem' }}
                                    {...register('phoneNumber')}
                                    error={!!errors.phoneNumber}
                                    helperText={errors.phoneNumber?.message}
                                />
                            </Box>
                            <Stack sx={{ flexDirection: 'row', gap: '0 12px', flexWrap: 'wrap' }}>
                                <Box sx={{ flex: 1 }}>
                                    <label htmlFor="modal-phone" style={{ ...styleLable }}>
                                        Ngày sử dụng
                                    </label>
                                    <TextField
                                        fullWidth
                                        id="modal-phone"
                                        type="date"
                                        variant="outlined"
                                        size="small"
                                        sx={{ marginBottom: '1rem' }}
                                        {...register('dateBooking')}
                                        error={!!errors.dateBooking}
                                        helperText={errors.dateBooking?.message}
                                    />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <label htmlFor="modal-phone" style={{ ...styleLable }}>
                                        Thời gian
                                    </label>
                                    <TextField
                                        fullWidth
                                        id="modal-phone"
                                        type="time"
                                        variant="outlined"
                                        size="small"
                                        sx={{ marginBottom: '1rem' }}
                                        {...register('timeBooking')}
                                        error={!!errors.timeBooking}
                                        helperText={errors.timeBooking?.message}
                                    />
                                </Box>
                            </Stack>
                            <Box>
                                <label htmlFor="modal-note" style={{ ...styleLable }}>
                                    Ghi chú
                                </label>
                                <TextField
                                    fullWidth
                                    id="modal-note"
                                    placeholder="Nhập vào ghi chú của bạn ..."
                                    multiline
                                    rows={2}
                                    {...register('noteBooking')}
                                />
                            </Box>
                        </Box>
                        <Stack sx={{ justifyContent: 'flex-end' }}>
                            <Button type="submit" variant="contained">
                                Đặt hàng
                            </Button>
                        </Stack>
                    </form>
                </Box>
                <DialogConfig open={open} handleClose={handleClose} userInfoBookingTable={userInfoBookingTable} />
            </Box>
        );
    }
}

const DialogConfig = ({ open, handleClose, userInfoBookingTable }) => {
    const { cartBooking } = useContext(ContextModalBooking);

    const [openListProduct, setOpenListProduct] = useState(false);

    const handleClickBookingTable = () => {
        const data = {
            tableId: userInfoBookingTable.id,
            userName: userInfoBookingTable.fullName,
            phone: userInfoBookingTable.phoneNumber,
            time: userInfoBookingTable.dateBooking + '/' + userInfoBookingTable.timeBooking,
            note: userInfoBookingTable.noteBooking,
            products: { ...cartBooking },
        };

        console.log(data);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
        >
            <Box width={500}>
                <DialogTitle>{'Xác nhận đặt Bàn!'}</DialogTitle>
                <DialogContent>
                    <Table aria-label="spanning table">
                        <TableBody>
                            <TableRow>
                                <TableCell>Full name:</TableCell>
                                <TableCell align="right" sx={{ textTransform: 'capitalize' }}>
                                    {userInfoBookingTable.fullName}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Phone number:</TableCell>
                                <TableCell align="right">{userInfoBookingTable.phoneNumber}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Table index:</TableCell>
                                <TableCell align="right">
                                    Floor {userInfoBookingTable.floor} - {userInfoBookingTable.index_table}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Estimated time:</TableCell>
                                <TableCell align="right">
                                    {userInfoBookingTable.dateBooking} : {userInfoBookingTable.timeBooking}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Address:</TableCell>
                                <TableCell align="right">{userInfoBookingTable.address_shop}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Note:</TableCell>
                                <TableCell align="right">{userInfoBookingTable.noteBooking}</TableCell>
                            </TableRow>
                            <TableRow key={v4()}>
                                <TableCell>
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        onClick={() => setOpenListProduct(!openListProduct)}
                                    >
                                        {openListProduct ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell>Sản phẩm đặt trước</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Collapse in={openListProduct} timeout="auto" unmountOnExit>
                                        <Box sx={{ margin: 1 }}>
                                            <Table size="small" aria-label="purchases">
                                                <TableBody>
                                                    <TableRow key={v4()}>
                                                        <TableCell>Stt</TableCell>
                                                        <TableCell align="right">Product name</TableCell>
                                                        <TableCell align="right">Price</TableCell>
                                                        <TableCell align="right">Quantity</TableCell>
                                                    </TableRow>
                                                    {cartBooking.map((item) => {
                                                        return (
                                                            <TableRow key={v4()}>
                                                                <TableCell>{item.id}</TableCell>
                                                                <TableCell align="right">{item.name}</TableCell>
                                                                <TableCell align="right">
                                                                    {fomatMoney(item.price)}
                                                                </TableCell>
                                                                <TableCell align="right">x{item.quantity}</TableCell>
                                                            </TableRow>
                                                        );
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClickBookingTable}>Đặt bàn</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

const styleLable = {
    marginBottom: '6px',
    display: 'inline-block',
};

const Header = styled('div')({
    position: 'relative',
    borderBottom: '1px solid rgb(224, 227, 231)',
    padding: '12px',

    h2: {
        fontSize: '1.3rem',
        fontFamily: '"Roboto Slab",serif',
    },
});
export default ChildBooking;
