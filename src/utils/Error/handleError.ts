import { AxiosError } from 'axios';

import renderToast from '@/lib/toast';

import type { IApiErrorResponse } from 'ErrorInterfaces';

export const handleError = (error: AxiosError, errorCode: number) => {
    if (error.response && error.response.status === errorCode) {
        const apiErrorResponse = error.response.data as IApiErrorResponse;
        renderToast({
            type: 'error',
            message: apiErrorResponse.message,
            duration: 2000
        });
    }
};
