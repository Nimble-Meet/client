import { useQuery } from 'react-query';

import { checkUserLoginStatus } from './apis';

import USER_KEY from '../useUser.keys';

import type { CheckUserLoginStatus } from './apis.type';

const useFetchLoginStatus = () =>
    useQuery<CheckUserLoginStatus.Return>(USER_KEY.all, checkUserLoginStatus);

export default useFetchLoginStatus;
