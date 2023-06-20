'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { css } from '@emotion/react';

// react-query
import useUser from '@/query-hooks/useUser';

// components
import { FlexContainer, Button } from 'nimble-ds';
import {
    InputContainer,
    ServiceInfoContainer,
    SamePasswordCheckInput
} from '@/components/Auth';
import {
    AuthContainer,
    AuthenticationMessage,
    AuthGuide
} from '@/components/Auth/@subComponents';

// emotion
import { signUpMainStyle } from './style';

// util
import {
    validateNickname,
    validateEmail,
    validatePassword
} from '@/utils/Auth/validation';

// constants
import { SIGN_UP_INPUT_DATA } from './constants';

import type { IUserSignUp } from 'UserInterfaces';

const SignUp = () => {
    const router = useRouter();

    const [loginData, setLoginData] = React.useState<IUserSignUp>({
        nickname: '',
        email: '',
        password: ''
    });
    const [isSamePasswordValid, setIsSamePasswordValid] =
        React.useState<boolean>(false);

    const { mutateAsync: createNewUserMutate } = useUser.POST();

    const validateSignupButtonDiabled = ({
        nickname,
        email,
        password
    }: IUserSignUp) => {
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
        <main css={signUpMainStyle}>
            <AuthContainer>
                <FlexContainer
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="1.5rem"
                >
                    <FlexContainer
                        direction="column"
                        justifyContent="center"
                        gap="1rem"
                        customCss={css`
                            width: 16rem;
                        `}
                    >
                        <AuthGuide
                            title="회원가입"
                            description="회원가입을 위해 정보를 입력해주세요."
                        />
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="1rem"
                >
                    {SIGN_UP_INPUT_DATA.map((input, i) => (
                        <InputContainer
                            key={i}
                            id={input.key}
                            type={input.type}
                            placeholder={input.placeholder}
                            labelText={input.label}
                            inValidMessage={input.inValidMessage}
                            validateFunction={input.validate}
                            handleChangeFunctions={setLoginData}
                        />
                    ))}
                    <SamePasswordCheckInput
                        password={loginData.password}
                        isSamePasswordValid={isSamePasswordValid}
                        setIsSamePasswordValid={setIsSamePasswordValid}
                    />
                    <Button
                        theme="primary"
                        onClick={postSignUp}
                        disabled={validateSignupButtonDiabled(loginData)}
                        width="100%"
                        size="lg"
                    >
                        가입하기
                    </Button>
                    <AuthenticationMessage
                        suggestedText="이미 가입하셨나요?"
                        moveHandler={moveSignInPage}
                        actionText="로그인"
                    />
                </FlexContainer>
            </AuthContainer>
            <ServiceInfoContainer />
        </main>
    );
};

export default SignUp;
