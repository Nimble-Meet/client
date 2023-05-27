import { IUserSignup, IUserLogin } from '@/types/user';

interface ISetInputTextWithKey {
    handleChangeFunctions: Function;
    currentData: IUserSignup | IUserLogin;
    key: string;
    value: string;
}

// input 키 값에 따라 객체 state 변경 해주는 함수
export const commonSetInputTextWithKey = ({
    handleChangeFunctions,
    currentData,
    key,
    value
}: ISetInputTextWithKey) => {
    handleChangeFunctions({
        ...currentData,
        [key]: value
    });
};
