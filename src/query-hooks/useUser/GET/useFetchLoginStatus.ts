import { useQuery } from 'react-query';

import { checkUserLoginStatus } from './api';

import USER_KEY from '../keys';

const useFetchLoginStatus = () => useQuery(USER_KEY.all, checkUserLoginStatus);

export default useFetchLoginStatus;