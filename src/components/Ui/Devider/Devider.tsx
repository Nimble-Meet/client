import React from 'react';

import { css } from '@emotion/react';

import { FlexContainer, Typography } from 'nimble-ds';

import { deviderStyle } from './Devider.style';

interface Props {
    width: number;
    value?: string;
}

const Devider = ({ width, value }: Props) => {
    if (value) {
        return (
            <FlexContainer
                alignItems="center"
                gap="0.25rem"
                customCss={css`
                    width: ${width}px;
                `}
            >
                <div css={deviderStyle(width / 2)} />
                <Typography size="12px" color="gray600" value={value} />
                <div css={deviderStyle(width / 2)} />
            </FlexContainer>
        );
    }

    return <div css={deviderStyle(width)} />;
};

export default Devider;
