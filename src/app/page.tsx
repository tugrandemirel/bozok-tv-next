"use client"
import LastMinuteSwiper from "@/app/component/Swiper/News/LastMinuteSwiper";
import MainHeadlineSwiper from "@/app/component/Swiper/News/MainHeadlineSwiper";
import {FeaturedNews} from "@/app/component/News/FeaturedNews/FeaturedNews";
import {TabNews} from "@/app/component/News/TabNews/TabNews";
import Link from "next/link";
import AuthorsSwiper from "@/app/component/Swiper/AuthorSwiper";
import {PhotoGallery} from "@/app/component/Gallery/PhotoGallery";
import {VideoGallery} from "@/app/component/Gallery/VideoGallery";
import { useEffect, useState} from "react";
import axios from "axios";
import {useFeaturedNews, useLastMinuteNewsletters} from "@/hooks/useNewsletters";
export default function Home() {
    const [headlines, setHeadlines] = useState([]);
    const [error, setError] = useState(null);
    const { featuredNews, isLoading: featureLoading, error: featureError } = useFeaturedNews()
    const { lastMinutes, isLoading: lastMinuteIsLoading, error: lastMinuteError } = useLastMinuteNewsletters();

    const [activeTab, setActiveTab] = useState<string>("gundem"); // Aktif tab durumu

    const tabs = [
        { id: 0, title: "Gündem", slug: "gundem" },
        { id: 1, title: "Eğitim", slug: "egitim" },
        { id: 2, title: "Sağlık", slug: "saglik" },
        { id: 3, title: "Kültür-Sanat", slug: "kultur-sanat" },
        { id: 4, title: "Magazin", slug: "magazin" },
        { id: 5, title: "Dünya", slug: "dunya" },
    ];

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
                            <LastMinuteSwiper newsletters={lastMinutes}/>

                        </div>
                    </section>
                    {/* ANA MANŞET */}
                    <section className="main-headline-1 mb-3">
                        <div className="row g-2">
                            <div className="col-lg-8">
                                <MainHeadlineSwiper newsletters={headlines?.data}/>
                            </div>
                            <div
                                className="col-12 d-lg-none"
                            />
                            <div className="col-lg-4">
                                <div className="row g-2">
                                    <FeaturedNews newsletters={featuredNews}/>
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
                                {tabs.map((tab) => (
                                    <li className={`nav-item ${activeTab === tab.slug ? "active" : ""}`}
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.slug)}
                                    >
                                        <Link
                                            className={`nav-link text-uppercase ${activeTab === tab.slug ? "active" : ""}`}
                                            href="javascript:void(0)"
                                            title="Gündem"
                                        >
                                            {tab.title}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                            <div className="tab-content" id="pills-news-tabContent">
                                <TabNews slug={tabs.find((newsletter) => newsletter.slug === activeTab)?.slug}/>
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