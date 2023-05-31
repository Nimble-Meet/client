import React from 'react';
import { useRouter } from 'next/router';

import { css } from '@emotion/react';

// react-query
import useUser from '@/query-hooks/useUser';

// design-system
import { FlexContainer, Button } from 'nimble-ds';

// component
import Devider from '@/components/Devider';

// auth common components
import InputContainer from '../subcomponents/InputContainer';
import AuthContainer from '../subcomponents/AuthContainer';
import ServiceInfoContainer from '../subcomponents/ServiceInfoContainer';
import AuthenticationMessage from '../subcomponents/AuthenticationMessage';
import AuthGuide from '../subcomponents/AuthGuide';

// subcomponents
import OAuthButton from './subcomponents/OAuthButton';

// constants
import { SIGN_IN_INPUT_DATA, OAUTH_BUTTONS } from './constants';

// types
import { IUserLogin } from '@/types/user';

// emotion styles
import { signInMainStyle } from './SignIn.style';

const SignIn = () => {
    const router = useRouter();

    const [loginData, setLoginData] = React.useState<IUserLogin>({
        email: '',
        password: ''
    });

    const { mutateAsync: authenticateUserMutate } = useUser.POST('signIn');
    const { data: userData } = useUser.GET();

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

    React.useEffect(() => {
        if (!!userData) {
            router.push('/main');
        }
    }, [router, userData]);

    return (
        <main css={signInMainStyle}>
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
                        {OAUTH_BUTTONS.map((oauth, index) => (
                            <OAuthButton
                                key={index}
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
                            currentData={loginData}
                            validateFunction={input.validate}
                            handleChangeFunctions={setLoginData}
                        />
                    ))}
                    <Button
                        theme="primary"
                        size="lg"
                        onClick={postSignIn}
                        width={'100%'}
                    >
                        로그인
                    </Button>
                    <AuthenticationMessage
                        suggestedText="회원가입을 하시겠습니까?"
                        moveHandler={moveSignUpPage}
                        actionText="회원가입"
                    />
                </FlexContainer>
            </AuthContainer>
            <ServiceInfoContainer />
        </main>
    );
};

export default SignIn;
