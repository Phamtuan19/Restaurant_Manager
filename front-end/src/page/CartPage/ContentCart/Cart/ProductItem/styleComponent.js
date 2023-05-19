import { TextField, styled } from "@mui/material";

export const WrapProductItem = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '24px',
    paddingBottom: '1.5rem',
    marginBottom: '2rem',
    borderBottom: '1px solid rgb(227, 225, 225)',
});

export const StyleTextField = styled(TextField)({
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

export const ProductItemName = styled('h3')({
    fontSize: '1.2rem',
    fontWeight: 400,
    fontFamily: "'Roboto Slab', serif !important",
    color: '#080808',
});

export const PriceDetail = styled('div')({
    fontSize: '16px',
    fontWeight: 500,
    color: '#959895',
    paddingRight: '12px',
    borderRight: '1px solid #ccc',
});

export const BoxStatus = styled('span')({
    fontSize: '14px',
    fontWeight: 500,
    color: /*'red'*/ '#14c24b',
});

export const Price = styled('span')({
    fontSize: '.9rem',
    fontWeight: 'bold',
    textDecoration: 'line-through',
});

export const PriceSale = styled('span')({
    fontSize: '1.1rem',
    fontWeight: 'bold',
});

export const WrapDelete = styled('div')({
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
