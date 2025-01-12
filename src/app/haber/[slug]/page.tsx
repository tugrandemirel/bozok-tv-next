import {getNewsletterBySlug, getRelatedNews} from "@/services/newsletterService";
import {NewsMetadata} from "@/app/components/utils/NewsMetadata";
import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import moment from 'moment';
import 'moment/locale/tr';

interface Props {
    params: {
        slug: string;
    };
}

const apiUrl = process.env.NEXT_PUBLIC_URL;

async function getData (slug: string) {
    try {
        const newsletter = await getNewsletterBySlug(slug);

        let relatedNews = [];
        if (newsletter?.category?.slug) {
            relatedNews = await getRelatedNews(newsletter.category.slug);
        }
        return {
            newsletter,
            relatedNews,
        };

    } catch (error) {
        console.log('API Error: ', error)
        throw error;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { newsletter, relatedNews } = await getData(params.slug);

    if (!newsletter) {
        return {
            title: "Haber Bulunamadı",
            description: "Aradığınız haber bulunamadı."
        };
    }

    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/haber/${params.slug}`;
    let image = newsletter.images?.find(image => image.image_type === "INSIDE")?.path || newsletter.images?.[0]?.path;
    return {
        title: 'Bozok Tv - '+newsletter.title || '',
        description: newsletter.spot || '',
        openGraph: {
            title: newsletter.title,
            description: newsletter.spot || '',
            images: image ? [{
                url: apiUrl+'/'+image,
                width: 1200,
                height: 630,
                alt: newsletter.title
            }] : [],
            type: "article",
            publishedTime: newsletter.created_at,
            modifiedTime: newsletter.updated_at,
            authors: ['Bozok TV'],
            url: currentUrl,
        },
        alternates: {
            canonical: currentUrl,
        },
        robots: {
            index: true,
            follow: true,
        },
        twitter: {
            card: 'summary_large_image',
            title: newsletter.title,
            description: newsletter.spot || '',
            images: image ? [apiUrl+'/'+image] : [],
        },
        other: {
            'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
        applicationName: 'Bozok TV',
        formatDetection: {
            telephone: false,
        },
        themeColor: '#ffffff',
        viewport: 'width=device-width, initial-scale=1',
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
        category: newsletter.category?.name || 'Haber',
        keywords: ['haber', 'bozok tv', newsletter.category?.name || 'haber'].filter(Boolean),
        creator: 'Bozok TV',
        publisher: 'Bozok TV',
        metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bozoktv.com'),
        authors: [{ name: 'Bozok TV' }],
        generator: 'Next.js',
    };
}

export default async function NewsletterDetail({ params }: Props) {
    moment.locale('tr');
    const { newsletter, relatedNews } = await getData(params.slug);

    if (!newsletter) {
        return (
            <main className="single">
                <div className="container">
                    <h1>Haber Bulunamadı</h1>
                    <p>Aradığınız haber bulunamadı veya yayından kaldırılmış olabilir.</p>
                </div>
            </main>
        );
    }

    let image = newsletter.images?.find(image => image.image_type === "INSIDE")?.path || newsletter.images?.[0]?.path;

    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/haber/${params.slug}`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: newsletter.title,
        description: newsletter.spot,
        image: image ? [apiUrl+image] : [],
        datePublished: newsletter.created_at,
        dateModified: newsletter.updated_at,
        author: {
            '@type': 'Organization',
            name: 'Bozok TV',
            url: process.env.NEXT_PUBLIC_SITE_URL,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Bozok TV',
            logo: {
                '@type': 'ImageObject',
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': currentUrl,
        },
        articleSection: newsletter.category?.name || 'Haber',
        isPartOf: {
            '@type': 'Collection',
            name: 'İlişkili Haberler',
            hasPart: relatedNews.map((news: any) => ({
                '@type': 'NewsArticle',
                headline: news.title,
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/haber/${news.slug}`,
                image: news.image?.path ? [`${apiUrl}/${news.image.path}`] : [],
                datePublished: news.publish_date || news.created_at,
                publisher: {
                    '@type': 'Organization',
                    name: 'Bozok TV',
                    url: process.env.NEXT_PUBLIC_SITE_URL
                }
            }))
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
            <NewsMetadata
                title={newsletter.title || ''}
                description={newsletter.spot || ''}
                image={image ? apiUrl+image : ''}
                publishDate={newsletter.created_at || ''}
                author={'Bozok TV'}
                url={currentUrl}
            />
            <main className="single">
                <div className="post-header pt-3 bg-white">
                    <div className="container">
                        <div className="meta-category pb-4 d-flex">
                            <Link href="/" className="breadcrumb_link" target="_self">
                                Haberler
                            </Link>
                            <Link
                                href={`/kategori/${newsletter.category?.slug}`}
                                className="breadcrumb_link text-dark">
                                {newsletter.category?.name || 'Genel'}
                            </Link>
                        </div>
                        <h1 className="h2 fw-bold text-lg-start headline my-2">
                            {newsletter.title}
                        </h1>
                        <h2 className="lead text-lg-start text-dark my-2 description">
                            {newsletter.spot}
                        </h2>
                        <div className="news-tags"></div>
                    </div>
                    <div className="bg-light py-1">
                        <div className="container d-flex justify-content-between align-items-center">
                            <div className="meta-author">
                                <div className="box">
                                    <time className="fw-bold">{moment(newsletter.created_at).locale('tr').format('D MMMM YYYY HH:mm')}</time>
                                    <span className="info">Yayınlanma</span>
                                </div>
                                {/*<div className="box">
                                    <span className="fw-bold">15</span>
                                    <span className="info text-dark">Gösterim</span>
                                </div>
                                <div className="box">
                                    <span className="fw-bold">2 Dk</span>
                                    <span className="info text-dark">Okunma Süresi</span>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container g-0 g-sm-2">
                    <div className="news-section overflow-hidden mt-lg-3">
                        <div className="row g-3">
                            <div className="col-lg-8">
                                <div className="inner">
                                    <Link
                                        href={apiUrl+image || '/'}
                                        className="position-relative d-block"
                                        data-fancybox=""
                                    >
                                        <div className="zoom-in-out m-3">
                                            <i className="fa fa-expand" style={{ fontSize: 14 }} />
                                        </div>
                                        <Image
                                            className="img-fluid"
                                            src={ apiUrl+image ?? '/test/default.jpg'}
                                            alt={newsletter.title}
                                            width={860}
                                            height={504}
                                        />
                                    </Link>
                                </div>
                                <div className="card border-0 mb-3">
                                    <div className="article-text container-padding">
                                        <div dangerouslySetInnerHTML={{ __html: sanitizeContent(newsletter.content) || '' }} />
                                        <div className="article-source py-3 small border-top">
                                            <span className="reporter-name">
                                                <strong className="text-uppercase">Editör: </strong>
                                                { newsletter?.source?.name ||'' }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="related-news my-3 bg-white p-3">
                                    <div className="section-title d-flex mb-3 align-items-center">
                                        <div className="h2 lead flex-shrink-1 text-te-color m-0 text-nowrap fw-bold">
                                            Bunlar da ilginizi çekebilir
                                        </div>
                                        <div className="flex-grow-1 title-line ms-3" />
                                    </div>
                                    <div className="row g-3">
                                    {relatedNews.map((news: any, index) => (
                                        <div key={news.id || index} className="col-6 col-lg-4">
                                            <Link 
                                                href={`/haber/${news.slug}`}
                                                title={news.title}
                                            >
                                                <Image
                                                    className="img-fluid"
                                                    src={`${apiUrl+news.image.path}`}
                                                    width={860}
                                                    height={504}
                                                    alt={news.title}
                                                />
                                            </Link>
                                            <h3 className="h5 mt-1">
                                                <Link
                                                    href={`/haber/${news.slug}`}
                                                    title={news.title}
                                                >
                                                    {news.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

const sanitizeContent = (content: string) => {
    // YouTube iframe'ini bul ve güvenli hale getir
    return content.replace(
        /<iframe.+?src="https?:\/\/(?:www\.)?youtube\.com\/embed\/([^"]+)".+?<\/iframe>/g,
        '<iframe width="100%" height="480" src="https://www.youtube-nocookie.com/embed/$1?rel=0&modestbranding=1&enablejsapi=0&origin=' + process.env.NEXT_PUBLIC_SITE_URL + '" loading="lazy" referrerpolicy="origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameborder="0" allowfullscreen></iframe>'
    );
};