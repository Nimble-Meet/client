import axiosInstance from '@/lib/axiosInstance';
import sha256 from 'crypto-js/sha256';

import { IUser, ILogin } from '@/types/user';

export const createNewUser = async ({ nickname, email, password }: IUser) => {
    try {
        const params = <IUser>{
            nickname,
            email,
            password: sha256(password).toString()
        };

        const { data } = await axiosInstance.post('auth/signup', params);

        return data;
    } catch (err) {
        return console.log('유저 생성을 실패했습니다.', err);
    }
};

export const postAuthenticateUser = async ({ email, password }: ILogin) => {
    try {
        const params = <ILogin>{
            email,
            password: sha256(password).toString()
        };

        const { data } = await axiosInstance.post('auth/login/local', params);

        return data;
    } catch (err) {
        return console.log('로그인을 실패했습니다.', err);
    }
};

export const checkUserLoginStatus = async () => {
    try {
        const { data } = await axiosInstance.get('auth/whoami');

        return data;
    } catch (err) {
        return console.log('로그인 상태 확인을 실패했습니다.', err);
    }
};
