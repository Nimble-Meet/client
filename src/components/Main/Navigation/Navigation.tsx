import React from 'react';
import { useRouter } from 'next/router';

import Cookies from 'js-cookie';
import { css } from '@emotion/react';

import { FlexContainer } from 'nimble-ds';

import { NavigationButton } from '@/components/Main/@subComponents';
import { NAVIGATION_ITEMS } from './constants';
import { navStyle } from './Navigation.style';

const Navigation = () => {
    const router = useRouter();

    const logout = () => {
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