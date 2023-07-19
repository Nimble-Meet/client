'use client';
// components
import AuthHeader from '../AuthHeader/AuthHeader';
import { FlexContainer } from 'nimble-ds';

// emotion
import { authContainerStyle } from './AuthContainer.style';

// Props type
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
