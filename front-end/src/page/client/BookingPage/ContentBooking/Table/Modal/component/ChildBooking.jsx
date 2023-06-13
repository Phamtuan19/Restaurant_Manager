import { Box, Button, Stack, TextField, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Delete } from '~/component/Icons';
import moment from 'moment';

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

function ChildBooking({ openModalBooking, setOpenModalBooking }) {
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

    if (openModalBooking) {
        return (
            <Box
                sx={{
                    minHeight: { xs: 580, md: 'auto' },
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    background: '#fff',
                    borderRadius: '5px',
                    width: { xs: '100%', md: 500 },
                    transform: 'translate(102%, -0%)',
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
                <Content sx={{ padding: { xs: '1rem' }, display: 'flex' }}>
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
            </Box>
        );
    }
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
});

export default ChildBooking;
