import { Box, Stack, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 } from 'uuid';
import fomatMoney from '~/Helpers/fomatMoney';
import { AddNewIcon } from '~/component/Icons';

import bookingService from '~/services/booking.service';

const ModalMenu = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await bookingService.getMenuBooking();
            setCategories(res.categories);
            setProducts(res.products);
        })();
    }, []);

    return (
        <Box px={2} mt={2} height="100%" width={500} borderRadius="15px">
            <Categories categories={categories} />

            <Box overflow="scroll" sx={{ '::-webkit-scrollbar': { width: '0' } }}>
                {(products || []).map((item) => (
                    <Product key={item.id} data={item} />
                ))}
            </Box>
        </Box>
    );
};

const Product = ({ data }) => {
    return (
        <Box sx={{ padding: '12px 0', display: 'flex', cursor: 'pointer', gap: '0 24px' }}>
            <Box sx={{ width: '70px', height: '70px', overflow: 'hidden' }}>
                <img src={data?.image} alt={data?.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ flex: 1 }}>
                <Box sx={{ marginBottom: '12px', fontSize: '1rem', fontFamily: '"Roboto Slab",serif !important' }}>
                    {data?.name}
                </Box>
                <Stack sx={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <span style={{ color: 'var(--color-red)', marginRight: '12px' }}>
                            {fomatMoney(data?.price_sale || data?.price)}
                        </span>
                        <span style={{ textDecoration: 'line-through', fontSize: '.9rem' }}>
                            {fomatMoney(data?.price || data?.price_sale)}
                        </span>
                    </Box>
                    <Box>
                        <AddNewIcon style={{ color: '#fff' }} />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

const Categories = ({ categories }) => {
    console.log(categories);
    return (
        <ContentCategories>
            <Swiper
                slidesPerView={5}
                spaceBetween={12}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {(categories || []).map((item) => (
                    <SwiperSlideCustom key={v4()}>
                        <Box>
                            <Box width="70px" height="50px">
                                <img src={item.image} alt={item.name} />
                            </Box>
                            <span>{item.name}</span>
                        </Box>
                    </SwiperSlideCustom>
                ))}
            </Swiper>
        </ContentCategories>
    );
};

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

export default ModalMenu;
