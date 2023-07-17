'use client';
import React from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { css } from '@emotion/react';

// react-query
import useUser from '@/query-hooks/useUser';

// components
import { FlexContainer, Button, Typography, Label, Input } from 'nimble-ds';
import { ServiceInfoContainer } from '@/components/Auth';
import {
    AuthContainer,
    AuthenticationMessage,
    AuthGuide
} from '@/components/Auth/@subComponents';

// util
import {
    validateNickname,
    validateEmail,
    validatePassword,
    validateSamePassword
} from '@/utils/Auth/validation';

// constants
import { SIGN_UP_INPUT_DATA, ALREADY_EXIST_EMAIL_CODE } from './constants';

import type { IUserSignUp } from 'UserInterfaces';

const SignUp = () => {
    const router = useRouter();

    const { register, handleSubmit, watch } = useForm<IUserSignUp>();

    const [isAlreadyExistEmail, setIsAlreadyExistEmail] =
        React.useState<boolean>(false);

    const { mutateAsync: createNewUserMutate } = useUser.POST();

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

    const postSignUp = async (data: IUserSignUp) => {
        const { nickname, email, password } = data;

        try {
            const data = await createNewUserMutate({
                nickname,
                email,
                password
            });

            setIsAlreadyExistEmail(false);

            if (data) {
                router.push('/auth/signIn');
            }
        } catch (err: unknown) {
            const axiosError = err as AxiosError;
            if (
                axiosError.response &&
                axiosError.response.status === ALREADY_EXIST_EMAIL_CODE
            ) {
                setIsAlreadyExistEmail(true);
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
                            {isAlreadyExistEmail && (
                                <Typography
                                    value="이미 존재하는 이메일입니다."
                                    color="red600"
                                    size="14px"
                                />
                            )}
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
