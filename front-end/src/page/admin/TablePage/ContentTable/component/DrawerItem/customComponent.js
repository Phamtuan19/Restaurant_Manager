import { Stack, styled } from '@mui/material';

export const DrawerTitle = styled('h3')({
    padding: '1rem',
    fontSize: '1.5rem',
    textAlign: 'center',
    borderBottom: '1px solid #e3e1e1',
    fontFamily: '"Roboto Slab",serif',
});

export const WrapTime = styled(Stack)({
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1rem 8px',
    borderBottom: '1px solid #e3e1e1',
});

export const SpanTime = styled('span')({
    fontSize: '14px',
});

export const TableCustom = styled('table')({
    width: '100%',
    fontSize: '14px',
    borderCollapse: 'collapse',

    'thead tr td:nth-of-type(1)': {
        padding: '6px',
        width: '50%',
        textAlign: 'center',
        border: '1px dotted #000',
    },

    'thead tr td:nth-of-type(2)': {
        padding: '6px',
        width: '10%',
        textAlign: 'center',
        border: '1px dotted #000',
    },

    'thead tr td': {
        padding: '6px',
        width: '20%',
        textAlign: 'center',
        border: '1px dotted #000',
    },

    'tbody tr td:nth-of-type(1)': {
        padding: '12px',
        border: '1px dotted #000',
        textAlign: 'left',
    },

    'tbody tr td': {
        padding: '12px',
        textAlign: 'center',
        border: '1px dotted #000',
    },
});

export const WrapAction = styled('div')({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: '12px 6px',
    display: 'flex',
    gap: '0 12px',
});
