import { css } from '@emotion/react';

// components
import { FlexContainer } from 'nimble-ds';
import { ActionButton } from '@/components/Main/@subComponents';

// emotion
import { mainStyle } from './MainContainer.style';

// constants
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
