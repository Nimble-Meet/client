import axiosInstance from '@/lib/axiosInstance';
import sha256 from 'crypto-js/sha256';

import type { Post } from './api.type';

// [POST] 로그인 인증 요청
export const postAuthenticateUser: Post.LoginAuthenticate.Func = async ({
    email,
    password
}) => {
    const params = <Post.LoginAuthenticate.ReqParams>{
        email,
        password: sha256(password).toString()
    };

    const { data } = await axiosInstance.post<Post.LoginAuthenticate.Response>(
        'auth/login/local',
        params
    );

    return data;
};

// [POST] 로그아웃 요청
export const postLogoutUser: Post.Logout.Func = async () => {
    const { data } = await axiosInstance.post<Post.Logout.Response>(
        'auth/logout'
    );

    return data;
};
