import React from 'react';
import { css } from '@emotion/react';

import { FlexContainer } from 'nimble-ds';
import ActionButton from './subcomponents/ActionButton/ActionButton';

import { mainStyle } from './MainContainer.style';
import { ACTION_ITEMS } from './constants';

const MainContainer = () => {
    return (
        <section css={css(mainStyle)}>
            <FlexContainer
                justifyContent="center"
                alignItems="center"
                gap="2rem"
                wrap="wrap"
            >
                {ACTION_ITEMS.map((item, i) => (
                    <ActionButton key={i} title={item.title} />
                ))}
            </FlexContainer>
        </section>
    );
};

export default MainContainer;
