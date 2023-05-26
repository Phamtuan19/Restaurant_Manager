import { Box, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { v4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import ModalProductItem from '../ModalProductItem';
import { Delete } from '~/component/Icons';

const productList = [
    {
        id: v4(),
        top: 'Top of the day',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/17.938b20db.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
    {
        id: v4(),
        top: 'Top of the week',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/14.e20083c2.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
    {
        id: v4(),
        top: 'Top of the month',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/18.2bcce14e.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
    {
        id: v4(),
        top: 'Top of the week',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/19.5ab77ed3.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
    {
        id: v4(),
        top: 'Top of the week',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/20.d3d93362.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
    {
        id: v4(),
        top: 'Top of the week',
        img: 'https://templates.iqonic.design/aprycot/react/build/static/media/21.8b39acdf.png',
        title: 'Tôm Hùm',
        persons: '4 persons',
        price: 120000,
    },
];

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

function ModalChild({ modalChildProduct, handleCloseModalProduct }) {
    const [searchParams] = useSearchParams();
    const queryValue = searchParams.get('category');

    return (
        <BoxChildModal
            sx={{
                width: modalChildProduct ? { xs: '105%', md: 500 } : 400,
                opacity: modalChildProduct ? 1 : 0,
                transform: modalChildProduct
                    ? { xs: 'translate(2.5%, -0.3%)', md: 'translate(101%, -0.3%)' }
                    : 'translate(0%, 0%)',
            }}
        >
            <Header id="child-modal-title">
                <Box
                    sx={{
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        transform: 'translate(50%, -50%)',
                    }}
                    onClick={handleCloseModalProduct}
                >
                    <Delete />
                </Box>
                <h2>Danh sách món ăn</h2>
            </Header>
            <Content sx={{ display: modalChildProduct ? 'block' : 'none' }}>
                <ContentCategories>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={12}
                        freeMode={true}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {list.map((item) => {
                            return (
                                <SwiperSlideCustom key={v4()}>
                                    <Link
                                        to={`?category=${item.title}`}
                                        className={queryValue === item.title ? 'active' : ''}
                                    >
                                        <img src={item.img} alt={item.title} />
                                        <span>{item.title}</span>
                                    </Link>
                                </SwiperSlideCustom>
                            );
                        })}
                    </Swiper>
                </ContentCategories>

                <Box sx={{ ...styleModalChild }}>
                    {productList.map((item) => {
                        return <ModalProductItem key={v4()} data={item} />;
                    })}
                </Box>
            </Content>
        </BoxChildModal>
    );
}

const Header = styled('div')({
    position: 'relative',
    borderBottom: '1px solid rgb(224, 227, 231)',
    padding: '12px',

    h2: {
        fontSize: '1.3rem',
        fontFamily: '"Roboto Slab",serif',
    },
});

const Content = styled('div')({
    padding: '12px',
});

const styleModalChild = {
    maxHeight: 450,
    overflow: 'scroll',

    '::-webkit-scrollbar': {
        width: '0',
    },
};

const BoxChildModal = styled('div')({
    position: 'absolute',
    top: 0,
    right: 0,
    background: '#fff',
    border: '2px solid #fff',
    borderRadius: '5px',
    outline: 'none',
    transition: 'all .5s',
});

const SwiperSlideCustom = styled(SwiperSlide)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 !important',
    marginBottom: '0 !important',
    cursor: 'pointer',

    img: {
        width: '50px',
        height: '50px',
    },

    span: {
        fontSize: '1rem',
        color: 'var(--black)',
    },
});

const ContentCategories = styled('div')({
    padding: '12px 0',
    marginBottom: '12px',
    borderBottom: '1px solid rgb(224, 227, 231)',

    '.active': {
        span: {
            color: 'red',
        },
    },
});

export default ModalChild;
