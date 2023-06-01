import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Box,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    styled,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { LoadingButton } from '@mui/lab';

function ContentCreate() {
    const rows = [
        { id: 1, title: 'Đồ Uống', type: 'sản phẩm' },
        { id: 1, title: 'Đồ Uống', type: 'sản phẩm' },
        { id: 1, title: 'Đồ Uống', type: 'sản phẩm' },
        { id: 1, title: 'Đồ Uống', type: 'sản phẩm' },
    ];

    return (
        <>
            <Header>
                <HeaderTitle>Danh mục sản phẩm</HeaderTitle>
            </Header>

            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Box sx={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: '10px' }}>
                        <TableContainer component={Paper} sx={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 1px' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ width: 50 }}>Stt</TableCell>
                                        <TableCell align="center">Name</TableCell>
                                        <TableCell align="center">Type</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={v4()} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell align="center">{row.id}</TableCell>
                                            <TableCell align="center">{row.title}</TableCell>
                                            <TableCell align="center">{row.type}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <FormCreateCategories />
                </Grid>
            </Grid>
        </>
    );
}

const Header = styled('header')({
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const HeaderTitle = styled('h3')({
    fontSize: '1.6rem',
    fontFamily: '"Roboto Slab",serif',
    color: 'var(--black)',
});

const validate = yup.object({
    categoryName: yup.string().required('Tên danh mục không được để trống'),
    categoryType: yup.string().required('Xếp loại danh mục không được để trống'),
});

const FormCreateCategories = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ criteriaMode: 'all', resolver: yupResolver(validate) });

    const handleSubmitForm = (data) => {
        console.log(data);
        setLoading(!loading);
    };

    return (
        <Box sx={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: '10px' }}>
            <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
                <Box>
                    <label
                        htmlFor="modal-name"
                        style={{ ...styleLable, color: errors.categoryName ? '#d32f2f' : 'var(--black)' }}
                    >
                        Tên danh mục
                    </label>
                    <TextField
                        fullWidth
                        id="modal-name"
                        variant="outlined"
                        size="small"
                        sx={{ marginBottom: '1rem' }}
                        {...register('categoryName')}
                        error={!!errors.categoryName}
                        helperText={errors.categoryName?.message}
                    />
                </Box>

                <Box sx={{ marginBottom: '1rem' }}>
                    <FormControl fullWidth error={!!errors.categoryType}>
                        <label
                            htmlFor="modal-name"
                            style={{ ...styleLable, color: errors.categoryType ? '#d32f2f' : 'var(--black)' }}
                        >
                            Xếp loại
                        </label>
                        <Select fullWidth id="modal-name" variant="outlined" size="small" {...register('categoryType')}>
                            <MenuItem value={10}>Sản phẩm</MenuItem>
                            <MenuItem value={20}>Nguyên liệu</MenuItem>
                        </Select>
                        <FormHelperText>{errors.categoryType?.message}</FormHelperText>
                    </FormControl>
                </Box>

                <LoadingButton type="submit" variant="contained" loading={loading} loadingPosition="end">
                    <Box sx={{ marginRight: loading ? 2.5 : 0 }}>Thêm mới</Box>
                </LoadingButton>
            </form>
        </Box>
    );
};

const styleLable = {
    marginBottom: '6px',
    display: 'inline-block',
};

export default ContentCreate;
