import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { styled } from '@mui/material';
import './styles.css';
import Item from './Item';
import { useContext } from 'react';
import { ContextData } from '../..';

function SwiperItem() {
   const { categories } = useContext(ContextData);
   return (
      <Swiper
         spaceBetween={16}
         freeMode={true}
         modules={[FreeMode, Pagination]}
         className="mySwiper"
         breakpoints={{
            300: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
         }}
      >
         {(categories || []).map((item, index) => {
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
