import {Image} from "@/types/image";
import {Category} from "@/types/category";
import {NewsletterSource} from "@/types/newsletterSource";

/**
 * Newsletter Interface: Temel bir newsletter yapısı.
 */
export interface Newsletter {
    id: number;
    title: string;
    slug: string;
    spot?: string;
    content?: string;
    category?: Category;
    image?: {
        path: string;
    };
    images?: Image[];
    is_five_cuff: boolean;
    is_main_headline: boolean;
    source?: NewsletterSource[];
    publish_date?: string;
    created_at?: string;
    updated_at?: string;
    author?: string;
}

export interface ApiResponse<T> {
    status: boolean;
    icon: 'success' | 'error';
    message: string;
    data: {
        data: T[];
    };
}

export interface NewsletterResponse extends ApiResponse<Newsletter> {}

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
    allNewsLink: boolean,
}

/**
 * FeaturedNewsProps Interface: `BaseNewsletterProps`'i genişletir.
 */
export interface FeaturedNewsProps extends BaseNewsletterProps {
    // Bu yapıya özel başka özellikler eklenebilir
}

export interface TodayHeadlineProps extends BaseNewsletterProps {
    // Bu yapıya özel başka özellikler eklenebilir
}

export interface SpecialNewsProps extends BaseNewsletterProps {

}