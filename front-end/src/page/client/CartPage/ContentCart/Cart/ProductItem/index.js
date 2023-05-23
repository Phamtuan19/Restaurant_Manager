import { useContext, useState } from 'react';
import { Box, Stack, styled } from '@mui/material';
import { SkeletonLoading } from '~/layout/client/DefaultLayout/DefaultLayoutClient';

function ProductItem() {
    const [valueNumber, setValueNumber] = useState(1);

    const { currencyFormatting } = useContext(SkeletonLoading);

    return (
        <WrapProductItem sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box sx={{ marginRight: '16px' }}>
                <Image src="https://templates.iqonic.design/aprycot/react/build/static/media/16.2717f609.png" alt="" />
            </Box>
            <Box sx={{ flex: '1 1' }}>
                <Box sx={{ width: '100%', paddingBottom: '1rem', borderBottom: '1px solid #e3e1e1' }}>
                    <ProductTitle>Mushroom</ProductTitle>
                    <Box>
                        <Box sx={{ fontSize: '14px', color: 'rgb(149 152 149 / 75%)', marginBottom: '.5rem' }}>
                            <span style={{ marginRight: '12px' }}>Status: </span>
                            <span style={{ color: 'var(--toastify-color-success)' }}>Còn hàng</span>
                        </Box>
                        <Box sx={{ fontSize: '16px' }}>
                            <span style={{ marginRight: '12px' }}>{currencyFormatting(120000)}</span>
                            <span>{currencyFormatting(160000)}</span>
                        </Box>
                    </Box>
                </Box>

                <input type="number" />
            </Box>
        </WrapProductItem>
    );
}

const WrapProductItem = styled('div')({
    padding: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255,0.5)',
    border: '1px solid #fff',
});

const Image = styled('img')({
    width: '120px',
    height: '120px',
    border: '1px solid #fff',
    borderRadius: '50%',
});

const ProductTitle = styled('h3')({
    marginBottom: '.5rem',
    fontFamily: '"Roboto Slab",serif',
});

export default ProductItem;
