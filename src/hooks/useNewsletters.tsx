import {useEffect, useState} from "react";
import {LastMinuteSwiperProps} from "@/types/newsletter";
import {getLasMinuteNewsletters} from "@/services/newsletterService";

export const useLastMinuteNewsletters = () => {
    const [lastMinutes, setLastMinutes] = useState<LastMinuteSwiperProps[]>([]);
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