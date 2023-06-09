import { Box, styled } from '@mui/material';

function LayoutSite() {
    return (
        <Box sx={{ width: '100%', top: 0, position: 'fixed', zIndex: 1 }}>
            <Image src="https://iqonic.design/wp-content/themes/iqonic/assets/images/bg-02.webp" alt=""></Image>
            <Box sx={{ top: '200px', position: 'relative', zIndex: 1, width: '120%', left: '-20px' }}>
                <Svg />
            </Box>
        </Box>
    );
}

const Image = styled('img')({
    position: 'absolute',
    display: 'flex',
    height: '100vw',
    width: '100vw',
    justifyContent: 'center',
    margin: '0 auto',
    opacity: 0.4,
    animation: 'LayoutSite_rotation 10s infinite linear',
});

const Svg = () => {
    return (
        <svg
            style={{ opacity: 0.5, zIndex: 1 }}
            xmlns="http://www.w3.org/2000/svg"
            width="1857"
            fill="none"
            viewBox="0 0 1857 327"
        >
            <path
                stroke="#EA6A12"
                strokeOpacity="0.3"
                d="M4.05 189.348c82.834-79.834 344.901-214.6 730.501-115 385.599 99.6 906.669 16.833 1118.999-37"
            ></path>
            <path
                stroke="#EA6A12"
                strokeOpacity="0.3"
                d="M.998 152.331C90.95 80.613 364.495-28.995 739.062 106.31 1113.63 241.616 1640.16 208.056 1856.6 174.363"
            ></path>
        </svg>
    );
};

export default LayoutSite;
