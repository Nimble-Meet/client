import React from 'react';
import { useRouter } from 'next/router';

import { css } from '@emotion/react';

import useUser from '@/query-hooks/useUser';

import { FlexContainer, Button } from 'nimble-ds';
import InputContainer from '../components/InputContainer';
import CheckSamePasswordInput from './components/CheckSamePasswordInput';

import {
    validateNickname,
    validateEmail,
    validatePassword
} from '../utils/validation';

import { SIGN_UP_INPUT_DATA } from './constants';

import { IUserSignup } from '@/types/user';

const SignUp = () => {
    const router = useRouter();

    const { mutateAsync: createNewUserMutate } = useUser.POST('signUp');
    const [loginData, setLoginData] = React.useState<IUserSignup>({
        nickname: '',
        email: '',
        password: ''
    });
    const [isSamePasswordValid, setIsSamePasswordValid] =
        React.useState<boolean>(false);

    const validateSignupButtonDiabled = ({
        nickname,
        email,
        password
    }: IUserSignup) => {
        const isNicknameValid = validateNickname(nickname);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (
            isNicknameValid &&
            isEmailValid &&
            isPasswordValid &&
            isSamePasswordValid
        ) {
            return false;
        }

        return true;
    };

    const moveSignInPage = () => {
        router.push('/auth/signIn');
    };

    const postSignUp = async () => {
        const data = await createNewUserMutate(loginData);

        if (data) {
            router.push('/auth/signIn');
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
                {SIGN_UP_INPUT_DATA.map((input, i) => (
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
                <CheckSamePasswordInput
                    password={loginData.password}
                    isSamePasswordValid={isSamePasswordValid}
                    setIsSamePasswordValid={setIsSamePasswordValid}
                />
                <Button
                    theme="link"
                    onClick={postSignUp}
                    disabled={validateSignupButtonDiabled(loginData)}
                >
                    가입하기
                </Button>
                <Button theme="link" onClick={moveSignInPage}>
                    이전
                </Button>
            </FlexContainer>
        </main>
    );
};

export default SignUp;
