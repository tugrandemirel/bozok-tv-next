"use client"
import { useCategories } from "@/hooks/useCategories";
import MainMenu from "@/app/component/Header/Menu/MainMenu";
import Navbar from "./Menu/Navbar";

export const Header = () => {
    const { categories, isLoading, error } = useCategories(); // Hook'u burada kullanıyoruz

    if (isLoading) {
        return <div className="spinner-border d-flex align-items-center justify-content-center" role="status">
            <span className="sr-only">Yükleniyor...</span>
        </div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Kategoriler boşsa bir mesaj göstermek
    if (!Array.isArray(categories) || categories.length === 0) {
        return <div>Henüz bir kategori yok.</div>;
    }

    return (
        <header className="header-8">
            <Navbar isDisabled={false} />
            <MainMenu categories={categories} />
        </header>
    );
};
