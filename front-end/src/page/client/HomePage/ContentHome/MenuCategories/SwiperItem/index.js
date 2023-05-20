import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';
import Item from './Item';

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
            <SwiperSlide className="card">
                <Item />
            </SwiperSlide>
            <SwiperSlide className="card">
                <Item />
            </SwiperSlide>
            <SwiperSlide className="card">
                <Item />
            </SwiperSlide>
            <SwiperSlide className="card">
                <Item />
            </SwiperSlide>
            <SwiperSlide className="card">
                <Item />
            </SwiperSlide>
            <SwiperSlide className="card">
                <Item />
            </SwiperSlide>
            <SwiperSlide className="card">
                <Item />
            </SwiperSlide>
        </Swiper>
    );
}

export default SwiperItem;