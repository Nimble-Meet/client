import { useMutation } from 'react-query';

import { createNewUser, postAuthenticateUser } from './apis';
import type { CreateNewUser, PostAuthenticateUser } from './api.type';

const usePostNewUser = () => {
    return useMutation<CreateNewUser.Return, void, CreateNewUser.ReqParams>(
        ({ nickname, email, password }) =>
            createNewUser({ nickname, email, password }),
        {
            onSuccess: (
                data: CreateNewUser.Return
            ): Promise<CreateNewUser.Return> => {
                return Promise.resolve(data);
            }
        }
    );
};

const usePostAuthenticateUser = () => {
    return useMutation<
        PostAuthenticateUser.Return,
        void,
        PostAuthenticateUser.ReqParams
    >(({ email, password }) => postAuthenticateUser({ email, password }), {
        onSuccess: (
            data: PostAuthenticateUser.Return
        ): Promise<PostAuthenticateUser.Return> => {
            return Promise.resolve(data);
        }
    });
};

export { usePostNewUser, usePostAuthenticateUser };
