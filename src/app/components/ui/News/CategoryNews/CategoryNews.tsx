import {getCategoryNewsletters} from "@/services/newsletterService";
import {Category} from "@/types/category";
import Link from "next/link";
import Image from "next/image";
import {Metadata} from "next";

interface CategoryNewsProps {
    slug: string;
}

async function getData (slug: string) {
    try {
        const newsletters = await getCategoryNewsletters(slug)
        return {
            newsletters
        }
    } catch (error) {
        console.log('API Error: ', error)
        throw error;
    }
}

export default async function CategoryNews({ slug }: CategoryNewsProps)  {
    const {newsletters} = await getData(slug)

    const apiUrl = process.env.NEXT_PUBLIC_URL;
    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/kategori/${slug}`;

    if (!newsletters) {
        return (
            <main className="single">
                <div className="container">
                    <h1>Haber Bulunamadı</h1>
                    <p>Bu kategoride haber bulunamadı.</p>
                </div>
            </main>
        );
    }

    // Schema.org yapısı
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Haberleri`,
        description: `${slug.charAt(0).toUpperCase() + slug.slice(1)} kategorisindeki en güncel haberler`,
        url: currentUrl,
        hasPart: newsletters.map((news: any) => ({
            '@type': 'NewsArticle',
            headline: news.title,
            description: news.spot,
            image: news.image?.path ? [`${apiUrl}/${news.image.path}`] : [],
            datePublished: news.publish_date || news.created_at,
            dateModified: news.updated_at,
            author: {
                '@type': 'Organization',
                name: 'Bozok TV'
            },
            publisher: {
                '@type': 'Organization',
                name: 'Bozok TV',
                logo: {
                    '@type': 'ImageObject',
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`
                }
            },
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/haber/${news.slug}`
            }
        }))
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {newsletters.map((newsletter, index) => (
                <div className="col-lg-4" key={newsletter.id || index}>
                    <Link
                        className="d-block position-relative cat-news-box"
                        href={`/haber/${newsletter.slug}`}
                        title={newsletter.title}
                    >
                        <Image
                            src={newsletter.image?.path ? `${apiUrl}${newsletter.image.path}` : '/test/default.jpg'}
                            width={860}
                            height={504}
                            alt={newsletter?.title || 'Haber görseli'}
                            title={newsletter?.title}
                            className="img-fluid"
                            {...(index < 3 ? { priority: true } : { loading: 'lazy' })}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={75}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpKRWVdWl1pbWRkb2Npa2T/2wBDARUXFx4aHR4eHWRkOSRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                        <div className="h4 mt-1 mb-0">
                            {newsletter?.title}
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
};
