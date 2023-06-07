import { useQuery } from 'react-query';

import { checkLoginStatus } from './apis';

import USER_KEY from '../useUser.keys';

import type { CheckLoginStatus } from './apis.type';

const useFetchLoginStatus = () =>
    useQuery<CheckLoginStatus.Return>(USER_KEY.all, checkLoginStatus);

export default useFetchLoginStatus;
