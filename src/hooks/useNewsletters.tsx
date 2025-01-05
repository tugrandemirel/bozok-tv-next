import {useEffect, useState} from "react";
import {getFeaturedNews, getLasMinuteNewsletters} from "@/services/newsletterService";
import {Newsletter} from "@/types/newsletter";

export const useLastMinuteNewsletters = () => {
    const [lastMinutes, setLastMinutes] = useState<Newsletter[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLastMinuteNewsletters = async () => {
            try {
                setIsLoading(true);
                const response = await getLasMinuteNewsletters()
                setLastMinutes(response.data)
            } catch (error) {
                setError("Son Dakika Haberleri alınırken bir hata oluştu.");
            } finally {
                setIsLoading(false)
            }
        }

        fetchLastMinuteNewsletters();
    }, []);

    return { lastMinutes, isLoading, error }
}


export const useFeaturedNews = () => {
    const [featuredNews, setFeaturedNews] = useState<Newsletter[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFeaturedNews = async () => {
            try {
                setIsLoading(true)
                const response = await getFeaturedNews()
                setFeaturedNews(response.data)
            } catch (error) {
                setError("Öne ÇIkan haberler alınırken bir hata oluştu.")
            } finally {
                 setIsLoading(false)
            }
        }

        fetchFeaturedNews()
    }, [])

    return { featuredNews, isLoading, error }
}