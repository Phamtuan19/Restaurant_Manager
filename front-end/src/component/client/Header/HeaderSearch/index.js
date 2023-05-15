import { Box, Stack, styled } from '@mui/material';
import SearchIcon from '../../../../assets/imageSvg/Search';

function HeaderSearch() {
    return (
        <Stack sx={{ position: 'relative' }} direction="row" alignItems="center">
            <Box sx={BoxCss}>
                <SearchICon />
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
    width: '75%',
    borderRadius: '20px',
    padding: '0.5rem 1rem 0.5rem 3rem',
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
        width: '100%',
        padding: '0.5rem 1rem 0.5rem 3.5rem',
    },
});

const SearchICon = styled(SearchIcon)`
    width: 18px;
    fill: none;
    color: #959895;
`;

export default HeaderSearch;
