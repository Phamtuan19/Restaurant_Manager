import { Box, Skeleton, Stack, styled } from '@mui/material';
import { useContext, useState } from 'react';
import { DownArrow, Search } from '~/component/Icons';
import { Card } from '~/component/client/Card';
import ProductCategory from './ProductCategory';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';

function Categories() {
    const [open, setOpen] = useState(true);
    const [categoriesValue, setCategoriesValue] = useState([]);

    const { skeleton } = useContext(SkeletonLoading);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Card className={{ padding: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', border: '2px solid #fff' }}>
            <Box sx={{ position: 'relative' }}>
                {skeleton ? (
                    <Skeleton variant="text" width={280} height={60} />
                ) : (
                    <>
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
                    </>
                )}
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
                    {skeleton ? (
                        <Skeleton variant="text" width={280} height={60} />
                    ) : (
                        <>
                            <h3
                                style={{
                                    fontSize: '24px',
                                    padding: '0',
                                    margin: '1rem 0 0.5rem 0',
                                    fontFamily: '"Roboto Slab", serif',
                                }}
                            >
                                Categories
                            </h3>
                            <DownArrow />
                        </>
                    )}
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
    // fontFamily: '"Poppins", sans-serif',
});

export default Categories;
