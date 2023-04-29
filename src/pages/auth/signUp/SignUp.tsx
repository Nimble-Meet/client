/** @jsxImportSource @emotion/react */
import React from 'react';
import { useRouter } from 'next/router';

import { css } from '@emotion/react';

import { useCreateUser } from '@/query-hooks/useFetchUser';

import { FlexContainer, Button } from 'nimble-ds';
import InputContainer from '../components/InputContainer';

import { validateEmail, validatePassword } from '../utils/validation';
import { SIGN_UP_INPUT_DATA } from './constants';

import { IUser, ILogin } from '@/types/user';

const SignUp = () => {
    const router = useRouter();

    const { mutateAsync: createUserMutate } = useCreateUser();
    const [loginData, setLoginData] = React.useState<IUser>({
        nickname: '',
        email: '',
        password: ''
    });

    const handleCreateUser = ({ email, password }: ILogin) => {
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        console.log(isEmailValid, isPasswordValid);

        // createUserMutate(loginData);
    };

    const moveSignInPage = () => {
        router.push('/auth/signIn');
    };

    return (
        <main>
            <FlexContainer
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap="1rem"
                customCss={css`
                    height: 100vh;
                `}
            >
                {SIGN_UP_INPUT_DATA.map((input, i) => (
                    <InputContainer
                        key={i}
                        id={input.key}
                        type={input.type}
                        labelText={input.label}
                        placeholder={input.placeholder}
                        handleChangeFunctions={setLoginData}
                        currentData={loginData}
                    />
                ))}
                <Button
                    theme="primary"
                    onClick={() =>
                        handleCreateUser({
                            email: loginData.email,
                            password: loginData.password
                        })
                    }
                >
                    가입하기
                </Button>
                <Button theme="primary" onClick={moveSignInPage}>
                    이전
                </Button>
            </FlexContainer>
        </main>
    );
};

export default SignUp;
