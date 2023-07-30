'use client';
import React from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { css } from '@emotion/react';

// react-query
import useAuth from '@/query-hooks/useAuth';

// components
import { FlexContainer, Button, Typography, Label, Input } from 'nimble-ds';
import { Divider } from '@/components/Ui';
import {
    AuthContainer,
    AuthenticationMessage,
    AuthGuide,
    OAuthButton,
    ServiceInfoContainer
} from '@/components/Auth';

// constant
import {
    SIGN_IN_INPUT_DATA,
    OAUTH_BUTTONS,
    UNAUTHORIZED_CODE
} from './constants';

import type { IUserLogin } from 'UserInterfaces';

const SignIn = () => {
    const { register, handleSubmit } = useForm<IUserLogin>();

    const router = useRouter();

    const [isWrongLoginData, setIsWrongLoginData] =
        React.useState<boolean>(false);

    const { mutateAsync: authenticateUserMutate } = useAuth.POST('login');

    const moveSignUpPage = () => {
        router.push('/auth/signUp');
    };

    const postSignIn = async ({ email, password }: IUserLogin) => {
        try {
            const data = await authenticateUserMutate({
                email,
                password
            });

            setIsWrongLoginData(false);

            if (data) {
                router.push('/');
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
                <Divider width={256} value="OR" />
                <FlexContainer
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="1rem"
                >
                    <form onSubmit={handleSubmit(postSignIn)}>
                        <FlexContainer direction="column" gap="1rem">
                            {SIGN_IN_INPUT_DATA.map((input, i) => (
                                <FlexContainer
                                    key={i}
                                    direction="column"
                                    gap="0.5rem"
                                >
                                    <Label htmlFor={input.key}>
                                        <Typography
                                            value={input.label}
                                            size="14px"
                                        />
                                    </Label>
                                    <Input
                                        id={input.key}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        size="lg"
                                        width={256}
                                        {...register(input.key)}
                                    />
                                </FlexContainer>
                            ))}
                            {isWrongLoginData && (
                                <Typography
                                    value="이메일 또는 패스워드가 일치하지 않습니다."
                                    color="red600"
                                    size="14px"
                                />
                            )}
                            <Button
                                type="submit"
                                color="primary"
                                size="lg"
                                width={'100%'}
                            >
                                로그인
                            </Button>
                        </FlexContainer>
                    </form>
                </FlexContainer>
                <AuthenticationMessage
                    suggestedText="회원가입을 하시겠습니까?"
                    moveHandler={moveSignUpPage}
                    actionText="회원가입"
                />
            </AuthContainer>
            <ServiceInfoContainer />
        </>
    );
};

export default SignIn;
