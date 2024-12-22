"use client";
import {Navigation} from 'swiper/modules';
import Link from "next/link";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function LastMinuteNews() {
    const newsData = [
        {title: 'Yozgat’taki otobüs için İstanbul’dan geldi2', time: '15:04'},
        {title: 'Yozgat’tan Atatürk Yoluna Çözüm Çığlığı!', time: '12:06'},
        // Diğer haber verilerini buraya ekleyebilirsiniz
    ];

    return (
        <>
            <div className="flex-grow-1 swiper last-minute-v ms-lg-3">
                <Swiper
                    rewind={true}
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-v-next',
                        prevEl: '.swiper-v-prev',
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                    }}
                >
                    {newsData && newsData.map((news, index) => (
                        <SwiperSlide key={index}>
                            <Link
                                href=""
                                className="text-white text-truncate"
                                title={news.title}
                                target="_self"
                            >
                                <span className="last-minute-time">{news.time} | </span>
                                <strong>{news.title}</strong>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex-shrink-1 swiper-pagination d-none d-lg-flex position-static">
                <div className="swiper-v-prev text-white mx-3">
                    <i className="fa fa-chevron-left"/>
                </div>
                <div className="swiper-v-next text-white">
                    <i className="fa fa-chevron-right"/>
                </div>
            </div>
        </>
    );
}
