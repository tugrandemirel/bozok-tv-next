"use client";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useLastMinuteNewsletters } from "@/hooks/useNewsletters";
// import moment from "moment"; // moment'i import etmelisiniz

export default function LastMinuteSwiper() {
    const { lastMinutes, isLoading, error } = useLastMinuteNewsletters();

    if (isLoading) {
        return <div className="spinner-border d-flex align-items-center justify-content-center" role="status">
            <span className="sr-only">Yükleniyor...</span>
        </div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className="flex-grow-1 swiper last-minute-v ms-lg-3">
                <Swiper
                    rewind={true}
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={false}
                    navigation={{
                        nextEl: '.swiper-v-next',
                        prevEl: '.swiper-v-prev',
                    }}
                    autoplay={{
                        delay: 3000, // 3 saniye (3000 ms)
                        disableOnInteraction: false, // Kullanıcı kaydırdığında autoplay durmaz
                    }}
                >
                    {lastMinutes.map((lastMinute, index) => {
                        let formatted_date = moment(lastMinute.created_at).format("HH:mm");
                        return (
                            <SwiperSlide key={index}>
                                <Link
                                    href="/"
                                    className="text-white text-truncate"
                                    title={lastMinute.title}
                                    target="_self"
                                >
                                    <span className="last-minute-time">{formatted_date} | </span>
                                    <strong>{lastMinute.title}</strong>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="flex-shrink-1 swiper-pagination d-none d-lg-flex position-static">
                <div className="swiper-v-prev text-white mx-3">
                    <i className="fa fa-chevron-left" />
                </div>
                <div className="swiper-v-next text-white">
                    <i className="fa fa-chevron-right" />
                </div>
            </div>
        </>
    );
}
