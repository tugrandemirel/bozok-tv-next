const ROUTES = {
    HOME: '/',
    // Haber rotaları
    NEWS: {
        LIST: '/haber',
        DETAIL: (slug: string) => `/haber/${slug}`,
        TODAY_HEADLINE_NEWS: (slug: string) => `gunun-mansetleri`,
        LAST_NEWS: (slug: string) => `son-haberler`,
    },
    // Kategori rotaları
    CATEGORY: {
        LIST: '/kategori',
        DETAIL: (slug: string) => `/kategori/${slug}`,
        RELATED_NEWSLETTER: (slug: string) => `/kategori/${slug}/iliskili-haberler`,
        CATEGORY_NEWSLETTERS: (slug: string) => `/kategori/${slug}`,
    },
    // Yazar rotaları
    AUTHOR: {
        LIST: '/yazarlar',
        DETAIL: (slug: string) => `/yazarlar/${slug}`,
    },
    // Galeri rotaları
    GALLERY: {
        PHOTO: '/foto-galeri',
        VIDEO: '/video-galeri',
    },
    // Diğer sayfalar
    PAGES: {
        ABOUT: '/hakkimizda',
        CONTACT: '/iletisim',
        PRIVACY: '/gizlilik-politikasi',
        TERMS: '/kullanim-sartlari',
    }
} as const;

// Type-safe helper fonksiyonlar
export const createNewsPath = (slug: string) => ROUTES.NEWS.DETAIL(slug);
export const createCategoryPath = (slug: string) => ROUTES.CATEGORY.DETAIL(slug);
export const createAuthorPath = (slug: string) => ROUTES.AUTHOR.DETAIL(slug);

export default ROUTES; 