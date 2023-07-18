import axiosInstance from '@/lib/axiosInstance';
import sha256 from 'crypto-js/sha256';

import type { PostAuthenticateUser, PostLogoutUser } from './apis.type';

export const postAuthenticateUser: PostAuthenticateUser.Func = async ({
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

        return data;
    } catch (err) {
        console.error('로그인을 실패했습니다.', err);
        throw err;
    }
};

export const postLogoutUser: PostLogoutUser.Func = async () => {
    try {
        const { data } = await axiosInstance.post<PostLogoutUser.Response>(
            'auth/logout'
        );

        return data;
    } catch (err) {
        console.error('로그아웃을 실패했습니다.', err);
        throw err;
    }
};
