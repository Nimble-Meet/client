import React from 'react';
import { css } from '@emotion/react';

import { FlexContainer } from 'nimble-ds';

import Navigation from './components/Navigation';
import MainContainer from './components/MainContainer';
import CurrentTimeContainer from './components/CurrentTimeContainer';

const Main = () => {
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

Main.isRequireAuthPage = true;

export default Main;
