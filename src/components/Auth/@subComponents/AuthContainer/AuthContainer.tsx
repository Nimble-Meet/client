// components
import AuthHeader from './AuthHeader';
import { FlexContainer } from 'nimble-ds';

// emotion
import { authContainerStyle } from './AuthContainer.style';

import type { Props } from './AuthContainer.type';

const AuthContainer = ({ children }: Props.AuthContainer) => {
    return (
        <section css={authContainerStyle}>
            <AuthHeader />
            <FlexContainer
                direction="column"
                justifyContent="center"
                alignItems="center"
                basis="100vh"
                gap="1.5rem"
            >
                {children}
            </FlexContainer>
        </section>
    );
};

export default AuthContainer;
