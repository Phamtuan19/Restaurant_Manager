import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button, Grid, Stack, TextField, styled } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { images } from '~/assets/image';

const validate = yup.object({
    productName: yup.string().required('Tên sản phẩm không được để trống'),
    category: yup.string().required('Danh mục sản phẩm không được để trống'),
    price: yup.number().typeError('Vui lòng nhập đúng giá tiền').min(0, 'Giá trị không được âm'),
    priceSale: yup.number().typeError('Vui lòng nhập đúng giá tiền').min(0, 'Giá trị không được âm'),
    image: yup.mixed().test('required', 'Hình ảnh không được để trống', (value) => {
        if (value.length > 0) {
            return true;
        }
        return false;
    }),
});

function ContentCreate() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: 'all',
        resolver: yupResolver(validate),
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (event) => {
        console.log(event.target.files[0]);

        if (event.target.files[0]) {
            const file = event.target.files[0];
            setPreviewImage(URL.createObjectURL(file));
        } else {
            setPreviewImage(null);
        }
    };

    const handleSubmitForm = (data) => {
        console.log(data);
        setLoading(!loading);
    };


    return (
        <Box>
            <Stack
                sx={{
                    marginBottom: '1rem',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <HeaderAddProduct />
            </Stack>

            <FormCustom onSubmit={handleSubmit(handleSubmitForm)}>
                <Grid container spacing={2} sx={{ flexWrap: 'nowrap' }}>
                    <Grid item lg={8}>
                        <Grid container spacing={4}>
                            <Grid item lg={6}>
                                <LabelCustom htmlFor="product_name">Tên Món</LabelCustom>
                                <TextFieldCustom
                                    fullWidth
                                    id="product_name"
                                    placeholder="Tên món ăn"
                                    variant="outlined"
                                    size="small"
                                    {...register('productName')}
                                    error={!!errors.productName}
                                    helperText={errors.productName?.message}
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <LabelCustom htmlFor="product_category">Danh mục</LabelCustom>
                                <TextFieldCustom
                                    fullWidth
                                    id="product_category"
                                    placeholder="Danh mục sản phẩm"
                                    variant="outlined"
                                    size="small"
                                    {...register('category')}
                                    error={!!errors.category}
                                    helperText={errors.category?.message}
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <LabelCustom htmlFor="product_category">Giá bán</LabelCustom>
                                <TextFieldCustom
                                    fullWidth
                                    id="product_category"
                                    placeholder="Giá bán"
                                    variant="outlined"
                                    size="small"
                                    {...register('price')}
                                    error={!!errors.price}
                                    helperText={errors.price?.message}
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <LabelCustom htmlFor="product_category">Giá khuyến mại</LabelCustom>
                                <TextFieldCustom
                                    fullWidth
                                    id="product_category"
                                    placeholder="Giá khuyến mại"
                                    variant="outlined"
                                    size="small"
                                    {...register('priceSale')}
                                    error={!!errors.priceSale}
                                    helperText={errors.priceSale?.message}
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <LabelCustom htmlFor="product_category">Mô tả sản phẩm</LabelCustom>
                                <TextFieldCustom
                                    fullWidth
                                    id="product_category"
                                    placeholder="Mô tả sản phẩm"
                                    variant="outlined"
                                    size="small"
                                    multiline
                                    rows={4}
                                    {...register('description')}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4}>
                        <Grid item lg={12}>
                            <LabelCustom
                                htmlFor="product_images"
                                sx={{
                                    width: '100%',
                                    height: '400px',
                                    cursor: 'pointer',
                                    background: 'center center/cover no-repeat',
                                    backgroundImage: `url(${previewImage || images.noImage})`,
                                }}
                            >
                                <TextFieldCustom
                                    fullWidth
                                    type="file"
                                    id="product_images"
                                    variant="outlined"
                                    size="small"
                                    sx={{ opacity: 0 }}
                                    {...register('image')}
                                    onChange={handleImageChange}
                                />
                            </LabelCustom>
                            <Box sx={{ fontSize: '0.75rem', color: '#d32f2f' }}>{errors.image?.message}</Box>
                        </Grid>
                    </Grid>
                </Grid>

                <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={loading}
                    loadingPosition="end"
                    endIcon={<SaveIcon />}
                >
                    <span>Thêm mới</span>
                </LoadingButton>
            </FormCustom>
        </Box>
    );
}

const FormCustom = styled('form')({
    padding: '1.5rem 1rem',
    width: '100%',
    minHeight: '400px',
    backgroundColor: 'var(--white)',
    borderRadius: '10px',
});

const LabelCustom = styled('label')({
    marginBottom: '.5rem',
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#212529',
    textAlign: 'left',
    fontFamily: '"Roboto Slab",serif',
});

const TextFieldCustom = styled(TextField)({
    borderRadius: '.25rem',
    fontFamily: '"Roboto Slab",serif !important',
});

const HeaderAddProduct = () => {
    return (
        <>
            <HeaderTitle>Thêm sản phẩm</HeaderTitle>

            <Stack>
                <Button
                    sx={{
                        fontSize: '14px',
                        padding: '4px 12px',
                        borderRadius: '5px',
                        marginRight: '12px',
                    }}
                >
                    Danh sách sản phẩm
                </Button>
            </Stack>
        </>
    );
};

const HeaderTitle = styled('h3')({
    fontSize: '1.6rem',
    fontFamily: '"Roboto Slab",serif',
    color: 'var(--black)',
});

export default ContentCreate;
