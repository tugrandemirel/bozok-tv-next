// src/utils/apiClient.ts
import axios, { AxiosError } from 'axios';

const MAX_RETRIES = 3;

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1/",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Retry fonksiyonu
const retryRequest = async (error: AxiosError, retries: number = 0): Promise<any> => {
    const isNetworkOrTimeoutError =
        error.code === 'ECONNABORTED' || error.message.includes('timeout') || !error.response;
    const isRetryable = retries < MAX_RETRIES && isNetworkOrTimeoutError;

    if (isRetryable) {
        console.log(`Retrying request... Attempt ${retries + 1}`);
        return apiClient(error.config); // Yeniden isteği gönder
    }

    console.error(`Request failed after ${MAX_RETRIES} retries.`);
    return Promise.reject(error); // Hata fırlatılır
};

// Axios response interceptor
apiClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        if (error.config && error.response?.status !== 401) {
            return retryRequest(error, 1); // 1. retry yapılacak
        }
        console.error('API Request Error:', error.response ? error.response.data : error.message);
        return Promise.reject(error); // Hata durumu
    }
);

export default apiClient;
