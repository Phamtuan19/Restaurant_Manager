import { Avatar, Box, Rating, Stack, styled } from '@mui/material';
import { Card } from '~/component/client/Card';
import { TitleViewAll } from '~/component/client/TitleViewAll';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper';
import Skeleton from '~/component/Skeleton';

const listFeedback = [1, 2, 3, 4, 5];

function Feedback() {
    return (
        <Card>
            <TitleViewAll
                title="Feedback"
                sx={{ padding: '1.5rem 0', borderBottom: '1px solid #e3e1e1', margin: '0 1.5rem' }}
            />
            <WrapContent>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {listFeedback.map((item) => (
                        <SwiperSlide key={item}>
                            <Box
                                sx={{
                                    border: '1px solid #eee',
                                    padding: '40px 35px',
                                    borderRadius: '1.5rem',
                                }}
                            >
                                <FeedbackContent>
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                    anything passage need to be sure embarrass.
                                </FeedbackContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        gap: '12px',
                                    }}
                                >
                                    <Avatar
                                        sx={{ width: '56px', height: '56px' }}
                                        alt="Remy Sharp"
                                        src="https://mui.com/static/images/avatar/3.jpg"
                                    >
                                        R
                                    </Avatar>
                                    <Stack spacing={1} sx={{ padding: '12px 0' }}>
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                    </Stack>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </WrapContent>
        </Card>
    );
}

const WrapContent = styled('div')({
    padding: '1.5rem',
    // display: 'flex',
    // flexWrap: 'wrap',
    // gap: '12px',
});

const FeedbackContent = styled('p')({
    color: '#5E5E5E',
    fontSize: '18px',
    marginBottom: '1.5rem',
    lineHeight: '32px',
});

const Loading = () => {
    return (
        <Card>
            <Skeleton />
            <WrapContent>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {listFeedback.map((item) => (
                        <SwiperSlide key={item}>
                            <Box
                                sx={{
                                    border: '1px solid #eee',
                                    padding: '40px 35px',
                                    borderRadius: '1.5rem',
                                }}
                            >
                                <FeedbackContent>
                                    <Skeleton />
                                </FeedbackContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        gap: '12px',
                                    }}
                                >
                                    <Skeleton />
                                    <Stack spacing={1} sx={{ padding: '12px 0' }}>
                                        <Skeleton />
                                    </Stack>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </WrapContent>
        </Card>
    );
};

Feedback.Loading = Loading;

export default Feedback;
