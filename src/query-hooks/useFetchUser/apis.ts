import axiosInstance from '@/lib/axiosInstance';

import { IUser } from '@/types/user';

export const createUser = async ({ nickname, email, password }: IUser) => {
    try {
        const params = <IUser>{
            nickname,
            email,
            password
        };

        const { data } = await axiosInstance.post('auth/signup', params);

        return data;
    } catch (err) {
        return console.log('유저 생성을 실패했습니다.', err);
    }
};

export const checkLogin = async () => {
    try {
        const { data } = await axiosInstance.get('auth/whoami');

        return data;
    } catch (err) {
        return console.log('로그인 상태 확인을 실패했습니다.', err);
    }
};
