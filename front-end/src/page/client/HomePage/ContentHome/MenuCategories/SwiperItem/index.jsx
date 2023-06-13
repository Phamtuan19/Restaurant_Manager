import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';
import Item from './Item';
import { styled } from '@mui/material';

const list = [
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/1.8ffd0bf8.png',
        title: 'Pizza',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/2.2853f6f0.png',
        title: 'Fruits',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/4.00958ceb.png',
        title: 'Veggie',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/5.f7953d9f.png',
        title: 'Hotdog',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/1.8ffd0bf8.png',
        title: 'Pizza',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/2.2853f6f0.png',
        title: 'Fruits',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/4.00958ceb.png',
        title: 'Veggie',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/5.f7953d9f.png',
        title: 'Hotdog',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/1.8ffd0bf8.png',
        title: 'Pizza',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/2.2853f6f0.png',
        title: 'Fruits',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/4.00958ceb.png',
        title: 'Veggie',
    },
    {
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/5.f7953d9f.png',
        title: 'Hotdog',
    },
];

function SwiperItem() {
    return (
        <Swiper
            spaceBetween={16}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
            }}
        >
            {list.map((item, index) => {
                return (
                    <SwiperSlideCustom key={index} className="card radius-1-5">
                        <Item data={item} />
                    </SwiperSlideCustom>
                );
            })}
        </Swiper>
    );
}

const SwiperSlideCustom = styled(SwiperSlide)({
    backgroundColor: 'rgba(255, 255, 255,0.5) !important',
    border: '1px solid #fff !important',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255,0.9) !important',
    },
});

export default SwiperItem;
