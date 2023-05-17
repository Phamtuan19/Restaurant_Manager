import { Box, styled } from '@mui/material';

function Card({ children, className }) {
    return <Wrap sx={className}>{children}</Wrap>;
}

const Wrap = styled(Box)({
    transition: 'all .4s ease',
    marginBottom: '2rem',
    background: 'hsla(0,0%,100%,.6)',
    webkitBackdropFilter: 'blur(42px)',
    backdropFilter: 'blur(42px)',
    backgroundColor: '#fff',
    backgroundClip: 'border-box',
    border: '0 solid rgba(0,0,0,.125)',
    borderRadius: '1.5rem',
});

export default Card;
