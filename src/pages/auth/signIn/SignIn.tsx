/** @jsxImportSource @emotion/react */
import React from 'react';
import { useRouter } from 'next/router';

import { css } from '@emotion/react';

import useUser from '@/query-hooks/useUser';

import { FlexContainer, Button } from 'nimble-ds';
import InputContainer from '../components/InputContainer';

import { SIGN_IN_INPUT_DATA } from './constants';

import { IUserLogin } from '@/types/user';

const SignIn = () => {
    const router = useRouter();

    const { mutateAsync: authenticateUserMutate } = useUser.POST('signIn');

    const [loginData, setLoginData] = React.useState<IUserLogin>({
        email: '',
        password: ''
    });

    const moveSignUpPage = () => {
        router.push('/auth/signUp');
    };

    const postSignIn = async () => {
        const data = await authenticateUserMutate(loginData);

        if (data) {
            router.push('/main');
        } else {
            // 추후 사용자에게 알리는 방식 구현
        }
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
                {SIGN_IN_INPUT_DATA.map((input, i) => (
                    <InputContainer
                        key={i}
                        id={input.key}
                        type={input.type}
                        placeholder={input.placeholder}
                        labelText={input.label}
                        inValidMessage={input.inValidMessage}
                        currentData={loginData}
                        validateFunction={input.validate}
                        handleChangeFunctions={setLoginData}
                    />
                ))}
                <Button theme="primary" onClick={postSignIn}>
                    로그인
                </Button>
                <Button theme="primary" onClick={moveSignUpPage}>
                    회원가입
                </Button>
            </FlexContainer>
        </main>
    );
};

export default SignIn;
