import { styled } from '@mui/material';
import ButtonCustom from '../../../CustomComponent/ButtomCustom';

function Banner() {
    return (
        <Wrap>
            <BannerImage />
            <BannerTitle>
                <span>
                    <small>Deal of the weekend</small>
                    <h1>Hello, Austine Robertson</h1>
                    <p>
                        Get <span>FREE delivery </span>on every weekend.
                    </p>
                    <ButtonCustom title="Check Menu" />
                </span>
            </BannerTitle>
        </Wrap>
    );
}

const Wrap = styled('div')({
    width: '100%',
    height: '400px',
    marginBottom: '2rem',
    background: 'hsla(0,0%,100%,.6)',
    backdropFilter: 'blur(42px)',
    position: 'relative',
    display: 'flex',
    wordWrap: 'break-word',
    backgroundColor: '#fff',
    border: '0 solid rgba(0,0,0,.125)',
    borderRadius: '1.5rem',
    boxShadow: 'var(--box-shadow-fa)',
});

const BannerImage = styled('div')({
    background:
        'url(https://templates.iqonic.design/aprycot/react/build/static/media/01.adcc5f80.png) center center / cover no-repeat',
    transform: 'translate(0px, 0px)',
    opacity: 1,
    maxWidth: '100%',
    width: '100%',
    height: '100%',
    margin: 'auto',
    position: 'relative',
    borderRadius: '1.6rem',

    '&::before': {
        content: '""',
        // display: 'block',
        position: 'absolute',
        backgroundImage: 'linear-gradient(90deg,#fff,#fff 65%,rgba(83,100,141,0))',
        height: '100%',
        left: 0,
        top: 0,
        width: '60%',
        opacity: '.6',
        borderRadius: ' 1.6rem',
    },
});

const BannerTitle = styled('div')({
    width: '100%',
    height: '100%',
    position: 'absolute',
    padding: '4rem',

    small: {
        fontSize: '16px',
        color: '#ea6a12',
    },

    h1: {
        paddingTop: '1rem',
        fontWeight: 700,
        marginBottom: '1.5rem',
    },

    p: {
        marginBottom: '24px',

        span: {
            color: 'rgba(var(--bs-primary-rgb),var(--bs-text-opacity))',
        },
    },
});

export default Banner;
