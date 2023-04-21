import axios from 'axios';

import { IUser } from '@/types/user';

export const createUser = async ({
    nickname,
    email,
    password,
}: IUser) => {
    try {
        const params = <IUser>{
            nickname,
            email,
            password,
        }

        const { data } = await axios.post('/api/auth/signup', params);
        
        return data;
    } catch (err) {
        return console.log('유저 생성을 실패했습니다.', err);
    }
}