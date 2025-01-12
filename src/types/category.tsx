export interface Category {
    id: number;     // Kategori ID'si
    name: string;   // Kategori adı
    slug: string;   // Kategori 'slug'ı (SEO dostu URL)
    children?: Category[]; // Alt kategoriler
}

export interface MainMenuProps {
    categories: Category[];
}

export interface MegaMenuProps {
    categories: Category[];
}

export interface MobileMenuProps {
    categories: Category[];
}