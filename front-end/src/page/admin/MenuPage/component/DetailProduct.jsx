import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, FormControl, FormHelperText, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Delete } from '~/component/Icons';
import UploadImage from '~/component/UploadImage';
import * as yup from 'yup';
import setToastMessage from '~/Helpers/toastMessage';
import { v4 } from 'uuid';
import productSeviver from '~/services/product.service';

const validate = yup.object({
    name: yup.string().required('Tên sản phẩm không được để trống'),
    cost_capital: yup.string().required('Giá gốc sản phẩm không được để trống'),
    price: yup.string().required('Giá sản phẩm không được để trống'),
    categories: yup.string().required('Danh mục sản phẩm không được để trống'),
    image: yup.mixed().test('required', 'Hình ảnh không được để trống', (value) => {
        if (value.length > 0) {
            return true;
        }
        return false;
    }),
});

const Listform1 = [
    {
        lableName: 'Mã sản phẩm',
        name: 'code',
        variant: 'standard',
        placeholder: 'Mã sản phẩm tự động',
        component: TextField,
    },
    {
        lableName: 'Tên sản phẩm',
        name: 'name',
        variant: 'standard',
        placeholder: '',
        component: TextField,
    },
];

const Listform2 = [
    {
        lableName: 'Giá vốn',
        name: 'cost_capital',
        variant: 'standard',
        placeholder: '',
    },
    {
        lableName: 'Giá bán',
        name: 'price',
        variant: 'standard',
        placeholder: '',
    },
    {
        lableName: 'Giá Khuyến mại',
        name: 'price_sale',
        variant: 'standard',
        placeholder: '',
    },
];

function DetailProduct({ content, setOpenModal }) {
    const { component, productId } = content;
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const [valueSelect, setValueSelect] = useState(product.category_id || '');
    const [imageUrl, setImageUrl] = useState(product.image);

    useEffect(() => {
        (async () => {
            const res = await productSeviver.adminGetProduct(productId);
            setProduct(res.product);
            setCategories(res.categories);
        })();
    }, [productId]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validate),
    });

    const handleSubmitForm = async (data) => {
        const dataApi = { ...data, image: imageUrl };
        try {
            const res = await productSeviver.adminPatchProduct(dataApi, productId);
            reset();
            setImageUrl(null);
            setToastMessage(res.message, 'success');
        } catch (error) {
            setToastMessage('Đã có lỗi xảy ra!');
        }
    };

    const handleClose = () => {
        reset();
        setImageUrl(null);
        setOpenModal(false);
    };

    return (
        <React.Fragment>
            <Box position="relative">
                <Typography variant="h6" component="h2" fontWeight="bold" fontSize="1rem">
                    Chi tiết sản phẩm
                </Typography>
                <Box position="absolute" top={-15} right={-11} sx={{ cursor: 'pointer' }} onClick={handleClose}>
                    <Delete width="1.2rem" />
                </Box>
            </Box>
            <Box mt={3}>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} lg={6}>
                            <Stack gap="24px 0">
                                {Listform1.map((item) => {
                                    return (
                                        <Box key={v4()} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box width="50%" fontSize="1rem">
                                                {item.lableName}
                                            </Box>
                                            <TextField
                                                fullWidth
                                                variant="standard"
                                                {...register(item.name)}
                                                value={product[item.name]}
                                                error={!!errors[item.name]}
                                                helperText={errors[item.name]?.message}
                                                placeholder="phạm anh tuấn"
                                            />
                                        </Box>
                                    );
                                })}
                                <FormControl fullWidth error={!!errors.name}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <Box width="50%">Danh mục</Box>
                                        <Stack width="100%">
                                            <Select
                                                fullWidth
                                                size="small"
                                                variant="standard"
                                                {...register('categories')}
                                                value={valueSelect}
                                                defaultValue={product.category_id}
                                                onChange={(e) => setValueSelect(e.target.value)}
                                            >
                                                {(categories || []).map((item) => (
                                                    <MenuItem key={v4()} value={item.id}>
                                                        {item.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <FormHelperText>{errors.categories?.message}</FormHelperText>
                                        </Stack>
                                    </Box>
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                            <Stack gap="24px 0">
                                {Listform2.map((item) => {
                                    return (
                                        <Box key={v4()} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box width="50%" fontSize="1rem">
                                                {item.lableName}
                                            </Box>
                                            <TextField
                                                fullWidth
                                                variant="standard"
                                                value={product[item.name]}
                                                {...register(item.name)}
                                                error={!!errors[item.name]}
                                                helperText={errors[item.name]?.message}
                                                placeholder={item.placeholder}
                                            />
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box mt={3} width={200} height={200}>
                        <UploadImage
                            name={{ ...register('image') }}
                            errors={errors.image}
                            imageUrl={imageUrl}
                            setImageUrl={setImageUrl}
                        />
                    </Box>

                    <Box sx={{ mt: 4, mb: 2 }}>
                        <LoadingButton type="submit" variant="contained">
                            <span>Thay đổi</span>
                        </LoadingButton>
                    </Box>
                </form>
            </Box>
        </React.Fragment>
    );
}

export default DetailProduct;
