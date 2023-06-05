/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import {
    Box,
    Grid,
    Pagination,
    PaginationItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    styled,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import categoriesService from '~/services/categories.service';
import { Link } from 'react-router-dom';
import FormCreateCategories from './FormCreateCategories';

function ContentCreate() {
    const [updateCategoriesList, setUpdateCategoriesList] = useState(false);
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const categoriesList = async () => {
            const response = await categoriesService.adminCategories(page);
            if (response) {
                setCategories(response);
            }
            setUpdateCategoriesList(false);
        };
        categoriesList();
    }, [updateCategoriesList, page]);

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
                                        <TableCell align="left" sx={{ width: 70 }}></TableCell>
                                        <TableCell align="left">Name</TableCell>
                                        <TableCell align="left">Type</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(categories?.categories?.data || []).map((row, index) => (
                                        <TableRow key={v4()} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell align="left">{index + 1}</TableCell>
                                            <TableCell align="left">
                                                <img src={row.image} alt="" width={70} />
                                            </TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.type}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                            <Pagination
                                page={page}
                                count={categories?.categories?.last_page || 1}
                                onChange={(event, value) => setPage(value)}
                                renderItem={(item) => (
                                    <PaginationItem component={Link} to={`?page=${item.page}`} {...item} />
                                )}
                            />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <FormCreateCategories
                        categories={categories?.categoriesCreate}
                        setUpdateCategoriesList={setUpdateCategoriesList}
                    />
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

export default ContentCreate;
