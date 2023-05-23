// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import { Box, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

function SwiperFreemode() {
    const [searchParams] = useSearchParams();
    const queryValue = searchParams.get('q');

    return (
        <SwiperCustom
            direction={'vertical'}
            slidesPerView={8}
            freeMode={true}
            modules={[Pagination]}
            className="mySwiper"
            style={{ height: '95%' }}
        >
            <SwiperSlideCutom sx={{ width: '100%', height: '100px', gap: '34px', marginTop: '34px' }}>
                <LinkCustom className={queryValue === 'fast-food' ? 'Nav_Link_Categories_Admin' : ''} to="?q=fast-food">
                    <Box sx={{ marginBottom: '12px' }}>
                        <Img src="https://davur.makaanlelo.com/static/frontend/images/food-icon/2.png" alt="" />
                    </Box>
                    <TitleH3Custom className="Category_Title">fast food</TitleH3Custom>
                </LinkCustom>
            </SwiperSlideCutom>
            <SwiperSlideCutom sx={{ width: '100%', height: '100px', gap: '34px', marginTop: '34px' }}>
                <LinkCustom className={queryValue === 'a-food' ? 'Nav_Link_Categories_Admin' : ''} to="?q=a-food">
                    <Box sx={{ marginBottom: '12px' }}>
                        <Img src="https://davur.makaanlelo.com/static/frontend/images/food-icon/2.png" alt="" />
                    </Box>
                    <TitleH3Custom className="Category_Title">fast food</TitleH3Custom>
                </LinkCustom>
            </SwiperSlideCutom>
            <SwiperSlideCutom sx={{ width: '100%', height: '100px', gap: '34px', marginTop: '34px' }}>
                <LinkCustom className={queryValue === 'b-food' ? 'Nav_Link_Categories_Admin' : ''} to="?q=b-food">
                    <Box sx={{ marginBottom: '12px' }}>
                        <Img src="https://davur.makaanlelo.com/static/frontend/images/food-icon/2.png" alt="" />
                    </Box>
                    <TitleH3Custom className="Category_Title">fast food</TitleH3Custom>
                </LinkCustom>
            </SwiperSlideCutom>
        </SwiperCustom>
    );
}

const LinkCustom = styled(Link)({
    width: '100%',
    padding: '12px 0',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    backgroundColor: 'var(--white)',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',

    '&:hover': {
        backgroundColor: '#ff6d4d',

        '.Category_Title': {
            color: 'var(--white)',
        },
    },
});

const TitleH3Custom = styled('h3')({
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    color: 'var(--black)',
    fontFamily: '"Roboto Slab",serif',
});

const SwiperSlideCutom = styled(SwiperSlide)({
    padding: '0',
    borderRadius: '0.5rem',
    boxShadow: '0px 12px 23px 0px rgba(62, 73, 84, 0.04)',
});

const SwiperCustom = styled(Swiper)({
    background: 'transparent',
});

const Img = styled('img')({
    width: '65px',
    marginLeft: 'auto',
    marginRight: 'auto',
});

export default SwiperFreemode;
