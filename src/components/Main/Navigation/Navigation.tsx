'use client';
import { useRouter } from 'next/navigation';
import { css } from '@emotion/react';

// react-query
import useAuth from '@/query-hooks/useAuth';

// components
import { FlexContainer, Button } from 'nimble-ds';

// emotion
import { navStyle } from './Navigation.style';

import type { ProviderType } from 'UserInterfaces';

interface Props {
    userData:
        | {
              email: string;
              nickname: string;
              providerType: ProviderType;
          }
        | undefined;
}

const Navigation = ({ userData }: Props) => {
    const existsUser = !!userData;
    const router = useRouter();

    const { mutateAsync: logoutUserMutate } = useAuth.POST('logout');

    const logout = async () => {
        await logoutUserMutate();

        router.push('/auth/signIn');
    };

    const login = () => {
        router.push('/auth/signIn');
    };

    return (
        <nav css={css(navStyle)}>
            <FlexContainer
                direction="column"
                gap="2rem"
                customCss={css`
                    height: 100%;
                `}
            >
                <Button color="basic" onClick={existsUser ? logout : login}>
                    {existsUser ? 'Logout' : 'Login'}
                </Button>
            </FlexContainer>
        </nav>
    );
};

export default Navigation;
