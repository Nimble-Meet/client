import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Cookies from 'js-cookie';

import useAuth from '@/query-hooks/useAuth';

import { FlexContainer } from 'nimble-ds';

import { NavigationButton } from '@/components/Main/@subComponents';

import { navStyle } from './Navigation.style';

import { NAVIGATION_ITEMS } from './constants';

const Navigation = () => {
    const router = useRouter();

    const { mutateAsync: logoutUserMutate } = useAuth.POST('logout');

    const logout = async () => {
        await logoutUserMutate();
        Cookies.remove('accessToken');

        router.push('/auth/signIn');
    };

    return (
        <nav css={css(navStyle)}>
            <FlexContainer
                justifyContent="center"
                alignItems="center"
                gap="3rem"
                customCss={css`
                    height: 100%;
                `}
            >
                {NAVIGATION_ITEMS.map((item, i) => (
                    <NavigationButton
                        title={item.title}
                        urn={item.urn}
                        key={i}
                    />
                ))}
                <button onClick={logout}>Logout</button>
            </FlexContainer>
        </nav>
    );
};

export default Navigation;
