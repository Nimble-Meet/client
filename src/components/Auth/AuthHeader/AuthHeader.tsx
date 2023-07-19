'use client';
import { useRouter } from 'next/navigation';

import { Typography } from 'nimble-ds';

import { authHeaderStyle } from './AuthHeader.style';

const AuthHeader = () => {
    const router = useRouter();

    const moveSignInPage = () => {
        router.push('/auth/signIn');
    };

    return (
        <header css={authHeaderStyle} onClick={moveSignInPage}>
            <Typography
                color="blue600"
                weight="lg"
                size="40px"
                value="Nimble"
            />
        </header>
    );
};

export default AuthHeader;
