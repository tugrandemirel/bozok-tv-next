import { useQuery } from '@tanstack/react-query';
import { getMainHeadlines, getLastMinutes, getFeaturedNews } from '@/services/newsletterService';

export const useMainHeadlines = () => {
    return useQuery({
        queryKey: ['mainHeadlines'],
        queryFn: getMainHeadlines,
        staleTime: 1000 * 60 * 5, // 5 dakika
        refetchOnWindowFocus: false
    });
};

export const useLastMinutes = () => {
    return useQuery({
        queryKey: ['lastMinutes'],
        queryFn: getLastMinutes,
        staleTime: 1000 * 60, // 1 dakika
        refetchOnWindowFocus: true
    });
};

export const useFeaturedNews = () => {
    return useQuery({
        queryKey: ['featuredNews'],
        queryFn: getFeaturedNews,
        staleTime: 1000 * 60 * 5, // 5 dakika
        refetchOnWindowFocus: false
    });
};