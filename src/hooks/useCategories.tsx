import { useState, useEffect } from 'react';
import { getCategories } from '@/services/categoryService';
import { Category } from '@/types/category';

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);  // categories tipini 'Category[]' olarak belirtiyoruz
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                const data = await getCategories();
                setCategories(data.data);  // Burada veriyi 'Category' tipinde alıyoruz
            } catch (error) {
                setError('Kategoriler alınırken bir hata oluştu.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return { categories, isLoading, error };
};