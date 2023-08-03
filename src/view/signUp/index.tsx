'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { css } from '@emotion/react';

// react-query
import { useCreateNewUser } from '@/query-hooks/useUser';

// components
import { FlexContainer, Button, Typography, Label, Input } from 'nimble-ds';
import {
    AuthContainer,
    AuthenticationMessage,
    AuthGuide,
    ServiceInfoContainer
} from '@/components/Auth';

// util
import {
    validateNickname,
    validateEmail,
    validatePassword,
    validateSamePassword
} from '@/utils/Auth/validation';

// constants
import { SIGN_UP_INPUT_DATA } from './constants';

import type { IUserSignUp } from 'UserInterfaces';

const SignUp = () => {
    const router = useRouter();

    const { register, handleSubmit, watch } = useForm<IUserSignUp>();

    const { mutateAsync: createNewUserMutate } = useCreateNewUser();

    const validateSignupButtonDisabled = ({
        nickname,
        email,
        password,
        passwordCheck
    }: IUserSignUp): boolean => {
        const isNicknameValid = validateNickname(nickname);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const isSamePasswordValid = validateSamePassword(
            password,
            passwordCheck
        );

        return !(
            isNicknameValid &&
            isEmailValid &&
            isPasswordValid &&
            isSamePasswordValid
        );
    };

    const moveSignInPage = () => {
        router.push('/auth/signIn');
    };

    const postSignUp = async ({ nickname, email, password }: IUserSignUp) => {
        const data = await createNewUserMutate({
            nickname,
            email,
            password
        });

        if (data) {
            router.push('/auth/signIn');
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
                    <form onSubmit={handleSubmit(postSignUp)}>
                        <FlexContainer
                            direction="column"
                            alignItems="center"
                            gap="1rem"
                        >
                            {SIGN_UP_INPUT_DATA.map((input, i) => (
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
                                        {...register(input.key, {
                                            pattern: input.validate
                                        })}
                                        invalid={
                                            watch(input.key) &&
                                            !input.validate.test(
                                                watch(input.key)
                                            )
                                                ? true
                                                : false
                                        }
                                        invalidMessage={input.inValidMessage}
                                    />
                                </FlexContainer>
                            ))}
                            <Button
                                type="submit"
                                color="primary"
                                disabled={validateSignupButtonDisabled(watch())}
                                size="lg"
                                width={'100%'}
                            >
                                가입하기
                            </Button>
                        </FlexContainer>
                    </form>
                    <AuthenticationMessage
                        suggestedText="이미 가입하셨나요?"
                        moveHandler={moveSignInPage}
                        actionText="로그인"
                    />
                </FlexContainer>
            </AuthContainer>
            <ServiceInfoContainer />
        </>
    );
};

export default SignUp;
