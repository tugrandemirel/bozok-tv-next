import { Suspense } from 'react';
import Link from "next/link";
import {NewsletterResponse} from "@/types/newsletter";
import { generateNewsListSchema, generateOrganizationSchema, generateBreadcrumbSchema } from '@/utils/schemaHelpers';
import { Metadata } from 'next';
import LastMinuteSwiper from "@/app/components/ui/Swiper/News/LastMinuteSwiper";
import MainHeadlineSwiper from "@/app/components/ui/Swiper/News/MainHeadlineSwiper";
import {FeaturedNews} from "@/app/components/ui/News/FeaturedNews/FeaturedNews";
import AuthorsSwiper from "@/app/components/ui/Swiper/AuthorSwiper";
import {TabNewsClient} from "@/app/components/ui/News/TabNews/TabNewsClient";
import {PhotoGallery} from "@/app/components/ui/Gallery/PhotoGallery";
import {VideoGallery} from "@/app/components/ui/Gallery/VideoGallery";
import {TodayHeadlineNews} from "@/app/components/ui/News/TodayHeadlineNews/TodayHeadlineNews";
import {getTodayHeadlineNews} from "@/services/newsletterService";
import CategoryNews from "@/app/components/ui/News/CategoryNews/CategoryNews";
import LastNews from "@/app/components/ui/News/LastNews/LastNews";


async function getData() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1/";
    
    try {
        const [headlinesRes, lastMinutesRes, featuredNewsRes, todayHeadlineNewsRes, lastNewsRes] = await Promise.all([
            fetch(`${apiUrl}main-headline`, { cache: 'no-store' }),
            fetch(`${apiUrl}last-minutes`, { cache: 'no-store' }),
            fetch(`${apiUrl}featured-news`, { cache: 'no-store' }),
            fetch(`${apiUrl}today-headline-news`, { cache: 'no-store' }),
            fetch(`${apiUrl}last-news`, { cache: 'no-store' }),
        ]);

        if (!headlinesRes.ok) throw new Error('Manşet haberleri yüklenemedi');
        if (!lastMinutesRes.ok) throw new Error('Son dakika haberleri yüklenemedi');
        if (!featuredNewsRes.ok) throw new Error('Öne çıkan haberler yüklenemedi');
        if (!todayHeadlineNewsRes.ok) throw new Error('Günün manşeti haberleri yüklenemedi');
        if (!lastNewsRes.ok) throw new Error('Günün manşeti haberleri yüklenemedi');

        const [headlines, lastMinutes, featuredNews, todayHeadlineNews,lastNews] = await Promise.all([
            headlinesRes.json(),
            lastMinutesRes.json(),
            featuredNewsRes.json(),
            todayHeadlineNewsRes.json(),
            lastNewsRes.json(),
        ]) as [NewsletterResponse, NewsletterResponse, NewsletterResponse, NewsletterResponse, NewsletterResponse];

        const fakeAuthors = [
            {
                id: 1,
                name: "Ahmet Sargın",
                slug: "ahmet-sargin",
                image: "/test/logo.png",
                latest_post: {
                    title: "Sorgun Sizi İlçeye Davet Ediyor",
                    slug: "sorgun-sizi-ilceye-davet-ediyor"
                }
            },
            {
                id: 2,
                name: "Doğan Tufan",
                slug: "dogan-tufan",
                image: "/test/logo.png",
                latest_post: {
                    title: "Acı Haberler Sınır Tanımıyor",
                    slug: "aci-haberler-sinir-tanimiyor"
                }
            },
            {
                id: 3,
                name: "Ömer Tansel",
                slug: "omer-tansel",
                image: "/test/logo.png",
                latest_post: {
                    title: "Suriye'nin Geleceği ve Türkiye -2",
                    slug: "suriyenin-gelecegi-ve-turkiye-2"
                }
            }
        ];
        return {
            headlines: headlines.data.data,
            lastMinutes: lastMinutes.data.data,
            featuredNews: featuredNews.data.data,
            todayHeadlineNews: todayHeadlineNews.data.data,
            lastNews: lastNews.data.data,
            authors: fakeAuthors
        };
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export const metadata: Metadata = {
    title: 'Bozok TV - Yozgat Haberleri',
    description: 'Yozgat\'ın güncel haberleri, son dakika gelişmeleri, siyaset, ekonomi, spor ve daha fazlası Bozok TV\'de',
    keywords: 'yozgat haberleri, son dakika, güncel haberler',
    openGraph: {
        title: 'Yozgat Haberleri',
        description: 'Yozgat\'ın haber portalı',
        type: 'website',
        locale: 'tr_TR',
        url: process.env.NEXT_PUBLIC_URL,
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Yozgat Haberleri',
        description: 'Yozgat\'ın haber portalı',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google-site-verification-code',
    }
};

export default async function Home() {
    const data = await getData();
    
    // Schema'ları oluştur
    const lastMinutesSchema = generateNewsListSchema(data.lastMinutes);
    const headlinesSchema = generateNewsListSchema(data.headlines);
    const featuredNewsSchema = generateNewsListSchema(data.featuredNews);
    const todayHeadlineNewsSchema = generateNewsListSchema(data.todayHeadlineNews);
    const lastNewsSchema = generateNewsListSchema(data.lastNews);

    const tabs = [
        { id: 0, title: "Gündem", slug: "gundem" },
        { id: 1, title: "Siyaset", slug: "siyaset" },
        { id: 2, title: "Eğitim", slug: "egitim" },
        { id: 3, title: "Sağlık", slug: "saglik" },
        { id: 4, title: "Kültür-Sanat", slug: "kultur-sanat" },
        { id: 5, title: "Magazin", slug: "magazin" },
        { id: 6, title: "Dünya", slug: "dunya" },
    ];

    const categoryNewsletters = [
        { id: 0, title: "Asayiş", slug: "asayis" },
        { id: 1, title: "Spor", slug: "spor" },
    ]
    return (
        <>
            {/* Schema.org yapıları */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "mainEntity": {
                                "@type": "ItemList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Son Dakika",
                                        "item": lastMinutesSchema
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Ana Manşetler",
                                        "item": headlinesSchema
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Öne Çıkan Haberler",
                                        "item": featuredNewsSchema
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 4,
                                        "name": "Günün Maşeti",
                                        "item": todayHeadlineNewsSchema
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 5,
                                        "name": "Son Haberler",
                                        "item": lastNewsSchema
                                    }
                                ]
                            }
                        },
                        generateOrganizationSchema(),
                        generateBreadcrumbSchema()
                    ])
                }}
            />

            {/* Mevcut sayfa içeriği */}
            <main className="index">
                <h1 className="d-none">Yozgat Haberleri</h1>
                <div className="pr-3 sticky-ad d-none d-xl-block"/>
                <div className="pl-3 sticky-ad d-none d-xl-block"/>
                <article className="container mt-3">
                    {/* SON DAKİKA */}
                    <Suspense fallback={<div>Son dakika haberleri yükleniyor...</div>}>
                        <section aria-label="Son Dakika Haberleri" className="last-minute bg-red p-2 mb-3">
                        <div className="position-relative overflow-hidden d-flex justify-content-start" style={{height: 27}}>
                            <div className="flex-shrink-1">
                                    <a href="" className="text-warning d-none d-lg-inline-block text-uppercase"
                                       target="_self" title="Son Dakika">
                                    <h2 className="h5 mb-0 text-nowrap">Son Dakika</h2>
                                </a>
                                </div>
                                <LastMinuteSwiper newsletters={data.lastMinutes}/>
                        </div>
                    </section>
                    </Suspense>

                    {/* ANA MANŞET */}
                    <Suspense fallback={<div>Manşet haberleri yükleniyor...</div>}>
                        <section className="main-headline-1 mb-3">
                            <div className="row g-2">
                                <div className="col-lg-8">
                                        <MainHeadlineSwiper newsletters={data.headlines}/>
                                </div>
                                    <div className="col-12 d-lg-none"/>
                                <div className="col-lg-4">
                                    <div className="row g-2">
                                            <FeaturedNews newsletters={data.featuredNews}/>
                                        </div>
                                </div>
                            </div>
                        </section>
                    </Suspense>

                    <Suspense fallback={<div>Manşet haberleri yükleniyor...</div>}>
                        <section
                            className="top-headline-1 mb-3"
                        >
                            <TodayHeadlineNews newsletters={data.todayHeadlineNews} />
                        </section>
                    </Suspense>

                    {/* YAZARLAR */}
                    <Suspense fallback={<div>Yazarlar yükleniyor...</div>}>
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
                                                href="/yazarlar"
                                            title="Tüm Yazarlar"
                                            className="text-te-color"
                                                aria-label="Tüm yazarları görüntüle"
                                        >
                                            <i className="fa fa-ellipsis-h fa-lg" />
                                        </Link>
                                        </div>
                                        <AuthorsSwiper authors={data.authors} />
                                </div>
                            </div>
                        </div>
                    </section>
                    </Suspense>

                    {/* TAB HABERLERİ */}
                    <Suspense fallback={<div>TAB haberleri yükleniyor...</div>}>
                    <section className="tab-news">
                        <div className="bg-white mb-3 p-3 position-relative">
                                <TabNewsClient tabs={tabs} initialSlug="gundem" />
                        </div>
                    </section>
                    </Suspense>

                    {/* GALERİLER */}
                    <Suspense fallback={<div>Galeriler yükleniyor...</div>}>
                    <section id="photo-gallery-1" className="mb-3">
                        <PhotoGallery />
                    </section>
                    <section id="video-gallery-1" className="mb-3">
                        <VideoGallery />
                    </section>
                    </Suspense>
                    <div className="row g-3">
                        <div className="col-lg-8">
                            {/* KATEGORİ HABERLER */}

                                {categoryNewsletters.map((categoryNewsletter, index) => (
                                    <section
                                        className="category-block mb-3 p-3 bg-white" key={categoryNewsletter.id || index}
                                    >
                                    <div className="section-title d-flex mb-3 align-items-center" key={categoryNewsletter.id || index}>
                                        <h2 className="lead flex-shrink-1 text-te-color m-0 fw-bold">
                                            {categoryNewsletter?.title} Haberleri
                                        </h2>
                                        <div className="flex-grow-1 title-line mx-3" />
                                    </div>
                                        <div className="row g-3">
                                            <CategoryNews slug={categoryNewsletter?.slug} />
                                        </div>
                                    </section>
                                ))}

                            {/* LATEST POSTS */}
                            <section className="last-added-widget mb-3">
                                <LastNews newsletters={data.lastNews} />
                            </section>
                        </div>
                    </div>

                </article>
            </main>
        </>
    );
}