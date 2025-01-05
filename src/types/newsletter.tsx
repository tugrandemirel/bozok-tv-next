import {Image} from "@/types/image";
import {Category} from "@/types/category";

/**
 * Newsletter Interface: Temel bir newsletter yapısı.
 */
export interface Newsletter {
    id: number;
    title: string;
    slug: string;
    spot?: string; // Optional short description or teaser
    content?: string; // Optional detailed content
    category?: Category[]; // Optional categories for the newsletter
    image?: Image; // Optional main image associated with the newsletter
    images?: Image[]; // Optional additional images
    publish_date?: string; // Optional publish date (could be a string or Date type)
    created_at?: string; // Optional created at timestamp
}

/**
 * BaseNewsletterProps Interface: Temel bir props yapısı, bu tüm diğer interface'lerde tekrar kullanılabilir.
 */
export interface BaseNewsletterProps {
    newsletters: Newsletter[]; // A list of newsletters
}

/**
 * LastMinuteSwiperProps Interface: `BaseNewsletterProps`'i genişletir.
 */
export interface LastMinuteSwiperProps extends BaseNewsletterProps {
    // Bu yapıya özel başka özellikler eklenebilir
}

/**
 * MainHeadlineSwiperProps Interface: `BaseNewsletterProps`'i genişletir.
 */
export interface MainHeadlineSwiperProps extends BaseNewsletterProps {
    // Bu yapıya özel başka özellikler eklenebilir
}

/**
 * FeaturedNewsProps Interface: `BaseNewsletterProps`'i genişletir.
 */
export interface FeaturedNewsProps extends BaseNewsletterProps {
    // Bu yapıya özel başka özellikler eklenebilir
}