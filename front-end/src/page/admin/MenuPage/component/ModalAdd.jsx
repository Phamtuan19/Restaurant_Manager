import { LoadingButton } from '@mui/lab';
import {
    Box,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    Modal,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { Delete } from '~/component/Icons';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 } from 'uuid';
import { useState } from 'react';

const validate = yup.object({
    code: yup.string().required('Mã sản phẩm không được để trống'),
    name: yup.string().required('Tên sản phẩm không được để trống'),
    cost_capital: yup.string().required('Giá gốc sản phẩm không được để trống'),
    price: yup.string().required('Giá sản phẩm không được để trống'),
    price_sale: yup.string().required('Giá khuyến mai sản phẩm không được để trống'),
    categories: yup.string().required('Danh mục sản phẩm không được để trống'),
    description: yup.string().required('Mô tả phẩm không được để trống'),
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

function ModalAdd({ openModal, setOpenModal }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validate),
    });

    const [valueSelect, setValueSelect] = useState('');

    const handleSubmitForm = async (data) => {
        console.log(data);
    };

    const handleClose = () => {
        reset();
        setOpenModal(false);
    };
    return (
        <div>
            <Modal
                keepMounted
                open={openModal}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Box position="relative">
                        <Typography variant="h6" component="h2" fontWeight="bold" fontSize="1rem">
                            Thêm sản phẩm
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
                                                        error={!!errors[item.name]}
                                                        helperText={errors[item.name]?.message}
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
                                                        <MenuItem value="">1</MenuItem>
                                                        <MenuItem value="2">2</MenuItem>
                                                        <MenuItem value="3">3</MenuItem>
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
                                                        {...register(item.name)}
                                                        error={!!errors[item.name]}
                                                        helperText={errors[item.name]?.message}
                                                        placeholder={item.placeholder}
                                                    />
                                                </Box>
                                            );
                                        })}

                                        <Box key={v4()} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box width="50%" fontSize="1rem">
                                                Giá khuyến mại
                                            </Box>
                                            <TextField
                                                fullWidth
                                                variant="standard"
                                                {...register('price_sale')}
                                                error={!!errors.price_sale}
                                                helperText={errors.price_sale?.message}
                                            />
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6} lg={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 3 }}>
                                        <Box width="50%">Mô tả</Box>
                                        <TextField
                                            fullWidth
                                            placeholder="Mô tả sản phẩm"
                                            variant="outlined"
                                            multiline
                                            rows={8}
                                            {...register('description')}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6} lg={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 3 }}>
                                        <Box width="50%">Hình ảnh</Box>
                                        <TextField
                                            fullWidth
                                            placeholder="Mô tả sản phẩm"
                                            variant="outlined"
                                            multiline
                                            rows={8}
                                            {...register('description')}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>

                            <LoadingButton type="submit" variant="contained" sx={{ mt: 3 }}>
                                <span>Thêm mới</span>
                            </LoadingButton>
                        </form>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: '7px 7px 10px 10px',
};

export default ModalAdd;
