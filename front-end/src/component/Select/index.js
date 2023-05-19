import { styled } from '@mui/material';

function Select({ sx, children }) {
    return (
        <SelectCustom style={sx} className="Select_select_custom">
            {children}
        </SelectCustom>
    );
}

const SelectCustom = styled('select')({
    textTransform: 'capitalize',
    backgroundImage: 'url("https://mironmahmud.com/hotash/images/dropdown.svg")',
    backgroundPosition: 'right 12px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '12px',

    appearance: 'none',

    cursor: 'pointer',
    padding: '0px 15px',
    borderRadius: '5',
    fontSize: '14px',
    fontWeight: 500,
    border: '1px solid rgba(0, 0, 0, 0.23)',
    outline: 'none',
    color: '#989898',
    wordWrap: 'normal',

    '&:focus': {
        outline: 'none',
    },
});

export default Select;
