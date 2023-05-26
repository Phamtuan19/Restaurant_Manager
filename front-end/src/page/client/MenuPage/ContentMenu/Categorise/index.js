import { Box, Collapse, Skeleton, styled } from '@mui/material';
import { useContext, useState } from 'react';
import { DownArrow, Search } from '~/component/Icons';
import { Card } from '~/component/client/Card';
import ProductCategory from './ProductCategory';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';
import { Button } from '~/component/client/Button';

function Categories() {
    const [openCategories, setOpenCategories] = useState(true);
    const [categoriesValue, setCategoriesValue] = useState([]);
    const [openFilterSize, setOpenFilterSize] = useState(true);

    const { skeleton } = useContext(SkeletonLoading);

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
                <Box>
                    <WrapTitle onClick={handleClickCategories}>
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
                    </WrapTitle>

                    <ProductCategory
                        open={openCategories}
                        categoriesValue={categoriesValue}
                        setCategoriesValue={setCategoriesValue}
                    />
                </Box>
                <Box>
                    <WrapTitle onClick={handleClickFilterSize} sx={{ marginBottom: '12px' }}>
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
                                    Filter by price
                                </h3>
                                <DownArrow />
                            </>
                        )}
                    </WrapTitle>

                    <Collapse in={openFilterSize} timeout="auto" unmountOnExit>
                        <Box sx={{ display: 'flex', gap: '0 24px' }}>
                            <Button styleProps={styleButtonCustom}>L</Button>
                            <Button styleProps={styleButtonCustom}>M</Button>
                            <Button styleProps={styleButtonCustom}>S</Button>
                            <Button styleProps={styleButtonCustom}>X</Button>
                        </Box>
                    </Collapse>
                </Box>
            </Box>
        </Card>
    );
}

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
