import { styled } from '@mui/material';

function Button({ styleProps, title }) {
    return <BannerButton sx={{ ...styleProps }}>{title}</BannerButton>;
}

const BannerButton = styled('button')({
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: '#ea6a12',
    borderColor: '#ea6a12',
    boxShadow: '0 0 0 0 transparent',
    display: 'inline-block',
    fontWeight: 400,
    lineHeight: 1.75,
    textAlign: 'center',
    border: '1px solid transparent',
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    textTransform: 'capitalize',
    transition: 'all .3s ease-in-out',
    zIndex: 900,
    borderRadius: '50rem',

    '&:hover': {
        color: '#fff',
        backgroundColor: '#c75a0f',
        borderColor: '#bb550e',
    },
});

export default Button;
