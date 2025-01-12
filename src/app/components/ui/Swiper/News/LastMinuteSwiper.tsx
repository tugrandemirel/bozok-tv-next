"use client";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import {LastMinuteSwiperProps} from "@/types/newsletter";
import ROUTES, { createNewsPath } from "@/constants/routes";

const LastMinuteSwiper: React.FC<LastMinuteSwiperProps> = ({ newsletters }) => {
    const newsArray = Array.isArray(newsletters) ? newsletters : 
                     newsletters?.data ? newsletters.data : [];

    if (!newsArray || newsArray.length === 0) {
        return <div>Son dakika haberi bulunamadı</div>;
    }

    return (
        <>
            <div className="flex-grow-1 swiper last-minute-v ms-lg-3">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-v-next',
                        prevEl: '.swiper-v-prev',
                    }}
                >
                    {newsArray.map((lastMinute, index) => (
                        <SwiperSlide key={lastMinute.id || index}>
                            <Link
                                href={createNewsPath(lastMinute.slug)}
                                className="text-white text-truncate"
                                title={lastMinute.title}
                                prefetch={false}
                            >
                                <span className="last-minute-time">
                                    {moment(lastMinute.created_at).format('HH:mm')} |
                                </span>
                                <strong className="line-clamp-1"> {lastMinute.title}</strong>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex-shrink-1 swiper-pagination d-none d-lg-flex position-static">
                <div className="swiper-v-prev text-white mx-3" aria-label="Önceki haber">
                    <i className="fa fa-chevron-left" />
                </div>
                <div className="swiper-v-next text-white" aria-label="Sonraki haber">
                    <i className="fa fa-chevron-right" />
                </div>
            </div>
        </>
    );
};

export default LastMinuteSwiper;
