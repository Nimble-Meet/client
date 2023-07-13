import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse
} from 'axios';
import Cookies from 'js-cookie';

interface InternalAxiosRequestConfig<T = any> extends AxiosRequestConfig {
    _retry?: boolean;
}

const axiosInstance: AxiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    (config: any) => {
        const token = Cookies.get('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            originalRequest.url !== '/auth/refresh'
        ) {
            originalRequest._retry = true;
            try {
                const response = await axiosInstance.post('/auth/refresh');
                const { accessToken } = response.data;

                Cookies.set('access_token', accessToken);
                axiosInstance.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${accessToken}`;
                return axiosInstance(originalRequest);
            } catch (error) {
                Cookies.remove('access_token');
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
