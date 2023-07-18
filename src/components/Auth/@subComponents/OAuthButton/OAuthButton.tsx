'use client';
import Image from 'next/image';

// components
import { FlexContainer } from 'nimble-ds';

// emotion
import { oauthButtonStyle } from './OAuthButton.style';

import type { Props } from './OAuthButton.type';

const OAuthButton = ({ src, bgColor, handler }: Props.OAuthButton) => {
    return (
        <FlexContainer
            justifyContent="center"
            alignItems="center"
            customCss={oauthButtonStyle(bgColor)}
        >
            <Image
                onClick={handler}
                src={src}
                alt="Oauth 로그인 버튼"
                width={24}
                height={24}
            />
        </FlexContainer>
    );
};

export default OAuthButton;
