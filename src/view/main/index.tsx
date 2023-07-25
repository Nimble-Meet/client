'use client';
import React from 'react';
import { css } from '@emotion/react';

import useUser from '@/query-hooks/useUser';
// components
import { FlexContainer } from 'nimble-ds';
import {
    Navigation,
    MainContainer,
    CurrentTimeContainer
} from '@/components/Main';

import { MainLayout } from './main.style';

const Main = () => {
    const { data: userData } = useUser.GET();

    return (
        <main css={css(MainLayout)}>
            <FlexContainer>
                <Navigation userData={userData} />
                <FlexContainer
                    justifyContent="center"
                    alignItems="center"
                    gap="3rem"
                    customCss={css`
                        width: 100%;
                        box-shadow: -0.15rem 0 0.2rem -0.15rem rgba(0, 0, 0, 0.15);
                    `}
                >
                    <MainContainer />
                    <CurrentTimeContainer />
                </FlexContainer>
            </FlexContainer>
        </main>
    );
};

export default () => {
    return (
        <React.Suspense fallback={<h1>...loading</h1>}>
            <Main />
        </React.Suspense>
    );
};
