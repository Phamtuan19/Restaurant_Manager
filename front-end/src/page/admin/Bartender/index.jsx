import styled from '@emotion/styled';
import { Box } from '@mui/material';

function Bartender() {
    return (
        <Header>
            <Box sx={{ fontSize: '1.6rem' }}>Sản phẩm chưa làm</Box>
        </Header>
    );
}

const Header = styled('header')({
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export default Bartender;
