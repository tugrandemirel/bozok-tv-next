import apiClient from "@/utils/apiClient";
import API_URLS from "@/constants/apiUrls";
import { NewsletterResponse } from "@/types/newsletter";

export const getMainHeadlines = async (): Promise<NewsletterResponse['data']['data']> => {
    try {
        const response = await apiClient.get(API_URLS.MAIN_HEADLINES);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching main headlines:', error);
        throw error;
    }
};

export const getLastMinutes = async (): Promise<NewsletterResponse['data']['data']> => {
    try {
        const response = await apiClient.get(API_URLS.LAST_MINUTES);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching last minutes:', error);
        throw error;
    }
};

export const getFeaturedNews = async (): Promise<NewsletterResponse['data']['data']> => {
    try {
        const response = await apiClient.get(API_URLS.FEATURED_NEWS);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching featured news:', error);
        throw error;
    }
};

export const getNewsletterBySlug = async (slug: string): Promise<NewsletterResponse['data']['data'][0] | null> => {
    try {
        const response = await apiClient.get(`${API_URLS.CATEGORY_NEWSLETTERS}/${slug}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching newsletter by slug:', error);
        return null;
    }
};
