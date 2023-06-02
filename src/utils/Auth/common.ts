import { IUserSignUp, IUserLogin } from 'UserInterfaces';

interface Params<T> {
    handleChangeFunctions: React.Dispatch<React.SetStateAction<T>>;
    action: 'signIn' | 'signUp';
    key: string;
    value: string;
}

export function setInputTextWithKey<T extends IUserSignUp | IUserLogin>({
    handleChangeFunctions,
    key,
    value
}: Params<T>) {
    handleChangeFunctions((prevState: T) => ({
        ...prevState,
        [key]: value
    }));
}
