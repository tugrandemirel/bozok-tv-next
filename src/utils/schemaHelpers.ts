export const generateNewsListSchema = (articles: any[]) => {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": articles.map((article, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "NewsArticle",
                "headline": article.title,
                "url": `${process.env.NEXT_PUBLIC_URL}/haber/${article.slug}`,
                "image": article.image?.path ? 
                    `${process.env.NEXT_PUBLIC_URL}${article.image.path}` : null,
                "datePublished": article.created_at,
                "dateModified": article.updated_at,
                "publisher": {
                    "@type": "Organization",
                    "name": "Bozok TV",
                    "logo": {
                        "@type": "ImageObject",
                        "url": `${process.env.NEXT_PUBLIC_URL}/logo.png`
                    }
                }
            }
        }))
    };
};

export const generateOrganizationSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization",
        "name": "Bozok TV",
        "url": process.env.NEXT_PUBLIC_URL,
        "logo": {
            "@type": "ImageObject",
            "url": `${process.env.NEXT_PUBLIC_URL}/logo.png`
        },
        "sameAs": [
            "https://facebook.com/bozoktv",
            "https://twitter.com/bozoktv",
            "https://instagram.com/bozoktv"
        ]
    };
};

export const generateBreadcrumbSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": process.env.NEXT_PUBLIC_URL
            }
        ]
    };
}; 