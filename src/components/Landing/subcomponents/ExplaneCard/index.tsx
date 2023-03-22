/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import { explaneCardStyle, introIconStyle } from './explaneCard.styles';
import { Typography } from 'nimble-nds';

type Props = {
    title: string;
    description: string;
};

const ExplaneCard = ({ title, description }: Props) => (
    <div css={explaneCardStyle}>
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
    </div>
);

export default ExplaneCard;
