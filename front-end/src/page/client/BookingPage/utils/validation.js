/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import regexs from '~/Helpers/regex';
import useAuth from '~/hook/useAuth';
import { useBooking } from '~/redux/SliceReducer/booking.reducer';

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
   const { user } = useBooking();
   const { user: auth } = useAuth();

   var currentTime = new Date();
   currentTime.setMinutes(currentTime.getMinutes() + 30);
   const options = { hour: '2-digit', minute: '2-digit' };
   const form = useForm({
      resolver: yupResolver(validate),
      defaultValues: {
         date: user?.date || currentTime.toISOString().substr(0, 10),
         time: user?.time || currentTime.toLocaleTimeString([], options),
         partySize: user?.partySize || 4,
         phone: user?.phone || auth?.phone || '',
         name: user?.name || auth?.name || '',
         note: user?.note || '',
      },
   });

   return form;
};
