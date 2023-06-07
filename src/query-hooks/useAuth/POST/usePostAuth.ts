import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { postAuthenticateUser, postLogoutUser } from './apis';

import type {
    PostAuthenticateUser,
    PostLogoutUser,
    AuthType
} from './apis.type';

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

const usePostLogoutUser = () => {
    return useMutation<PostLogoutUser.Return, AxiosError>(
        () => postLogoutUser(),
        {
            onSuccess: (data: PostLogoutUser.Return) => {
                return Promise.resolve(data);
            }
        }
    );
};

const usePostAuth = <O extends AuthType>(authType: O) =>
    ({
        login: usePostAuthenticateUser(),
        logout: usePostLogoutUser()
    }[authType]);

export default usePostAuth;
