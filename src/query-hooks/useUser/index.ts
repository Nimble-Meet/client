import { AxiosError } from 'axios';
import { useQuery, useMutation } from 'react-query';

// apis
import { getUserInfo, checkLoginStatus, createNewUser } from './api';

// query key
import { userKey } from './key';

import type { Get, Post } from './api.type';

// [GET] 특정 사용자의 정보를 가져옴
const useGetUserInfo = (email: string) =>
    useQuery<Get.UserInfo.Return>(userKey.info(email), () =>
        getUserInfo({ email })
    );

// [GET] 로그인 상태를 확인함
const useFetchLoginStatus = () =>
    useQuery<Get.CheckUser.Return>(userKey.all(), checkLoginStatus, {
        suspense: true
    });

// [POST] 새로운 사용자를 만듦
const useCreateNewUser = () => {
    return useMutation<Post.NewUser.Return, AxiosError, Post.NewUser.ReqParams>(
        ({ nickname, email, password }) =>
            createNewUser({ nickname, email, password }),
        {
            onSuccess: (data: Post.NewUser.Return) => {
                return Promise.resolve(data);
            }
        }
    );
};

export { useGetUserInfo, useFetchLoginStatus, useCreateNewUser };
