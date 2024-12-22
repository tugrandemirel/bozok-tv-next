import React from "react";
import Link from "next/link";
import Image from "next/image";

const videoGalleryData = {
    title: "Video Galeri",
    videos: [
        {
            url: "/",
            title: "Yozgat’tan Suriyeliler Giderse Ne Olur?",
            image: "/test/yozgat-20.jpg",
            alt: "Yozgat’tan Suriyeliler Giderse Ne Olur?",
        },
        {
            url: "/",
            title: "Yer yüzünün en şefkatli doktorları Yozgat'ta: yaptıkları ayakta alkışlanır",
            image: "/test/yozgat-20.jpg",
            alt: "Yer yüzünün en şefkatli doktorları Yozgat'ta: yaptıkları ayakta alkışlanır",
        },
        {
            url: "/",
            title: "Yozgat'ın sınır ilçesi sınırları aşıyor! 2025'te iki katına çıkacak hamle yapıldı",
            image: "/test/yozgat-20.jpg",
            alt: "Yozgat'ın sınır ilçesi sınırları aşıyor! 2025'te iki katına çıkacak hamle yapıldı",
        },
        {
            url: "/",
            title: "Yozgat’ın Hem Şık Hem De Aşık Garsonu! Elinden Şifa Akıyor!",
            image: "/test/yozgat-20.jpg",
            alt: "Yozgat’ın Hem Şık Hem De Aşık Garsonu! Elinden Şifa Akıyor!",
        },
        {
            url: "/",
            title: "Yozgatlı 2024’ü 2025’e bağladı!",
            image: "/test/yozgat-20.jpg",
            alt: "Yozgatlı 2024’ü 2025’e bağladı!",
        },
    ],
};

export const VideoGallery = () => {
    return (
        <div className="bg-gradient-purple mb-3 p-3">
            <div className="section-title d-flex mt-1 mb-3 align-items-center">
                <h2 className="lead flex-shrink-1 text-white m-0 fw-bold">{videoGalleryData.title}</h2>
                <div className="flex-grow-1 title-line-light mx-3"/>
                <div className="flex-shrink-1">
                    <Link href="/" title="Tüm Videolar" className="text-white">
                        <i className="fa fa-ellipsis-h fa-lg"/>
                    </Link>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-7">
                    <Link
                        className="d-block position-relative"
                        href={videoGalleryData.videos[0].url}
                        title={videoGalleryData.videos[0].title}
                        target="_self"
                    >
                        <div className="video-gallery-circle"/>
                        <Image
                            src={videoGalleryData.videos[0].image}
                            loading="lazy"
                            width={860}
                            height={572}
                            alt={videoGalleryData.videos[0].alt}
                            className="img-fluid"
                        />
                        <h3 className="title-bg-area h3">{videoGalleryData.videos[0].title}</h3>
                    </Link>
                </div>
                <div className="col-lg-5 gallery-items">
                    <div className="row g-3 align-items-center">
                        {videoGalleryData.videos.slice(1).map((video, index) => (
                            <React.Fragment key={index}>
                                <div className="col-4">
                                    <Link
                                        href={video.url}
                                        className="text-light"
                                        title={video.title}
                                        target="_self"
                                    >
                                        <div className="video-gallery-circle"/>
                                        <Image
                                            className="img-fluid"
                                            src={video.image}
                                            loading="lazy"
                                            width={163}
                                            height={95}
                                            alt={video.alt}
                                        />
                                    </Link>
                                </div>
                                <div className="col-8">
                                    <Link href={video.url} className="text-light" title={video.title}>
                                        <h4 className="m-0 title-2-line">{video.title}</h4>
                                    </Link>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
