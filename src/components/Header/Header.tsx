import { useRouter } from 'next/router';

import { Button, Typography, FlexContainer } from 'nimble-ds';

// emotion styles
import { headerStyle, headerContentsStyle } from './Header.style';

const Header = () => {
    const router = useRouter();

    const moveMainPage = () => {
        router.push('auth/signIn');
    };

    return (
        <header css={headerStyle}>
            <FlexContainer
                direction="row"
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
                <Button theme="dark" size="md" onClick={moveMainPage}>
                    시작하기
                </Button>
            </FlexContainer>
        </header>
    );
};

export default Header;
