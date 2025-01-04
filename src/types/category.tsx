export interface Category {
    id: number;     // Kategori ID'si
    name: string;   // Kategori adı
    slug: string;   // Kategori 'slug'ı (SEO dostu URL)
}

export interface MainMenuProps {
    categories: Category[];
}

export interface MegaMenuProps {
    categories: Category[];
    isOpen: boolean;
}

export interface MobileMenuProps {
    categories: Category[];
}