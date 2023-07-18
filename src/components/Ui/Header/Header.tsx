'use client';
import { useRouter } from 'next/navigation';

// components
import { Button, Typography, FlexContainer } from 'nimble-ds';

// emotion
import { headerStyle, headerContentsStyle } from './Header.style';

const Header = () => {
    const router = useRouter();

    const moveMainPage = () => {
        router.push('auth/signIn');
    };

    return (
        <header css={headerStyle}>
            <FlexContainer
                justifyContent="between"
                alignItems="center"
                customCss={headerContentsStyle}
            >
                <div>
                    <Typography
                        color="gray100"
                        weight="lg"
                        size="40px"
                        value="Nimble"
                    />
                </div>
                <Button color="dark" size="md" onClick={moveMainPage} round>
                    시작하기
                </Button>
            </FlexContainer>
        </header>
    );
};

export default Header;
