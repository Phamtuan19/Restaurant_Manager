import { LoadingButton } from '@mui/lab';
import { Box, FormControl, FormHelperText, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { Clear } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';

import UploadImage from '~/component/UploadImage';
import productSeviver from '~/services/product.service';
import setToastMessage from '~/Helpers/toastMessage';
import { formYup, validateAddCategory, validateAddProduct } from '../validation';
import categoriesService from '~/services/categories.service';
import { ContextModalMenu } from '..';

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
        name: 'costCapital',
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
        name: 'priceSale',
        variant: 'standard',
        placeholder: '',
    },
];

function AddProduct({ setOpenModal }) {
    const { register, handleSubmit, reset, errors } = formYup(validateAddProduct);

    const [valueSelect, setValueSelect] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [categories, setCategories] = useState([]);

    const { setReRender } = useContext(ContextModalMenu);

    useEffect(() => {
        (async () => {
            const res = await categoriesService.adminCategories();
            setCategories(res.categories);
        })();
    }, []);

    const handleSubmitForm = async (data) => {
        const dataApi = { ...data, image: imageUrl };

        console.log(dataApi);
        try {
            await productSeviver.adminProductsCreate(dataApi);
            setReRender((prev) => !prev);
            reset();
            setImageUrl(null);
            setToastMessage('Thêm danh mục thành công!', 'success');
        } catch (error) {
            console.log(error);
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
                    Thêm sản phẩm
                </Typography>
                <Box position="absolute" top={-15} right={-11} sx={{ cursor: 'pointer' }} onClick={handleClose}>
                    <Clear />
                </Box>
            </Box>
            <Box mt={3}>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} lg={6}>
                            <Stack gap="24px 0">
                                {Listform1.map((item) => {
                                    return (
                                        <Box key={item.lableName} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box width="50%" fontSize="1rem">
                                                {item.lableName}
                                            </Box>
                                            <TextField
                                                fullWidth
                                                variant="standard"
                                                {...register(item.name)}
                                                error={!!errors[item.name]}
                                                helperText={errors[item.name]?.message}
                                                placeholder={item.placeholder}
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
                                                onChange={(e) => setValueSelect(e.target.value)}
                                            >
                                                {(categories || []).map((item) => (
                                                    <MenuItem key={item.id} value={item.id}>
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
                                        <Box key={item.lableName} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box width="50%" fontSize="1rem">
                                                {item.lableName}
                                            </Box>
                                            <TextField
                                                fullWidth
                                                variant="standard"
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
                            <span>Thêm mới</span>
                        </LoadingButton>
                    </Box>
                </form>
            </Box>
        </React.Fragment>
    );
}

export default AddProduct;
