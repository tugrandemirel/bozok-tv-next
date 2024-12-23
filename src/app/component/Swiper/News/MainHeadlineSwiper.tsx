"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image from "next/image";
import Link from "next/link";
import {useEffect} from "react";

export default function MainHeadlineSwiper() {

    useEffect(() => {

    }, []);
    const newsData = [
        {
            id: 818,
            link: "",
            title: "Kahvaltıların Sündükçe Artan Lezzeti2!",
            category: "Yaşam",
            imgSrc: "/test/yozgat-20.jpg",
            imgAlt: "Kahvaltıların Sündükçe Artan Lezzeti!",
        },
        {
            id: 817,
            link: "",
            title: "Yozgatlılar Kazanacak4!",
            category: "Ekonomi",
            imgSrc: "/test/yozgat-20.jpg",
            imgAlt: "Yozgatlılar Kazanacak!",
        },
    ];
    return (
        <div className="swiper main-headline">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                pagination={{
                    el: ".main-headline-12 .swiper-pagination",
                    clickable: !0,
                }}
                autoplay={{
                    delay: 3000, // 3 saniye (3000 ms)
                    disableOnInteraction: false, // Kullanıcı kaydırdığında autoplay durmaz
                }}

            >
                {newsData && newsData.map((news) => (
                    <SwiperSlide key={news.id}>
                        <Link
                            href={news?.link ?? ''}
                            className="bg-dark"
                            title={news.title}
                            target="_self"
                        >
                            <Image
                                className="img-fluid"
                                src={news.imgSrc}
                                loading="lazy"
                                width={860}
                                height={504}
                                alt={news.imgAlt}
                            />
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                            <div className="title-bg-area">
                                <span
                                    className="mh-category"
                                    style={{ backgroundColor: "#c00" }}
                                >
                                    {news.category}
                                </span>
                                <h3 className="text-white title-2-line mb-0 mt-1">
                                    {news.title}
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="d-flex justify-content-between">
                <div className="swiper-pagination swiper-pagination-flex position-static w-100 bg-light-gray" ></div>
                <a className="sw-pagination-all" href="">
                    T
                </a>
            </div>
        </div>
    );
}
