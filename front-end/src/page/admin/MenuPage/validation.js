/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import regexs from '~/Helpers/regex';

export const validateAddProduct = yup.object({
    name: yup.string().required('Tên sản phẩm không được để trống'),
    costCapital: yup.string().required('Giá gốc sản phẩm không được để trống'),
    price: yup.string().required('Giá sản phẩm không được để trống'),
    categories: yup.string().required('Danh mục sản phẩm không được để trống'),
    image: yup.mixed().test('required', 'Hình ảnh không được để trống', (value) => {
        if (value.length > 0) {
            return true;
        }
        return false;
    }),
});

export const validateAddCategory = yup.object({
    name: yup.string().required('Tên sản phẩm không được để trống'),
    categoriesTypeId: yup.string().required('Tên sản phẩm không được để trống'),
    image: yup.mixed().test('required', 'Hình ảnh không được để trống', (value) => {
        if (value.length > 0) {
            return true;
        }
        return false;
    }),
});

export const formYup = (validate) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validate),
    });

    return { register, handleSubmit, reset, errors };
};
