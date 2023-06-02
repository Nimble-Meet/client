import AuthHeader from './AuthHeader';

import { FlexContainer } from 'nimble-ds';

import { authContainerStyle } from './AuthContainer.style';

interface Props {
    children: React.ReactNode;
}

const AuthContainer = ({ children }: Props) => {
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
