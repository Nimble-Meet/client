import React from 'react';

import { Typography, FlexContainer } from 'nimble-ds';

// emotion styles
import { explaneCardStyle, introIconStyle } from './explaneCard.style';

type Props = {
    title: string;
    description: string;
};

const ExplaneCard = ({ title, description }: Props) => (
    <FlexContainer
        direction="column"
        justifyContent="start"
        alignItems="start"
        gap="1rem"
        grow={1}
        customCss={explaneCardStyle}
    >
        <div css={introIconStyle} />
        <div>
            <Typography color="gray50" size="24px" weight="lg" value={title} />
        </div>
        <div>
            <Typography
                color="gray500"
                size="16px"
                weight="lg"
                value={description}
            />
        </div>
    </FlexContainer>
);

export default ExplaneCard;
