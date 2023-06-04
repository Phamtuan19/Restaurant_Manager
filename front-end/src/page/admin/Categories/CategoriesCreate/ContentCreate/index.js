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
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { LoadingButton } from '@mui/lab';
import { images } from '~/assets/image';
import categoriesService from '~/services/categories.service';
import setToastMessage from '~/Helpers/toastMessage';

function ContentCreate() {
    const [updateCategoriesList, setUpdateCategoriesList] = useState(false);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const categoriesList = async () => {
            const response = await categoriesService.adminCategories();
            setRows(response?.data);

            setUpdateCategoriesList(false);
        };

        categoriesList();
    }, [updateCategoriesList]);

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
                                        <TableCell sx={{ width: 70 }}>Stt</TableCell>
                                        <TableCell align="left">Name</TableCell>
                                        <TableCell align="left">Type</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={v4()} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.type}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <FormCreateCategories setUpdateCategoriesList={setUpdateCategoriesList} />
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
    name: yup.string().required('Tên danh mục không được để trống'),
    type: yup.string().required('Xếp loại danh mục không được để trống'),
});

const FormCreateCategories = ({ setUpdateCategoriesList }) => {
    const [loading, setLoading] = useState(false);
    const [selectType, setSelectType] = useState('');
    const [selectParent, setSelectParent] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ criteriaMode: 'all', resolver: yupResolver(validate) });

    const handleSubmitForm = async (data) => {
        const response = await categoriesService.adminCategoriesCreate(data);
        if (response?.status === 200) {
            // const [data] = response;
            console.log(response);
            if (response?.message) {
                setToastMessage(response.message, 'success');
                setUpdateCategoriesList(true);
            }

            setToastMessage(response[0]?.name[0], 'error');
        }
    };

    const hanleChangeSlectType = (e) => {
        setSelectType(e.target.value);
    };
    const hanleChangeSlectParent = (e) => {
        setSelectParent(e.target.value);
    };

    return (
        <Box sx={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: '10px' }}>
            <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
                <Box>
                    <label
                        htmlFor="modal-name"
                        style={{ ...styleLable, color: errors.name ? '#d32f2f' : 'var(--black)' }}
                    >
                        Tên danh mục
                    </label>
                    <TextField
                        fullWidth
                        id="modal-name"
                        variant="outlined"
                        size="small"
                        sx={{ marginBottom: '1rem' }}
                        {...register('name')}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </Box>

                <Box sx={{ marginBottom: '1rem' }}>
                    <FormControl fullWidth error={!!errors.type}>
                        <label
                            htmlFor="modal-type"
                            style={{ ...styleLable, color: errors.type ? '#d32f2f' : 'var(--black)' }}
                        >
                            Xếp loại
                        </label>
                        <Select
                            fullWidth
                            id="modal-type"
                            value={selectType}
                            variant="outlined"
                            size="small"
                            {...register('type')}
                            onChange={hanleChangeSlectType}
                        >
                            <MenuItem value="" defaultChecked></MenuItem>
                            <MenuItem value="sản phẩm">Sản phẩm</MenuItem>
                            <MenuItem value="nguyên liệu">Nguyên liệu</MenuItem>
                        </Select>
                        <FormHelperText>{errors.type?.message}</FormHelperText>
                    </FormControl>
                </Box>

                <Box sx={{ marginBottom: '1rem' }}>
                    <FormControl fullWidth error={!!errors.parentId}>
                        <label
                            htmlFor="modal-parentId"
                            style={{ ...styleLable, color: errors.parentId ? '#d32f2f' : 'var(--black)' }}
                        >
                            Danh mục cha
                        </label>
                        <Select
                            fullWidth
                            id="modal-parentId"
                            value={selectParent}
                            variant="outlined"
                            size="small"
                            {...register('parentId')}
                            onChange={hanleChangeSlectParent}
                        >
                            <MenuItem value="" defaultChecked></MenuItem>
                            <MenuItem value="">danh mục 1</MenuItem>
                            <MenuItem value="">danh mục 2</MenuItem>
                        </Select>
                        <FormHelperText>{errors.parentId?.message}</FormHelperText>
                    </FormControl>
                </Box>
                <LoadingButton type="submit" sx={{ marginTop: '1rem' }} variant="contained" loading={loading}>
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
