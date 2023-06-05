import { Box, Collapse, Skeleton, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { DownArrow, Search } from '~/component/Icons';
import { Card } from '~/component/client/Card';
import ProductCategory from './ProductCategory';
import { Button } from '~/component/client/Button';
import productSeviver from '~/services/product.service';

function Categories() {
    const [openCategories, setOpenCategories] = useState(true);
    const [categoriesValue, setCategoriesValue] = useState([]);
    const [openFilterSize, setOpenFilterSize] = useState(true);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const menuFilter = async () => {
            const res = await productSeviver.getMenuFilter();
            if (res) {
                setFilter(res);
            }
        };
        menuFilter();
    }, []);

    const handleClickCategories = () => {
        setOpenCategories(!openCategories);
    };

    const handleClickFilterSize = () => {
        setOpenFilterSize(!openFilterSize);
    };

    return (
        <Card
            className={{
                padding: '1.5rem',
                zIndex: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: '2px solid #fff',
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <Search
                    width="18px"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '15px',
                        transform: 'translateY(-50%)',
                    }}
                />
                <InputCategories placeholder="Nhập sản phẩm tìm kiếm ... " />
            </Box>
            <Box>
                <Box>
                    <WrapTitle onClick={handleClickCategories}>
                        <h3 style={styleTileFilter}>Categories</h3>
                        <DownArrow />
                    </WrapTitle>

                    <ProductCategory
                        open={openCategories}
                        categoriesValue={categoriesValue}
                        setCategoriesValue={setCategoriesValue}
                        categoryList={filter.categories}
                    />
                </Box>
                <Box>
                    <WrapTitle onClick={handleClickFilterSize} sx={{ marginBottom: '12px' }}>
                        <h3 style={styleTileFilter}>Filter by price</h3>
                        <DownArrow />
                    </WrapTitle>

                    <Collapse in={openFilterSize} timeout="auto" unmountOnExit>
                        <Box sx={{ display: 'flex', gap: '0 24px' }}>
                            <Button sx={styleButtonCustom}>L</Button>
                            <Button sx={styleButtonCustom}>M</Button>
                            <Button sx={styleButtonCustom}>S</Button>
                            <Button sx={styleButtonCustom}>X</Button>
                        </Box>
                    </Collapse>
                </Box>
            </Box>
        </Card>
    );
}

const styleTileFilter = {
    fontSize: '18px',
    padding: '0',
    margin: '1rem 0 0.5rem 0',
    fontFamily: '"Roboto Slab", serif',
};

const styleButtonCustom = {
    position: 'relative',
    display: 'block',
    padding: '5px',
    textAlign: 'center',
    width: '38px',
    height: '39.6px',
    borderRadius: '8px',
    backgroundColor: 'transparent !important',
    color: 'var(--black)',
    border: '1px solid rgba(234,106,18,.1) !important',

    '&:before': {
        content: '""',
        left: '50%',
        right: '50%',
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'rgba(234,106,18,.1) !important',
        transform: 'translate(-50%, -50%) scale(0)',
        transition: 'all 0.5s',
        borderRadius: '8px',
        zIndex: 1,
    },

    '&:hover': {
        color: 'var(--black)',
        zIndex: 2,

        '&:before': {
            top: '0',
            bottom: '0',
            width: '100%',
            height: '98%',
            transform: 'translate(-50%, 1%) scale(1)',
            transition: 'all 0.5s',
            zIndex: 1,
        },
    },
};

const InputCategories = styled('input')({
    width: '100%',
    padding: '0.4rem 1rem 0.4rem 3rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.75',
    color: '#959895',
    backgroundColor: '#fff',
    borderRadius: '1rem',
    border: '1px solid #e3e1e1',
    // fontFamily: '"Poppins", sans-serif',
});

const WrapTitle = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
});

export default Categories;
