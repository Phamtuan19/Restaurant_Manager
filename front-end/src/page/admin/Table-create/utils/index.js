/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import regexs from '~/Helpers/regex';

const validate = yup.object({
   //    name: yup.string().required('Tên sản phẩm không được để trống').trim(),
   //    categoryId: yup.string().required('Danh mục sản phẩm không được để trống'),
   //    costCapital: yup
   //       .string()
   //       .required('Giá Giốc không được để trống')
   //       .matches(regexs.decimal, 'Vui lòng nhập đúng giá')
   //       .trim(),
   //    price: yup.string().required('Giá bán không được để trống').matches(regexs.decimal, 'Vui lòng nhập đúng giá').trim(),
   // priceSale: yup
   //    .string()
   //    .test('check-number', 'Giá khuyến mại phải là số', (value) => {
   //       if (value && value.trim() !== '' && regexs.number.test(value.trim()) && regexs.number.test(value.trim())) {
   //          return true;
   //       } else {
   //          return false;
   //       }
   //    })
   //    .test('check-number', 'Giá không được âm', (value) => {
   //       if (value && value.trim() !== '') {
   //          return Number(value) > 0;
   //       } else {
   //          return true;
   //       }
   //    }),
});

export const formYup = () => {
   const form = useForm({
      mode: 'onBlur',
      resolver: yupResolver(validate),
   });

   return form;
};
