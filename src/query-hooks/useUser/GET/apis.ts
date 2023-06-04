import axiosInstance from '@/lib/axiosInstance';

import type { CheckLoginStatus } from './apis.type';

export const checkLoginStatus: CheckLoginStatus.Func = async () => {
    try {
        const { data } = await axiosInstance.get<CheckLoginStatus.Response>(
            'auth/whoami'
        );

        return data;
    } catch (err) {
        console.error('로그인 상태 확인을 실패했습니다.', err);
        throw err;
    }
};
