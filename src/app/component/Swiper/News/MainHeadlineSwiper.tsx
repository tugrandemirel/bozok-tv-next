import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {MainHeadlineSwiperProps} from "@/types/newsletter";

const MainHeadlineSwiper: React.FC<MainHeadlineSwiperProps> = ({ newsletters }) => {
    if (!newsletters) {
        return <div className="spinner-border d-flex align-items-center justify-content-center" role="status">
            <span className="sr-only">Yükleniyor...</span>
        </div>;
    }

    if (!Array.isArray(newsletters) || newsletters.length === 0) {
        return <div>Henüz bir manşet yok.</div>;
    }
    const apiUrl = process.env.NEXT_PUBLIC_URL
    return (
        <div className="swiper main-headline">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                pagination={{
                    el: ".main-headline-1 .swiper-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                        // Sayfa numarasını döndürmek için renderBullet kullanıyoruz
                        return `<span class="${className}">${index + 1}</span>`;
                    }
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {newsletters.map((headline) => {
                    if (headline?.headlineable_type === "App\\Models\\Ads") {
                        return (
                            <SwiperSlide key={headline?.uuid}>
                                <Link
                                    href={'#'}
                                    className="bg-dark"
                                    target="_blank"
                                >
                                    <Image
                                        className="img-fluid"
                                        src={headline?.headlineable.image?.path ? `${apiUrl}${headline?.headlineable?.image?.path}` : '/test/yozgat-20.jpg'}
                                        priority
                                        // loading="lazy"
                                        width={860}
                                        height={504}
                                        alt={headline?.image?.path ?? 'Advertisement'}
                                    /><div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                                    <div className="title-bg-area">
                                        <span
                                            className="mh-category"
                                            style={{ backgroundColor: "#c00" }}
                                        >
                                            REKLAM
                                        </span>
                                        <h3 className="text-white title-2-line mb-0 mt-1">

                                        </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    }

                    // Eğer headline 'Newsletter' ise, tüm detayları göster
                    if (headline?.headlineable_type === "App\\Models\\Newsletter") {
                        return (
                            <SwiperSlide key={headline?.uuid}>
                                <Link
                                    href={`#`}
                                    className="bg-dark"
                                    title={headline?.headlineable?.slug ?? 'Newsletter'}
                                    target="_self"
                                >
                                    <Image
                                        priority
                                        className="img-fluid"
                                        src={headline?.headlineable?.image?.path ? `${apiUrl}${headline?.headlineable.image?.path}` : '/test/yozgat-20.jpg'}
                                        // loading="lazy"
                                        width={860}
                                        height={504}
                                        alt={headline?.headlineable?.title ?? 'Newsletter'}
                                    />
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                                    <div className="title-bg-area">
                                        <span
                                            className="mh-category"
                                            style={{ backgroundColor: "#c00" }}
                                        >
                                            {headline?.headlineable?.category?.name ?? 'Category'}
                                        </span>
                                        <h3 className="text-white title-2-line mb-0 mt-1">
                                            {headline?.headlineable?.title ?? 'Newsletter'}
                                        </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    }
                    return null;
                })}
            </Swiper>
            <div className="d-flex justify-content-between">
                <div className="swiper-pagination swiper-pagination-flex position-static w-100 bg-light-gray"></div>
                <a className="sw-pagination-all" href="">
                    T
                </a>
            </div>
        </div>
    );
}
export default MainHeadlineSwiper