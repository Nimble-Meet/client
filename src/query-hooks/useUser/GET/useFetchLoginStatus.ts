import { useQuery } from 'react-query';

import { checkUserLoginStatus } from './apis';

import USER_KEY from '../useUser.keys';

const useFetchLoginStatus = () => useQuery(USER_KEY.all, checkUserLoginStatus);

export default useFetchLoginStatus;
