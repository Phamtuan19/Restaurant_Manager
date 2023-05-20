import { styled } from '@mui/material';

function InputCustom({ sx, placeholder = '', type = 'text' }) {
    return <Input sx={sx} type={type} placeholder={placeholder} />;
}

const Input = styled('input')({
    minWidth: '200px',
    padding: '0.5rem 1rem 0.5rem 1rem',
    borderRadius: '5px',
    color: '#959895',
    backgroundColor: 'var(--white)',
    border: '1px solid #e3e1e1',
    transition: 'all 0.5s',
    fontFamily: '"Roboto Slab", serif',
    fontSize: '.9rem',
});

export default InputCustom;
