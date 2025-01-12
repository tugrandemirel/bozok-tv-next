import React from "react";
import Link from "next/link";
import Image from "next/image";

export const VideoGallery = async () => {
    // Veri çekme işlemi burada yapılabilir
    const videoGalleryData = {
        title: "Video Galeri",
        videos: [
            {
                url: "/",
                title: "Yozgat'tan Suriyeliler Giderse Ne Olur?",
                image: "/test/yozgat-20.jpg",
                alt: "Yozgat'tan Suriyeliler Giderse Ne Olur?",
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
                title: "Yozgat'ın Hem Şık Hem De Aşık Garsonu! Elinden Şifa Akıyor!",
                image: "/test/yozgat-20.jpg",
                alt: "Yozgat'ın Hem Şık Hem De Aşık Garsonu! Elinden Şifa Akıyor!",
            },
            {
                url: "/",
                title: "Yozgatlı 2024'ü 2025'e bağladı!",
                image: "/test/yozgat-20.jpg",
                alt: "Yozgatlı 2024'ü 2025'e bağladı!",
            },
        ],
    };

    return (
        <section className="bg-gradient-purple mb-3 p-3" aria-labelledby="video-gallery-title">
            <div className="section-title d-flex mt-1 mb-3 align-items-center">
                <h2 id="video-gallery-title" className="lead flex-shrink-1 text-white m-0 fw-bold">
                    {videoGalleryData.title}
                </h2>
                <div className="flex-grow-1 title-line-light mx-3" role="presentation" />
                <div className="flex-shrink-1">
                    <Link 
                        href="/video-galeri" 
                        title="Tüm Videolar" 
                        className="text-white"
                        prefetch={false}
                        aria-label="Tüm video galerisini görüntüle"
                    >
                        <i className="fa fa-ellipsis-h fa-lg" aria-hidden="true" role="presentation"/>
                    </Link>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-7">
                    <article>
                        <Link
                            className="d-block position-relative"
                            href={videoGalleryData.videos[0].url}
                            title={videoGalleryData.videos[0].title}
                            prefetch={false}
                            aria-label={`Video galeri: ${videoGalleryData.videos[0].title}`}
                        >
                            <div className="video-gallery-circle" role="presentation" aria-hidden="true"/>
                            <Image
                                src={videoGalleryData.videos[0].image}
                                loading="lazy"
                                width={860}
                                height={572}
                                alt={videoGalleryData.videos[0].alt}
                                className="img-fluid"
                                quality={85}
                                sizes="(max-width: 768px) 100vw, 860px"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR"
                            />
                            <h3 className="title-bg-area h3" role="heading" aria-level="3">
                                <span className="line-clamp-2">{videoGalleryData.videos[0].title}</span>
                            </h3>
                        </Link>
                    </article>
                </div>
                <div className="col-lg-5 gallery-items">
                    <div className="row g-3 align-items-center" role="list">
                        {videoGalleryData.videos.slice(1).map((video, index) => (
                            <React.Fragment key={index}>
                                <div className="col-4" role="listitem">
                                    <Link
                                        href={video.url}
                                        className="text-light"
                                        title={video.title}
                                        prefetch={false}
                                        aria-label={`Video galeri: ${video.title}`}
                                    >
                                        <div className="video-gallery-circle" role="presentation" aria-hidden="true"/>
                                        <Image
                                            className="img-fluid"
                                            src={video.image}
                                            loading="lazy"
                                            width={163}
                                            height={95}
                                            alt={video.alt}
                                            quality={85}
                                            sizes="(max-width: 768px) 100vw, 163px"
                                            placeholder="blur"
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR"
                                        />
                                    </Link>
                                </div>
                                <div className="col-8" role="listitem">
                                    <Link 
                                        href={video.url} 
                                        className="text-light" 
                                        title={video.title}
                                        prefetch={false}
                                        aria-label={`Video galeri: ${video.title}`}
                                    >
                                        <h4 className="m-0">
                                            <span className="line-clamp-2">{video.title}</span>
                                        </h4>
                                    </Link>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
