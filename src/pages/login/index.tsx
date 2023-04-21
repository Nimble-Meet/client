/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import { css } from '@emotion/react';

import { useCreateUser } from '@/query-hooks/useFetchUser';

import { FlexContainer, Button } from 'nimble-ds';

import InputContainer from './subcomponents/InputContainer';

import CONSTANT from './constants';

import { IUser } from '@/types/user';

const Login = () => {
    const { mutateAsync: createUserMutate } = useCreateUser();
    const [loginData, setLoginData] = useState<IUser>({
        nickname: '',
        email: '',
        password: ''
    });

    const setInputTextWithKey = (key: string, value: string) => {
        setLoginData({
            ...loginData,
            [key]: value
        });
    };

    const handleCreateUser = () => {
        createUserMutate(loginData);
    }

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
                {CONSTANT.LOGIN_TEXT.map((input) => (
                    <InputContainer
                        key={input.key}
                        id={input.key}
                        setInputTextWithKey={setInputTextWithKey}
                        labelText={input.label}
                        placeholder={input.placeholder}
                    />
                ))}
                <Button theme="primary" onClick={handleCreateUser}>hihi</Button>
            </FlexContainer>
        </main>
    );
};

export default Login;
