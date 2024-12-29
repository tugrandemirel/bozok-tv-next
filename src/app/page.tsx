"use client"
import LastMinuteSwiper from "@/app/component/Swiper/News/LastMinuteSwiper";
import MainHeadlineSwiper from "@/app/component/Swiper/News/MainHeadlineSwiper";
import {FeaturedNews} from "@/app/component/News/FeaturedNews/FeaturedNews";
import Link from "next/link";
import AuthorsSwiper from "@/app/component/Swiper/AuthorSwiper";
import {PhotoGallery} from "@/app/component/Gallery/PhotoGallery";
import {VideoGallery} from "@/app/component/Gallery/VideoGallery";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const [headlines, setHeadlines] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHeadlines = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1/"; // Fallback olarak localhost kullanıyoruz

                const response = await axios.get(`${apiUrl}main-headline`);
                if (response.data.status === true) {
                    setHeadlines(response.data.data);
                } else {
                    throw new Error(response.data.message);
                }
            } catch (err) {
                setError(err?.message || "Bir hata oluştu.");
            }
        };
        fetchHeadlines();
    }, []);

    return (
        <>
            <main className="index">
                <h1 className="d-none">Yozgat Haberleri</h1>
                <div className="pr-3 sticky-ad  d-none d-xl-block"/>
                <div className="pl-3 sticky-ad  d-none d-xl-block"/>
                <div className="container mt-3">
                    {/* SON DAKİKA */}
                    <section className="last-minute bg-red p-2 mb-3">
                        <div className="position-relative overflow-hidden d-flex justify-content-start" style={{height: 27}}>
                            <div className="flex-shrink-1">
                                <a
                                    href=""
                                    className="text-warning d-none d-lg-inline-block text-uppercase"
                                    target="_self"
                                    title="Son Dakika"
                                >
                                    <h2 className="h5 mb-0 text-nowrap">Son Dakika</h2>
                                </a>
                            </div>
                            <LastMinuteSwiper/>

                        </div>
                    </section>
                    {/* ANA MANŞET */}
                    <section className="main-headline-1 mb-3">
                        <div className="row g-2">
                            <div className="col-lg-8">
                                <MainHeadlineSwiper headlines={headlines?.data}/>
                            </div>
                            <div
                                className="col-12 d-lg-none"
                            />
                            <div className="col-lg-4">
                                <div className="row g-2">
                                    <FeaturedNews/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="authors-h" className="mb-3">
                        <div className="authors-light bg-white px-3 pb-3 position-relative">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link fw-bold active text-uppercase"
                                        id="pills-authors-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-authors-h"
                                        type="button"
                                    >
                                        Yazarlar
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-authors-h"
                                    role="tabpanel"
                                    aria-labelledby="pills-authors-tab"
                                >
                                    <div className="position-absolute top-0 end-0 me-3 mt-2">
                                        <Link
                                            href="/"
                                            title="Tüm Yazarlar"
                                            className="text-te-color"
                                            target="_self"
                                        >
                                            <i className="fa fa-ellipsis-h fa-lg" />
                                        </Link>
                                    </div>
                                    <AuthorsSwiper />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="tab-news">
                        <div className="bg-white mb-3 p-3 position-relative">
                            <ul
                                className="nav nav-pills nav-justified mb-2 tabMenu1"
                                id="pills-tab-news"
                            >
                                <li className="nav-item" data-catid={41892}>
                                    <a
                                        className="nav-link text-uppercase   active "
                                        id="pills-kategori-41892-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-kategori-41892"
                                        title="Gündem"
                                    >
                                        Gündem
                                    </a>
                                </li>
                                <li className="nav-item" data-catid={41895}>
                                    <a
                                        className="nav-link text-uppercase  "
                                        id="pills-kategori-41895-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-kategori-41895"
                                        title="Eğitim"
                                    >
                                        Eğitim
                                    </a>
                                </li>
                                <li className="nav-item" data-catid={41897}>
                                    <a
                                        className="nav-link text-uppercase  "
                                        id="pills-kategori-41897-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-kategori-41897"
                                        title="Sağlık"
                                    >
                                        Sağlık
                                    </a>
                                </li>
                                <li className="nav-item" data-catid={42051}>
                                    <a
                                        className="nav-link text-uppercase  "
                                        id="pills-kategori-42051-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-kategori-42051"
                                        title="Kültür-Sanat"
                                    >
                                        Kültür-Sanat
                                    </a>
                                </li>
                                <li className="nav-item" data-catid={41899}>
                                    <a
                                        className="nav-link text-uppercase  "
                                        id="pills-kategori-41899-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-kategori-41899"
                                        title="Magazin"
                                    >
                                        Magazin
                                    </a>
                                </li>
                                <li className="nav-item" data-catid={41889}>
                                    <a
                                        className="nav-link text-uppercase  "
                                        id="pills-kategori-41889-tab"
                                        data-bs-toggle="pill"
                                        href="#pills-kategori-41889"
                                        title="Dünya"
                                    >
                                        Dünya
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-news-tabContent">
                                <div className="row g-3 result overflow-hidden" style={{ minHeight: 500 }}>
                                    <div className="col-lg-6">
                                        <a
                                            href="/agir-tonaj-mercedeslere-sifa-dagitan-yozgatli-cekirdekten-yetisti-genc-yasta-marka-oldu"
                                            title="Ağır tonaj Mercedeslere şifa dağıtan Yozgatlı! Çekirdekten yetişti genç yaşta marka oldu!"
                                            target="_self"
                                            className="top-mask position-relative d-block overflow-hidden"
                                        >
                                            <img
                                                src="https://yozgatcamlikcom.teimg.com/crop/620x476/yozgatcamlik-com/uploads/2024/12/badem-mercedes-1.jpg"
                                                width={620}
                                                height={455}
                                                loading="lazy"
                                                className="img-fluid"
                                                alt="Ağır tonaj Mercedeslere şifa dağıtan Yozgatlı! Çekirdekten yetişti genç yaşta marka oldu!"
                                            />
                                            <div className="title-bg-area">
                                                <h3 className="text-white mb-0 mt-1">
                                                    Ağır tonaj Mercedeslere şifa dağıtan Yozgatlı! Çekirdekten yetişti
                                                    genç yaşta marka oldu!
                                                </h3>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <a
                                                    href="/ankaradaki-yozgat-arabasinda-bir-araya-geldi-gundem-memleket-meselesi"
                                                    title="Ankara’daki Yozgat arabaşında bir araya geldi, gündem memleket meselesi!"
                                                    target="_self"
                                                >
                                                    <img
                                                        src="https://yozgatcamlikcom.teimg.com/crop/320x207/yozgatcamlik-com/uploads/2024/12/aankara.jpg"
                                                        width={300}
                                                        height={175}
                                                        loading="lazy"
                                                        className="img-fluid"
                                                        alt="Ankara’daki Yozgat arabaşında bir araya geldi, gündem memleket meselesi!"
                                                    />
                                                    <h5 className="title-2-line mt-1 mb-0">
                                                        Ankara’daki Yozgat arabaşında bir araya geldi, gündem memleket
                                                        meselesi!
                                                    </h5>
                                                </a>
                                            </div>
                                            <div className="col-6">
                                                <a
                                                    href="/yozgatta-guvercinlere-esnaf-ve-vatandas-sahip-cikiyor"
                                                    title="Yozgat'ta  Güvercinlere Esnaf ve Vatandaş Sahip Çıkıyor"
                                                    target="_self"
                                                >
                                                    <img
                                                        src="https://yozgatcamlikcom.teimg.com/crop/320x207/yozgatcamlik-com/uploads/2024/12/kus-3.jpg"
                                                        width={300}
                                                        height={175}
                                                        loading="lazy"
                                                        className="img-fluid"
                                                        alt="Yozgat'ta  Güvercinlere Esnaf ve Vatandaş Sahip Çıkıyor"
                                                    />
                                                    <h5 className="title-2-line mt-1 mb-0">
                                                        Yozgat'ta Güvercinlere Esnaf ve Vatandaş Sahip Çıkıyor
                                                    </h5>
                                                </a>
                                            </div>
                                            <div className="col-6">
                                                <a
                                                    href="/elmadagda-yasli-ve-engelli-vatandaslara-anlamli-ziyaret"
                                                    title="Elmadağ'da Yaşlı ve Engelli Vatandaşlara Anlamlı Ziyaret"
                                                    target="_self"
                                                >
                                                    <img
                                                        src="https://yozgatcamlikcom.teimg.com/crop/320x207/yozgatcamlik-com/uploads/2024/12/elmedag-kaymakamligi-3.jpg"
                                                        width={300}
                                                        height={175}
                                                        loading="lazy"
                                                        className="img-fluid"
                                                        alt="Elmadağ'da Yaşlı ve Engelli Vatandaşlara Anlamlı Ziyaret"
                                                    />
                                                    <h5 className="title-2-line mt-1 mb-0">
                                                        Elmadağ'da Yaşlı ve Engelli Vatandaşlara Anlamlı Ziyaret
                                                    </h5>
                                                </a>
                                            </div>
                                            <div className="col-6">
                                                <a
                                                    href="/ankara-buyuksehir-belediyesi-200-cocuga-umut-oldu"
                                                    title="Ankara Büyükşehir Belediyesi 200 Çocuğa Umut Oldu"
                                                    target="_self"
                                                >
                                                    <img
                                                        src="https://yozgatcamlikcom.teimg.com/crop/320x207/yozgatcamlik-com/uploads/2024/12/abb-200-cocuk.jpg"
                                                        width={300}
                                                        height={175}
                                                        loading="lazy"
                                                        className="img-fluid"
                                                        alt="Ankara Büyükşehir Belediyesi 200 Çocuğa Umut Oldu"
                                                    />
                                                    <h5 className="title-2-line mt-1 mb-0">
                                                        Ankara Büyükşehir Belediyesi 200 Çocuğa Umut Oldu
                                                    </h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="photo-gallery-1" className="mb-3">
                        <PhotoGallery />
                    </section>
                    <section id="video-gallery-1" className="mb-3">
                        <VideoGallery />
                    </section>
                </div>
            </main>
        </>
    );
}
