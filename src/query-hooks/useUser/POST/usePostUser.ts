/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { createNewUser, postAuthenticateUser } from './apis';
import type { CreateNewUser, PostAuthenticateUser } from './api.type';

type ActionType = 'signUp' | 'signIn';

const useCreateNewUser = () => {
    return useMutation<
        CreateNewUser.Return,
        AxiosError,
        CreateNewUser.ReqParams
    >(
        ({ nickname, email, password }) =>
            createNewUser({ nickname, email, password }),
        {
            onSuccess: (data: CreateNewUser.Return) => {
                return Promise.resolve(data);
            }
        }
    );
};

const usePostAuthenticateUser = () => {
    return useMutation<
        PostAuthenticateUser.Return,
        AxiosError,
        PostAuthenticateUser.ReqParams
    >(({ email, password }) => postAuthenticateUser({ email, password }), {
        onSuccess: (data: PostAuthenticateUser.Return) => {
            return Promise.resolve(data);
        }
    });
};

const usePostUser = <O extends ActionType>(actionType: O) =>
    ({
        signUp: useCreateNewUser(),
        signIn: usePostAuthenticateUser()
    }[actionType]);

export default usePostUser;
