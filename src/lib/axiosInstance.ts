import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import jwt_decode from 'jwt-decode';

interface TokenPayload {
    exp: number;
    iat: number;
    sub: string;
}

interface InternalAxiosRequestConfig<T = any> extends AxiosRequestConfig {
    _retry?: boolean;
}

const refreshInstance = axios.create({
    baseURL: '/auth/refresh',
    withCredentials: true
});

const axiosInstance: AxiosInstance = axios.create({
    baseURL: '/api',
    withCredentials: true
});

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config as InternalAxiosRequestConfig;

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            const token = localStorage.getItem('accessToken');

            if (token) {
                try {
                    const decodedToken = jwt_decode<TokenPayload>(token);
                    const exp = decodedToken.exp;
                    const now = new Date().getTime() / 1000;
                    if (exp - now < 60) {
                        const refreshData = await refreshInstance.post(
                            '/',
                            {},
                            { headers: { Authorization: `Bearer ${token}` } }
                        );
                        localStorage.setItem(
                            'accessToken',
                            refreshData.data.accessToken
                        );
                        const newRequest = { ...originalRequest };
                        newRequest.headers = {
                            ...newRequest.headers,
                            Authorization: `Bearer ${refreshData.data.accessToken}`
                        };
                        return axiosInstance(newRequest);
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
