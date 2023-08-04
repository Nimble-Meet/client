import axiosInstance from '@/lib/axiosInstance';
import sha256 from 'crypto-js/sha256';

import type { Get, Post } from './api.type';

// [GET] 유저 정보를 가져옴
export const getUserInfo: Get.UserInfo.Func = async ({ email }) => {
    const params = <Get.UserInfo.ReqParams>{
        email
    };

    const { data } = await axiosInstance.get<Get.UserInfo.Response>('user', {
        params
    });

    return data;
};

// [GET] 로그인 상태를 확인함
export const checkLoginStatus: Get.CheckUser.Func = async () => {
    const { data } = await axiosInstance.get<Get.CheckUser.Response>(
        'auth/whoami'
    );

    return data;
};

// [POST] 새로운 유저를 만듦
export const createNewUser: Post.NewUser.Func = async ({
    nickname,
    email,
    password
}) => {
    const params = <Post.NewUser.ReqParams>{
        nickname,
        email,
        password: sha256(password).toString()
    };

    const { data } = await axiosInstance.post<Post.NewUser.Response>(
        'auth/signup',
        params
    );

    return data;
};
