import { useMutation, useQuery, useQueryClient } from 'react-query';

import {
    createNewUser,
    postAuthenticateUser,
    checkUserLoginStatus
} from './apis';

import USER_KEY from './keys';

import { ILogin, IUser } from '@/types/user';

export const useCreateNewUser = () => {
    return useMutation(
        ({ nickname, email, password }: IUser) =>
            createNewUser({ nickname, email, password }),
        {
            onSuccess: (data) => {
                return data;
            }
        }
    );
};

export const usePostAuthenticateUser = () => {
    return useMutation(
        ({ email, password }: ILogin) =>
            postAuthenticateUser({ email, password }),
        {
            onSuccess: (data) => {
                return data;
            }
        }
    );
};

export const useCheckUserLoginStatus = () =>
    useQuery(USER_KEY.all, checkUserLoginStatus);
