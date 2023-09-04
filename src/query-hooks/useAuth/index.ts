import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

// apis
import { postAuthenticateUser, postLogoutUser } from './api';

// utils
import { handleError } from '@/utils/Error/handleError';
// lib utils
import renderToast from '@/lib/toast';

// error code
import { ERROR_CODE } from '@/constants/error';

import type { Post } from './api.type';

// [POST] 로그인 인증 요청
const usePostAuthenticateUser = () => {
    return useMutation<
        Post.LoginAuthenticate.Return,
        AxiosError,
        Post.LoginAuthenticate.ReqParams
    >(({ email, password }) => postAuthenticateUser({ email, password }), {
        onSuccess: (data: Post.LoginAuthenticate.Return) => {
            return Promise.resolve(data);
        },
        onError: (error: AxiosError) => {
            handleError(error, ERROR_CODE.UNAUTHORIZED);
        }
    });
};

// [POST] 로그아웃 요청
const usePostLogoutUser = () => {
    return useMutation<Post.Logout.Return, AxiosError>(() => postLogoutUser(), {
        onSuccess: (data: Post.Logout.Return) => {
            return Promise.resolve(data);
        },
        onError: () => {
            renderToast({
                type: 'error',
                message: '로그아웃에 실패했습니다. 다시 시도해주세요.'
            });
        }
    });
};

export { usePostAuthenticateUser, usePostLogoutUser };
