import apiClient from "@/utils/apiClient";
import API_URLS from "@/constants/apiUrls";

export const getLasMinuteNewsletters = async () => {
    try {
        const response = await apiClient.get(API_URLS.LAST_MINUTES);
        return response.data.data;
    } catch (error){
        console.error('Error fetching categories:', error);
        throw error;
    }
}