import axiosInstance from '@/lib/axiosInstance';

import type { CheckUserLoginStatus } from './apis.type';

export const checkUserLoginStatus: CheckUserLoginStatus.Func = async () => {
    try {
        const { data } = await axiosInstance.get<CheckUserLoginStatus.Response>(
            'auth/whoami'
        );

        return data;
    } catch (err) {
        console.error('로그인 상태 확인을 실패했습니다.', err);
        throw err;
    }
};
