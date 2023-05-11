import axiosInstance from '@/lib/axiosInstance';
import sha256 from 'crypto-js/sha256';
import Cookies from 'js-cookie';

import type { CreateNewUser, PostAuthenticateUser } from './api.type';

export const createNewUser: CreateNewUser.PostFunc = async ({
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
        console.log('유저 생성을 실패했습니다.', err);
        throw err;
    }
};

export const postAuthenticateUser: PostAuthenticateUser.PostFunc = async ({
    email,
    password
}) => {
    try {
        const params = <PostAuthenticateUser.ReqParams>{
            email,
            password: sha256(password).toString()
        };

        const { data } =
            await axiosInstance.post<PostAuthenticateUser.Response>(
                'auth/login/local',
                params
            );

        Cookies.set('accessToken', data.accessToken);

        return data;
    } catch (err) {
        console.log('로그인을 실패했습니다.', err);
        throw err;
    }
};
