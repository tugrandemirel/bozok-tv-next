import Link from "next/link";
import Image from "next/image";
import React from "react";

export const PhotoGallery = () => {
    const photoGalleryData = {
        mainGallery: {
            title: "Yozgat'ın Çınarları Güneşin Keyfini Çıkarıyor!",
            link: "/",
            imgSrc: "/test/yozgat-20.jpg",
            imgAlt: "Yozgat'ın Çınarları Güneşin Keyfini Çıkarıyor!",
        },
        items: [
            {
                title: "Yozgat'ın altlı üstlü kış nostaljisi!",
                link: "/",
                imgSrc: "/test/yozgat-20.jpg",
                imgAlt: "Yozgat'ın altlı üstlü kış nostaljisi!"
            },
            {
                title: "Akdağmadeni, doğa ve tarihin iç içe geçtiği bir cennet",
                link: "/",
                imgSrc: "/test/yozgat-20.jpg",
                imgAlt: "Akdağmadeni, doğa ve tarihin iç içe geçtiği bir cennet"
            },
            {
                title: "Yozgat'ın Yeni Meydanı! Dört Mevsim Estetik ve Keyif!",
                link: "/",
                imgSrc: "/test/yozgat-20.jpg",
                imgAlt: "Yozgat'ın Yeni Meydanı! Dört Mevsim Estetik ve Keyif!"
            }
        ]
    };

    return (
        <section className="photo-gallery-widget bg-white p-3" aria-labelledby="photo-gallery-title">
            <div className="section-title d-flex mt-1 mb-3 align-items-center">
                <h2 id="photo-gallery-title" className="lead flex-shrink-1 text-te-color m-0 fw-bold">
                    Foto Galeri
                </h2>
                <div className="flex-grow-1 title-line mx-3" role="presentation" />
                <div className="flex-shrink-1">
                    <Link
                        href="/foto-galeri"
                        title="Tüm Galeriler"
                        className="text-te-color"
                        prefetch={false}
                        aria-label="Tüm foto galerileri görüntüle"
                    >
                        <i className="fa fa-ellipsis-h fa-lg" aria-hidden="true" role="presentation" />
                    </Link>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-6 gallery-main">
                    <article className="card bg-white border-0">
                        <Link
                            className="d-block position-relative"
                            href={photoGalleryData.mainGallery.link}
                            title={photoGalleryData.mainGallery.title}
                            prefetch={false}
                            aria-label={`Foto galeri: ${photoGalleryData.mainGallery.title}`}
                        >
                            <div className="photo-gallery-circle" role="presentation" aria-hidden="true" />
                            <Image
                                src={photoGalleryData.mainGallery.imgSrc}
                                loading="lazy"
                                width={860}
                                height={546}
                                alt={photoGalleryData.mainGallery.imgAlt}
                                className="img-fluid"
                                quality={85}
                                sizes="(max-width: 768px) 100vw, 860px"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR"
                            />
                            <div className="title-bg-area h3" role="heading" aria-level="3">
                                <span className="line-clamp-2">{photoGalleryData.mainGallery.title}</span>
                            </div>
                        </Link>
                    </article>
                </div>
                <div className="col-lg-6 gallery-items">
                    <div className="row g-3 align-items-center" role="list">
                        {photoGalleryData.items.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="col-4" role="listitem">
                                    <Link
                                        href={item.link}
                                        title={item.title}
                                        prefetch={false}
                                        aria-label={`Foto galeri: ${item.title}`}
                                    >
                                        <div className="photo-gallery-circle" role="presentation" aria-hidden="true" />
                                        <Image
                                            className="img-fluid"
                                            src={item.imgSrc}
                                            loading="lazy"
                                            width={300}
                                            height={200}
                                            alt={item.imgAlt}
                                            quality={85}
                                            sizes="(max-width: 768px) 100vw, 300px"
                                            placeholder="blur"
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR"
                                        />
                                    </Link>
                                </div>
                                <div className="col-8" role="listitem">
                                    <Link
                                        href={item.link}
                                        title={item.title}
                                        prefetch={false}
                                        aria-label={`Foto galeri: ${item.title}`}
                                    >
                                        <h4 className="h5 mt-1 m-0">
                                            <span className="line-clamp-2">{item.title}</span>
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