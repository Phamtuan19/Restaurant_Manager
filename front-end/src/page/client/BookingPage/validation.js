/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import regexs from '~/Helpers/regex';

export const validate = yup
    .object({
        name: yup.string().required('Tên không được để trống'),
        phone: yup
            .string()
            .required('Số điện thoại không được để trống')
            .matches(regexs.phone, 'Số điện thoại không đúng'),

        date: yup
            .date()
            .typeError('Ngày không được để trống')
            .test('is-valid-date', 'Vui lòng chọn đúng ngày nhận', (value) => {
                const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
                return value >= yesterday;
            }),
        time: yup.string().required('Thời gian nhận bàn không được để trống'),
        // .test('is-valid-time', 'Vui lòng chọn đúng giờ nhận', (value) => {
        //     const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        //     return value >= currentTime;
        // }),
    })
    .required();

export const formYup = () => {
    var currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + 30);
    const options = { hour: '2-digit', minute: '2-digit' };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        criteriaMode: 'all',
        resolver: yupResolver(validate),
        defaultValues: {
            date: currentTime.toISOString().substr(0, 10),
            time: currentTime.toLocaleTimeString([], options),
        },
    });

    return { register, handleSubmit, reset, errors };
};
