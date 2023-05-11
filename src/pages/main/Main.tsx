/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import useFetchLoginStatus from '@/query-hooks/useUser';

import { FlexContainer } from 'nimble-ds';

import Navigation from './components/Navigation';
import MainContainer from './components/MainContainer';
import CurrentTimeContainer from './components/CurrentTimeContainer';

const Main = () => {
    const { data: userData } = useFetchLoginStatus.GET();

    // test
    console.log(userData);

    return (
        <main>
            <Navigation />
            <FlexContainer
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="3rem"
                customCss={css`
                    height: calc(100vh - 8rem);
                `}
            >
                <MainContainer />
                <CurrentTimeContainer />
            </FlexContainer>
        </main>
    );
};

export default Main;
