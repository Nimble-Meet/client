'use client';

import React from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { css } from '@emotion/react';

// react-query
import useUser from '@/query-hooks/useUser';
import useAuth from '@/query-hooks/useAuth';

// components
import { FlexContainer, Button, Typography } from 'nimble-ds';
import { Devider } from '@/components/Ui';
import { InputContainer, ServiceInfoContainer } from '@/components/Auth';
import {
    AuthContainer,
    AuthenticationMessage,
    AuthGuide,
    OAuthButton
} from '@/components/Auth/@subComponents';

// constant
import {
    SIGN_IN_INPUT_DATA,
    OAUTH_BUTTONS,
    UNAUTHORIZED_CODE
} from './constants';

import type { IUserLogin } from 'UserInterfaces';

const SignIn = () => {
    const router = useRouter();

    const [loginData, setLoginData] = React.useState<IUserLogin>({
        email: '',
        password: ''
    });

    const [isWrongLoginData, setIsWrongLoginData] =
        React.useState<boolean>(false);

    const { mutateAsync: authenticateUserMutate } = useAuth.POST('login');
    const { data: userData } = useUser.GET();

    const moveSignUpPage = () => {
        router.push('/auth/signUp');
    };

    const postSignIn = async () => {
        try {
            const data = await authenticateUserMutate(loginData);

            if (data) {
                router.push('/main');
            }
        } catch (err: unknown) {
            const axiosError = err as AxiosError;

            if (
                axiosError.response &&
                axiosError.response.status === UNAUTHORIZED_CODE
            ) {
                setIsWrongLoginData(true);
                return;
            }
        }
    };

    React.useEffect(() => {
        if (!!userData) {
            router.push('/main');
        }
    }, [router, userData]);

    return (
        <>
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
                            title="간편 로그인"
                            description={`소셜 계정으로 로그인하고\n더욱 편리하게 이용해보세요.`}
                        />
                    </FlexContainer>
                    <FlexContainer
                        alignItems="center"
                        gap="0.5rem"
                        customCss={css`
                            width: 100%;
                        `}
                    >
                        {OAUTH_BUTTONS.map((oauth, i) => (
                            <OAuthButton
                                key={i}
                                src={oauth.src}
                                bgColor={oauth.bgColor}
                                handler={oauth.handler}
                            />
                        ))}
                    </FlexContainer>
                </FlexContainer>
                <Devider width={256} value="OR" />
                <FlexContainer
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="1rem"
                >
                    {SIGN_IN_INPUT_DATA.map((input, i) => (
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
                    <FlexContainer
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        gap="0.5rem"
                        customCss={css`
                            width: 100%;
                        `}
                    >
                        {isWrongLoginData && (
                            <Typography
                                value="이메일 또는 패스워드가 일치하지 않습니다."
                                color="red600"
                                size="14px"
                            />
                        )}
                        <Button
                            color="primary"
                            size="lg"
                            onClick={postSignIn}
                            width={'100%'}
                        >
                            로그인
                        </Button>
                    </FlexContainer>
                    <AuthenticationMessage
                        suggestedText="회원가입을 하시겠습니까?"
                        moveHandler={moveSignUpPage}
                        actionText="회원가입"
                    />
                </FlexContainer>
            </AuthContainer>
            <ServiceInfoContainer />
        </>
    );
};

export default SignIn;
