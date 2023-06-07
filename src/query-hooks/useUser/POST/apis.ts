import axiosInstance from '@/lib/axiosInstance';
import sha256 from 'crypto-js/sha256';

import type { CreateNewUser } from './apis.type';

export const createNewUser: CreateNewUser.Func = async ({
    nickname,
    email,
    password
}) => {
    try {
        const params = <CreateNewUser.ReqParams>{
            nickname,
            email,
            password: sha256(password).toString()
        };

        const { data } = await axiosInstance.post<CreateNewUser.Response>(
            'auth/signup',
            params
        );

        return data;
    } catch (err) {
        console.error('유저 생성을 실패했습니다.', err);
        throw err;
    }
};
