import { Box, Stack, TextField, styled } from '@mui/material';
import { useState } from 'react';
import { Delete } from '~/component/Icons';
import Select from '~/component/Select';

function ProductItem() {
    const [valueNumber, setValueNumber] = useState(1);

    return (
        <WrapProductItem sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box
                sx={{
                    flex: '1 4',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src="https://templates.iqonic.design/aprycot/react/build/static/media/4.15e1b34b.png"
                    alt=""
                    style={{ width: '100px' }}
                />
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flex: '4 1', flexDirection: 'column', gap: '12px' }}>
                <Stack sx={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', gap: '8px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <ProductItemName>Manchow soup</ProductItemName>
                        <Box sx={{ display: 'flex', gap: '0 12px' }}>
                            <PriceDetail>$12.50</PriceDetail>
                            <BoxStatus>In stock</BoxStatus>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <PriceSale> $12.50</PriceSale>
                        <Price>$14.10</Price>
                    </Box>
                </Stack>
                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        <Select sx={{ width: '70px', height: '32px' }}>
                            <option value="admin">M</option>
                            <option value="admin">XL</option>
                        </Select>

                        <StyleTextField
                            InputProps={{ inputProps: { min: 1, max: 30 } }}
                            type="number"
                            value={valueNumber}
                            onChange={(e) => setValueNumber(e.target.value)}
                            size="small"
                        />
                    </Box>

                    <WrapDelete>
                        <Delete />
                    </WrapDelete>
                </Stack>
            </Box>
        </WrapProductItem>
    );
}

const WrapProductItem = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '24px',
    paddingBottom: '1.5rem',
    marginBottom: '2rem',
    borderBottom: '1px solid rgb(227, 225, 225)',
});

const StyleTextField = styled(TextField)({
    input: {
        height: '32px',
        width: '40px',
        padding: '0 14px',
        borderRadius: '5px !important',

        '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.23) !important',
        },
    },
});

const ProductItemName = styled('h3')({
    fontSize: '1.2rem',
    fontWeight: 400,
    fontFamily: "'Roboto Slab', serif !important",
    color: '#080808',
});

const PriceDetail = styled('div')({
    fontSize: '16px',
    fontWeight: 500,
    color: '#959895',
    paddingRight: '12px',
    borderRight: '1px solid #ccc',
});

const BoxStatus = styled('span')({
    fontSize: '14px',
    fontWeight: 500,
    color: /*'red'*/ '#14c24b',
});

const Price = styled('span')({
    fontSize: '.9rem',
    fontWeight: 'bold',
    textDecoration: 'line-through',
});

const PriceSale = styled('span')({
    fontSize: '1.1rem',
    fontWeight: 'bold',
});

const WrapDelete = styled('div')({
    position: 'relative',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#989898',

    '&:hover': {
        svg: {
            fill: '#333',
        },
    },
});

export default ProductItem;
