/** @jsxImportSource @emotion/react */
import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { Button, Typography, FlexContainer } from 'nimble-ds';

// emotion styles
import { headerStyle } from './Header.style';

const Header = () => {
    const router = useRouter();

    const moveMainPage = () => {
        router.push('/login');
    };

    return (
        <header css={css(headerStyle)}>
            <FlexContainer
                direction="row"
                justifyContent="between"
                alignItems="center"
            >
                <div>
                    <Typography
                        color="gray100"
                        weight="lg"
                        size="40px"
                        value="Nimble Meet"
                    />
                </div>
                <Button theme="dark" size="md" onClick={moveMainPage}>
                    Try Free
                </Button>
            </FlexContainer>
        </header>
    );
};

export default Header;
