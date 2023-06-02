import Image from 'next/image';

import { FlexContainer } from 'nimble-ds';

import { oauthButtonStyle } from './OAuthButton.style';

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
            <Image src={src} alt="카카오 로그인 버튼" width={24} height={24} />
        </FlexContainer>
    );
};

export default OAuthButton;
