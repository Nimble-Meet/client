/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import { css } from '@emotion/react';

import { FlexContainer, Button } from 'nimble-ds';

import InputContainer from './subcomponents/InputContainer';

import CONSTANT from './constants';

interface LoginData {
    id: string;
    email: string;
    password: string;
    [key: string]: string;
}

const Login = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        id: '',
        email: '',
        password: ''
    });

    const setInputTextWithKey = (key: string, value: string) => {
        setLoginData({
            ...loginData,
            [key]: value
        });
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
                {CONSTANT.LOGIN_TEXT.map((input) => (
                    <InputContainer
                        key={input.key}
                        id={input.key}
                        setInputTextWithKey={setInputTextWithKey}
                        labelText={input.label}
                        placeholder={input.placeholder}
                    />
                ))}
                <Button theme="primary">hihi</Button>
            </FlexContainer>
        </main>
    );
};

export default Login;
