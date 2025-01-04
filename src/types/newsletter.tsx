import {Image} from "@/types/image";
import {Category} from "@/types/category";

export interface Newsletter {
    id: number;
    title: string;
    slug: string;
    spot?: string;
    content?: string;
    category?: Category[];
    image?: Image;
    images?: Image[];
    publish_date?: string;
    created_at?: string;
}

export interface LastMinuteSwiperProps {
    newsletter: Newsletter;
}
export interface MainHeadlineSwiperProps {
    newsletter: Newsletter;
}