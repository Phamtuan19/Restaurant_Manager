/* eslint-disable react-hooks/exhaustive-deps */
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { v4 } from 'uuid';
import { Box } from '@mui/material';
import { memo } from 'react';
import { useCartAdmin } from '~/redux/SliceReducer/cartsTableAdmin';

function Categories({ setQuery }) {
    const { categories } = useCartAdmin();

    const handleClick = (val) => {
        setQuery(val);
    };

    return (
        <ContentCategories>
            <Swiper
                slidesPerView={5}
                spaceBetween={12}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {(categories || []).map((item) => {
                    const id = item.id;
                    return (
                        <SwiperSlideCustom key={v4()} onClick={() => handleClick(id)}>
                            <Box>
                                <Box width="70px" height="50px">
                                    <img src={item.image} alt={item.name} />
                                </Box>
                                <span>{item.name}</span>
                            </Box>
                        </SwiperSlideCustom>
                    );
                })}
            </Swiper>
        </ContentCategories>
    );
}

const SwiperSlideCustom = styled(SwiperSlide)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    marginBottom: 0,
    paddingTop: 0,

    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    span: {
        whiteSpace: 'nowrap',
        maxWidth: '90px',
        display: 'block',
        fontSize: '12px',
        color: 'var(--black)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
});

const ContentCategories = styled('div')({
    padding: '12px 0',
    borderBottom: '1px solid rgb(224, 227, 231)',

    '.active': {
        span: {
            color: 'red',
        },
    },
});

export default memo(Categories);
