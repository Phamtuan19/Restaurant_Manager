/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import regexs from '~/Helpers/regex';
import useAuth from '~/hooks/useAuth';
import { useBooking } from '~/redux/SliceReducer/booking.reducer';

export const validate = yup
   .object({
      name: yup.string().required('Tên không được để trống'),
      phone: yup
         .string()
         .required('Số điện thoại không được để trống')
         .matches(regexs.phone, 'Số điện thoại không đúng'),
      district: yup.string().required('Không được để trống'),
      // ward: yup.string().required('Không được để trống'),
   })
   .required();

export const formYup = () => {
   const { user } = useBooking();
   const { user: auth } = useAuth();

   const form = useForm({
      resolver: yupResolver(validate),
      defaultValues: {
         phone: user?.phone || auth?.phone || '',
         name: user?.name || auth?.name || '',
         note: user?.note || '',
      },
   });

   return form;
};
