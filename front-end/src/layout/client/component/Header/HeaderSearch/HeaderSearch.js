import { Box, Stack, styled } from '@mui/material';
import { Search } from '~/component/Icons';

function HeaderSearch() {
    return (
        <Stack sx={{ width: '100%', position: 'relative' }} direction="row" alignItems="center">
            <Box sx={BoxCss}>
                <Search width="18px" height="18px" fill="none" style={{ color: '#959895' }} />
            </Box>
            <Input placeholder="Search ..." />
        </Stack>
    );
}

const BoxCss = {
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translateY(-40%)',
};

const Input = styled('input')({
    width: '100%',
    borderRadius: '20px',
    padding: '0.5rem 1rem 0.5rem 3.5rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.75,
    color: '#959895',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #e3e1e1',
    transition: 'all 0.5s',

    '&:focus': {
        outline: 'none',
        padding: '0.5rem 1rem 0.5rem 3.5rem',
    },
});

export default HeaderSearch;
