import { Typography, styled } from '@mui/material';

function TitleComponent({ title, component, sx }) {

    return (
        <WrapCategory sx={{ ...sx }}>
            <Typography
                component={component || 'h3'}
                sx={{
                    fontSize: 'calc(1.2978rem + .5736vw)',
                    fontFamily: '"Playfair Display", serif',
                }}
            >
                {title}
            </Typography>
        </WrapCategory>
    );
}

const WrapCategory = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 0',
});

export default TitleComponent;
