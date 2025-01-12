import {TodayHeadlineProps} from "@/types/newsletter";
import {createNewsPath} from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

export const TodayHeadlineNews: React.FC<TodayHeadlineProps> = ({newsletters}) => {
    if (!newsletters || newsletters.length === 0) {
        return <div>Öne çıkan haber bulunamadı</div>;
    }

    const apiUrl = process.env.NEXT_PUBLIC_URL;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    // Schema.org için ItemList oluştur
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: newsletters.map((newsletter, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'NewsArticle',
                headline: newsletter.title,
                url: `${siteUrl}/haber/${newsletter.slug}`,
                image: newsletter.image?.path ? [`${apiUrl}${newsletter.image.path}`] : [],
                datePublished: newsletter.publish_date || newsletter.created_at,
                dateModified: newsletter.updated_at,
                publisher: {
                    '@type': 'Organization',
                    name: 'Bozok TV',
                    logo: {
                        '@type': 'ImageObject',
                        url: `${siteUrl}/logo.png`
                    }
                },
                author: {
                    '@type': 'Organization',
                    name: 'Bozok TV'
                },
                description: newsletter.spot || '',
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `${siteUrl}/haber/${newsletter.slug}`
                }
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="row g-3">
                {newsletters.map((newsletter, index) => (
                    <div className="col-6 col-md" key={newsletter.id || index}>
                        <Link
                            href={createNewsPath(newsletter?.slug)}
                            title={newsletter?.title}
                        >
                            <div className="position-relative top-mask">
                                <Image
                                    src={newsletter?.image ? `${apiUrl}${newsletter?.image?.path}` : '/test/default.jpg'}
                                    width={860}
                                    height={604}
                                    loading="lazy"
                                    className="img-fluid"
                                    alt={newsletter?.title || 'Haber görseli'}
                                    quality={75}
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR"
                                />
                            </div>
                            <h2 className="h4 my-1 title-2-line">
                                {newsletter?.title}
                            </h2>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};