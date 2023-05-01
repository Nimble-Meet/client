/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { FlexContainer } from 'nimble-ds';
import NavigationButton from './subcomponents/NavigationButton';

import { NAVIGATION_ITEMS } from './constants';
import { navStyle } from './Navigation.style';

const Navigation = () => {
    return (
        <nav css={css(navStyle)}>
            <FlexContainer
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="3rem"
                customCss={css`
                    height: 100%;
                `}
            >
                {NAVIGATION_ITEMS.map((item, i) => (
                    <NavigationButton
                        title={item.title}
                        urn={item.urn}
                        key={i}
                    />
                ))}
            </FlexContainer>
        </nav>
    );
};

export default Navigation;
