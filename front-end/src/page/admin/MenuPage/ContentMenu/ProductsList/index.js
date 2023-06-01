import {
    Box,
    styled,
    Grid,
    Stack,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
} from '@mui/material';
import { AddNew, ViewGrid, ViewTable } from '~/component/Icons';
import { Button } from '~/component/client/Button';
import ProductItem from './ProductItem';
import { useState } from 'react';

const productCategoriesList = [
    {
        title: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 7.65,
    },
    {
        title: 'Mushroom',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png',
        alt: 'profileimage',
        price: 7.65,
        price_sale: 10.21,
    },
];

function ProductsList() {
    const [viewProduct, setViewProduct] = useState(true);

    const handleClickView = () => {
        setViewProduct(!viewProduct);
    };

    return (
        <>
            <Header>
                <HeaderTitle>Danh sách sản phẩm</HeaderTitle>

                <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Button
                        sx={{
                            fontSize: '14px',
                            padding: '4px 12px',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: '12px',
                        }}
                    >
                        <AddNew fill="white" width="1.1rem" height="1.1rem" sx={{ marginLeft: '6px' }} />
                        thêm mới
                    </Button>

                    <Box
                        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'all 0.5s' }}
                        onClick={handleClickView}
                    >
                        {viewProduct ? (
                            <ViewGrid width="2rem" height="2rem" />
                        ) : (
                            <ViewTable width="2rem" height="2rem" />
                        )}
                    </Box>
                </Stack>
            </Header>

            {viewProduct ? <ViewListProductGrid /> : <ViewListProductTable />}
        </>
    );
}

const Header = styled('header')({
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const ViewListProductTable = () => {
    return (
        <TableContainer component={Paper} sx={{ width: '100%', overflow: 'hidden' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Stt</TableCell>
                        <TableCell align="center" width="35%">
                            Tên Món
                        </TableCell>
                        <TableCell align="center" width="20%">
                            Hình Ảnh
                        </TableCell>
                        <TableCell align="center" width="10%">
                            Trạng Thái
                        </TableCell>
                        <TableCell align="center" width="20%">
                            Giá
                        </TableCell>
                        <TableCell align="center" width="15%"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productCategoriesList.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                cursor: 'pointer',
                                '&:hover': { backgroundColor: '#cccccc2b' },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="center">{item.title}</TableCell>
                            <TableCell align="center">
                                <img src={item.img} alt={item.alt} width="60px" />
                            </TableCell>
                            <TableCell align="center">{item.status || 'Còn hàng'}</TableCell>
                            <TableCell align="center">{item.price}</TableCell>
                            <TableCell align="center">
                                <Button>Sửa</Button>
                                <Button>Xóa</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const ViewListProductGrid = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                {productCategoriesList.map((item, index) => {
                    return (
                        <Grid item xs={2} key={index}>
                            <ProductItem data={item} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

const HeaderTitle = styled('h3')({
    fontSize: '1.6rem',
    fontFamily: '"Roboto Slab",serif',
    color: 'var(--black)',
});

export default ProductsList;
