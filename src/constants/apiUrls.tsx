const API_URLS = {
    CATEGORIES:             '/categories', // Kategorilere ait API URL'si
    LAST_MINUTES:           '/last-minutes', // Son Dakika ait API URL'si
    FEATURED_NEWS:          '/featured-news', // Öne Çıkanlara ait API URL'si
    CATEGORY_NEWSLETTERS:   "/category-newsletters", // Tab Menü için Kategori Bazlı Haber
    MAIN_HEADLINES:         '/main-headlines', // Ana manşetlere ait API URL'si
    NEWSLETTER:             '/newsletter', // Haberlere ait API URL'si
    RELATED_NEWSLETTER:     "/categories/{slug}/related-news", // Haber Detay sayfasında ilişkili haberler
    TODAY_HEADLINE_NEWS:    "/today-headline-news", // Haber Detay sayfasında ilişkili haberler
    LAST_NEWS:              "/last-news", // Son haberler,
    CATEGORY_THIRD_NEWSLETTER: "get-category-single-newsletter/{slug}", // Kateogriye ait 3 adet haber
};

export default API_URLS;