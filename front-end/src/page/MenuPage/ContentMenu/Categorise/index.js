import { Box, Stack, styled } from '@mui/material';
import { useState } from 'react';
import { DownArrow, Search } from '~/component/Icons';
import { Card } from '~/component/client/Card';
import { TitleViewAll } from '~/component/client/TitleViewAll';
import ProductCategory from './ProductCategory';

function Categories() {
    const [open, setOpen] = useState(true);
    const [categoriesValue, setCategoriesValue] = useState([]);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Card className={{ padding: '1.5rem' }}>
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
                <Stack
                    sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={handleClick}
                >
                    <TitleViewAll
                        sizeTitle="24px"
                        sx={{ padding: '0', margin: '1rem 0 0.5rem 0' }}
                        sxLink={{ display: 'none' }}
                        title="Categories"
                    />
                    <DownArrow />
                </Stack>

                <ProductCategory
                    open={open}
                    categoriesValue={categoriesValue}
                    setCategoriesValue={setCategoriesValue}
                />
            </Box>
        </Card>
    );
}

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
});

export default Categories;
