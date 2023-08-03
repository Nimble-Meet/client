import { AxiosError } from 'axios';
import { useQuery, useMutation } from 'react-query';

// apis
import { getUserInfo, checkLoginStatus, createNewUser } from './api';

// query key
import { userKey } from './key';

// utils
import { handleError } from '@/utils/Error/handleError';
// lib utils
import renderToast from '@/lib/toast';

// error code constants
import { ERROR_CODE } from '@/constants/error';

import type { Get, Post } from './api.type';

// [GET] 특정 사용자의 정보를 가져옴
const useGetUserInfo = (email: string) =>
    useQuery<Get.UserInfo.Return>(
        userKey.info(email),
        () => getUserInfo({ email }),
        {
            onError: () => {
                renderToast({
                    type: 'error',
                    message:
                        '사용자의 정보를 가져오는데 실패했습니다. 다시 시도해주세요.'
                });
            }
        }
    );

// [GET] 로그인 상태를 확인함
const useFetchLoginStatus = () =>
    useQuery<Get.CheckUser.Return>(userKey.all(), checkLoginStatus, {
        onError: () => {
            renderToast({
                type: 'error',
                message:
                    '로그인 상태를 확인하는데 실패했습니다. 다시 시도해주세요.'
            });
        }
    });

// [POST] 새로운 사용자를 만듦
const useCreateNewUser = () => {
    return useMutation<Post.NewUser.Return, AxiosError, Post.NewUser.ReqParams>(
        ({ nickname, email, password }) =>
            createNewUser({ nickname, email, password }),
        {
            onSuccess: (data: Post.NewUser.Return) => {
                return Promise.resolve(data);
            },
            onError: (error: AxiosError) => {
                handleError(error, ERROR_CODE.CONFLICT);
            }
        }
    );
};

export { useGetUserInfo, useFetchLoginStatus, useCreateNewUser };
