import Link from "next/link";
import Image from "next/image";
import React from "react";

export const PhotoGallery = () => {
    const photoGalleryData = {
        mainGallery: {
            title: "Yozgat’ın Çınarları Güneşin Keyfini Çıkarıyor!",
            link: "/",
            imgSrc: "/test/yozgat-20.jpg",
            imgAlt: "Yozgat’ın Çınarları Güneşin Keyfini Çıkarıyor!",
        },
        items: [
            {
                title: "Yozgat’ın altlı üstlü kış nostaljisi!",
                link: "/",
                imgSrc: "/test/yozgat-20.jpg",
                imgAlt: "Yozgat’ın altlı üstlü kış nostaljisi!"
            },
            {
                title: "Akdağmadeni, doğa ve tarihin iç içe geçtiği bir cennet",
                link: "/",
                imgSrc: "/test/yozgat-20.jpg",
                imgAlt: "Akdağmadeni, doğa ve tarihin iç içe geçtiği bir cennet"
            },
            {
                title: "Yozgat’ın Yeni Meydanı! Dört Mevsim Estetik ve Keyif!",
                link: "/",
                imgSrc: "/test/yozgat-20.jpg",
                imgAlt: "Yozgat’ın Yeni Meydanı! Dört Mevsim Estetik ve Keyif!"
            }
        ]
    };

    return (
            <div className="photo-gallery-widget bg-white p-3">
                <div className="section-title d-flex mt-1 mb-3 align-items-center">
                    <h2 className="lead flex-shrink-1 text-te-color m-0 fw-bold">
                        Foto Galeri
                    </h2>
                    <div className="flex-grow-1 title-line mx-3" />
                    <div className="flex-shrink-1">
                        <Link
                            href="/"
                            title="Tüm Galeriler"
                            className="text-te-color"
                            target="_self"
                        >
                            <i className="fa fa-ellipsis-h fa-lg" />
                        </Link>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-lg-6 gallery-main">
                        <div className="card bg-white border-0">
                            <Link
                                className="d-block position-relative"
                                href={photoGalleryData.mainGallery.link}
                                title={photoGalleryData.mainGallery.title}
                                target="_self"
                            >
                                <div className="photo-gallery-circle" />
                                <Image
                                    src={photoGalleryData.mainGallery.imgSrc}
                                    loading="lazy"
                                    width={860}
                                    height={546}
                                    alt={photoGalleryData.mainGallery.imgAlt}
                                    className="img-fluid"
                                />
                                <div className="title-bg-area h3">
                                    {photoGalleryData.mainGallery.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 gallery-items">
                        <div className="row g-3 align-items-center">
                            {photoGalleryData.items.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="col-4">
                                        <Link
                                            href={item.link}
                                            title={item.title}
                                        >
                                            <div className="photo-gallery-circle" />
                                            <Image
                                                className="img-fluid"
                                                src={item.imgSrc}
                                                loading="lazy"
                                                width={860}
                                                height={504}
                                                alt={item.imgAlt}
                                            />
                                        </Link>
                                    </div>
                                    <div className="col-8">
                                        <a
                                            href={item.link}
                                            title={item.title}
                                        >
                                            <h4 className="h5 mt-1 m-0 title-2-line">
                                                {item.title}
                                            </h4>
                                        </a>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    );
};
