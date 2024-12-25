"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function AuthorSwiper() {
    const authorsData = [
        {
            id: 1,
            authorName: "Ahmet Sargın",
            authorLink: "/",
            authorImg: "/test/logo.png",
            postTitle: "Sorgun Sizi İlçeye Davet Ediyor",
            postLink: "/",
        },
        {
            id: 2,
            authorName: "Doğan Tufan",
            authorLink: "/",
            authorImg: "/test/logo.png",
            postTitle: "Acı Haberler Sınır Tanımıyor",
            postLink: "/",
        },
        {
            id: 3,
            authorName: "Ömer Tansel",
            authorLink: "/",
            authorImg: "/test/logo.png",
            postTitle: "Suriye'nin Geleceği ve Türkiye -2",
            postLink: "/",
        },
    ];

    return (
        <div className="swiper authors-swiper">
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              0:{
                slidesPerView:1
              },
              765:{
                slidesPerView:2
              },
              1200: {
                slidesPerView: 3
              }
            }}
                modules={[Navigation, Pagination]}
                navigation={false}
                pagination={false}
            >
                {authorsData && authorsData.map((author) => (
                    <SwiperSlide key={author.id}>
                        <div className="card border-0 text-center p-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 align-self-center">
                                    <Link
                                        href={author.authorLink}
                                        title={author.authorName}
                                        target="_self"
                                    >
                                        <Image
                                            src={author.authorImg}
                                            loading="lazy"
                                            alt={author.authorName}
                                            className="img-fluid rounded-circle border"
                                            width={100}
                                            height={100}
                                        />
                                    </Link>
                                </div>
                                <div className="flex-grow-1 ms-3 text-start">
                                    <Link
                                        href={author.authorLink}
                                        title={author.authorName}
                                        className="author-name pb-1 mb-1 d-block"
                                        target="_self"
                                    >
                                        {author.authorName}
                                    </Link>
                                    <Link
                                        href={author.postLink}
                                        title={author.postTitle}
                                        className="h4 title-2-line"
                                        target="_self"
                                    >
                                        {author.postTitle}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
