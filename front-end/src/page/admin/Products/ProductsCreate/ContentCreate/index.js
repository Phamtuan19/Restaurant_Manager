import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Box,
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    Select,
    Stack,
    TextField,
    styled,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { images } from '~/assets/image';
import firebaseUploadImage from '~/services/firebase.service';
import productSeviver from '~/services/product.service';
import setToastMessage from '~/Helpers/toastMessage';
import { v4 } from 'uuid';

const validate = yup.object({
    name: yup.string().required('Tên sản phẩm không được để trống'),
    categories: yup.string().required('Danh mục sản phẩm không được để trống'),
    price: yup.number().typeError('Vui lòng nhập đúng giá tiền').min(0, 'Giá trị không được âm'),
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
        reset,
    } = useForm({
        resolver: yupResolver(validate),
    });
    const [loadingUploadImage, setLoadingUploadImage] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const getCategories = async () => {
            const res = await productSeviver.adminProductsCategories();
            if (res.status === 200) {
                setCategories(res.categories);
            }
        };
        getCategories();
    }, []);

    const handleImageChange = async (event) => {
        if (event.target.files[0]) {
            setLoadingUploadImage((prev) => !prev);
            const res = await firebaseUploadImage(event, setImageUrl);
            setImageUrl(res);
            setLoadingUploadImage((prev) => !prev);
        } else {
            setImageUrl(null);
        }
    };

    const handleSubmitForm = async (data) => {
        console.log({ ...data, image: imageUrl });
        const response = await productSeviver.adminProductsCreate({ ...data, image: imageUrl });
        if (response?.status === 200) {
            reset();
            setImageUrl(null);
            console.log(response);
            if (response?.message) {
                setToastMessage(response.message, 'success');
            } else {
                setToastMessage('Đã có lỗi xảy ra!', 'error');
            }
        }
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
                                    {...register('name')}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <FormControl fullWidth error={!!errors.categories}>
                                    <LabelCustom htmlFor="product_category">Danh mục</LabelCustom>
                                    <Select
                                        id="product_category"
                                        size="small"
                                        value={category}
                                        {...register('categories')}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <MenuItem value="" defaultChecked></MenuItem>
                                        {categories.map((category) => {
                                            return (
                                                <MenuItem key={v4()} value={category.id}>
                                                    {category.name}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                    <FormHelperText>{errors.categories?.message}</FormHelperText>
                                </FormControl>
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
                            <Box sx={{ position: 'relative', zIndex: 1 }}>
                                <LabelCustom
                                    loading={true}
                                    htmlFor="product_images"
                                    sx={{
                                        zIndex: 2,
                                        cursor: 'pointer',
                                        width: '100%',
                                        height: '400px',
                                        background: 'center center/cover no-repeat',
                                        backgroundImage: `url('${imageUrl || images.noImage}')`,
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
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        display: loadingUploadImage ? 'flex' : 'none',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        zIndex: 10,
                                    }}
                                >
                                    <CircularProgress />
                                </Box>
                            </Box>

                            <Box sx={{ fontSize: '0.75rem', color: '#d32f2f' }}>{errors.image?.message}</Box>
                        </Grid>
                    </Grid>
                </Grid>

                <LoadingButton type="submit" variant="contained" loadingPosition="end" endIcon={<SaveIcon />}>
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

export const LabelCustom = styled('label')({
    marginBottom: '.5rem',
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#212529',
    textAlign: 'left',
    fontFamily: '"Roboto Slab",serif',
});

export const TextFieldCustom = styled(TextField)({
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
