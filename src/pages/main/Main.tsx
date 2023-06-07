import { css } from '@emotion/react';

// components
import { FlexContainer } from 'nimble-ds';
import {
    Navigation,
    MainContainer,
    CurrentTimeContainer
} from '@/components/Main';

const Main = () => {
    return (
        <main>
            <Navigation />
            <FlexContainer
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
