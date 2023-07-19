'use client';
import Image from 'next/image';

// components
import { FlexContainer } from 'nimble-ds';

// emotion
import { oauthButtonStyle } from './OAuthButton.style';

// Props type
interface Props {
    src: string;
    bgColor: string;
    handler: () => void;
}

const OAuthButton = ({ src, bgColor, handler }: Props) => {
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
