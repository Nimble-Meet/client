'use client';
import React from 'react';
import { css } from '@emotion/react';

// react-query
import useUser from '@/query-hooks/useUser';

// components
import { FlexContainer } from 'nimble-ds';
import {
    Navigation,
    CreateMeetingContainer,
    LocalNavigation
} from '@/components/Main';

// emotion
import { mainLayoutStyle } from './main.style';

const Main = () => {
    const { data: userData } = useUser.GET();

    return (
        <main css={css(mainLayoutStyle)}>
            <FlexContainer>
                <Navigation userData={userData} />
                <FlexContainer
                    direction="column"
                    customCss={css`
                        width: 100%;
                        box-shadow: -0.15rem 0 0.2rem -0.15rem rgba(0, 0, 0, 0.15);
                    `}
                >
                    <LocalNavigation />
                    <FlexContainer direction="column" justifyContent="center">
                        <CreateMeetingContainer userData={userData} />
                    </FlexContainer>
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
