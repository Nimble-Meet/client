import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { createNewUser } from './apis';
import type { CreateNewUser } from './apis.type';

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

export default useCreateNewUser;
