/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { Button, Typography, FlexContainer } from 'nimble-nds';

// emotion styles
import { headerStyle } from './header.style';

const Header = () => (
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
            <Button theme="dark" size="md">
                Try Free
            </Button>
        </FlexContainer>
    </header>
);

export default Header;
