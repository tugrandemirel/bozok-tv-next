import apiClient from "@/utils/apiClient";
import API_URLS from "@/constants/apiUrls";
import { NewsletterResponse, Newsletter } from "@/types/newsletter";

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

export const getNewsletterBySlug = async (slug: string): Promise<Newsletter | null> => {
    try {
        const response = await apiClient.get(`${API_URLS.NEWSLETTER}/${slug}`);
        return response.data.data.data;
    } catch (error) {
        console.error('Error fetching newsletter by slug:', error);
        return null;
    }
};

export const getRelatedNews = async (slug: string): Promise<Newsletter | null> => {
    try {
        const url = API_URLS.RELATED_NEWSLETTER.replace("{slug}", slug)
        const response = await apiClient.get(url);
        return response.data.data.data;
    } catch (error) {
        console.error('Error fetching newsletter by slug:', error);
        return null;
    }
};

export const getTodayHeadlineNews = async (): Promise<NewsletterResponse['data']['data'] | null> => {
    try {
        const response = await apiClient.get(API_URLS.TODAY_HEADLINE_NEWS);
        return response.data.data.data;
    } catch (error) {
        console.error('Error fetching newsletter by slug:', error);
        return null;
    }
};

export const getCategoryNewsletters = async  (slug: string): Promise<NewsletterResponse['data']['data'] | null> => {
    try {
        const response = await apiClient.get(`${API_URLS.CATEGORY_NEWSLETTERS}/${slug}`);
        return response.data.data.data;
    } catch (error) {
        console.error('Error fetching category newsletter by slug:', error);
        return null;
    }
}

export const getLastNewsletters = async  (): Promise<NewsletterResponse['data']['data'] | null> => {
    try {
        const response = await apiClient.get(API_URLS.LAST_NEWS);
        return response.data.data.data;
    } catch (error) {
        console.error('Error fetching category newsletter by slug:', error);
        return null;
    }
}


export const getCategoryThirdNewsletters = async  (slug: string): Promise<NewsletterResponse['data']['data'] | null> => {
    try {
        const url = API_URLS.CATEGORY_THIRD_NEWSLETTER.replace("{slug}", slug)
        const response = await apiClient.get(url);
        return response.data.data.data;
    } catch (error) {
        console.error('Error fetching category newsletter by slug:', error);
        return null;
    }
}

