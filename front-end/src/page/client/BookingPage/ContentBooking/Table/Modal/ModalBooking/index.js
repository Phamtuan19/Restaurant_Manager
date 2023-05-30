import { Box, Button, Stack, TextField, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Delete } from '~/component/Icons';
import moment from 'moment';

const regexPhoneNumber = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

function ModalBooking({ modalChildBooking, handleCloseModalBooking }) {
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

    const onSubmit = (data) => {
        const newData = {
            ...data,
            dateBooking: moment(data.dateBooking).format('YYYY-MM-DD'),
        };

        console.log(newData);
    };

    return (
        <BoxChildModal
            sx={{
                minHeight: modalChildBooking ? { xs: 580, md: 'auto' } : 0,

                width: modalChildBooking ? { xs: '105%', md: 500 } : 400,
                opacity: modalChildBooking ? 1 : 0,
                transform: modalChildBooking
                    ? { xs: 'translate(2.5%, -0.3%)', md: 'translate(101%, -0.3%)' }
                    : 'translate(0%, 0%)',
            }}
        >
            <Header id="child-modal-title">
                <Box
                    sx={{
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        transform: 'translate(50%, -50%)',
                    }}
                    onClick={handleCloseModalBooking}
                >
                    <Delete />
                </Box>
                <h2>From Đặt hàng</h2>
            </Header>
            <Content sx={{ display: modalChildBooking ? 'flex' : 'none' }}>
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
                        <Stack sx={{ flexDirection: 'row', gap: '0 12px' }}>
                            <Box sx={{ flex: 1 }}>
                                <label htmlFor="modal-phone" style={{ ...styleLable }}>
                                    Thời gian
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
            </Content>
        </BoxChildModal>
    );
}

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

const Content = styled('div')({
    height: '100%',
    flexDirection: 'column',
    padding: '2rem 2rem 1rem 2rem',
});

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

export default ModalBooking;
