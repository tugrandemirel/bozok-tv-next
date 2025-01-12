"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { MainHeadlineSwiperProps } from "@/types/newsletter";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ROUTES, { createNewsPath } from "@/constants/routes";

const MainHeadlineSwiper: React.FC<MainHeadlineSwiperProps> = ({ newsletters }) => {
    // API'den gelen veri yapısını kontrol et
    const newsArray = Array.isArray(newsletters) ? newsletters : 
                     newsletters?.data ? newsletters.data : [];

    if (!newsArray || newsArray.length === 0) {
        return <div>Manşet haberi bulunamadı</div>;
    }

    const apiUrl = process.env.NEXT_PUBLIC_URL;

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
                {newsArray.map((headline) => {
                    if (headline?.headlineable_type === "App\\Models\\Ads") {
                        return (
                            <SwiperSlide key={headline?.uuid}>
                                <Link
                                    href="#"
                                    className="bg-dark"
                                    target="_blank"
                                    rel="nofollow"
                                >
                                    <Image
                                        className="img-fluid"
                                        src={headline?.headlineable?.image?.path ? 
                                            `${apiUrl}${headline?.headlineable?.image?.path}` : 
                                            '/test/default.jpg'}
                                        priority
                                        width={860}
                                        height={504}
                                        alt="Reklam içeriği"
                                        quality={85}
                                        sizes="(max-width: 768px) 100vw, 860px"
                                    />
                                    <div className="title-bg-area">
                                        <span className="mh-category" style={{ backgroundColor: "#c00" }}>
                                            REKLAM
                                        </span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    }

                    if (headline?.headlineable_type === "App\\Models\\Newsletter") {
                        return (
                            <SwiperSlide key={headline?.uuid}>
                                <Link
                                    href={createNewsPath(headline?.headlineable?.slug)}
                                    className="bg-dark"
                                    title={headline?.headlineable?.title}
                                    prefetch={false}
                                >
                                    <Image
                                        priority
                                        className="img-fluid"
                                        src={headline?.headlineable?.image?.path ? 
                                            `${apiUrl}${headline?.headlineable?.image?.path}` : 
                                            '/test/default.jpg'}
                                        width={860}
                                        height={504}
                                        alt={headline?.headlineable?.title ?? "Manşet haberi"}
                                        quality={85}
                                        sizes="(max-width: 768px) 100vw, 860px"
                                    />
                                    <div className="title-bg-area">
                                        <span className="mh-category">
                                            {headline?.headlineable?.category?.[0]?.name}
                                        </span>
                                        <h3 className="text-white title-2-line mb-0 mt-1 line-clamp-2">
                                            {headline?.headlineable?.title}
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
                <Link href={ROUTES.NEWS.LIST} className="sw-pagination-all" prefetch={false}>
                    T
                </Link>
            </div>
        </div>
    );
};

export default MainHeadlineSwiper;