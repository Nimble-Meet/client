'use client';
import React from 'react';
import { css } from '@emotion/react';

// react-query
import useUser from '@/query-hooks/useUser';

// components
import { FlexContainer } from 'nimble-ds';
import {
    Navigation,
    LocalNavigation,
    CreateMeetingContainer,
    MeetingDashboard
} from '@/components/Main';
import { Loader } from '@/components/Ui';

// emotion
import {
    layoutStyle,
    mainStyle,
    sectionStyle,
    meetingSectionStyle,
    infoSectionStyle
} from './main.style';

const Main = () => {
    const { data: userData } = useUser.GET();

    return (
        <main css={css(layoutStyle)}>
            <FlexContainer>
                <Navigation userData={userData} />
                <FlexContainer direction="column" customCss={mainStyle}>
                    <LocalNavigation />
                    <FlexContainer customCss={sectionStyle}>
                        <FlexContainer
                            direction="column"
                            justifyContent="center"
                            customCss={meetingSectionStyle}
                        >
                            <CreateMeetingContainer userData={userData} />
                            <MeetingDashboard />
                        </FlexContainer>
                        <FlexContainer customCss={infoSectionStyle}>
                            Infomation!
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </main>
    );
};

export default () => {
    return (
        <React.Suspense fallback={<Loader />}>
            <Main />
        </React.Suspense>
    );
};
