import { useMutation, useQueryClient } from 'react-query';

import { createUser, checkLogin } from './apis';

import USER_KEY from './keys';

import { IUser } from '@/types/user';

export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation(
        ({ nickname, email, password }: IUser) =>
            createUser({ nickname, email, password }),
        {
            onSuccess: (data) => {
                console.log(data);
            }
        }
    );
};

export const useCheckLogin = () => {
    const queryClient = useQueryClient();

    return useMutation(() => checkLogin(), {
        onSuccess: (data) => {
            queryClient.setQueryData(USER_KEY.all, data);
        }
    });
};
